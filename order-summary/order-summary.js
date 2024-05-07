//order summary using concatenation

"Items (" + (1 + 1) + "): $" + (2095 + 799) / 100;

console.log("Items (" + (1 + 1) + "): $" + (2095 + 799) / 100);

//function for shipping & handling
function getshippingAndHandling() {
	return "Shipping & handling: $0.00";
}
const shippingAndHandling = getshippingAndHandling();
console.log(shippingAndHandling);

// function for tax
function getTotalBeforeTax() {
	return "Total before tax:  $28.94";
}
const totalBeforeTax = getTotalBeforeTax();
console.log(totalBeforeTax);

// function for estimated tax
function calculateEstimatedTax() {
	const taxRate = 0.1;
	const estimatedTax = totalAmount * taxRate;
	return "Estimated tax (10%) : $" + estimatedTax.toFixed(2);
}

const totalAmount = 2.89;
const estimatedTax = calculateEstimatedTax(totalAmount);

console.log(estimatedTax);

// function for total order

function calculateOrderTotal(subtotal, tax) {
	const orderTotal = subtotal + tax;
	return "Order total: $" + orderTotal.toFixed(2);
}

const subtotal = 28.94;
const tax = 2.89;
const orderTotal = calculateOrderTotal(subtotal, tax);
console.log(orderTotal);

// function to display use paypal
function usePayPal() {
	return "Use PayPal";
}

console.log(usePayPal());
// this is good, keep pushing.

// order summary using interpolation
// `Items (${1 + 1}): $${(2095 + 799) / 100}`
