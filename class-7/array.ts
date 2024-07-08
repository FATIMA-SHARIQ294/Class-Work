function runprogram(){
// simple array example typescrip

const cart: string[] = ["Rice", "Wheat", "Oil"]; 
 
  console.log(cart);

console.log("-----------------------");


// simple array example typescript different syntax
const myContacts: Array<string> = [
    "Fatima",
    "Shariq",
    "Ali"
];

 console.log(myContacts,);

console.log("-----------------------");

//  0     1       2
const myLunchbox: Array<string> = ["Rice", "Chicken","Cury"];
 console.log("Here is my cart first element:", myLunchbox[0]); // this syntax get the element mylunchbox[index]

 console.log("Before changing", myLunchbox);

 myLunchbox[2] = "Daal makhni"; // this syntax change the element
 myLunchbox[3] = "cup cake"; //this syntax add element  in array

 console.log("after changing", myLunchbox);

 console.log("------------------------");


 console.log("lenght of mylunchbox", myLunchbox.length);
 
 console.log("-------------------------");
 
 myLunchbox.push("samosa"); // this adds an element in teh syntax
 console.log(myLunchbox);
 
 myLunchbox.pop(); //this syntax remove element in an array
 console.log(myLunchbox);

console.log("-------------------------");
const names: string[] = [];
 names.push("ALI");
 console.log(names);
//  names.push(89), Argument of type 'number' is not assignable to parameter of type 'string'
 
const myWifes: readonly string[] = ["wife1", "wife2"];
// myWifes.push("wife3"); Property 'push' does not exist on type 'readonly string[]'.
// myWifes[3] ="wife3"; Index signature in type 'readonly string[]' only permits reading.
 console.log(myWifes);
}