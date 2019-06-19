const { displayAnimals } = require('../database/queries/animal_queries');

// In this function I am creating an array to hold the names of the
// animals that are taken from the animal table in the database.
const animals = [];
displayAnimals((err, result) => {
  if (err) cb(err);
  result.forEach(val => {
    animals.push(Object.values(val)[0]);
  });
});

module.exports = { animals };
