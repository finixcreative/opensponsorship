var user = false;
function userSignIn(){
	user = !user;
};
function messageCheck(){
	var chat = function(){
		// return chat popup
		prompt("Enter your message:", "\"I'm gonna make him an offer he can't refuse.\"");
	};
	var login = function(){
		// return login popup
		prompt("You must be signed in to use this feature. If you have an account, enter your username:", "Don Corleone");
		prompt("Thank you. Now enter your password:", "godfather123");
	};
	if(user !== false){ //user authentication check
		chat();
	} else {
		login();
	};
};