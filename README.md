# gratis api

A simple blog RESTFUL API
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

### BASE_URL: https://gratis-app.herokuapp.com

## Instructions to run the app locally

clone the repo

- run `yarn install` to install all dependencies
- create a postgres database
- run `yarn migrate:up` to initialize the database
- run `yarn make:seed` to seed the database
- run `yarn dev` to start your server on port 3000

## API Reference

#### Get all blogposts

```http
  GET ${base_url}/api/v1/blog
```

#### Get blogposts with pagination

```http
  GET ${base_url}/api/v1/blog
```

| Request parameter | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `page`            | `number` | **Required**. specify the page you want |
| `limit`           | `number` | **Required**. specify the limit         |

#### Get a blogpost

```http
  GET /api/v1/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of blog to fetch |

#### Create a blogpost

```http
  POST ${base_url}/api/v1/blog
```

| Request data | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `title`      | `string` | **Required**. the title of the blogpost |
| `post`       | `string` | **Required**. The post to be created    |

#### Edit a blogpost

```http
  PUT ${base_url}/api/v1/blog
```

| Request data | Type     | Description                                       |
| :----------- | :------- | :------------------------------------------------ |
| `id`         | `number` | **Required**. the id of the blogpost to be edited |
| `post`       | `string` | **Required**. the edited post                     |

#### Delete a blogpost

```http
  DELETE ${base_url}/api/v1/blog
```

| Request data | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `id`         | `number` | **Required**. the id of the blogpost to be deleted |

## Comments endpoints

#### Get all comments

```http
  GET ${base_url}/api/v1/comment
```

#### Get a comment

```http
  GET ${base_url}/api/v1/comment/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of blog to fetch |

#### Create a comment

```http
  POST ${base_url}/api/v1/comment
```

| Request data | Type     | Description                                                 |
| :----------- | :------- | :---------------------------------------------------------- |
| `comment`    | `string` | **Required**. The comment                                   |
| `blopostId`  | `number` | **Required**. The id of the blogpost to link the comment to |

#### Edit a comment

```http
  PUT ${base_url}/api/v1/comment
```

| Request data | Type     | Description                                      |
| :----------- | :------- | :----------------------------------------------- |
| `id`         | `number` | **Required**. the id of the comment to be edited |
| `comment`    | `string` | **Required**. the edited comment                 |

#### Delete a comment

```http
  DELETE ${base_url}/api/v1/comment
```

| Request data | Type     | Description                                       |
| :----------- | :------- | :------------------------------------------------ |
| `id`         | `number` | **Required**. the id of the comment to be deleted |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

    host=
    port=
    user=
    password=
    database=

## Tools Used

- NodeJS
- Express
- Postgres
- Knex
- Joi
