var todos = [];

var input = prompt("what do you do?");

while(input !== "quit"){
	if(input === "list"){
		ListTodos();
	}else if(input === "new"){
		addTodos();
	}else if(input === "delete") {
		deleteTodos();
	}
	var input = prompt("what do you do?");
}
console.log("ok, you quit")

function ListTodos(){		//no parameter, todos is global var
	console.log("******");
	todos.forEach(function(todo, i){	//second parameter is index
		console.log(i+": "+todo);
	});
	console.log("******");
}

function addTodos() {
	var newtodo = prompt("new action?");
	todos.push(newtodo);
}

function deleteTodos() {
	var deleted = prompt("what to be deleted?");
	var index = todos.indexOf(deleted);
	todos.splice(index, 1);
	// how many you want to remove
}
// Semicolons are not required for JavaScript programming, 
// nevertheless I advice you to use it. It makes your code more readable and is actually a good practice, 
// and almost all cool programming languages uses it.