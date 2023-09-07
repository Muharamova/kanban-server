const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const dbConnect = require("./src/core/dbConnection");
const routes = require('./src/core/routes')
const cors = require('./src/core/cors')
dbConnect();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
cors(app)
routes(app)
// let cards = [
//     {
//         id: '1',
//         name: 'firstCard',
//         status: 'to do',
//         priority: 1
//     },
//     {
//         id: '2',
//         name: 'secondCard',
//         status: 'test',
//         priority: 2
//     },
//     {
//         id: '3',
//         name: 'thirdCard',
//         status: 'in review',
//         priority: 3
//     }
// ]
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/card',(req, res) => {
//     res.send(cards)
// })
// app.delete('/card/:cardId',(req,res) =>{
//     const cardId = req.params.cardId
//     cards = cards.filter(el => el.id !== cardId)
//     res.send(cards)
// })
//
// app.post('/card', (req, res) =>{
//     const card = req.body;
//     cards.push({id:Math.random().toString(), ...card})
//     res.send('New card has been created')
//     })
// // app.patch('card/:cardId',(req, res) => {
// //     const cardId = req.params.cardId;
// //     const card= req.body;
// //     cards = cards.map(el => el.id === cardId ? ({...card, id:el.id}) : el);
// //     res.send('Card has been updated')
// // })
// app.patch('/card/:cardId', (req, res) => {
//     const cardId = req.params.cardId;
//     const updatedStatus = req.body.status;// статус пишем в теле запроса(body)
//     const cardToUpdate = cards.find(el => el.id === cardId);
//     if(cardToUpdated){
//         cardToUpdate.status = updatedStatus
//         res.send('Card status updated')
//     } else {
//         res.status(404).send('Card not found')
//     }
// })
// nodemon
// debuger
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://Admin:R4dmHscpn1M51t7e@cluster0.slhycaz.mongodb.net/
