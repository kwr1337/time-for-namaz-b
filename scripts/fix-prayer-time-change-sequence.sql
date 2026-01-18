-- Исправление последовательности для PrayerTimeChange.id
-- Эта команда синхронизирует последовательность с максимальным значением ID в таблице

SELECT setval(
    pg_get_serial_sequence('"PrayerTimeChange"', 'id'), 
    COALESCE((SELECT MAX(id) FROM "PrayerTimeChange"), 1), 
    true
);






