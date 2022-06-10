const express = require("express");

const app = express();

const axios = require("axios");
app.use(express.json());

const cors = require("cors");

app.use(cors());

require("dotenv").config();

const port = process.env.PORT || 5001;

app.get("/getPrediction", (req, res) => {
  axios
    .get(
      `http://localhost:5000/api/getPrediction/?stock=${req.query.company}&duration=${req.query.duration}`
    )
    .then((resp) => {
      res.status(200).json({ result: resp.data.output });
    })
    .catch((err) =>
      res.status(500).json({
        error: err,
        company: req.query.company,
        duration: req.query.duration,
      })
    );
});

app.listen(port, () => {
  console.log(`The Server is listening to Port- ${port}`);
});
