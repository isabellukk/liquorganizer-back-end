const express = require('express')
const router = express.Router()
const Bottle = require('../models/bottle.js')


router.get('/', async (req, res) => {
  try {
    const foundBottles = await Bottle.find();
    res.status(200).json(foundBottles)
  } catch(err){
    res.status(400).json({ error: err.message })
  }
})


router.get('/:id', async (req, res) => {
  try {
    const foundBottles = await Bottle.findById(req.params.id);
    res.status(200).json(foundBottles)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})



router.post('/', async (req, res) => {
  try {
    const newBottle = await Bottle.create(req.body);
    res.status(200).json(newBottle)
  } catch(err) {
    res.status(400).json({
      error: err.message
    })
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const deletedBottle = await Bottle.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedBottle)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedBottle = await Bottle.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedBottle)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
