import React, { Fragment, useState, useEffect } from 'react';
//TODO handle username and password


const Check = (userName, password) => {

	console.log("Check->", userName, password)

	//TODO CHECK ON DATABASE IF THE USER EXIST
	/*
	useEffect(() => {
		const getAPI = () => {
			// Change this endpoint to whatever local or online address you have
			// Local PostgreSQL Database
			const API = 'http://localhost:5000/';

			fetch(API)
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setApiData(data);
				});
		};
		getAPI();
	}, []);
	const [apiData, setApiData] = useState([])

	apiData.map((utenti) => {
		var DB_userName = utenti.userName
		var DB_password = utenti.password
		console.log(DB_userName, DB_password)
	})

	return (
		<h1>LOGn</h1>
	)
		// andare a vedere se nel database la login e la password sono presenti e corrette
		*/
}

export default Check