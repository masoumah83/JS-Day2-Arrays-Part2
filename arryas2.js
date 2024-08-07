// task 1

function isArrayLengthOdd(numbers) {
  // to get arraylength
  if (numbers.length % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

//----------------------------(numbers)
console.log(isArrayLengthOdd([1, 2, 3, 4]));

// task 2j

function isArrayLengthEven(numbers) {
  // to get arraylength

  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//----------------------------(numbers)
console.log(isArrayLengthEven([1, 2, 3]));

//task 3

function addLailaToArray(instructors) {
  instructors.push("laila");
  console.log(instructors);
}
addLailaToArray(["mshary", "hasan"]);

// task 4

function eliminateTeam(teams) {
  //teams.pop();
  console.log(teams.pop());
}
eliminateTeam(["Brazil", "Germany", "Italy"]);

// CHALLENGE1
function secondHalfOfArrayIfItIsEven(fruits) {
  //let half_f = fruits.length / 2;
  // if (half_f % 2 == 0) {
  //    console.log(fruits);
  // } else {
  //  return false;
  // }
  let fr1 = fruits.slice(fruits.length / 2);
}

secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
