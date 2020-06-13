package de.gca1.onlineBoutique;

import org.aspectj.weaver.ast.Or;

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


    public OrderInformation addTrackingNumber(UUID userID) throws SQLException {

        String insertStatement = "INSERT INTO trackingNumber " +
                "(trackingNumber, userID) VALUES(uuid_in(md5(random()::text || clock_timestamp()::text)::cstring), ?)";

        String selectStatement = "SELECT * FROM trackingNumber WHERE userID = ? ORDER BY creationTime DESC LIMIT 1";

        stmt = conn.prepareStatement(insertStatement);
        stmt.setObject(1,userID);

        stmt.execute();

        stmt = conn.prepareStatement(selectStatement);
        stmt.setObject(1,userID);

        results = stmt.executeQuery();

        results.next();
        UUID trackingNumber = (UUID) results.getObject("trackingNumber");

        results.close();
        stmt.close();

        OrderInformation orderInformation = new OrderInformation(trackingNumber,userID);
        return orderInformation;
    }

}
