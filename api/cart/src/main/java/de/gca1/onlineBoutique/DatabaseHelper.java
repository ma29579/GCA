package de.gca1.onlineBoutique;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import static java.sql.DriverManager.getConnection;

public class DatabaseHelper {

    Connection conn;
    PreparedStatement stmt;
    ResultSet results;

    DatabaseHelper(String databaseURL, String username, String password) throws SQLException {
        conn = getConnection(databaseURL, username, password);
    }

    public boolean addUserID(String userID) throws SQLException {

        String searchStatement = "SELECT COUNT(*) AS quantity FROM shopUser WHERE id = ?";
        String insertStatement = "INSERT INTO shopUser (id) VALUES (?)";

        stmt = conn.prepareStatement(searchStatement);
        stmt.setString(1, userID);
        results = stmt.executeQuery();

        int resultFromSearchStatement = results.getInt("quantity");

        if (resultFromSearchStatement == 0) {

            stmt = conn.prepareStatement(insertStatement);
            stmt.setString(1, userID);
            stmt.execute();

            stmt.close();
            return true;
        } else {
            stmt.close();
            return false;
        }
    }

    public void addProduct(String userID, int productID) throws SQLException {

        String insertIntoTable = "INSERT INTO itemsInCart (shopUserID, productID) VALUES( ?, ? )";
        stmt = conn.prepareStatement(insertIntoTable);
        stmt.setString(1, userID);
        stmt.setInt(2, productID);

        stmt.execute();
        stmt.close();
    }


    public Integer getEntryNumberByUserID(String userID) throws SQLException {

        String searchStatement = "SELECT COUNT(*) AS quantity FROM itemsInCart WHERE shoperUserID = ?";

        stmt = conn.prepareStatement(searchStatement);
        stmt.setString(1, userID);

        results = stmt.executeQuery();

        Integer countedItems = Integer.valueOf(results.getInt("quantity"));

        return countedItems;
    }

    public ArrayList<Integer> getAllEntries(String userID) throws SQLException {

        ArrayList<Integer> entries = new ArrayList<>();
        String searchStatement = "SELECT productID FROM itemsInCart WHERE shoperUserId = ?";

        stmt = conn.prepareStatement(searchStatement);
        stmt.setString(1, userID);

        results = stmt.executeQuery();

        while (results.next()) {
            entries.add(results.getInt("productID"));
        }

        return entries;
    }
}
