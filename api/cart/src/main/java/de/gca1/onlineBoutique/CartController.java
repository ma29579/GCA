package de.gca1.onlineBoutique;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.UUID;
import java.util.logging.Logger;

@RestController
public class CartController {

    //private static final Logger log = (Logger) LoggerFactory.getLogger(CartController.class);

    @RequestMapping("/cart/addProduct/{productID}/{userID}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void addProduct(@PathVariable("productID") int productID, @PathVariable("userID") String userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            //LOGGEN
            databaseHelper.addProduct(userID, productID);
        } catch (SQLException e) {
            //LOGGEN
            e.printStackTrace();
        }
    }

    @RequestMapping("/cart/{userID}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ArrayList<Product> getProducts(@PathVariable("userID") String userID) {

        ArrayList<Integer> itemsByID = new ArrayList<>();
        ArrayList<Product> cartProducts = new ArrayList<>();
        StringBuffer result = new StringBuffer();

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            itemsByID = databaseHelper.getAllEntries(userID);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        if (!itemsByID.isEmpty()) {

            URL url;
            HttpURLConnection connection;

            Collections.sort(itemsByID);

            for (Integer i : itemsByID) {
                try {
                    url = new URL("http://localhost:8080/catalog/" + i.toString());
                    connection = (HttpURLConnection) url.openConnection();

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
                    //LOGGEN
                    e.printStackTrace();
                } catch (IOException e) {
                    //LOGGEN
                    e.printStackTrace();
                } catch (ParseException e) {
                    //LOGGEN
                    e.printStackTrace();
                }
            }

            return cartProducts;

        }

        return null;

    }

    @RequestMapping("/cart/itemNumber/{userID}")
    @CrossOrigin(origins = "http://localhost:4200")
    public int getItemNumber(@PathVariable("userID") String userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            //LOGGEN
            Integer totalItemNumberByUserID = databaseHelper.getEntryNumberByUserID(userID);
            return totalItemNumberByUserID;
        } catch (SQLException e) {
            //LOGGEN
            return 0;
        }

    }

    @RequestMapping("/cart/init")
    @CrossOrigin(origins = "*")
    public String createUserID() {

        String userID = UUID.randomUUID().toString();

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            boolean checkuserIDInsert = databaseHelper.addUserID(userID);

            while (!checkuserIDInsert) {
                userID = UUID.randomUUID().toString();
                checkuserIDInsert = databaseHelper.addUserID(userID);
            }

            return userID;

        } catch (SQLException e) {
            //LOGGEN
            e.printStackTrace();
            return "Keine Interaktion möglich";
        }
    }

}
