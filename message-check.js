var user = {
	isSignedIn: ko.observable(false),
	message: prompt("Enter your message:", "\"I'm gonna make him an offer he can't refuse.\""),
	username: prompt("You must be signed in to use this feature. If you have an account, enter your username:", "Don Corleone"),
	password: prompt("Thank you. Now enter your password:", "godfather123")
};

function userSignIn(){
	user.isSignedIn = !user.isSignedIn;
};

function messageCheck(){
	var chat = function(){
		// return chat popup
		user.message;
	};
	var login = function(){
		// return login popup
		user.username;
		user.password;
		if(user.username !== null && user.password !== null){
			user.isSignedIn = true;
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