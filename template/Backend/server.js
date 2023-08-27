const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const custRouter = require('./routes/CustomerRoute');
const iNameRouter = require('./routes/INameRoute');
const IMasterRouter = require('./routes/IMasterRoute');
const CustOrdFormRouter = require('./routes/CustOrdRoute');
const GSORoute = require('./routes/GSORoute');
const GSIRoute = require('./routes/GSIRoute')
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("HTTP METHOD - " + req.method + ", URL - " + req.url);
    next();
});


app.use('/customers', custRouter);
app.use('/iname', iNameRouter);
app.use('/itemMasters', IMasterRouter);
app.use('/CustomerOrderForm', CustOrdFormRouter)
app.use('/GSO', GSORoute)
app.use('/GSI', GSIRoute);


app.get('/', (req, res) => {
    res.send("hello");

});


mongoose.connect('mongodb+srv://Admin:H7n9WjX0lKEJGfHK@jewellerystorecluster.aytum4q.mongodb.net/realElDorado')
    .then(() => {
        app.listen(4000, () => {
            console.log("Connected to DB successfully & Listening on port 4000");
        });
    })
    .catch((error) => {
        console.log("the error is: " + error);
    })
