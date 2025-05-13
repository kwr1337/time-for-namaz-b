# Инструкция по работе с API фиксированного времени намаза

## Структура данных

```typescript
// Модель фиксированного времени намаза
interface FixedPrayerTime {
  id: number;
  cityId: number;         // ID города
  fajr: string;           // Время намаза Фаджр (формат "HH:MM")
  shuruk: string;         // Восход солнца (формат "HH:MM")
  zuhr: string;           // Время намаза Зухр (формат "HH:MM")
  asr: string;            // Время намаза Аср (формат "HH:MM")
  maghrib: string;        // Время намаза Магриб (формат "HH:MM")
  isha: string;           // Время намаза Иша (формат "HH:MM")
  mechet: string | null;  // Время намаза в мечети (формат "HH:MM", опционально)
  fajrActive: boolean;    // Флаг активности времени Фаджр (по умолчанию true)
  shurukActive: boolean;  // Флаг активности времени Шурук (по умолчанию true)
  zuhrActive: boolean;    // Флаг активности времени Зухр (по умолчанию true)
  asrActive: boolean;     // Флаг активности времени Аср (по умолчанию true)
  maghribActive: boolean; // Флаг активности времени Магриб (по умолчанию true)
  ishaActive: boolean;    // Флаг активности времени Иша (по умолчанию true)
  mechetActive: boolean;  // Флаг активности времени в мечети (по умолчанию true)
  createdAt: string;      // Дата создания
  updatedAt: string;      // Дата обновления
  cityName?: string;      // Название города (включается в ответ)
}
```

## API эндпоинты

```typescript
// Базовые URL для фиксированного времени намаза
const API = {
  // Получить все фиксированные времена намазов
  GET_ALL_FIXED_PRAYER_TIMES: '/api/prayers/fixed-time/all',
  
  // Получить фиксированное время намаза по ID города
  GET_FIXED_PRAYER_TIME_BY_CITY_ID: (cityId) => `/api/prayers/fixed-time/city/${cityId}`,
  
  // Получить фиксированное время намаза по названию города
  GET_FIXED_PRAYER_TIME_BY_CITY_NAME: (cityName) => `/api/prayers/fixed-time/city-name/${cityName}`,
  
  // Обновить фиксированное время намаза для города
  UPDATE_FIXED_PRAYER_TIME: (cityId) => `/api/prayers/fixed-time/${cityId}`,
  
  // Включить/выключить конкретный тип намаза в фиксированном времени
  TOGGLE_SPECIFIC_PRAYER_TIME: (cityId) => `/api/prayers/fixed-time/${cityId}/toggle-prayer`,
  
  // Включить/выключить все типы намазов сразу
  TOGGLE_ALL_PRAYER_TIMES: (cityId) => `/api/prayers/fixed-time/${cityId}/toggle`
};
```

## Примеры запросов

### 1. Получение фиксированного времени намаза по названию города

```typescript
// GET /api/prayers/fixed-time/city-name/{cityName}
const getFixedPrayerTimeByCityName = async (cityName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/prayers/fixed-time/city-name/${encodeURIComponent(cityName)}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении фиксированного времени намаза:', error);
    throw error;
  }
};
```

### 2. Обновление фиксированного времени намаза

```typescript
// PUT /api/prayers/fixed-time/{cityId}
const updateFixedPrayerTime = async (cityId, updatedData) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.put(`${API_BASE_URL}/api/prayers/fixed-time/${cityId}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Ошибка при обновлении фиксированного времени намаза:', error);
    throw error;
  }
};

// Пример использования:
const updatedData = {
  fajr: "05:45",
  maghrib: "19:30"
};

updateFixedPrayerTime(1, updatedData)
  .then(result => console.log('Успешно обновлено:', result))
  .catch(error => console.error('Ошибка:', error));
```

### 3. Получение списка всех фиксированных времен намазов

```typescript
// GET /api/prayers/fixed-time/all
const getAllFixedPrayerTimes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/prayers/fixed-time/all`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении списка фиксированных времен намазов:', error);
    throw error;
  }
};
```

### 4. Включение/выключение конкретного типа намаза

```typescript
// PUT /api/prayers/fixed-time/{cityId}/toggle-prayer
const toggleSpecificPrayerTime = async (cityId, prayerType, isActive) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.put(`${API_BASE_URL}/api/prayers/fixed-time/${cityId}/toggle-prayer`, 
      { prayerType, isActive }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Ошибка при переключении статуса времени намаза:', error);
    throw error;
  }
};

// Пример использования:
// Отключение фиксированного времени для конкретного намаза (prayerType может быть: fajr, shuruk, zuhr, asr, maghrib, isha, mechet)
toggleSpecificPrayerTime(1, 'fajr', false)
  .then(result => console.log('Фиксированное время Фаджра отключено:', result))
  .catch(error => console.error('Ошибка:', error));

// Включение фиксированного времени для конкретного намаза
toggleSpecificPrayerTime(1, 'asr', true)
  .then(result => console.log('Фиксированное время Асра включено:', result))
  .catch(error => console.error('Ошибка:', error));
```

### 5. Включение/выключение всех типов намазов сразу

```typescript
// PUT /api/prayers/fixed-time/{cityId}/toggle
const toggleAllPrayerTimes = async (cityId, isActive) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.put(`${API_BASE_URL}/api/prayers/fixed-time/${cityId}/toggle`, 
      { isActive }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Ошибка при изменении статуса всех фиксированных времен намаза:', error);
    throw error;
  }
};

// Пример использования:
// Отключение всех фиксированных времен намаза
toggleAllPrayerTimes(1, false)
  .then(result => console.log('Все фиксированные времена отключены:', result))
  .catch(error => console.error('Ошибка:', error));

// Включение всех фиксированных времен намаза
toggleAllPrayerTimes(1, true)
  .then(result => console.log('Все фиксированные времена включены:', result))
  .catch(error => console.error('Ошибка:', error));
```

## Отображение времени намазов

```jsx
// Пример компонента для отображения фиксированного времени намаза
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrayerTimesDisplay = ({ cityName }) => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/api/prayers/fixed-time/city-name/${encodeURIComponent(cityName)}`
        );
        setPrayerTimes(response.data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить расписание намазов');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPrayerTimes();
  }, [cityName]);
  
  if (loading) return <div>Загрузка расписания намазов...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!prayerTimes) return null;
  
  // Если в ответе есть сообщение, значит фиксированное время не найдено
  if (prayerTimes.message) {
    return <div>{prayerTimes.message}</div>;
  }
  
  return (
    <div className="prayer-times">
      <h2>Расписание намазов для {prayerTimes.cityName}</h2>
      <div className="prayer-time-grid">
        <div className="prayer-time-item">
          <div className="prayer-name">Фаджр</div>
          <div className="prayer-time">{prayerTimes.fajr}</div>
        </div>
        <div className="prayer-time-item">
          <div className="prayer-name">Восход</div>
          <div className="prayer-time">{prayerTimes.shuruk}</div>
        </div>
        <div className="prayer-time-item">
          <div className="prayer-name">Зухр</div>
          <div className="prayer-time">{prayerTimes.zuhr}</div>
        </div>
        <div className="prayer-time-item">
          <div className="prayer-name">Аср</div>
          <div className="prayer-time">{prayerTimes.asr}</div>
        </div>
        <div className="prayer-time-item">
          <div className="prayer-name">Магриб</div>
          <div className="prayer-time">{prayerTimes.maghrib}</div>
        </div>
        <div className="prayer-time-item">
          <div className="prayer-name">Иша</div>
          <div className="prayer-time">{prayerTimes.isha}</div>
        </div>
        {prayerTimes.mechet && (
          <div className="prayer-time-item">
            <div className="prayer-name">Намаз в мечети</div>
            <div className="prayer-time">{prayerTimes.mechet}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTimesDisplay;
```

## Важные замечания

1. **Формат времени**:
   - Все времена должны быть в формате "HH:MM" (например, "05:30", "19:45").
   - Сервер ожидает строки в этом формате и возвращает их в таком же формате.

2. **Автоматическое создание**:
   - Фиксированное время намаза создается автоматически для каждого города при его создании.
   - По умолчанию все времена установлены в "00:00" и деактивированы (все флаги активности установлены в `false`).
   - Нет необходимости создавать фиксированное время вручную, и его нельзя удалить.

3. **Приоритет времени**:
   - При запросе времени намаза для города (`GET /api/prayers/today?cityName=...`), система автоматически комбинирует обычное расписание с фиксированным временем.
   - Для каждого отдельного типа намаза (фаджр, шурук, зухр и т.д.) используется либо фиксированное время (если соответствующий флаг активности включен), либо обычное расписание (если флаг выключен).
   - Ответ содержит дополнительное поле `fixedTimes`, которое указывает, какие именно типы намазов используют фиксированное время.

4. **Аутентификация**:
   - Для обновления и переключения активности фиксированного времени намаза требуется JWT токен аутентификации.
   - Для получения информации о фиксированном времени аутентификация не требуется.

5. **Индивидуальное управление**:
   - Каждый тип намаза (фаджр, шурук, зухр, аср, магриб, иша, мечеть) может быть индивидуально настроен как активный или неактивный.
   - Если тип намаза неактивен, для него будет использоваться время из обычного расписания даже при наличии фиксированного времени.
   - Это позволяет гибко комбинировать фиксированное время и обычное расписание для различных типов намазов в одном городе. 