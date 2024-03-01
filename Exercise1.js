/* Perform different operations on non-primitive data types and use all the Primitive data types and demonstarte below concepts 
    1. Create Object
    2. Different types of ways to Print all the members of Object
    3. Access the Object members
    4. Try to Change Object member 
    5. Use if, else and else if conditions on object 
    */

//Object of Poster from Amazon portal, it has all types of data members
const amazonPoster = {
    productName : "Parker Pen",
    numberOfReviews : "7002",
    currentPrice : 270,
    originalPrice : 280,
    isOfferAplied : true,
    offer : "5%",
}

//Offer applied or not depends upon the userName
let userName = "Yashawanth"

if(!userName==="Yashawanth"){
    isOfferAplied.isOfferAplied=false;
}

//Method 1 : Printing members and their values using object directly
console.log("The details of poster objects are",amazonPoster);

//Method 2 : Printing all the members and their values using loop and key from Object
console.log("Poster has these below details");
for(let key in amazonPoster) {
    console.log("Key", key,"-> Value is", amazonPoster[key]);
}

//Below block demonstrates whether values are equal to expected values or not and demonstrates if, else if and else
//If username is yashawanth, then he must be eligible for offer
if (amazonPoster.currentPrice===270 && amazonPoster.isOfferAplied){
    console.log(userName,"You're eligible for",amazonPoster.offer,"offer and your prize is",amazonPoster.currentPrice);
} else if(amazonPoster.currentPrice===285 && !amazonPoster.isOfferAplied){
    console.log("The price is",amazonPoster.originalPrice,"and offer is not applicable")
}else {
    console.log("Pen prize is not equal to 270");
}

/* Perform all the operations that we can perform on Strings
*/

//Try to create username for social media page where name is taken as input and print username for social media
//ex : Input -> Yashawanth, Output -> @yashawanth10
//generated username should have small cases starting with '@' and ending with 'number of letters in taken string'

let fullName = "Rahul H";
let userName1 = "@".concat(fullName).trim().toLowerCase().replace(' ','').concat(fullName.length);
console.log(userName1);