import axios from "axios"

export const getNumberInfo = async (number: string) => {
	const res = await axios.get(`http://qa-qa-api-backend.staging.qiwi.com/account/${number}`)
	//console.log(res.data);
	return res.data
}

// export default getNumberInfo