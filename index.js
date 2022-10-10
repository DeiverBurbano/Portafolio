const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', __dirname+'/view')

app.get('/', (req, res) => {
  //res.send('Pagina principal')
  res.render('index')
  console.log(__dirname)
})

app.get('/educacion', (req, res) => {
  res.render('educacion'),
  {
    titulo: "seccion de educacion",
    descripcion: "Aquí enocntráras mi formación académica"
  }
})

app.get('/exp', (req, res) => {
  res.send('Pagina de experiencia laboral')
})

app.get('/inf', (req, res) => {
  res.send('Pagina de información personal')
})

app.get('/hab', (req, res) => {
  res.send('Pagina de habilidades')
})

app.use((req, resp, next)=>{
  resp.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
  console.log(`Acceda al servidorhaciendo click aqui http://localhost:${port}`)
})
