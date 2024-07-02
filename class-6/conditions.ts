
// 1.simple if else example
    let ClassDay: string = "Wednesday";

    if (ClassDay === "Wednesday") {

        console.log("Go to class");
    } else {

        console.log("Do nothing, sleep, and have a nice day");
    }



//  create variables
let homeFood : string = "DaalChawal";
let moneyIHave :  number = 100; /// change this value to 300 for biryani or 350 or higher for zinger
let zingerPrice: number = 350;


//2. this is an example of if else condition
 if (homeFood === "DaalChawal" && moneyIHave === 300) {//this code will execute if above condition is true.
 
 console.log("Go out and buy biryani"); 
  
 } else if (moneyIHave >= zingerPrice){ //this code will execute if the above condition is false 
 
    console.log("Buy zinger");
    
 } else { // this code will execute if  both condition are false 

    console.log("Eat Daalchawal");
    
 }
 

// 3. switch example
let weekDayNumber: number = 5;


switch(weekDayNumber){
    case 1:
        console.log("Monday"); //this code will execute if the weekDayNumber is 1
    break;
    case 2:
        console.log("Tuesday"); //this code will execute if the weekDayNumber is 2
    break;
    case 3:
        console.log("Wednesday"); //this code will execute if the weekDayNumber is 3
    break;
    case 4:
        console.log("Thursday"); //this code will execute if the weekDayNumber is 4
    break;
    case 5:
        console.log("Friday"); //this code will execute if the weekDayNumber is 5
    break;
    case 6:
        console.log("Saturday"); //this code will execute if the weekDayNumber is 6
    break;
    case 7:
        console.log("Sunday"); //this code will execute if the weekDayNumber is 7
    break;
    default:
        console.log("Invalid day"); //this code will execute if the weekDayNumber is not bw 1 to 7
    break;         

}


// 4.witch example with string 
let foodItem: string ="pizza";

switch (foodItem){
    case "biryani" :
        console.log("I love beef biryani"); // this code will execute if the fooddItem is biryani 
        break;
    case "pizza" :
        console.log("I love beef biryani"); // this code will execute if the fooddItem is pizza 
        break;
    case "DallChawal" :
        console.log("I love beef biryani"); // this code will execute if the fooddItem is DaalChawal 
        break;
    case "zinger" :
        console.log("I love beef biryani"); // this code will execute if the fooddItem is zinger 
        break;
        
}


// 5.example of logical operators
let isMyBirthday: boolean = true;
let amIHappy: boolean = false;

// logical and
if (isMyBirthday && amIHappy){
    console.log("Happy Birthday");
}

//logical or
if (isMyBirthday || amIHappy){
    console.log("Happy birthday but i am not happy");
    
}