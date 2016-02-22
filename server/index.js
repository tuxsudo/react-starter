import express from 'express';
import path from 'path';
import compression from 'compression';
import reactHandler from './react-handler';
import helmet from 'helmet';

// create express app...
export const app = express();

// middleware
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public'), {index: false}));

// handle routes via react...
app.get('*', reactHandler);

// handle any errors
app.use( (err, req, res, next) => { // eslint-disable-line
    res.status(err.status||500).send("Application Error");
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Running on port ' + PORT)); // eslint-disable-line
