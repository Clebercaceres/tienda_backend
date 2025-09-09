# 🛒 Tienda de Tecnología - Backend

Este es el backend de la tienda online, construido con **Node.js + Express + MySQL**.

## 🚀 Tecnologías utilizadas
- Node.js
- Express
- MySQL
- Sequelize (ORM)

## 📂 Estructura básica
```
backend/
│── src/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
│── package.json
```

## ▶️ Cómo ejecutar
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear un archivo `.env` (usa el ejemplo `.env.example`):
   ```bash
   cp .env.example .env
   ```
3. Iniciar el servidor:
   ```bash
   npm run dev
   ```

El backend corre por defecto en:  
```
http://localhost:5000
```

## 📊 Base de datos
Ejecuta el script `database.sql` en tu **MySQL Workbench** o CLI para crear la base de datos y tablas iniciales.

---

### 📌 Archivo `.env.example`
```env
# Puerto del servidor
PORT=5000

# Configuración de la base de datos
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=tienda_tecnologia

# JWT para autenticación
JWT_SECRET=clave_super_segura
```
