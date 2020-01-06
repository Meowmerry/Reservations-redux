module.exports = (app, db) => {
    app.get('/restaurant-lists', (req, res) => { 
        db.RestaurantList.findAll()
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            console.log({ err })
            res.status(400).json()
        })
    })
   
    app.post('/restaurant-list', (req, res) => {
        db.RestaurantList.findAll()
        name = req.body.name
        image = req.body.image
        description = req.body.description
        db.restaurant.create({ 
            name : req.body.name,
            image : req.body.image,
            description : req.body.description
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log({ err })
            res.status(404).json({ ErrorMessage : err.message})
        })
    })

}