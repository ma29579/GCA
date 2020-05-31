package de.gca1.onlineBoutique;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

@RestController
public class CatalogController {

    private JSONParser jsonParser;

    @GetMapping("/catalog")
    public ArrayList<Product> getProducts() {
        // Load data
        ArrayList<Product> returnList = new ArrayList<Product>();
        JSONParser jsonParser = new JSONParser();
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

                returnList.add(new Product(id, name, price, description, imageUrl));
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        // Return data
        return returnList;
    }
}
