CREATE TABLE IF NOT EXISTS trackingNumber (trackingNumber UUID PRIMARY KEY, creationTime timestamp DEFAULT NOW(),deletionTime timestamp, userID UUID);
GRANT ALL PRIVILEGES ON trackingNumber TO gca;
