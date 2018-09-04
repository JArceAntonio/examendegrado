var express = require('express')
var bodyParser = require('body-parser')
const {Client} = require('pg')
var app = express()
var AWS  = require('aws-sdk')
// Crear un archivo config.json y colocar las credenciales de Amazon web services
AWS.config.loadFromPath('./config.json')

var sns = new AWS.SNS();

const connectionData = {
    user: 'odoo',
    host: '35.237.15.133',
    database: 'odoodb',
    password: 'odoo',
    port: 5432
}
const client = new Client(connectionData)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});
client.connect() 

app.get('/clientes',(req, res) => {
    client.query('SELECT * FROM res_partner')
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
             
        })
})

app.get('/hotel-floor',(req, res) => {
     
    client.query(`SELECT * FROM hotel_floor`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-folio',(req, res) => {
     
    client.query(`SELECT * FROM hotel_folio`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-folio-line',(req, res) => {
     
    client.query(`SELECT * FROM hotel_folio_line`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-floor',(req, res) => {
     
    client.query(`SELECT * FROM hotel_floor`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-room',(req, res) => {
     
    client.query(`SELECT * FROM hotel_room`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-room-amenities',(req, res) => { 
    client.query(`SELECT * FROM hotel_room_amenities`)
        .then(response => {
            let result = response.rows 
            res.json(result)
        })
        .catch(err => { 
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-room-amenities-type',(req, res) => {
     
    client.query(`SELECT * FROM hotel_room_amenities_type`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-room-type',(req, res) => {
     
    client.query(`SELECT * FROM hotel_room_type`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-service-line',(req, res) => {
     
    client.query(`SELECT * FROM hotel_service_line`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-service-type',(req, res) => {
     
    client.query(`SELECT * FROM hotel_service_type`)
        .then(response => {
            let result = response.rows
             
            res.json(result)
        })
        .catch(err => {
             
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/hotel-services',(req, res) => {
     
    client.query(`SELECT * FROM hotel_services`)
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/folio-room-line',(req, res) => {
     
    client.query(`SELECT * FROM folio_room_line`)
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
        })
})


app.get('/sale-order-line',(req, res) => {
     
    client.query(`SELECT * FROM sale_order_line`)
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/product-template',(req, res) => {
     
    client.query(`SELECT * FROM product_template`)
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.get('/ofertas',(req, res) => {
     
    client.query(`SELECT * FROM x_oferta`)
        .then(response => {
            let result = response.rows
            res.json(result)
        })
        .catch(err => {
            res.json({errorCode: 500, message: 'Server Error'})
        })
})

app.post('/sms', (req, res) => {
    let sms = '+591'+req.body.tituloSms
    let message = req.body.message
    var params = {
        Message: message, /* required */
        PhoneNumber: sms,
        Subject: sms,
    };
    sns.publish(params, (err, data) => {
        res.json({error: {...err}, data: {...data}})
    })

})

app.listen(3000, () => {
    console.log('El servidor esta inicializado en el puerto 3000')
})