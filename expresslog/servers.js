const express = require('express');
const app = express();
const logs = require('./libs/createlog');
app.listen('2222');
app.use(logs)
