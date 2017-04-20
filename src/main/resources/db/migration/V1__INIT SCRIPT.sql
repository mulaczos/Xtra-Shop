CREATE TABLE IF NOT EXISTS USERS(
  USERNAME VARCHAR(50) NOT NULL PRIMARY KEY,
  PASSWORD VARCHAR(50) NOT NULL,
  NAME VARCHAR(50) NOT NULL,
  LASTNAME VARCHAR(50) NOT NULL,
  EMAIL VARCHAR(100) NOT NULL,
  ENABLED BOOLEAN NOT NULL
);

CREATE UNIQUE INDEX ON USERS(USERNAME);

CREATE TABLE IF NOT EXISTS AUTHORITIES (
  USERNAME VARCHAR(50) NOT NULL,
  AUTHORITY VARCHAR(50) NOT NULL,
  CONSTRAINT FK_AUTHORITIES_USERS FOREIGN KEY(USERNAME) REFERENCES USERS(USERNAME)
);

CREATE UNIQUE INDEX IF NOT EXISTS IX_AUTH_USERNAME ON AUTHORITIES (USERNAME,AUTHORITY);

INSERT INTO USERS(USERNAME, PASSWORD, ENABLED, NAME, LASTNAME, EMAIL) VALUES ('ADMIN', 'ADMIN', TRUE,'ADMINISTRATOR',' ', '');
INSERT INTO AUTHORITIES(USERNAME, AUTHORITY) VALUES ('ADMIN', 'ADMIN');