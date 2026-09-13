# Codveda Full-Stack Development Internship - Level 1

## Overview

This level focuses on the basics of full-stack web development using
Node.js, Express, HTML, CSS, and JavaScript.

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript
- REST API
- Fetch API
- Git & GitHub
- Thunder Client

---

# Task 2: Simple REST API

## Description

A REST API was developed using Node.js and Express.js to perform
CRUD operations on products.

## API Features

- Create a product
- Get all products
- Get a single product
- Update a product
- Delete a product
- Error handling with proper HTTP status codes

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## How to Run

```bash
cd level-1/task-2-rest-api
npm install
npm run dev

the api runs on
http://locahost:500

     # Task 2: Simple REST API

## Description

A REST API was developed using Node.js and Express.js to perform
CRUD operations on products.

## API Features

- Create a product
- Get all products
- Get a single product
- Update a product
- Delete a product
- Error handling with proper HTTP status codes

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## How to Run

```bash
cd level-1/task-2-rest-api
npm install
npm run dev

Task 3: Frontend with HTML, CSS and JavaScript
Description
A responsive frontend webpage was created using HTML, CSS and vanilla JavaScript.
The frontend fetches product data from the REST API using the JavaScript Fetch API and displays the products dynamically.
Features
Responsive webpage
REST API integration
Dynamic product display
Product name, ID and price
API error handling
Mobile-friendly layout
How to Run
Start the REST API first:
cd level-1/task-2-rest-api
npm run dev
Then open:
level-1/task-3-frontend/index.html
using VS Code Live Server.

        Project Structure
level-1/
│
├── README.md
│
├── task-2-rest-api/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
└── task-3-frontend/
    ├── index.html
    ├── style.css
    └── script.js

Learning Outcome
Through Level 1, I learned the basics of:
Node.js and Express
REST API development
CRUD operations
HTTP status codes
API testing
Fetch API
Frontend and backend integration
Responsive web design


# Task 3: Frontend with HTML, CSS and JavaScript

## Description

A responsive frontend webpage was created using HTML, CSS and
vanilla JavaScript.

The frontend fetches product data from the REST API using the
JavaScript Fetch API and displays the products dynamically.

## Features

- Responsive webpage
- REST API integration
- Dynamic product display
- Product name, ID and price
- API error handling
- Mobile-friendly layout

## How to Run

Start the REST API first:

```bash
cd level-1/task-2-rest-api
npm run dev

Then open the frontend using VS Code Live Server.
Project Structure
level-1/
├── README.md
├── task-2-rest-api/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── task-3-frontend/
    ├── index.html
    ├── style.css
    └── script.js

Learning Outcome
Through Level 1, I learned the basics of:
Node.js and Express
REST API development
CRUD operations
HTTP status codes
API testing
Fetch API
Frontend and backend integration
Responsive web design


