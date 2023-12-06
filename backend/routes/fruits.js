const router = require('express').Router()
const Fruit = require('../model/fruitModel')
const auth = require('../middleware/auth')

router.get('/', (req, res) => {
  Fruit.find()
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json('Error: ' + err))
});

router.get('/:id', (req, res) => {
  Fruit.findById(req.params.id)
    .then((fruit) => res.json(fruit))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
  const newFruit = new Fruit({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    nic: req.body.nic,
    description: req.body.description
  })

   console.log(newFruit);
  newFruit
    .save()
    .then((fruit) => res.json('Customer Details Added'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.delete('/:id', (req, res) => {
  Fruit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer Details deleted'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.put('/:id', (req, res) => {
  Fruit.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then(() => res.json('Fruit Details updated'))
    .catch((err) => res.status(400).json('Error: ' + err));
})

module.exports = router
