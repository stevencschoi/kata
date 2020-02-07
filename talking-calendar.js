// accept date string
// convert string to date
// return new formatted date

let talkingCalendar = function(date) {
  const dateArray = date.split("/"); // split string into array for reformatting
  // define array as reference for month
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dateYear = dateArray[0];
  const dateMonth = months[dateArray[1] - 1]; // months array is zero indexed
  let dateDay = dateArray[2];

  // remove leading zeros from days 1-9
  if (1 < dateDay < 10) {
    dateDay = parseInt(dateDay,10);
  }

  // if statements to handle 1st, 2nd, 3rd, nth
  if (dateDay === 1 || dateDay[1] === 1) {
    dateDay = dateDay + 'st';
  } else if (dateDay === 2 || dateDay[1] === 2) {
    dateDay = dateDay + 'nd';
  } else if (dateDay === 3 || dateDay[1] === 3) {
    dateDay = dateDay + 'rd';
  } else {
    dateDay = dateDay + 'th';
  }

  return dateMonth + ' ' + dateDay + ', ' + dateYear;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987