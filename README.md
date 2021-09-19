# gratis api

A simple blog RESTFUL API
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
### Hosted URL: https://gratis-app.herokuapp.com
## Instructions to run the app locally

clone the repo

- run `yarn install` to install all dependencies
- create a postgres database called "gratis_db"
- run `yarn dev` to start your server on port 3000
- run `yarn make:seed` to seed the database

## API Reference

#### Get all blogposts

```http
  GET /api/v1/blog
```

#### Get blogposts with pagination

```http
  GET /api/v1/blog
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
| `id`      | `string` | **Required**. Id of blog to fetch |

#### Create a blogpost

```http
  POST /api/v1/blog
```

| Request data | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `title`      | `string` | **Required**. the title of the blogpost |
| `post`       | `string` | **Required**. The post to be created    |

#### Edit a blogpost

```http
  PUT /api/v1/blog
```

| Request data | Type     | Description                                       |
| :----------- | :------- | :------------------------------------------------ |
| `id`         | `number` | **Required**. the id of the blogpost to be edited |
| `post`       | `number` | **Required**. the edited post                     |

#### Delete a blogpost

```http
  DELETE /api/v1/blog
```

| Request data | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `id`         | `number` | **Required**. the id of the blogpost to be deleted |

## Comments endpoints

#### Get all comments

```http
  GET /api/v1/comment
```

#### Get a comment

```http
  GET /api/v1/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of blog to fetch |

#### Create a comment

```http
  POST /api/v1/blog
```

| Request data | Type     | Description                                                 |
| :----------- | :------- | :---------------------------------------------------------- |
| `comment`    | `string` | **Required**. The comment                                   |
| `blopostId`  | `number` | **Required**. The id of the blogpost to link the comment to |

#### Edit a comment

```http
  PUT /api/v1/blog
```

| Request data | Type     | Description                                      |
| :----------- | :------- | :----------------------------------------------- |
| `id`         | `number` | **Required**. the id of the comment to be edited |
| `comment`    | `string` | **Required**. the edited comment                 |

#### Delete a comment

```http
  DELETE /api/v1/blog
```

| Request data | Type     | Description                                       |
| :----------- | :------- | :------------------------------------------------ |
| `id`         | `number` | **Required**. the id of the comment to be deleted |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_USER`=

`PASSWORD`=
