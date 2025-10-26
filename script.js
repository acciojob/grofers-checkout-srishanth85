const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".prices");

	prices.forEach(price=>{total+=Number(price.textContent)})

	const newrow = document.createElement("tr");
	const newcell = document.createElement("td");

	newcell.colSpan = 2;
	newcell.textContent=`Total Price : ${total}`;

	newrow.appendChild(newrow);
	
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

