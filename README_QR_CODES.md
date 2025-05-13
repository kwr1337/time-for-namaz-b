# Инструкция по работе с API QR-кодов

## Структура данных

```typescript
// Модель QR-кода
interface QRCode {
  id: number;
  imageUrl: string;      // URL изображения QR-кода
  mosqueId: number;      // ID мечети
  isPrimary: boolean;    // Является ли QR-код основным
  projectName: string | null; // Название проекта (только для дополнительного QR-кода)
  createdAt: string;     // Дата создания
  updatedAt: string;     // Дата обновления
  mosque?: {             // Информация о мечети (включается в ответ)
    name: string;
  };
}
```

## API эндпоинты

```typescript
// Базовые URL для QR-кодов
const API = {
  // Получить все QR-коды
  GET_ALL_QRCODES: '/api/qrcode',
  
  // Получить QR-код по ID
  GET_QRCODE: (id) => `/api/qrcode/${id}`,
  
  // Получить QR-коды мечети
  GET_MOSQUE_QRCODES: (mosqueId) => `/api/qrcode/by-mosque/${mosqueId}`,
  
  // Создать QR-код
  CREATE_QRCODE: '/api/qrcode',
  
  // Обновить QR-код
  UPDATE_QRCODE: (id) => `/api/qrcode/${id}`,
  
  // Удалить QR-код
  DELETE_QRCODE: (id) => `/api/qrcode/${id}`
};
```

## Примеры запросов

### 1. Получение QR-кодов мечети

```typescript
// GET /api/qrcode/by-mosque/{mosqueId}
const getQRCodesByMosque = async (mosqueId) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.get(`${API_BASE_URL}/api/qrcode/by-mosque/${mosqueId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data; // Массив QRCode
  } catch (error) {
    console.error('Ошибка при получении QR-кодов:', error);
    throw error;
  }
};
```

### 2. Создание QR-кода с загрузкой изображения

```typescript
// POST /api/qrcode
const createQRCode = async (mosqueId, isPrimary, projectName, imageFile) => {
  const token = localStorage.getItem('token');
  
  // Используем FormData для отправки файла
  const formData = new FormData();
  formData.append('mosqueId', mosqueId);
  formData.append('isPrimary', isPrimary.toString());
  
  if (!isPrimary && projectName) {
    formData.append('projectName', projectName);
  }
  
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  try {
    const response = await axios.post(`${API_BASE_URL}/api/qrcode`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data; // Созданный QRCode
  } catch (error) {
    console.error('Ошибка при создании QR-кода:', error);
    throw error;
  }
};
```

### 3. Обновление QR-кода

```typescript
// PUT /api/qrcode/{id}
const updateQRCode = async (id, isPrimary, projectName, imageFile) => {
  const token = localStorage.getItem('token');
  
  // Используем FormData для отправки данных и файла
  const formData = new FormData();
  
  if (isPrimary !== undefined) {
    formData.append('isPrimary', isPrimary.toString());
  }
  
  if (!isPrimary && projectName !== undefined) {
    formData.append('projectName', projectName);
  }
  
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  try {
    const response = await axios.put(`${API_BASE_URL}/api/qrcode/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data; // Обновленный QRCode
  } catch (error) {
    console.error('Ошибка при обновлении QR-кода:', error);
    throw error;
  }
};
```

### 4. Удаление QR-кода

```typescript
// DELETE /api/qrcode/{id}
const deleteQRCode = async (id) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/qrcode/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data; // Результат удаления
  } catch (error) {
    console.error('Ошибка при удалении QR-кода:', error);
    throw error;
  }
};
```

## Отображение QR-кода на странице

```jsx
// Отображаем загруженное изображение QR-кода
<img 
  src={`${API_BASE_URL}${qrcode.imageUrl}`}
  alt="QR код"
  className="h-32 w-32 object-contain"
/>
```

## Важные замечания

1. **Формат запросов**: 
   - Для создания и обновления QR-кодов используйте `multipart/form-data` (для загрузки изображений)
   - Для остальных запросов используйте обычные JSON-запросы

2. **HTTP-методы**:
   - Создание: POST
   - Чтение: GET
   - Обновление: PUT
   - Удаление: DELETE

3. **Ограничения**:
   - Одна мечеть может иметь максимум 2 QR-кода
   - Единственный QR-код мечети не может быть дополнительным (не основным)
   - Название проекта (`projectName`) имеет смысл только для дополнительного QR-кода (`isPrimary: false`)

4. **Обязательные поля**:
   - При создании QR-кода обязательно указывать `mosqueId` и загружать изображение
   - При обновлении QR-кода загрузка нового изображения не обязательна 