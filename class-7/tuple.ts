function runprogram(){
// create tuples
let ourTuple: [ number, boolean, string] = [5, false, 'coding God was here']

// we have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);
}