
function ShowAllUserv2(userName, password, apiData) {
	console.log("Check->", userName, password)
	console.log("ApiData->", apiData)

	// Controls on inputs credentials
	apiData.forEach(user => {
		if (userName === user.username) {
			// username exist in the database

			// so now we have to control if the password match
			if (password === user.password) {
				console.log("you are now logged")
				// TODO create another page
			}

		}
	});

}

export default ShowAllUserv2