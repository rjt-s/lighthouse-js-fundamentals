// conditionals exercise

const raining = true;
const cold = false;

if(raining){
  console.log("Don't forget your umbrella");
}

if(cold){
  console.log("Make sure you pick a scarf");
}

console.log("Now you are ready to go outside");


// checking temp 

const temperature = -2;

if(temperature < 0){
  console.log("Make sure you pick a scarf");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it");
} else {
  console.log("Short sleeves are fine");
}

console.log("You are now ready to go outside.")

// going outside

if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't a good idea");
}