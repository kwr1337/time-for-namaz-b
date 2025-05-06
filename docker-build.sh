#!/bin/bash

# Собираем образ
docker build -t time-for-namaz .

# Запускаем контейнер
docker run -p 8080:8080 time-for-namaz 