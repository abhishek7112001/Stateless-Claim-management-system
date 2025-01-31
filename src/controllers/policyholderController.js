const Policyholder = require('../models/policyholderModel');

exports.createPolicyholder = (req, res) => {
  const { name, age, email } = req.body;
  const newPolicyholder = Policyholder.createPolicyholder(name, age, email);
  res.status(201).json(newPolicyholder);
};

exports.getPolicyholderById = (req, res) => {
    const policyholderId = Number(req.params.id); // Convert to number
    const policyholder = Policyholder.getPolicyholderById(policyholderId);
    
    if (!policyholder) {
        return res.status(404).json({ message: "Policyholder not found" });
    }

    res.json(policyholder);
};

exports.getAllPolicyholders = (req, res) => {
  res.json(Policyholder.getAllPolicyholders());
};

exports.deletePolicyholder = (req, res) => {
  const { id } = req.params;
  const deleted = Policyholder.deletePolicyholder(Number(id));
  if (deleted) res.json({ message: 'Policyholder deleted' });
  else res.status(404).json({ message: 'Policyholder not found' });
};
