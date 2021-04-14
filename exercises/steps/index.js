// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let array = [];
  for (let i = 0; i < n + 1; ++i) {
    array.push(createStep(i, n));
  }
  // array is now an array of steps
  //   console.log(array.join(`\n`));
  array.forEach((stair) => console.log(stair));
}

// on the 2nd iteration with n=4, we want to print   '##  '
// on the third iteration with n=4, we want to print '### '
function createStep(iteration, stepTotal) {
  // var str = new Array(len + 1).join( character );
  let numOfHashtags = iteration + 1;
  let stepWithoutSpaces = new Array(numOfHashtags).fill('#');

  // I think the problem is here and something bad is happening
  // with the new Array creation because the arg value is improper
  let spaces = new Array(stepTotal - iteration).fill(' ');
  let finalValue = stepWithoutSpaces.concat(spaces).join('');
  return finalValue;
}

module.exports = steps;

// function steps(n) {
//   const stepsArr = [];
//   for (let i = 0; i <= n; ++i) {
//     let str = new Array(i + 1).join('#');
//     while (str.length < n) {
//       debugger;
//       str += ' ';
//     }
//     console.log(str);
//   }
// }
