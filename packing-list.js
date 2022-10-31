// JS-Array
// Iterating over JS arrays with for and while loop

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses",
 "cups", "cooking utensils"];

// iterting with for loop
console.log("Kitchen stuff to pack");
for(let i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
}

// iterting with while loop
console.log("Kithcen stuff to pack");
let k = 0;
while(k < packingList.length){
  console.log(packingList[k])
  k++;
}


