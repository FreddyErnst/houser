module.exports = {
    getHouses: (req,res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_houses()
    .then(houses => res.status(200).json(houses))
    .catch(err => {
        console.log(err)
    })
    },

    addHouse: (req,res) => {
        const {name, address, city, state, zip} = req.body
        const dbInstance = req.app.get('db')
        dbInstance.add_house([name, address, city, state, zip])
        .then (() => {
            res.status("All Good")
        })
    },

    deleteHouse: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_house(id)
        .then(() => res.sendStatus(200))
    }
}