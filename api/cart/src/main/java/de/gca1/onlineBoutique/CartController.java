package de.gca1.onlineBoutique;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.core.env.Environment;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.UUID;

@RestController
public class CartController {

    private static final Logger logger = LoggerFactory.getLogger(CartController.class);

    @Autowired
    private Environment env;

    @RequestMapping("/cart/addProduct/{productID}/{userID}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Boolean> addProduct(@PathVariable("productID") int productID, @PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper(env.getProperty("connectionString"), env.getProperty("connectionUser"), env.getProperty("connectionPassword"));
            databaseHelper.addProduct(userID, productID);
            logger.info("Erfolgreiches Hinzufügen eines Produkts in den Warenkorb eines Benutzers!",userID,productID);
            return ResponseEntity.status(HttpStatus.OK).body(true);
        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }

    @RequestMapping("/cart/{userID}")
    @CrossOrigin(origins = "*")
    public ArrayList<Product> getProducts(@PathVariable("userID") UUID userID) {

        ArrayList<Integer> itemsByID = new ArrayList<>();
        ArrayList<Product> cartProducts = new ArrayList<>();
        StringBuffer result = new StringBuffer();

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper(env.getProperty("connectionString"), env.getProperty("connectionUser"), env.getProperty("connectionPassword"));
            itemsByID = databaseHelper.getAllEntries(userID);
        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!", e);
        }

        if (!itemsByID.isEmpty()) {

            URL url;
            HttpURLConnection connection;

            Collections.sort(itemsByID);

            for (Integer i : itemsByID) {
                try {
                    
                    url = new URL( env.getProperty("catalogApi") + i.toString());


                    String auth = env.getProperty("cart.user") + ":" + env.getProperty("cart.password");
                    byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.UTF_8));
                    String authHeaderValue = "Basic " + new String(encodedAuth);
                    connection = (HttpURLConnection) url.openConnection();
                    connection.setRequestProperty("Authorization", authHeaderValue);

                    if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
                        JSONObject product = (JSONObject) new JSONParser().parse(new InputStreamReader(connection.getInputStream()));

                        int id = ((Long) product.get("id")).intValue();
                        String name = (String) product.get("name");
                        double price = (Double) product.get("price");
                        String description = (String) product.get("description");
                        String imageUrl = (String) product.get("imageUrl");

                        cartProducts.add(new Product(id, name, price, description, imageUrl));

                    }

                } catch (MalformedURLException e) {
                    logger.error("Es wurde eine fehlerhafte URL übermittelt!",e);
                    e.printStackTrace();
                } catch (IOException e) {
                    logger.error("Der Inhalt des Response konnte nicht ausgelesen werden!",e);
                    e.printStackTrace();
                } catch (ParseException e) {
                    logger.error("Das Parsen der JSON-Nachricht im Response-Body schlug fehl!",e);
                }
            }

            return cartProducts;

        }

        return null;

    }

    @RequestMapping("/cart/itemNumber/{userID}")
    @CrossOrigin(origins = "*")
    public int getItemNumber(@PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper(env.getProperty("connectionString"), env.getProperty("connectionUser"), env.getProperty("connectionPassword"));
            Integer totalItemNumberByUserID = databaseHelper.getEntryNumberByUserID(userID);
            logger.info("Es konnte erfolgreich die Anzahl der Produkte im Warenkorb für den Benutzer " + userID + " ermittelt werden", totalItemNumberByUserID);
            return totalItemNumberByUserID;
        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!", e);
            return 0;
        }

    }


    @RequestMapping("/cart/init")
    @CrossOrigin(origins = "*")
    public ResponseEntity<User> createUserID() {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper(env.getProperty("connectionString"), env.getProperty("connectionUser"), env.getProperty("connectionPassword"));
            User user = databaseHelper.addUserID();

            logger.info("Es konnte eine ID für den anfragenden Nutzer erstellt werden!", user);
            return ResponseEntity.status(HttpStatus.OK).body(user);

        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @RequestMapping("/cart/empty/{userID}")
    @CrossOrigin(origins = "*")
    public void emptyCartByUserID(@PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper(env.getProperty("connectionString"), env.getProperty("connectionUser"), env.getProperty("connectionPassword"));
            User user = databaseHelper.addUserID();
            databaseHelper.deleteAllCartEntriesByUserID(userID);
            logger.info("Erfolgreiches Entfernen der Warenkorbeinträge für den Benutzer " + userID);
        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!", e);
        }
    }



}
