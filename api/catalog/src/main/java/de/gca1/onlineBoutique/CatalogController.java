package de.gca1.onlineBoutique;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.util.Collection;
import java.util.List;

@RestController
public class CatalogController {

    @GetMapping("/catalog")
    public Product getProducts() {
        // Load data
        JSONParser jsonParser = new JSONParser();
        try {
            JSONArray jsonArray = (JSONArray) jsonParser.parse(new FileReader("../../../../../resources/products.json"));

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

        // Return data
        return new Product(0, "Produkt 1", 12.4, "Ein tolles Produkt", "");
    }
}
