package de.gca1.onlineBoutique;

import java.sql.Timestamp;

public class User {
    public User(String userId, Timestamp creationTime, Timestamp deletionTime) {
        UserId = userId;
        CreationTime = creationTime;
        DeletionTime = deletionTime;
    }


    private String UserId;
    private Timestamp CreationTime;
    private Timestamp DeletionTime;

    public String getUserId() {
        return UserId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    public Timestamp getCreationTime() {
        return CreationTime;
    }

    public void setCreationTime(Timestamp creationTime) {
        CreationTime = creationTime;
    }

    public Timestamp getDeletionTime() {
        return DeletionTime;
    }

    public void setDeletionTime(Timestamp deletionTime) {
        DeletionTime = deletionTime;
    }
}
