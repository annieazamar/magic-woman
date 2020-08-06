/*
Write a program that prints the first n elements of an array.
*/

let names = ['Nathan', 'Nick', 'Nichard', 'Natalie'];

console.log(names, names.length);
console.log(names[0]);


/*
Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append (add) “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
Console.log every step of the way
*/

let music = ['Jazz', "Blues"];
console.log(music);
music.push('Rock-n-Roll');
console.log(music);
music[1] = 'Classics';
console.log(music);
music.shift;
console.log(music);
music.unshift('Rap', 'Reggae');
console.log(music);

/*
Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. (This one is a bit tricky and you will need to look it up).
Console log every step of the way.
*/

// //let FabUser = {
//     name: "Fab John",
//     surname: "Smith"

// };
// console.log(FabUser);
// console.log(FabUser["name"]);
// delete FabUser.name
// console.log(FabUser);
// FabUser['name'] = 'Pete';
// //console.log(FabUser);