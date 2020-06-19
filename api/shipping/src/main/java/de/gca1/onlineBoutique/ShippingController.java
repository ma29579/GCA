package de.gca1.onlineBoutique;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.UUID;

@RestController
public class ShippingController {

    private static final Logger logger = LoggerFactory.getLogger(ShippingController.class);

    @GetMapping("/shipping/cost/{productCosts}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Double> calculateShippingCosts(@PathVariable("productCosts") double productCosts) {

        Double shippingCosts;

        if(productCosts > 100)
            shippingCosts = Double.valueOf(0);
        else
            shippingCosts = Double.valueOf(12.99);

        logger.info("Erfolgreiche Berechnung der Versandkosten erfolgt!",productCosts, shippingCosts);
        return ResponseEntity.status(HttpStatus.OK).body(shippingCosts);
    }

    @GetMapping("/shipping/trackingnumber/{userID}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<OrderInformation> generateTrackingnumber(@PathVariable("userID") UUID userID) {

        try {
            DatabaseHelper databaseHelper = new DatabaseHelper("jdbc:postgresql://localhost:5432/shipping", "gca", "gca");
            OrderInformation orderInformation = databaseHelper.addTrackingNumber(userID);
            logger.info("Erfolgreiche Speicherung einer Trackingnumber!",orderInformation);
            return ResponseEntity.status(HttpStatus.OK).body(orderInformation);
        } catch (SQLException e) {
            logger.error("Fehler bei der Datenbankverbindung!",e);
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

}
