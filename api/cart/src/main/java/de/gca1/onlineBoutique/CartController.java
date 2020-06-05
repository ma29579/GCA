package de.gca1.onlineBoutique;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

@RestController
public class CartController {


    @RequestMapping("/cart/addProduct/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean getProductByID(HttpServletRequest request, HttpServletResponse response, @PathVariable("id") int id){

        CartItemCollection cartItemCollection;
        boolean returnValue;

        if(request.getSession().getAttribute("CartItemCollection") == null){
            cartItemCollection = new CartItemCollection();
            returnValue = cartItemCollection.addProductID(id);
            request.getSession().setAttribute("CartItemCollection",cartItemCollection);
        } else {
            cartItemCollection = (CartItemCollection) request.getSession().getAttribute("CartItemCollection");
            returnValue = cartItemCollection.addProductID(id);
        }

        request.getSession().setAttribute("CartItemCollection",cartItemCollection);
        return returnValue;

    }

    @RequestMapping("/cart")
    @CrossOrigin(origins = "http://localhost:4200")
    public ArrayList<Product> getProducts(HttpServletRequest request, HttpServletResponse response){

        CartItemCollection cartItemCollection;
        ArrayList<Product> cartProducts = new ArrayList<>();
        StringBuffer result = new StringBuffer();
        String readLine;

        if(request.getSession().getAttribute("CartItemCollection") != null){

            cartItemCollection = (CartItemCollection) request.getSession().getAttribute("CartItemCollection");

            if(!cartItemCollection.getProductIDs().isEmpty()){

                URL url;
                HttpURLConnection connection;

                for(Integer i : cartItemCollection.getProductIDs()){
                    try {
                        url  = new URL("http://localhost:8080/catalog/" + i.toString());
                        connection = (HttpURLConnection) url.openConnection();

                        if(connection.getResponseCode() == HttpURLConnection.HTTP_OK){
                            JSONObject product = (JSONObject) new JSONParser().parse(new InputStreamReader(connection.getInputStream()));

                            int id = ((Long) product.get("id")).intValue();
                            String name = (String) product.get("name");
                            double price =  (Double) product.get("price");
                            String description = (String) product.get("description");
                            String imageUrl = (String) product.get("imageUrl");

                            cartProducts.add(new Product(id,name,price,description,imageUrl));

                        }

                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    } catch (IOException e) {
                        e.printStackTrace();
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                }

                return cartProducts;

            }

        }

        return null;

    }

    @RequestMapping("/cart/itemNumber")
    @CrossOrigin(origins = "http://localhost:4200")
    public int getItemNumber(HttpServletRequest request, HttpServletResponse response){

        CartItemCollection cartItemCollection;

        if(request.getSession().getAttribute("CartItemCollection") != null){
           cartItemCollection = (CartItemCollection) request.getSession().getAttribute("CartItemCollection");
           return cartItemCollection.getProductIDs().size();
        }
        else
            return 0;
    }
}
