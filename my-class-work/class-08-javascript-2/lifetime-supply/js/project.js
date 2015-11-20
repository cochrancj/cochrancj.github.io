document.getElementById('click-me').onclick = calculateLifetimeDrinks;

function calculateLifetimeDrinks () {
  var currentAge = document.getElementById('age').value;
  var plannedAge = document.getElementById('max-age').value;
  var favDrink = document.getElementById('item').value;
  var numPerDay = document.getElementById('num-per-day').value;

  var lifetimeDrinks = (plannedAge - currentAge) * 365 * numPerDay;

  document.getElementById('solution').innerHTML = lifetimeDrinks;
  document.getElementById('drink').innerHTML = favDrink;

  // console.log(lifetimeDrinks);
}


