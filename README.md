# tebakangka

# kanban-server
Creating fancy kanban
​
List of available endpoints:
​
- `POST users/register`
- `POST users/login`
- `POST users/google-signin`

List routes below need authentication
- `GET /tasks/:category`
- `POST /tasks`

And routes below need authentication and authorization
- `GET /tasks/edit/:id`
- `PUT /tasks/edit/:id`
- `PUT /tasks/edit-category/:idCat`
- `DELETE /tasks/:id`

### POST /register

Request:

- data:

```json
{
  "fullName": "string",	
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "fullName": "string",	
  "email": "string",
}
```

Error:

- status: 400
- body:
  ​

```json
{
  "error_code": "SAME_EMAIL",
  "message": "Email has registered, please login!"
}
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
  ​

```json
{
  "access_token": "string"
}
```

Error:

- status: 401
- body:
  ​

```json
{
  "error_code": "LOGIN_FAILED",
  "message": "Invalid Username/ Password"
}
```


### GET /tasks/:category

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
     {
        "id": 2,
        "title": "making server kanban part 2",
        "createDate": "2020-05-09",
        "category": "backlog",
        "UserId": 5,
        "createdAt": "2020-05-08T17:25:08.225Z",
        "updatedAt": "2020-05-08T17:25:08.225Z",
        "User": {
            "id": 5,
            "fullName": "alam",
            "email": "alam@email.com",
            "password": "$2b$04$FMD2fvPR3lJhMhHKGoX5V.wmhQOzRiKzvARqfzJVO4TEQdFL6Biym",
            "createdAt": "2020-05-08T17:15:18.979Z",
            "updatedAt": "2020-05-08T17:15:18.979Z"
        }
    },{
      ...
    }
]
```

### POST /tasks
Request:

- headers: access_token

- data:

```json
{
  "title": "string",
  "createDate": "dateonly"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "id": 4,
  "title": "making client for kanban part 2",
  "createDate": "2020-05-08",
  "category": "backlog",
  "UserId": 5,
  "updatedAt": "2020-05-08T18:00:52.184Z",
  "createdAt": "2020-05-08T18:00:52.184Z"
}
```
​
Error:

- status: 400
- body:
  ​

```json
{
  "error_code": "VALIDATION_ERROR",
  "message": "Input task title"
}
```
​

### GET /tasks/edit/:id
Request:

- headers: access_token
- params: 
  - TaskId: integer (required)

Response:

- status: 200
- body:

```json
[
  {
    "id": 2,
    "title": "making server kanban part 2",
    "createDate": "2020-05-09",
    "category": "backlog",
    "UserId": 5,
    "createdAt": "2020-05-08T17:25:08.225Z",
    "updatedAt": "2020-05-08T17:25:08.225Z"
  }
]
```


### PUT /tasks/edit/:id
Request:

- headers: access_token
- params: 
  - TaskId: integer (required)

Response:

- status: 200
- body:

```json
[
  {
    "id": 2,
    "title": "Edit set server",
    "createDate": "2020-05-09",
    "category": "backlog",
    "UserId": 5,
    "createdAt": "2020-05-08T17:25:08.225Z",
    "updatedAt": "2020-05-08T18:35:29.357Z"
  }
]
```

Error:

- status: 400
- body:
  ​

```json
{
  "error_code": "VALIDATION_ERROR",
  "message": "Input task title"
}
```
​

### PUT /tasks/edit-category/:id
Request:

- headers: access_token
- params: 
  - TaskId: integer (required)

Response:

- status: 200
- body:

```json
[
  {
    "id": 2,
    "title": "Edit set server",
    "createDate": "2020-05-09",
    "category": "to-do",
    "UserId": 5,
    "createdAt": "2020-05-08T17:25:08.225Z",
    "updatedAt": "2020-05-08T18:39:40.651Z"
  }
]
```


### DELETE /tasks/:id
Request:

- headers: access_token
- params: 
  - TaskId: integer (required)

Response:

- status: 200
- body:

```json
[
  {
    "id": 4,
    "title": "making client for kanban part 2",
    "createDate": "2020-05-08",
    "category": "backlog",
    "UserId": 5,
    "createdAt": "2020-05-08T18:00:52.184Z",
    "updatedAt": "2020-05-08T18:00:52.184Z"
  }
]
```
