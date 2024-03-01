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