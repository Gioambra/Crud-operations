function ShowAllUserv2(userName, password, apiData) {
	console.log("Check->", userName, password)
	console.log("ApiData->", apiData)
	// By default is set on /Login route
	var token = "/Login"
	// Controls on inputs credentials
	apiData.forEach(user => {
		if (userName === user.username) {
			// username exist in the database

			// so now we have to control if the password match
			if (password === user.password) {
				console.log("you are now logged")
				// TODO create another page
				token = "/Home"
			}
			else {
				token = "/Login"
			}
		}
	});
	console.log("password is ->", token)
	return token
}

export default ShowAllUserv2