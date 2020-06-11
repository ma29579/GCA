package de.gca1.onlineBoutique;

import java.util.UUID;

public class OrderInformation {

    private UUID trackingNumber;
    private UUID userID;

    OrderInformation(UUID trackingNumber, UUID userID){
        this.trackingNumber = trackingNumber;
        this.userID = userID;
    }

    public UUID getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(UUID trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }
}
