import axios, { AxiosError } from "axios"

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