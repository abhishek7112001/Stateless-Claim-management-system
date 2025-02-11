const Policy = require('../models/policyModel');
const Policyholder = require('../models/policyholderModel'); // to check that policyholder exists or not 

exports.createPolicy = (req, res) => {
  const { policyholderId, type, amount } = req.body;

  // 🔍 Validate if policyholderId exists
  const existingPolicyholder = Policyholder.getPolicyholderById(Number(policyholderId));

  if (!existingPolicyholder) {
    return res.status(400).json({ message: "Invalid policyholder ID. Policyholder does not exist." });
  }

  const newPolicy = Policy.createPolicy(policyholderId, type, amount);
  res.status(201).json(newPolicy);
};


exports.getAllPolicies = (req, res) => {
  res.json(Policy.getAllPolicies());
};


exports.getPolicyById = (req, res) => {
  const { id } = req.params;
  const policy = Policy.getPolicyById(Number(id));

  if (!policy) {
    return res.status(404).json({ message: "Policy not found" });
  }

  res.json(policy);
};

exports.deletePolicy = (req, res) => {
  const { id } = req.params;
  const deleted = Policy.deletePolicy(Number(id));
  if (deleted) res.json({ message: 'Policy deleted' });
  else res.status(404).json({ message: 'Policy not found' });
};
