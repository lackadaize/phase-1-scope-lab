// global
var customerName = 'bob';

// upperCaseCustomerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// console.log(upperCaseCustomerName());

// setBestCustomer
function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}

// console.log(setBestCustomer());

// overwriteBestCustomer
function overwriteBestCustomer () {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

// console.log(overwriteBestCustomer());

// changeLeastFavoriteCustomer
const leastFavoriteCustomer = "Some Initial Value";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Some Changed Value";
  return leastFavoriteCustomer;
}

// console.log(changeLeastFavoriteCustomer());