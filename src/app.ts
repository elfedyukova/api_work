require('dotenv').config()

import express from 'express'
import compression from 'compression'
import cors from 'cors'
import {getNumberInfo} from './Services/Numbers';

const app = express()

app.use(compression())
app.use(cors())

app.get('/', function (req, res) {
	res.json({})
})

app.get('/number', async function (req, res) {
	const response = await getNumberInfo(req.query.number.toString())
	res.json(response);
})

app.listen(4000, () => console.log('App listening on port 4000!'))