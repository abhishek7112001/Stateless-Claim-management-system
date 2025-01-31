const Policy = require('../models/policyModel');

exports.createPolicy = (req, res) => {
  const { policyholderId, type, amount } = req.body;
  const newPolicy = Policy.createPolicy(policyholderId, type, amount);
  res.status(201).json(newPolicy);
};

exports.getAllPolicies = (req, res) => {
  res.json(Policy.getAllPolicies());
};

exports.deletePolicy = (req, res) => {
  const { id } = req.params;
  const deleted = Policy.deletePolicy(Number(id));
  if (deleted) res.json({ message: 'Policy deleted' });
  else res.status(404).json({ message: 'Policy not found' });
};
