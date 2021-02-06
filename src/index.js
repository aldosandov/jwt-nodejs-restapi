import express from "express";
import morgan from "morgan";

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2);
// app.use(bodyParser.json())

// Middlewares
app.use(morgan('dev'));

// Starting the server. 
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});