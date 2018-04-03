INSERT INTO saved_weapons (char_id, prefix, name, lvl, damage, range, firerate, reload, magazine, other, area_of_effect, capacitor, critical, knockback, melee, resist, stealth, velocity, consumption, projectiles, manufacturer, type)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22);
SELECT * FROM saved_weapons WHERE char_id = $1;
