// voting station function

const chooseStations = function(stationList){
  let validStations = [];
  for (let station of stationList){
    if((station[1] >= 20) && (station[2] === 'school' || station[2] === 'community centre')){
      validStations.push(station[0])
    }
  }
  return validStations;
}


// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// chooseStations(stations);

const finalPosition = function (moves) {
  // Your code in here ...
  var position = [0,0]
  for(let move of moves){
    if(move === 'north'){
      position[1] += 1;
    }
    if(move === 'south'){
      position[1] -= 1;
    }
    if(move === 'east'){
      position[0] += 1;
    }
    if(move === 'west'){
      position[0] -= 1;
    }
  }
  return position;
}

// Age calculator

function ageCalculator(name,birthYear,currentYear){
  let currAge = currentYear - birthYear
  return `${name} is ${currAge} years old`
}

// how many hundereds
function howManyHundreds(num){
  return num % 100;
}

// Area Calculator
function calculateRectangleArea(length, width){
  if(length < 0 || width < 0){
    return undefined;
  }
  return length * width;
}

function calculateTriangleArea(base, height){
  if(base < 0 ||  height < 0){
    return undefined;
  }
  return (base * height/2);
}

function calculateCircleArea(radius){
  if(radius < 0){
    return undefined;
  }
  return Math.PI*(radius*radius);
}