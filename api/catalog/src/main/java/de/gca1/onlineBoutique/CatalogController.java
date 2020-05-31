package de.gca1.onlineBoutique;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

@RestController
public class CatalogController {

    private JSONParser jsonParser;
    private ArrayList<Product> productList;
    @GetMapping("/catalog")
    public ArrayList<Product> getProducts() {
        // Load data
        if(productList == null) {
            getJSONData();
        }
        // Return data
        return productList;
    }

    @RequestMapping("/catalog/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable("id") int id) {
        if(id >= productList.size())  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        return ResponseEntity.status(HttpStatus.OK).body(productList.get(id));
    }

    private Boolean getJSONData() {
        System.out.println("GET DATA CALLED");
        JSONParser jsonParser = new JSONParser();
        productList = new ArrayList<Product>();

        try {
            String filePath = new File("").getAbsolutePath();
            JSONArray jsonArray = (JSONArray) jsonParser.parse(new FileReader(filePath +"\\src\\main\\resources\\products.json"));
            for(int i =0; i< jsonArray.size(); i++) {
                JSONObject temp = (JSONObject) jsonArray.get(i);

                int id = ((Long) temp.get("id")).intValue();
                String name = (String) temp.get("name");
                double price =  ((Long) temp.get("price")).doubleValue();
                String description = (String) temp.get("description");
                String imageUrl = (String) temp.get("imageUrl");

                productList.add(new Product(id, name, price, description, imageUrl));
            }
            return true;
        } catch (IOException | ParseException e) {
            e.printStackTrace();
            return false;
        }


    }
}
