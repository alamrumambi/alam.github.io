# tebakangka

# ecommerce-cms

### Creating ECommerce CMS Server
​
List of available endpoints:
​
- `POST users/register`
- `POST users/login`

List routes below need authentication
- `GET /products/`
- `POST /products/`
- `PUT /products/:id`
- `DELETE /products/:id`

### Install All Package

```
npm install
```

### Database Migrate

```
sequelize db:migrate
sequelize db:seed:all
```


### POST /users/register

Request:
- data:
```json
{
  "name": "string",	
  "email": "string",
  "password": "string"
}
```

Response:
- status: 201
- body:
```json
{
    "id": 5,
    "name": "user2",
    "email": "user2@email.com",
    "password": "$2b$04$QD8H2vBrj.k7Wxqf0LtTjO/MzeOHaB8WIlxyXjBbrXmlMjn.FjCLS",
    "updatedAt": "2020-05-16T20:41:39.406Z",
    "createdAt": "2020-05-16T20:41:39.406Z"
}
```

Error:
- status: 400
- body:
```json
if name is Empty
{
    "error_code": "VALIDATION_ERROR",
    "message": "Input username"
}
if password is Empty
{
    "error_code": "VALIDATION_ERROR",
    "message": "Input password"
}
...
```


### POST /login

Request:
- data:
```json
{
  "email": "string",
  "password": "string"
}
```

Response:
- status: 200
- body:
```json
{
  "access_token": "string"
}
```

Error:
- status: 401
- body:
```json
{
  "error_code": "LOGIN_FAILED",
  "message": "Invalid Username/ Password"
}
```


### GET /products

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
{
    "products": [
        {
            "id": 4,
            "name": "shirt",
            "image_url": "https://cdn-tp1.mozu.com/21830-33325/resources/images/no-product-image.png?_mzcb=_1589227234355",
            "price": 120000,
            "stock": 4,
            "createdAt": "2020-05-16T20:48:46.187Z",
            "updatedAt": "2020-05-16T20:48:46.187Z"
        },{
          ...
        }
    ]
}
```

### POST /products
Request:

- headers: access_token

- data:

```json
{
  "name": "string",
  "image_url": "string",
  "price": "integer",
  "stock": "integer",
}
```

​Response:

- status: 201
- body:
  ​

```json
{
    "id": 4,
    "name": "shirt",
    "image_url": "https://cdn-tp1.mozu.com/21830-33325/resources/images/no-product-image.png?_mzcb=_1589227234355",
    "price": 120000,
    "stock": 4,
    "updatedAt": "2020-05-16T20:48:46.187Z",
    "createdAt": "2020-05-16T20:48:46.187Z"
}
```
​
Error:

- status: 400
- body:
  ​

```json
if name is Empty
{
    "error_code": "VALIDATION_ERROR",
    "message": "Input product's name"
}
if price less than 1
{
    "error_code": "VALIDATION_ERROR",
    "message": "Price can't less than 1"
}
if stock less than 1
{
    "error_code": "VALIDATION_ERROR",
    "message": "Stock can't less than 1"
}
```
​

### PUT /products/:id
Request:

- headers: access_token

- params: 
  - ProductId: integer (required)

- data:

```json
{
  "name": "string",
  "image_url": "string",
  "price": "integer",
  "stock": "integer",
}
```

Response:

- status: 200
- body:

```json
{
    "message": "update success"
}
```

Error:

- status: 400
- body:
  ​
```json
if name is Empty
{
    "error_code": "VALIDATION_ERROR",
    "message": "Input product's name"
}
if price less than 1
{
    "error_code": "VALIDATION_ERROR",
    "message": "Price can't less than 1"
}
if stock less than 1
{
    "error_code": "VALIDATION_ERROR",
    "message": "Stock can't less than 1"
}
```

### DELETE /products/:id
Request:

- headers: access_token
- params: 
  - ProductId: integer (required)

Response:

- status: 200
- body:

```json
{
    "message": "delete success"
}
```

Error:

- status: 404
- body:
  ​
```json
{
    "error_code": "DATA_NOT_FOUND",
    "message": "Data not found"
}
```
