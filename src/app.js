const express = require('express');
// const bodyParser = require('body-parser');
const claimRoutes = require('./routes/claimRoutes');
const policyRoutes = require('./routes/policyRoutes');
const policyholderRoutes = require('./routes/policyholderRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/claims', claimRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/policyholders', policyholderRoutes);

module.exports = app;
