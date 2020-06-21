package de.gca1.onlineBoutique;


import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Scanner;


@RestController
public class CheckoutController {

    private static final Logger logger = LoggerFactory.getLogger(CheckoutController.class);

    @Autowired
    private Environment env;

    @RequestMapping("/checkout/validate")
    @CrossOrigin(origins = "*")
    public ResponseEntity<OrderSummary> validateOrder(HttpServletRequest req) {

        OrderSummary orderSummary = new OrderSummary();

        ArrayList<Integer> givenProductIDs = new ArrayList<>();
        String givenUserID;
        Double givenShippingCosts;
        Double givenTotalPrice;
        String trackingNumber;

        PaymentData givenPaymentData = new PaymentData();
        PersonalData givenPersonalData = new PersonalData();

        ArrayList<Product> givenProducts = new ArrayList<>();

        StringBuffer buffer = new StringBuffer();

        try {
            //Einlesen
            BufferedReader in = new BufferedReader(new InputStreamReader(req.getInputStream()));

            JSONParser parser = new JSONParser();
            JSONObject input = (JSONObject) parser.parse(in);

            givenUserID = input.get("userID").toString();
            givenShippingCosts = Double.valueOf(input.get("shippingCost").toString());
            givenTotalPrice = Double.valueOf(input.get("totalPrice").toString());

            givenPersonalData.setEmail(input.get("email").toString());
            givenPersonalData.setCity(input.get("city").toString());
            givenPersonalData.setName(input.get("firstLastName").toString());
            givenPersonalData.setZip(input.get("zip").toString());
            givenPersonalData.setStreet(input.get("street").toString());

            JSONObject creditCardInformation = (JSONObject) input.get("creditCardInformation");
            givenPaymentData.setCreditCardNumber(creditCardInformation.get("number").toString());
            givenPaymentData.setExpireDate(creditCardInformation.get("monthAndYear").toString());

            logger.info("Aufruf durch " + givenUserID);

            URL cartAPI = new URL(env.getProperty("cartApi") + givenUserID);
            HttpURLConnection connection = (HttpURLConnection) cartAPI.openConnection();
            String auth = env.getProperty("checkout.user") + ":" + env.getProperty("checkout.password");
            byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.UTF_8));
            String authHeaderValue = "Basic " + new String(encodedAuth);
            connection.setRequestProperty("Authorization", authHeaderValue);

            if(connection.getResponseCode() == HttpURLConnection.HTTP_OK){

                JSONArray productList = (JSONArray) new JSONParser().parse(new InputStreamReader(connection.getInputStream()));

                for(int i = 0; i < productList.size();i++){

                    JSONObject product = (JSONObject) productList.get(i);

                    Integer id = Integer.valueOf(product.get("id").toString());
                    String name = product.get("name").toString();
                    Double price = Double.valueOf(product.get("price").toString());
                    String description = product.get("description").toString();
                    String imageUrl = product.get("imageUrl").toString();

                    givenProducts.add(new Product(id,name,price,description,imageUrl));
                }

            } else {
                logger.error("Aufruf durch " + givenUserID  + " : Cart-API lieferte keine Daten!", connection);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            //Validieren
            //Bestellsumme validieren
            double calculatedSum = 0;
            for (Product p : givenProducts){
                calculatedSum+= p.getPrice();
            }

            if(calculatedSum != givenTotalPrice) {
                logger.error("Aufruf durch " + givenUserID  + " : Übermittelter Preis stimmt nicht mit dem gespeicherten Preis überein!", calculatedSum, givenTotalPrice);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            //Versandkosten validieren
            double validatedShippingCosts = 0;
            URL shippingAPI = new URL(env.getProperty("shippingApi") +"cost/" + calculatedSum);

            connection = (HttpURLConnection) shippingAPI.openConnection();
            connection.setRequestProperty("Authorization", authHeaderValue);
            if(connection.getResponseCode() == HttpURLConnection.HTTP_OK){

                InputStream inputStream = connection.getInputStream();
                Scanner inputScanner = new Scanner(inputStream);

                if(inputScanner.hasNextLine())
                    validatedShippingCosts = Double.valueOf(inputScanner.nextLine());

            } else {
                logger.error("Aufruf durch " + givenUserID  + " : Shipping-API lieferte keine Daten!", connection);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            if(validatedShippingCosts != givenShippingCosts) {
                logger.error("Aufruf durch " + givenUserID  + " : Übermittelte Versandkosten stimmt nicht mit dem gespeicherten Preis überein!", validatedShippingCosts, givenShippingCosts);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            //Trackingnumber generieren
            URL shippingTrackingNumber = new URL(env.getProperty("shippingApi") + "trackingnumber/" + givenUserID);
            connection = (HttpURLConnection) shippingTrackingNumber.openConnection();

            auth = env.getProperty("checkout.user") + ":" + env.getProperty("checkout.password");
            encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.UTF_8));
            authHeaderValue = "Basic " + new String(encodedAuth);
            connection.setRequestProperty("Authorization", authHeaderValue);

            if(connection.getResponseCode() == HttpURLConnection.HTTP_OK){

                JSONObject orderInformation = (JSONObject) new JSONParser().parse(new InputStreamReader(connection.getInputStream()));

                orderSummary.setTrackingNumber((orderInformation.get("trackingNumber").toString()));

            } else {
                logger.error("Aufruf durch " + givenUserID  + " : Shipping-API konnte keine Trackingnumber generieren!", connection);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            orderSummary.setShippingCosts(validatedShippingCosts);
            orderSummary.setTotalCosts(calculatedSum);
            orderSummary.setProducts(givenProducts);
            orderSummary.setPaymentData(givenPaymentData);
            orderSummary.setPersonalData(givenPersonalData);

            logger.info("Validierung erfolgreich!", orderSummary);
            return ResponseEntity.status(HttpStatus.OK).body(orderSummary);

        } catch (ConnectException e){
            logger.error("Verbindungsaufbau fehlgeschlagen!", e);
        } catch (IOException e) {
            logger.error("Response-Body konnte nicht ausgelesen werden!",e);
        } catch (ParseException e) {
            logger.error("JSON konnte nicht geparst werden!",e);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

}
