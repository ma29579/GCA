package de.gca1.onlineBoutique;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

@RestController
public class CartController {

    private ArrayList<Product> productList;

    @RequestMapping("/cart/addProduct/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean getPicture(HttpServletRequest request, HttpServletResponse response, @PathVariable("id") int id){

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
}
