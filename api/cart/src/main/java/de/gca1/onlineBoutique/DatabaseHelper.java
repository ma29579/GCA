package de.gca1.onlineBoutique;

import javax.xml.transform.Result;
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

    public User addUserID() throws SQLException {

        String insertStatement = "INSERT INTO shopUser (userId) VALUES (uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)); ";
         String getLastUser = "SELECT userId, creationTime FROM shopUser ORDER BY CreationTime DESC LIMIT 1;";

            stmt = conn.prepareStatement(insertStatement);
            stmt.execute();

            stmt = conn.prepareStatement(getLastUser);
            results = stmt.executeQuery();
            results.next();
            User resultUser = new User(results.getString("userId"), results.getTimestamp("creationTime"), null);


            stmt.close();
            return resultUser;
    }

    public void addProduct(UUID userID, int productID) throws SQLException {

        String insertIntoTable = "INSERT INTO itemsInCart (shopUserId, productID) VALUES( ?, ? )";
        stmt = conn.prepareStatement(insertIntoTable);
        stmt.setObject(1, userID);
        stmt.setInt(2, productID);

        stmt.execute();
        stmt.close();
    }


    public Integer getEntryNumberByUserID(UUID userID) throws SQLException {

        String searchStatement = "SELECT COUNT(*) AS quantity FROM itemsInCart WHERE shopUserID = ?";

        stmt = conn.prepareStatement(searchStatement);
        stmt.setObject(1, userID);

        results = stmt.executeQuery();
        results.next();
        Integer countedItems = Integer.valueOf(results.getInt("quantity"));

        return countedItems;
    }

    public ArrayList<Integer> getAllEntries(UUID userID) throws SQLException {

        ArrayList<Integer> entries = new ArrayList<>();
        String searchStatement = "SELECT productID FROM itemsInCart WHERE shopUserId = ?";

        stmt = conn.prepareStatement(searchStatement);
        stmt.setObject(1, userID);

        results = stmt.executeQuery();

        while (results.next()) {
            entries.add(results.getInt("productID"));
        }

        return entries;
    }
}
