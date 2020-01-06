module.exports = (app, db) => {
    app.get('/restaurants', (req, res) => { 
        db.restaurant.findAll()
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            console.log({ err })
            res.status(400).json()
        })
    })
   
    app.post('/restaurant', (req, res) => {
        db.restaurant.findAll()
        name = req.body.name
        email = req.body.email
        restaurantName = req.body.restaurantName
        phoneNumber = req.body.phoneNumber
        country = req.body.country
        city = req.body.city
        db.restaurant.create({ 
            name: name,
            email: email,
            restaurantName: restaurantName,
            phoneNumber: phoneNumber,
            country: country,
            city: city,

        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log({ err })
            res.status(404).json({ ErrorMessage : err.message})
        })
    })
    app.put("/restaurant/id" , (req,res) => {
        db.restaurant.update(
            {
                name : req.body.name,
                email : req.body.email,
                restaurantName : req.body.restaurantName,
                phoneNumber : req.body.phoneNumber,
                country : req.body.country,
                city : req.body.city,
            },
            {
                where : {id: req.params.id }
            }      
        ).then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json()
        })
        })
        app.delete("/body/:id", (req,res) => {
            db.restaurant.destroy({
                where: { id: req.params.id}
            })
            .then((result) =>{
                res.status(204).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
        })


}