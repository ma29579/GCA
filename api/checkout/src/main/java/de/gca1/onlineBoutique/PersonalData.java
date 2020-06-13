package de.gca1.onlineBoutique;

public class PersonalData {

    private String name;
    private String email;
    private String street;
    private String city;
    private String zip;

    public PersonalData(String name, String email, String street, String city, String zip) {
        this.name = name;
        this.email = email;
        this.street = street;
        this.city = city;
        this.zip = zip;
    }

    public PersonalData() {
        this.name = "";
        this.email = "";
        this.street = "";
        this.city = "";
        this.zip = "";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZip(String zip){this.zip = zip;}

    public String getZip(){return this.zip;}
}
