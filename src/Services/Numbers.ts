import axios from "axios"

export const getNumberInfo = async (number: string) => {
	try {
		const res = await axios.get(`http://qa-qa-api-backend.staging.qiwi.com/account/${number}`)
		return res.data
	} catch (error) {
		console.log(error);
	}
}