const policyholders = []; // In-memory storage for policyholders

class Policyholder {
  constructor(id, name, age, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  static createPolicyholder(name, age, email) {
    const id = policyholders.length + 1;
    const newPolicyholder = new Policyholder(id, name, age, email);
    policyholders.push(newPolicyholder);
    return newPolicyholder;
  }

  static getAllPolicyholders() {
    return policyholders;
  }

  static getPolicyholderById(id) {
    return policyholders.find(p => p.id === (Number)(id));
  }

  static updatePolicyholder(id, updatedData) {
    const policyholder = policyholders.find(p => p.id === Number(id));
    
    if (!policyholder) {
      return null;
    }

    
    if (updatedData.age !== undefined && updatedData.age < 18) {
      return { error: "Age should be 18 or above" };
    }

    //  Update fields only if provided
    if (updatedData.name !== undefined) policyholder.name = updatedData.name;
    if (updatedData.age !== undefined) policyholder.age = updatedData.age;
    if (updatedData.email !== undefined) policyholder.email = updatedData.email;

    return policyholder;
  }

  static deletePolicyholder(id) {
    const index = policyholders.findIndex(p => p.id === id);
    if (index !== -1) {
      return policyholders.splice(index, 1);
    }
    return null;
  }
}

module.exports = Policyholder;
