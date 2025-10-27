
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  
  const prices = document.querySelectorAll(".price");
  let total = 0;

 
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;
  newCell.textContent = `Total Price: ${total}`;
  newCell.style.fontWeight = "bold";

  newRow.appendChild(newCell);

 
  const table = document.querySelector("table");
  table.appendChild(newRow);
};


getSumBtn.addEventListener("click", getSum);
