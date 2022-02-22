let num1= "36p^2";
let num2= "24p^4";
let num1Factor= "2 x 2 x 3 x 3 x p x p"
let num2Factor= "2 x 2 x 2 x 3 x p x p x p x p"
let solution= "72p^4"
function myDisplayer(some) 
{ 
    document.getElementById("LCD").innerHTMl = some;
};
function LCD()
    {
        console.log("Finding Lowest common denominator between " + num1 + " and " + num2 + ".");
    };
function step1()
    {
        console.log("break into parts " + num1Factor + " and  " + num2Factor);
    }
function step2() 
    {
        console.log("Take a look at the broken down prime factorization above.");
        console.log("You must ensure the solution holds each number and variable of both " + num1 + " and " +  num2 + " in this case: 2 x 2 x 2 x 3 x 3 x p x p x p x p");
    }
function step3()
    {
        console.log("Rewrite LCD " + solution)
    }
    setTimeout(step3, 9000);
    setTimeout(step2, 6000)
    setTimeout(step1, 3000);
    LCD();
    
