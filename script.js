const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn)

const getSum = ()=>{
	const prices = document.querySelectorAll('.price');
	
	let total = 0;
	prices.forEach((p)=>{
		total +=parseFloat(p.textContent)
	})
	const table = document.querySelector('table');
	const newRow = document.createElement("tr");
	const totalcell = document.createElement("td");
	const levelcell = document.createElement("td");
	
	totalcell.textContent = total;
	levelcell.textContent ='Total Price :';

	newRow.append(levelcell,totalcell);
	table.appendChild(newRow);
	
}
getSumBtn.addEventListener("click",getSum)
