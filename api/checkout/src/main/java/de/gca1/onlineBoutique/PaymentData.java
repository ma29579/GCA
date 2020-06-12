package de.gca1.onlineBoutique;

public class PaymentData {

    private String creditCardNumber;
    private String expireDate;

    public PaymentData(String creditCardNumber, String expireDate){
        this.creditCardNumber = creditCardNumber;
        this.expireDate = expireDate;
    }

    public PaymentData(){
        this.creditCardNumber = "";
        this.expireDate = "";
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

}
