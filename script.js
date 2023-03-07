let amountInput = 0;
amountInput = document
	.getElementById("amount")
	.addEventListener("change", amountInput);
let token = (document.getElementById("token").innerHTML = amountInput * 24);
console.log({ token });

console.log({ amountInput });
