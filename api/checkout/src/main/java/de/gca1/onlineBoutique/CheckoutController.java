package de.gca1.onlineBoutique;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class CheckoutController {

    @RequestMapping("/checkout/validate")
    @CrossOrigin(origins = "*")
    public void validateOrder(HttpServletRequest req) {

        OrderSummary orderSummary = new OrderSummary();
        ArrayList<Integer> givenProductIDs = new ArrayList<>();
        String givenUserID;
        Double givenShippingCosts;
        Integer givenTotalPrice;
        String trackingNumber;
        Integer numberOfItemsInCart = 0;

        String givenFirstName;
        String givenName;
        String givenEmail;
        String givenStreet;
        String givenCity;

        //Sammeln der erhaltenen Parameter
        if(req.getParameter("userID") != null)
            givenUserID = req.getParameter("userID");

        if(req.getParameter("numberOfItemsInCart") != null)
            numberOfItemsInCart = Integer.valueOf(req.getParameter("numberOfItemsInCart"));

        if(req.getParameter("totalPrice")!=null)
            givenTotalPrice = Integer.valueOf(req.getParameter("totalPrice"));

        for(int i = 0; i < numberOfItemsInCart; i++){
            if(req.getParameter("productID_" + i) != null){
                givenProductIDs.add(Integer.valueOf(req.getParameter("productID_" + i)));
            }
        }

        if(req.getParameter("firstName") != null)
            givenFirstName = req.getParameter("firstName");

        //Validierung


    }

}
