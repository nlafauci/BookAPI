const router = require('express').Router()
const Book = require('../models/books')

router.get("/", (req, res) => {
    Book.find()
      .then((books) => {
        res.json(books)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ error: "Error retrieving books from database" })
      })
  })

  router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
      .then((book) => {
        if (!book) {
          res.status(404).json({ error: "Book not found" })
        } else {
          res.json(book)
        }
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ error: "Error retrieving book from database" })
      })
  })
  
 router.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})



module.exports = router