var user = {
	isSignedIn: false
};

function userSignIn(){
	user.isSignedIn = !user.isSignedIn;
};

function messageCheck(){
	function chat(){
		// return chat popup
		user.message = prompt("Enter your message:", "\"I'm gonna make him an offer he can't refuse.\"");

	};
	function login(){
		// return login popup
		user.username = prompt("You must be signed in to use this feature. If you have an account, enter your username:", "Don Corleone");
		user.password = prompt("Thank you. Now enter your password:", "godfather123");
		if(user.username !== "" && user.password !== ""){
			user.isSignedIn = true;
			document.getElementById("login").checked = true;
		} else {
			user.isSignedIn = false;
		}
	};
	if(user.isSignedIn !== false){ //user authentication check
		chat();
	} else {
		login();
	};
};