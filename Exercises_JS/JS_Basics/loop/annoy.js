var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	// not equal is !==
	answer = prompt("are we there yet?");
}
// while(answer !== "yes") {
// 	// not equal is !==
// 	answer = prompt("are we there yet?");
// }
alert("we made it!");
