## Description

This backend is a simple crud developed in [Nest](https://github.com/nestjs/nest)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Database and Secret JWT

I don't know how to use environment variables in NestJS, so I did it that way

```bash
# For DB you need create a simple DB in mongoDB and replace in src/app.module.ts
MongooseModule.forRoot('mongodb+srv://USER:PASSWORD@cluster0.9gcgc.mongodb.net/<dbname>?retryWrites=true&w=majority')

# For JWT Secret Key, replace in src/auth/jwt/constants.ts
secret: 'S3CR37',
```

## Routes

```bash
Login

http://localhost:3000/auth/login

#POST: http://localhost:3000/auth/login

{
  "email": "kevin@kevin.com.br",
  "password": "123456"
}

Users

http://localhost:3000/users

# POST: http://localhost:3000/users

{
  "name": "kevin",
  "email": "kevin@kevin.com",
  "password": "123456"
}

# PUT: http://localhost:3000/users/:id

{
  "password": "123456"
}

# GET ALL USERS: http://localhost:3000/users
# GET USER: http://localhost:3000/users/:id
# DELETE USER: http://localhost:3000/users/:id

Tasks

# POST: http://localhost:3000/users

{
  "description": "Teste Juntos Somos Mais",
  "completed": false
}

# PUT: http://localhost:3000/user/:id

{
  "completed": true
}

# GET ALL TASKS: http://localhost:3000/tasks
# GET TASKS: http://localhost:3000/tasks/:id
# DELETE TASKS: http://localhost:3000/tasks/:id
```

## Deploy in Heroku

```bash
Link: https://todoappjsm.herokuapp.com
```
