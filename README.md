# 🛒 Backend - Entrega N°1 Backend - Juan Pablo Grisales Espinosa

Este proyecto consiste en la creación de un servidor utilizando **Node.js** y **Express**, con persistencia de datos mediante el sistema de archivos (`FileSystem`). Está diseñado para gestionar productos y carritos de compra a través de una API REST.

## 📁 Estructura del proyecto

```
📦 backend
├── 📂 src
│   ├── 📂 data
│   │   ├── products.json
│   │   └── carts.json
│   ├── 📂 managers
│   │   ├── ProductManager.js
│   │   └── CartManager.js
│   ├── 📂 routes
│   │   ├── products.routes.js
│   │   └── carts.routes.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/TheRevel1/BackendJuanGrisales
cd BackendJuanGrisales
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
node src/app.js
```

El servidor se ejecuta en `http://localhost:8080`.

---

## 📡 Endpoints disponibles

### 📦 Rutas de productos `/api/products/`

- `GET /api/products/` → Lista todos los productos.
- `GET /api/products/:pid` → Trae un producto por su ID.
- `POST /api/products/` → Crea un nuevo producto.
- `PUT /api/products/:pid` → Actualiza un producto (sin modificar el ID).
- `DELETE /api/products/:pid` → Elimina un producto por ID.

📝 Ejemplo de body para `POST`:

```json
{
  "title": "Elden Ring",
  "description": "RPG de acción en mundo abierto",
  "code": "ELDEN2022",
  "price": 59.99,
  "status": true,
  "stock": 100,
  "category": "rpg"
  }
```

---

### 🛒 Rutas de carritos `/api/carts/`

- `POST /api/carts/` → Crea un carrito vacío.
- `GET /api/carts/:cid` → Lista los productos de un carrito por ID.
- `POST /api/carts/:cid/product/:pid` → Agrega un producto al carrito. Si ya existe, incrementa `quantity`.

---

## 💾 Persistencia de datos

Los datos se guardan en archivos JSON ubicados en `src/data/`:

- `products.json` → productos creados
- `carts.json` → carritos creados

> ⚠️ Estos archivos se incluyen en el repositorio para facilitar pruebas.

---

## 🧪 Testeo con Postman

Se puede probar la API **Postman**. Se recomienda comenzar creando productos como en el ejemplo mencionado, luego un carrito, y después agregando productos al carrito por ID.

---

## 📌 Notas

- Los IDs de productos y carritos son generados automáticamente usando `uuid`, garantizando que no se repitan.
- El proyecto no incluye una interfaz visual, todo se prueba mediante endpoints.

---

## 📚 Autor

- Juan Pablo Grisales Espinosa
- Proyecto para Backend 1 - Coderhouse