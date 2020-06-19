package de.gca1.onlineBoutique;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;
import org.springframework.retry.annotation.Retryable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.SocketTimeoutException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.UUID;
import java.util.logging.Logger;

@RestController
public class CartController {

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/cart/addProduct/{productID}/{userID}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Boolean> addProduct(@PathVariable("productID") int productID, @PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            //LOGGEN
            databaseHelper.addProduct(userID, productID);
            return ResponseEntity.status(HttpStatus.OK).body(true);
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }

    @Recover
    public ArrayList<Product> getProducts() {
        return new ArrayList<Product>();
    }

    @Retryable(
            value = {SocketTimeoutException.class},
            maxAttempts = 2,
            backoff = @Backoff(delay = 5000)
    )
    @RequestMapping("/cart/{userID}")
    @CrossOrigin(origins = "*")
    public ArrayList<Product> getProducts(@PathVariable("userID") UUID userID) {

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
                    Product cart = this.restTemplate.getForObject(url.toString(), Product.class);
                    cartProducts.add(cart);

                } catch (MalformedURLException e) {
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
    public int getItemNumber(@PathVariable("userID") UUID userID) {

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
    public ResponseEntity<User> createUserID() {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            User user = databaseHelper.addUserID();


            return ResponseEntity.status(HttpStatus.OK).body(user);

        } catch (SQLException e) {
            //LOGGEN
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @RequestMapping("/cart/empty/{userID}")
    @CrossOrigin(origins = "*")
    public void emptyCartByUserID(@PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/onlineBoutique", "gca", "gca");
            User user = databaseHelper.addUserID();
            databaseHelper.deleteAllCartEntriesByUserID(userID);

        } catch (SQLException e) {
            //LOGGEN
            e.printStackTrace();
        }
    }
}
