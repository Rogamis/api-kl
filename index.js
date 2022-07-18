import express  from "express";
import {Teams} from "./APIKrivbassLions/Teams.js";
import { MassMedia } from "./APIKrivbassLions/MassMedia.js";
import { krivbassLions } from "./APIKrivbassLions/KrivbassLions.js";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.static(path.resolve(path.resolve(), "static")));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({krivbassLions});
})

app.get("/team", (req, res) => {
  res.status(200).send({ Teams });
});

app.get("/MassMedia", (req ,res) => {
  res.status(200).send({MassMedia});
});

app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
)
