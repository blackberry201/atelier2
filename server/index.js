require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const multiparty = require('multiparty');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;
const gitToken = process.env.GIT_API_TOKEN;

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(servingPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log('ENV', process.env.NODE_ENV);
  // console.log('GIT', gitToken);
  console.log(`Listening on port http://localhost:${port}`);
});
