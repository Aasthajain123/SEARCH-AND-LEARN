# SEARCH-AND-LEARN

### About

It does all the tedious job and brings all the significant details about tutorials offered by various educational sites at a single platform and all one has to do is choose the most suitable one for ourself and enjoy learning.

### Development

-   Install Backend Dependencies.

```sh
npm install
```

-   Install Frontend Dependencies.

```sh
npm run client-install
```

-   Run Local MongoDB Server.

-   Run Development Server.

```sh
npm run dev
```

---

### Testing

-   Create `keys_test.js` file in config folder with the following data:

```js
module.exports = {
	mongoURI: YOUR_LOCAL_MONGO_SERVER_URI,
	secretOrKey: YOUR_SECRET,
	emailVerificationKey: YOUR_EMAIL_VERIFICATION_KEY
};
```

-   The `emailVerificationKey` can be found by creating an account [here](https://quickemailverification.com/).

-   Run Tests.

```sh
npm test
```

-   Run Test Watch.

```sh
npm run test:watch
```

---

### Technologies Used

##### Back End

-   [Node](https://nodejs.org)
-   [Express](http://expressjs.com)
-   [MongoDB](http://mongodb.com)
-   [Mongoose](http://mongoosejs.com)
-   [Passport](http://www.passportjs.org/)

##### Front End

-   [React](https://reactjs.org)
-   [Ant Design](https://ant.design)

##### State Management

-   [Redux](https://redux.js.org)


