module.exports = function(app) {
 
    const customers = require('../controllers/customer.controller');
 
    // Create a new Customer
    app.post('/api/customers', customers.create);
    
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', customers.findByPk);
 
    // Update a Customer with Id
    app.put('/api/customers/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
}