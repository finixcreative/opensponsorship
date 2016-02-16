var user = false;

var message = prompt("Enter your message:", "\"I'm gonna make him an offer he can't refuse.\"");
var username = prompt("You must be signed in to use this feature. If you have an account, enter your username:", "Don Corleone");
var password = prompt("Thank you. Now enter your password:", "godfather123");

function userSignIn(){
	user = !user;
};

function messageCheck(){
	var chat = function(){
		// return chat popup
		message;
	};
	var login = function(){
		// return login popup
		username;
		password;
		if(username !== null && password !== null){
			user = true;
		} else {
			user = false;
		}
	};
	if(user !== false){ //user authentication check
		chat();
	} else {
		login();
	};
};