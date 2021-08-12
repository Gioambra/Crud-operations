import React, { useState, useEffect } from 'react';
export default function ShowAllUSer() {
	// Here we call API
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
	console.log("APIDATA->", apiData)
	return (
		<div id="parent">
			{apiData.map((utente, index) => {
				return (<div key={index} ><h1>{utente.username}</h1> <h1>{utente.password}</h1> </div>)
			})
			}
		</div>
	)
}
