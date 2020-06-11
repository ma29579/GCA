package de.gca1.onlineBoutique;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class ShippingController {

    @GetMapping("/shipping/cost/{productCosts}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Double> calculateShippingCosts(@PathVariable("productCosts") double productCosts) {

        Double shippingCosts;

        if(productCosts > 100)
            shippingCosts = Double.valueOf(0);
        else
            shippingCosts = Double.valueOf(12.99);

        return ResponseEntity.status(HttpStatus.OK).body(shippingCosts);
    }

    @GetMapping("/shipping/trackingnumber/{userID}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<OrderInformation> calculateShippingCosts(@PathVariable("userID") UUID userID) {

        String insertStatement;

        return null;
    }

}
