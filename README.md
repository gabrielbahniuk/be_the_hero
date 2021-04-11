<h1 align="center">
    <img alt="" title="" src="img/logo.svg">
</h1>

<h2 align="center">Application to connect NGOs to people who are able and want to support it.</h2>

<section align="center">
  <h4>Stack</h4>
  <div>
    <img src="img/node.png" alt="node" height="16">
    <span>Node</span>
  </div>
  <div>
    <img src="img/react.png" alt="react" height="16">
    <span>React</span>
  </div>
  <div>
    <img src="img/react-native.png" alt="react-native" height="16">
    <span>React Native</span>
  </div>
<section>

<div align="center">
  <img src="img/heroes.png" alt="heroes" height="300">
</div>

---

### :information_source: How To Use

#### Server

```bash

$ cd backend

# install dependencies
$ npm install

# run migrations
$ ./node_modules/.bin/knex migrate:latest

# Run server
$ npm start
```

#### Web

```bash

$ cd frontend

# install dependencies
$ yarn

# Run application
$ yarn start
```

#### Mobile

```bash

$ cd mobile

# install dependencies
$ yarn

# Run application
$ npm -i expo-cli -g && expo start
```

###### Check within `src/services/api.js` under `mobile` and `frontend` if your IP address is correct before testing.

## Demo

<img src="img/demo.gif" />
