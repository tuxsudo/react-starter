import 'dotenv/config';
import express from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';


// the reactified route-handler from the `app`
import reactHandler from '../app/_server.js';

// create express app...
export const app = express();

// middleware
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'static'), {index: false}));

// handle routes via react...
app.get('*', reactHandler);

// handle any errors
app.use( (err, req, res, next) => { // eslint-disable-line
    res.status(err.status||500).send("Application Error");
    console.error(err.status===404?`404 ${req.url}`: err.stack); // eslint-disable-line
});

const { PORT } = process.env;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
