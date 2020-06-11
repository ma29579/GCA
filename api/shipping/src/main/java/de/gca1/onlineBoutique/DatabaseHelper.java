package de.gca1.onlineBoutique;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.UUID;

import static java.sql.DriverManager.getConnection;

public class DatabaseHelper {

    Connection conn;
    PreparedStatement stmt;
    ResultSet results;

    DatabaseHelper(String databaseURL, String username, String password) throws SQLException {
        conn = getConnection(databaseURL, username, password);
    }


    public void addProduct(UUID userID, UUID trackingNumber) throws SQLException {

        String insertStatement = "INSERT INTO";
    }

}
