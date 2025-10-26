const getSumBtn = document.createElement("button");
getSumBtn.textContent="Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".prices");
	let total=0;

	prices.forEach(price=>{
		total+=Number(price.textContent);
	});

	const newrow = document.createElement("tr");
	const newcell = document.createElement("td");

	newcell.colSpan = 2;
	newcell.textContent=`Total Price : ${total}`;

	newrow.appendChild(newcell);

	const table= document.querySelector("table")
	table.appendChild(newrow)
	
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

