const mongoose = require('./base');

// override so it creates within the "movies" db, a collection
// called "person" (not "people" which is what mongo creates automatically)
const PersonSchema = mongoose.Schema({
  firstName: String,
  lastName: String
}, { collection: "person" });

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person
