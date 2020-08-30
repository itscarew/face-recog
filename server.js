const app = require("./app");

//listenening to app
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is Running on port ${PORT} `);
});
