// console.log("Hello world")
// console.log("Manjil Koirala")

// var name="Manjil Koirla"
// console.log(name);

// sentence="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// console.log(sentence)

food=prompt("Price of food?")
//console.log(food)
discountPercentage=prompt("Discount Percent?")
discountAmount=food*(discountPercentage/100)
totalAmount=food-discountAmount;
// console.log(discountAmount)
// alert("discount Amount is: "+discountAmount)
document.getElementById("discount").innerHTML=discountAmount;
document.getElementById("total").innerHTML=totalAmount;

//user input