package de.gca1.onlineBoutique;

import java.util.ArrayList;

public class OrderSummary {

    private ArrayList<Product> products;
    private PersonalData personalData;
    private PaymentData paymentData;

    public OrderSummary(){
        this.products = new ArrayList<>();
        this.paymentData = new PaymentData();
        this.personalData = new PersonalData();
    }

    public void setPersonalData(PersonalData personalData){
        this.personalData = personalData;
    }

    public void setPaymentData(PaymentData paymentData){
        this.paymentData = paymentData;
    }
}
