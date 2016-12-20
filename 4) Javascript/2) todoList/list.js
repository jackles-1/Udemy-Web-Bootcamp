var todoArray = [];
var answer = prompt("What would you like to do?");

while (answer !== "quit")
{
	if (answer === "new")
	{
		addTodo();
	}
	else if (answer === "print")
	{
		printTodo();
	}
	else if (answer === "delete")
	{
		deleteTodo();
	}
	else 	{
		alert ("That value is invalid.");
	}

	answer = prompt("What would you like to do?");
}

console.log("Ok, you quit the app.");

// Function Definitions
function addTodo()
{
	var newTodo = prompt("Enter new todo");
	todoArray.push(newTodo);
	console.log(newTodo + " was added to the list.\n*****************");
}
function printTodo()
{
	todoArray.forEach(function(todo, i)
	{
		console.log(i + ": " + todo);
	});
	console.log("*****************");
}
function deleteTodo()
{
	var d = prompt("Enter an index of Todo to delete");
	todoArray.splice(d, 1);
	console.log("Todo removed\n*****************");
}