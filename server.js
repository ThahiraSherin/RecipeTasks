const { default: mongoose } = require("mongoose");
const app = require("./app");
const { MONGODB_URI, PORT } = require("./utilis/config");


mongoose
.connect(MONGODB_URI)
.then(() => {
  console.log("Connected to the database!");
  
  console.log("Starting the Server!")
  app.listen(PORT, () => {
  console.log('server is running on http://localhost:3001');
});
  })
  .catch((err) => {
    console.error("Error Connecting to the database!")
  })

