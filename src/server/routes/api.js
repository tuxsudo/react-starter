import express from 'express';
import cors from 'cors';

export const router = express.Router();

router.get('/nav', cors(), (req, res) => {
    res.send([
        {
            "href": "/",
            "text": "Home"
        },
        {
            "href": "/demo",
            "text": "Demo"
        }
    ]);
});

router.get('/people', cors(), (req, res) => {
    res.send([
        "Jared",
        "Sara",
        "Elijah",
        "Xander",
        "Maxwell",
        "Amelia",
        "Ivy",
        "Jennie",
        "Stephanie",
        "Hillary",
        "Cameron",
        "Carey",
        "Ashlee",
        "Alyssa",
        "Tom",
        "Lynn",
        "Ross",
        "Danette",
        "Claigh",
        "Wendy"
    ]);
});



export default router;
