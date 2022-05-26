import axios, { AxiosError } from "axios"
import e from "express"

export const getNumberInfo = async (number: string) => {
	try {
		const res = await axios.get(`http://qa-qa-api-backend.staging.qiwi.com/account/${number}`)
		return {
			code: 200,
			data: res.data
		}
	} catch (error: AxiosError | any) {
		return {
			code: error.response.status,
			data: { errorMessage: error.response.data.description }
		}
	}
}

export const getRoleInfo = async (number: string) => {
	try {
		const res = await axios.get(`http://qa-qa-api-backend.staging.qiwi.com/account/${number}/role`)
		return {
			code: 200,
			data: res.data
		}
	} catch (error: AxiosError | any) {
		return {
			code: error.response.status,
			data: { errorMessage: error.response.data.description }
		}
	}
}

export const getUser = async () => {
	try {
		const res = await axios.post(`http://qa-qa-api-backend.staging.qiwi.com/testpools/accounts/rent?ptpId=845&expireSeconds=1800`,

			{}, {
			headers: {
				"Accept": "application/json",
				"from-client": "Swagger UI"
			}
		}
		)
		return {
			code: 200,
			data: res.data
		}
	} catch (error: AxiosError | any) {
		console.log(error.response.data);
		return {
			code: error.response.status,
			data: { errorMessage: error.response.data.description }
		}
	}
}