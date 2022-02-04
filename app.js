import fs from 'fs'
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.type('html')
  let fileContents = fs.readFileSync("index.html")
  res.send(fileContents)
})

app.get('/style.css', (req, res) => {
  res.type('css')
  let fileContents = fs.readFileSync("style.css")
  res.send(fileContents)
})

app.get('/index.js', (req, res) => {
  res.type('js')
  let fileContents = fs.readFileSync("index.js")
  res.send(fileContents)
})

app.get('/feature1', (req, res) => {
  res.type('html')
  let fileContents = fs.readFileSync("feature1.html")
  res.send(fileContents)
})

app.get('/feature2', (req, res) => {
  res.type('html')
  let fileContents = fs.readFileSync("feature2.html")
  res.send(fileContents)
})

app.get('/feature3', (req, res) => {
  res.type('html')
  let fileContents = fs.readFileSync("feature3.html")
  res.send(fileContents)
})

app.get('/feature4', (req, res) => {
  res.type('html')
  let fileContents = fs.readFileSync("feature4.html")
  res.send(fileContents)
})

app.listen(3030, () => {
  console.log('Example app listening at http://localhost:3030')
})