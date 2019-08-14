const express = require('express');
const _ = require('lodash');
const foods = require('../menu.json');


const { food } = foods;
const router = express.Router();

// "Database"
const order = [];

router.get('/', (req, res) => {
  res.status(200).json(food);
});

router.get('/cuisine/:c', (req, res) => {
  const result = _.filter(food, (o) => o.cuisine === req.params.c);
  res.status(200).json(result);
});

router.get('/order/:id', (req, res) => {
  res.status(200).json(order);
});

router.post('/order/:id', (req, res) => {
  order.concat(order, req.body);
  res.status(201);
});

module.exports = router;
