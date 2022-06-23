const express = require("express");

const { registrarionRouter } = require("./routes/registration.routes");
const { db } = require("./utils/database");

const app = express();
app.use(express.json());

app.use("/api/v1/registration", registrarionRouter);

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

const PORT = 3013;

app.listen(PORT, () => {
  console.log(`Express running on port: ${PORT}`);
});
