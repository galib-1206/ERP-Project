// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// const sequelize = new Sequelize('postgres://user:password@localhost:5432/erpdb');

// Connect to the database
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// const CAMUNDA_URL = 'http://localhost:8080/engine-rest';

// Define API endpoints
// app.post('/start-workflow', async (req, res) => {
//   const { workflowKey, variables } = req.body;
//   try {
//     const response = await axios.post(`${CAMUNDA_URL}/process-definition/key/${workflowKey}/start`, {
//       variables: Object.fromEntries(Object.entries(variables).map(([key, value]) => [key, { value }])),
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
