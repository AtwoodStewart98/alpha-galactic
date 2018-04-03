INSERT INTO saved_chars (user_id, name, race, alignment, training, faction, description)
VALUES ($1, $2, $3, $4, $5, $6, $7);
SELECT currval(id);
