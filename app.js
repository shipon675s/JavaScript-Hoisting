//! JavaScript Hoisting

/*

* JavaScript Involves Two Key Aspects: 
! 1. Variable Hoisting
! 2. Function Hoisting

*/

/*

* হোইস্টিং শব্দের অর্থ উত্তলোন ।

* সহজ ভাবে বলা যায়, Hoisting হলো জাভাস্ক্রিপ্টের Default Behaviour যা ফাংশন বা ভ্যারিয়েবলের Declaration অংশকে উপরে নিয়ে যায় ।

*/



//! Variable Hoisting:

persion = 'Shipon';
console.log(persion);
console.log(typeof persion);

/*

 * let এবং const এর ক্ষেত্রে হোইস্টিং নাই । শুধুমাত্র var এর ক্ষেত্রে হোইস্টিং আছে ।

*/

// Declaration
var x;

// Initialisation
x = 10;

// Usage
console.log(x);



//! Function Hoisting:

car();
function car(){
    console.log('I love to have a car');
}

/*

 * let এবং const এর ক্ষেত্রে হোইস্টিং নাই । শুধুমাত্র var এর ক্ষেত্রে হোইস্টিং আছে ।

*/

student('Shipon');
let student = function(fname){
    console.log(`My name is ${fname}`);
}