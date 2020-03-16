//var name = "Jack";
//var age = 23;
//var shootingscore = 45.6;
//var message = "Hi, My name is " + name + "and I am " + age + " Years old!"; 
//var firstName = "Jhon";
//var lastNmame = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgURL = 'http://coolpicks.com/jhonjacob.jpg' ;
//
//var loginWelcomeMessage = "Welcome," + firstName + ". Happy " + age + " rd birthday!";
//console.log(loginWelcomeMessage);


//var sum = 10 + 15;
//var sub = 15 - 10; 
//var mul = 3 * 10; 
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var  result = 10 * ((5 + 3) - 4);
//var msg = "10 / 3 = 3 with reminder  is " + mod;

//var myAcccountBalance = 300;
//var nikeSBShoes = 700.23;
//var coupon = 500;
//var promo = nikeSBShoes - coupon ;
//// == equal to
//// === ??
//// <= less than or equal to
//// >=  greater or equal to
//// !== not equal to
//var val1 = 23;
//var val2 = "23";
//
//if (val1 !== val2)
//    console.log("These are  not the same");
//else
//    console.log("These are kkk not the same");
    
//if (nikeSBShoes <= myAcccountBalance){
//    myAcccountBalance -= nikeSBShoes;
//console.log("we should buy this crazy shoe!");
//console.log("Account Balance: " + myAcccountBalance);
//}
//else if(promo <= myAcccountBalance){
//    console.log("Account Balance: " + myAcccountBalance);
//console.log("we should buy this crazy shoe with coupons!");
// }
//else{
//    console.log("You too broke for shoes bra! ");
//}

//if (1 === 1 || "joe" === "joe") {
//    console.log("These are both true");
//}
//if (true && true){
//    console.log("These are both same"); 
//}
//if(1 === 3 || "joe" === "joe" ){
//   console.log("One of these is true");   
//} 

//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1; 
//var cat3DisabledHandicap =true;
//
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap){
//   console.log("cat1 is the cuttest!"); 
//} else if (( cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap){
//    console.log("cat2 is the cuttest!"); 
//} else if (( cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap){
//    console.log("cat3 is the cuttest!"); 
//}






//var student1 = "TIM";
//var student2 = "Jane";
//var student3 = "Arun";
//
//var balances = [40,400.5,300];
//var studentNames = ["Timmy","Janessa","Arun"];
//var naughtyList = [];
//
//naughtyList.push(studentNames[0]);
//var index = naughtyList.indexOf("Timmy");
//console.log(naughtyList);
//if (index > -1){
//     naughtyList.splice(index, 1)
//}
//
//console.log(naughtyList);





//var total = 10;
//for (var x = 0; x < total; x++){
//    //Iterate until told not to
//    console.log(x);
//}
var students = [];
function Student(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
    return "Hi, I am " + this.firstName + " and  I'm " + this.age + " years old"; 
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

//for in
var student = students[0];

for (var key in student){
    console.log(student[key]);
}

//total = students.length;
//for ( x= 0 ; x < total ; x++)
//    {
//        var student = students[x];
//        console.log(student.greeting());
//        
//    }

//var s1 = new Student("Jenny","Laga",5);
//console.log(s1);
//console.log(s1.greeting());

//var student0 ={
//    fistName: "Jane",
//    lastName: "Looo",
//    age: 8 , 
//    greeting: 
//};

//console.log(student0.greeting());

//Creates a new empty object
//var student1 =new Object();
//
//student1.fistName = "Jhon";
//student1.lastName =  "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.fistName = "Zack";
//student2.lastName =  "Bobo";
//student2.age = 5;



//console.log(student.fistName);
//console.log(student.lastName);
//console.log(student["fistName"]);
//console.log(student["lastName"]);


//["Jhon","Jacob","Jinge","Heimer","Smith"];
//students.push(student0);
//students.push(student1);
//students.push(student2);






//var length1 = 15;
//var width1 =10;
//var area1 = length1 * width1;
//
//var length2 = 12;
//var width2 =14;
//var area2 = length2 * width2;
//console.log(area1);
//console.log(area2);



//function area(length,width){
//    return length * width;
//}
//
////var area1 = area(10,15);
////var rectanglesAreas = [];
////rectanglesAreas.push(area(10,15));
////rectanglesAreas.push(area(14,2));
////rectanglesAreas.push(area(4,5));
////console.log(rectanglesAreas);
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale){
//if(priceOfSale <= bankBalance){
//    bankBalance -= priceOfSale;
//    console.log("Purchase Successful");
//}   else {
//    console.log("Insufficent funds");
//    
//}
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction  = function(priceOfSale){
//  if(priceOfSale <= bankBalance){
//    bankBalance -= priceOfSale;
//    console.log("Purchase Successful");
//}   else {
//    console.log("Insufficent funds");
//    
//}  
//}
//
//transaction(10);
//
//var printCustomerName = function(first,last){
//    console.log("First Name: " + first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul){
//    //Call some functions to process application
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);





















