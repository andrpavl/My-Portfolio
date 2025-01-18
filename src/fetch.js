import axios from "axios";

export const fetchQuote = () => {
	const resp = axios.get(
		"https://api.api-ninjas.com/v1/quotes",
		{
			headers: { "X-Api-Key": "0s22dPXcN+SCoLflRiqluA==UXhoS9QLPs689AOw" },
		}
	);
	return resp;
};
