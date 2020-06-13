package de.gca1.onlineBoutique;

import java.util.ArrayList;
import java.util.UUID;

public class OrderSummary {

    private ArrayList<Product> products;
    private PersonalData personalData;
    private PaymentData paymentData;
    private String trackingNumber;
    private Double totalCosts;
    private Double shippingCosts;

    public OrderSummary(){
        this.totalCosts = null;
        this.shippingCosts = null;
        this.trackingNumber = null;
        this.products = new ArrayList<>();
        this.paymentData = new PaymentData();
        this.personalData = new PersonalData();
    }

    public void setProducts(ArrayList<Product> products) {this.products = products;}

    public void setPersonalData(PersonalData personalData){
        this.personalData = personalData;
    }

    public void setPaymentData(PaymentData paymentData){
        this.paymentData = paymentData;
    }

    public void setTrackingNumber(String trackingNumber) {this.trackingNumber = trackingNumber;}

    public ArrayList<Product> getProducts() {
        return products;
    }

    public PersonalData getPersonalData() {
        return personalData;
    }

    public PaymentData getPaymentData() {
        return paymentData;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public Double getTotalCosts() {
        return totalCosts;
    }

    public void setTotalCosts(Double totalCosts) {
        this.totalCosts = totalCosts;
    }

    public Double getShippingCosts() {
        return shippingCosts;
    }

    public void setShippingCosts(Double shippingCosts) {
        this.shippingCosts = shippingCosts;
    }
}
