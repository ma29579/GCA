CREATE TABLE IF NOT EXISTS shopUser (ID SERIAL PRIMARY KEY, userID uuid UNIQUE, creationTime timestamp DEFAULT NOW(),deletionTime timestamp);

CREATE TABLE IF NOT EXISTS itemsInCart(entryID SERIAL PRIMARY KEY, shopuserID uuid NOT NULL REFERENCES shopUser(userID),
								     productID INTEGER NOT NULL, creationTime timestamp DEFAULT NOW(),
								     deletionTime timestamp);
GRANT ALL PRIVILEGES ON itemsincart, shopuser TO gca;
