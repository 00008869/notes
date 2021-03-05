const express = require('express')
const app = express()

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
	res.render('home')
})

app.set('view engine', 'pug')

app.listen(8000, err =>{
	if (err) throw err

	console.log("App is running ....")
})