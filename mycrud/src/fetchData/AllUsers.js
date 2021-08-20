
import { useState, useEffect } from "react"

export default function FetchAllUser() {
	console.log("prima vlt")
	useEffect(() => {

		const getApi = () => {
			fetch('http://localhost:5000')
				.then(response => response.json())
				.then((data) => {
					console.log(data)
					setApiData(data);
				});
		}

		getApi()
	}, []);
	const [apiData, setApiData] = useState([]);

	return apiData
}
