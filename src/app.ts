require('dotenv').config()

import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { getNumberInfo, getRoleInfo, getUser } from './Services/Numbers';

const app = express()

app.use(compression())
app.use(cors())

app.get('/', function (req, res) {
	res.json({})
})

app.get('/number', async function (req, res) {
	try {
		const response = await getNumberInfo(req.query.number.toString())
		if (response.code !== 200) {
			res.status(404);
		}
		res.json(response.data);
	} catch (error) {
		res.status(404);
		res.json({})
	}
})

app.get('/number/:number/role', async function (req, res) {
	//:number 
	try {
		const response = await getRoleInfo(req.params.number.toString())
		if (response.code !== 200) {
			res.status(404);
		}
		res.json(response.data);
	} catch (error) {
		res.status(404);
		res.json({})
	}
})

app.get('/rent', async function (req, res) {
	//:number 
	try {
		const response = await getUser()
		if (response.code !== 200) {
			res.status(404);
		}
		res.json(response.data);
	} catch (error) {
		res.status(404);
		res.json({})
	}
})

app.listen(4000, () => console.log('App listening on port 4000!'))