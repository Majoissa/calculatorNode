const express = require("express");
const app = express();

//midleware logger que registra en la consola cada request que se hace
const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

//ejemplo del video con QUERY PARAMETERS
app.get("/watch", (req, res) => {
  const video = req.query.v;
  console.log("The user request the video ID " + video);
  res.send("The user request the video ID  " + video);
});

//primera parte de la calculadora CON QUERY PARAMETERS
app.get("/add", (req, res) => {
  const value1 = parseFloat(req.query.value1);
  const value2 = parseFloat(req.query.value2);
  const result = value1 + value2;
  res.send(`Resultado suma= ${result}`);
});

app.get("/substract", (req, res) => {
  const value1 = parseFloat(req.query.value1);
  const value2 = parseFloat(req.query.value2);
  const result = value1 - value2;
  res.send(`Resultado resta= ${result}`);
});

app.get("/multiply", (req, res) => {
  const value1 = parseFloat(req.query.value1);
  const value2 = parseFloat(req.query.value2);
  const result = value1 * value2;
  res.send(`Resultado multiplicación= ${result}`);
});

app.get("/divide", (req, res) => {
  const value1 = parseFloat(req.query.value1);
  const value2 = parseFloat(req.query.value2);
  const result = value1 / value2;
  res.send(`Resultado división= ${result}`);
});

//parte de 2 de la calculadora CON PARAMS
app.get("/add/:value1/:value2", (req, res) => {
  const value1 = parseFloat(req.params.value1);
  const value2 = parseFloat(req.params.value2);
  const result = value1 + value2;
  res.send(`Resultado suma= ${result}`);
});

app.get("/substract/:value1/:value2", (req, res) => {
  const value1 = parseFloat(req.params.value1);
  const value2 = parseFloat(req.params.value2);
  const result = value1 - value2;
  res.send(`Resultado resta= ${result}`);
});

app.get("/multiply/:value1/:value2", (req, res) => {
  const value1 = parseFloat(req.params.value1);
  const value2 = parseFloat(req.params.value2);
  const result = value1 * value2;
  res.send(`Resultado multiplicación= ${result}`);
});

app.get("/divide/:value1/:value2", (req, res) => {
  const value1 = parseFloat(req.params.value1);
  const value2 = parseFloat(req.params.value2);
  const result = value1 / value2;
  res.send(`Resultado división= ${result}`);
});

app.listen(3000, () => console.log("Server is up and running"));
