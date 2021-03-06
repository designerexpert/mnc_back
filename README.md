# Dev Ops Notes:
1. Knex Configurations / Commands
    - knex init
    - knex migrate:make initial
    - inside: data/dbConfig.js change development to production when ready to deploy

2. Authentication Configurations
    - Change: config.js secret: before deploying final.

# API Endpoints: 
## Registration: 
### Request Type: POST
1. Navigate to /register
2. Provide a user object following this template:
```JSON
{
    "email": "test@email.com",
    "password": "1234"
}
```
3. Server will return the following object if successful:
```JSON
{ "message": "success" }
```
4. Server will return the following error if unsuccessful:
```JSON
{
    "errorMessage": "unable to register user. Already registered? Try to log-in instead!"
}
```

## Login:
### Request Type: POST
1. Navigate to /login
2. Provide a user object following this template:
```JSON
{
    "email": "test@email.com",
    "password": "1234"
}
```
3. Server will return an object like this one if successful:
```JSON
{
    "id": 7,
    "email": "test@email.com",
    "auth": true,
    "createdAt": "2018-02-13 19:40:33",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTg1NTQ5NjAsImRhdGEiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTUxODU1MTM2MH0.ijuolir7q2nkMa50Td6JLNLqfkdmUn7t7tuh89oEb_M"
}
```
4. Server will return this error if unsuccessful:
```JSON
{
    "errorMessage": "User not Authenticated, Please log-in again!"
}
```

## List Users:
### Request Type: Get
1. Navigate to /users
2. Provide a JWT with the token that was given when the user logged in in the headers Authorization.
3. A list of users will be returned.
4. Server will return this error if unsuccessful:
```JSON
{
    "error": "Token invalid, please login",
    "message": {
        "name": "JsonWebTokenError",
        "message": "invalid signature"
    }
}
```

## Delete a User:
### Request Type: Delete
1. Navigate to /users
2. Provide a user object like the one bellow:
```JSON
{
    "email": "test@email.com",
    "password": "1234"
}
```
3. Server will return 1 if the user was deleted successfully.
4. Server will return an error if it was unable to delete the user.

## Update a User's Password:
### Request Type: Put
1. Navigate to /update
2. Provide a user object like the one bellow.
```JSON
{
    "email": "test@email.com",
    "password": "1234",
    "newPassword": "4321",
}
```
3. Server will return 1 if the user was updated successfully.
4. Server will return an error if it was unable to update the newPassword, or was unable to authenticate with the provided password.