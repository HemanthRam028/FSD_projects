//Q1
//Explain the difference between null and undefined in JavaScript.
//NUll : In JavaScript, null is a special value that represents the intentional absence of any object or value. 
//It's used when a variable should have no value, and this is explicitly assigned by the programmer.

//Undefined : In JavaScript, undefined is a value automatically assigned to variables that have been declared but not yet initialized or assigned a value.
// It indicates the absence of a defined value for the variable. 


//Q2
//What will be the output of the following code snippet, and why?
console.log('10' + 5)
//The output is 105 because when the + operator is used between a string and a number in JavaScript, the number is converted to a string and concatenated with the other string.
// If the number is first, the string will be appended to the number as a string.
console.log('10'- 5)
//The output is 5 because when the - operator is used between a string and a number in JavaScript, the string is automatically converted to a number.
// Then, the subtraction operation is performed, resulting in a numeric difference.
console.log(true + 2)
// The output is 3 because in JavaScript, the Boolean value true is treated as 1 and false is treated as 0.
// Therefore, when you add true (which is 1) to 2, the result is 3.
console.log(false + undefined)
// The output is NaN because in JavaScript, when you perform an arithmetic operation with undefined, the result is NaN (Not-a-Number).
// In this case, false is treated as 0, but adding undefined to any number results in NaN since undefined cannot be converted to a valid number for arithmetic operations.


//Q3
// What is the difference between == and === in JavaScript? Provide examples.
//In JavaScript, == and === are comparison operators, but they behave differently:

//== (loose equality) compares two values for equality after converting them to a common type, if necessary. 
console.log(5 == '5'); 
 // Output: true  5 (a number) and '5' a string are compared. JavaScript converts the string '5' to the number 5, so the comparison returns true.


//=== (strict equality) compares two values for equality without performing any type conversion. Both the value and the type must be the same for it to return true.
console.log(5 === '5'); 
 // Output: false 5 is a number and '5' is a string. Since their types are different, the comparison returns false without converting the types.


 //Q4
 //Predict the output of the following expressions and explain your reasoning:
 console.log(0 == false);
 // Output is true because, in JavaScript, when we use == convertion takes place.`false` is treated as `0` in loose equality (`==`). So, `0 == false` is equivalent to `0 == 0`, which is true.
 console.log(0 === false);
// Output is false because, with strict equality (`===`), no type conversion takes place. Since `0` is a number and `false` is a boolean, they are considered different, so the comparison returns false.
console.log('' == 0);
// Output is true. In loose equality (`==`), JavaScript converts both `''` (an empty string) and `0` to numbers for comparison. An empty string is converted to `0`, so the comparison becomes `0 == 0`, which is true.
console.log('' === 0);
// Output is false. In strict equality (`===`), no type conversion takes place. Since `''` (an empty string) is a string and `0` is a number, they are considered different types, so the comparison returns false.


//Q5
//Given the following code, what will be the output and why?
console.log(0 || 1 && 2 || 3)
//Evaluate 1 && 2
//Both 1 and 2 are truthy, so 1 && 2 evaluates to 2 (the second operand).
//Step 2: Substitute 2 back into the expression: 0 || 2 || 3

//Evaluate 0 || 2
//0 is falsy, so the || operator returns the second operand, 2.
//The expression now becomes 2 || 3
//2 is truthy, so 2 || 3 evaluates to 2 (the first truthy operand).
//Output: 2

console.log(false || (true && false) || true)
//Evaluate true && false

//The && operator returns the second operand if both are truthy. Since false is falsy, true && false evaluates to false.
//Substitute false back into the expression: false || false || true

//Evaluate false || false
//Both are falsy, so the || operator returns the second operand, false.
//The expression now becomes false || true
//false is falsy, so the || operator returns the second operand, true.
//Output: true

console.log(0 && 1 || 2 && 3)
//Evaluate 0 && 1

//The && operator returns the first falsy operand if it encounters a falsy value. Since 0 is falsy, 0 && 1 evaluates to 0.
//Step 2: Substitute 0 back into the expression: 0 || 2 && 3

//Evaluate 2 && 3
//Both 2 and 3 are truthy, so 2 && 3 evaluates to 3 (the second operand).
//Step 3: The expression now becomes 0 || 3

//0 is falsy, so the || operator returns the second operand, 3.
//Output: 3

//Q6
//Predict the output of the following expressions and explain your reasoning:
let a = 10, b = 20, c = 30;
console.log(a + b * c);
// Output is 610 because the multiplication (`*`) is performed first: b * c = 20 * 30 = 600. Then, the result is added to `a`: 10 + 600 = 610.
console.log((a + b) * c);
// Output is 900 because the addition (`a + b`) inside the parentheses is performed first: 10 + 20 = 30. Then, this result is multiplied by `c`: 30 * 30 = 900.

console.log(a + b > c ? a : b);
// Output is 20 because the condition `a + b > c` evaluates to `false` (30 is not greater than 30). Since the condition is false, the second part (`b`) is returned, which is `20`.

console.log((a > b) && (b > c) || (a > c));
// Output is false because:
// 1. `(a > b)` evaluates to `false` (10 is not greater than 20).
// 2. `(b > c)` also evaluates to `false` (20 is not greater than 30).
// 3. The entire `&&` expression `(a > b) && (b > c)` is `false` because both conditions are false.
// 4. `(a > c)` evaluates to `false` (10 is not greater than 30).
// 5. The `||` operator returns `true` if either side is true, but here both sides are false, so the final result is `false`.


//Q7
//Analyze and explain the output of the following code snippets:
console.log([] + {});
//The empty array [] is converted to '', and the object {} is converted to "[object Object]", resulting in "[object Object]".
console.log({} + []);
//Similar to the first case, the object {} becomes "[object Object]" and the array [] becomes '', resulting in "[object Object]".

console.log([] ==! []);
//![] evaluates to false, so [] == false converts both to 0, resulting in true.
console.log('' == []);
//Both '' (empty string) and [] (empty array) convert to 0, resulting in true.



//Q8
//What will be the output of the following code, and why?
console.log(+"");
// The unary + operator attempts to convert the empty string "" to a number. An empty string converts to 0.
console.log(+true);
//The unary + operator converts the boolean true to the number 1.
console.log(+false);
//The unary + operator converts the boolean false to the number 0.
console.log(+null);
// The unary + operator converts null to the number 0.
console.log(+undefined);
// The unary + operator cannot convert undefined to a number, so it returns NaN

