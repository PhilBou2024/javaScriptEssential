//=============== First method : with global variable count :
// let count = 0; // Initialize count to 0

// function increaseCount() {
//   count++; // Increment the count by 1
//   displayCount(); // Display the count
//   checkCountValue(); // Check count value and display messages
// }

// function resetCount() {
//   count = 0;
//   displayCount(); // Display the count
//   alert("The followers count has been reset!");
// }

// function displayCount() {
// document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
// }

// function checkCountValue() {
//   if (count === 10) {
//     alert("Your Instagram post gained 10 followers! Congratulations!");
//   } else if (count === 20) {
//     alert("Your Instagram post gained 20 followers! Keep it up!");
//   }
// }

// Second method : with function closure :
let counter = makeCounter();

function makeCounter() {
    let count = 0;
    
    return {
        inc() {
            count++;
        },
        reset() {
            count = 0;
        },
        value() {
            return count;
        }
    }
}

function increaseCount() {
    counter.inc(); // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }
  
  function resetCount() {
    counter.reset();
    displayCount(); // Display the count
    alert("The followers count has been reset!");
  }
  
  function displayCount() {
  document.getElementById('countDisplay').innerHTML=counter.value(); // Display the count in the HTML
  }
  
  function checkCountValue() {
    if (counter.value() === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (counter.value() === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
  