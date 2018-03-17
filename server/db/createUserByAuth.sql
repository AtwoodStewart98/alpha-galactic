INSERT INTO users (authid, username)
VALUES ($1, $2) RETURNING *;
