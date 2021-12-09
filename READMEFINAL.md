# M3 - `README.md` Example

<br>

## Description

This is an app to manage unofficial tournaments within communities. The app helps to organize, manage and track competitions.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
- **Login:** As a user I can login to the platform so that I can play competitions
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add Tournaments** As a user I can add a tournament
- **Edit Tournaments** As a user I can edit a tournament
- **Add Player Names** As a user I can add players to a tournament
- **Edit Player profiles** As a user I can edit a player profile to fit into the tournament view
- **View Tournament Table** As a user I want to see the tournament table
- **Edit Games** As a user I can edit the games, so I can add scores
- **View Ranks** As a user I can see the ranks

## Backlog

User profile:

- see my profile
- change tournament mode to FFA
- Add weather widget
- lottie interactions
- users can bet
- add geolocation to events when creating

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                      | Component            | Permissions                | Behavior                                                      |
| ------------------------- | -------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                       | HomePage || HomePageLogIn| public `<Route>`       | Home page with hidden/display components                      |
| `/signup`                 | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login  |
| `/joke/add`               | HomePageLogIn        | user only `<PrivateRoute>` | Add a joke                                                    |
| `/user`                   | UserListPage         | user only `<PrivateRoute>` | Fav Joke of a user & History of Shopping & Edit profile       |
| `/user/edit/:id`          | UserListPage         | user only `<PrivateRoute>` | Edit player for user                                          |
| `/user/joke/add`          | JokeDetailPage       | user only `<PrivateRoute>` | Add a joke to the user                                        |
| `/user/joke/:id`          | JokeDetailPage       | user only `<PrivateRoute>` | Joke from favourites [1] Delete / Edit / Buy merch            |
| `/user/joke/edit/:id`     | JokeDetailPage       | user only `<PrivateRoute>` | Details of a joke to edit                                     |
| `/user/joke/delete/:id`   | n/a                  | user only `<PrivateRoute>` | Delete joke                                                   |
| `/product/:id`            | ShopView             | user only `<PrivateRoute>` | Product view with components & buy now button                 |

## Components

- LoginPage

- RandomJoke

- JokeDetails

- FavoriteJokes

- UserDetailPage

- ProductDetailPage

- Logo

- Navbar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Joke Service
  - Joke.detail(id)
  - Joke.add(id)
  - Joke.delete(id)
  - Joke.edit(id)
- User Service
  - User.profile(id)
  - User.edit(id)
  - User.fav.joke(id)
  - User.history.purchase(id)
- Product Service
  - Product.put(id)

<br>

# Server / Backend

## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{type: Schema.Types.ObjectId,ref:'Joke'}],
  product: [{type: Schema.Types.ObjectId,ref:'Product'}],
}
```

Joke model

```javascript
 {
   setup: {type: String, required: true},
   delivery: {type: String},
   category: {type: String},
 }
```

Product model

```javascript
{
  type: [{type: String, required: true}],
  img: {type: String},
  joke: [{type: Schema.Types.ObjectId,ref:'Joke'}],
  user: [{type: Schema.Types.ObjectId,ref:'User'}]
  size: {type: String},
  color: {type: String},
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                   | Success status | Error Status | Description                                                                         |
| ----------- | ---------------------- | ------------------------------ | -------------- | ------------ | -------------------------------------------------------------------------------- |
| GET         | `/auth/profile `       | Saved session                  | 200            | 404          | Check if user is logged in and return profile page                                |
| POST        | `/auth/signup`         | {name, email, password}        | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}           | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session            |
| POST        | `/auth/logout`         | (empty)                        | 204            | 400          | Logs out the user                                                                 |
| GET         | `/api/jokes/:id`       | {id}                           |                |              | Show specific Joke                                                                |
| POST        | `/api/jokes`           | {}                             | 201            | 400          | Create and save a new joke to backend DB                                          |
| PUT         | `/api/jokes/:id`       | {id,setup,delivery,category}   | 200            | 400          | edit joke                                                                         |
| DELETE      | `/api/jokes/:id`       | {id}                           | 201            | 400          | delete joke                                                                       |
| GET         | `/api/user/:id`        | {id}                           |                |              | show user profile                                                                 |
| PUT         | `/api/user/:id`        | {name,email,password}          | 201            | 400          | edit player                                                                       |
| DELETE      | `/api/user/:id`           | {id}                        | 200            | 400          | delete player                                                                     |
| GET         | `/api/user/favourites/:id`| {id,JokeId}                 |                |              | show user favourite list                                                          |
| PUT         | `/api/user/favourites/edit/:id`| {id,JokeId}            |                |              | edit favourite joke [1]                                                           |
| POST        | `/api/product/:id`     | {userId,jokeId,type,size,color}|                |              | add product to buy                                                                |
| PUT         | `/api/product/:id`     | {userId,jokeId,type,size,color}|                |              | edit product to buy                                                               |
| DELETE      | `/api/product/:id`     | {id}                           |                |              | delete product to buy                                                             |

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan)
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
