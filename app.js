const express = require('express');

const { usersRoter } = require('./routes/user.routes');
const { repairsRouter } = require('./routes/repair.routes');
const { db } = require('./utils/database');

const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoter);
app.use('/api/v1/repairs', repairsRouter);

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));

const PORT = 3013;

app.listen(PORT, () => {
    console.log(`Express running on port: ${PORT}`);
});
