package de.gca1.onlineBoutique;

public class PersonalData {

    private String firstName;
    private String name;
    private String email;
    private String street;
    private String city;

    public PersonalData(String firstName, String name, String email, String street, String city) {
        this.firstName = firstName;
        this.name = name;
        this.email = email;
        this.street = street;
        this.city = city;
    }

    public PersonalData() {
        this.firstName = "";
        this.name = "";
        this.email = "";
        this.street = "";
        this.city = "";
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
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
}
