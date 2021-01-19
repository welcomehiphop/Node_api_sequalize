const db = require('../config/db.config.js');
const Customer = db.customers;
const { Op } = require("sequelize");
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Customer.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age
  }).then(customer => {    
    // Send created customer to client
    res.send(customer);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  const match = {}
  if(req.query.age){
    match.age = req.query.age 
  }
  if(req.query.lastname){
    match.lastname = req.query.lastname
  }

  Customer.findAll({
     where: {
      [Op.and]: match
    } 
  }).then(customers => {
    // Send all customers to Client
    res.send(customers);
  });
};
 
// Find a Customer by Id
exports.findByPk = (req, res) => {  
  Customer.findByPk(req.params.customerId).then(customer => {
    res.send(customer);
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
           { where: {id: req.params.customerId} }
           ).then(() => {
           res.status(200).send("updated successfully a customer with id = " + id);
           });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};