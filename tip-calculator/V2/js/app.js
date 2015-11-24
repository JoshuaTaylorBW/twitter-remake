document.getElementById("Bill-Submit").addEventListener("click", calculateTotalCost);
document.getElementById("Bill-Add").addEventListener("click", addBox);

var boxAmount = 1;
var totalCost = 0;

function calculateTip() {
  var tipPercent = document.getElementById("tip-percent-select").value;
  var TipAmount = (totalCost * (Number(tipPercent)));

  if(isNaN(totalCost)){
    document.getElementById('bill-before-tip').innerHTML = "";
    document.getElementById('total-tip').innerHTML = "At Least One Cost Is Not a number";
    document.getElementById('total-bill').innerHTML = "";

  }else{
    document.getElementById('bill-before-tip').innerHTML = "Bill Before Tip: " + totalCost.toFixed(2);
    document.getElementById('total-tip').innerHTML = "Tip Amount: " + TipAmount.toFixed(2);
    document.getElementById('total-bill').innerHTML = "Total Bill: " + ((Number(TipAmount) + Number(totalCost)).toFixed(2));
  }
}

function addBox() {
  boxAmount++;
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "Item-" + boxAmount);
  var input = document.createElement("input");
  var input2 = document.createElement("input");

  input.type = "text";
  input.className = "Item-Form"; // set the CSS class
  input.setAttribute("id", "Item-Name-"+boxAmount);
  input.placeholder = "Enter Item Name";
  newDiv.appendChild(input);

  input2.type = "text";
  input2.className = "Item-Form Breaker"; // set the CSS class
  input2.placeholder = "Enter Item Cost";
  input2.setAttribute("id", "Item-Cost-"+boxAmount);

  newDiv.appendChild(input2);

  var currentDiv = document.getElementById("Bottom-of-List");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv);
}

function calculateTotalCost() {
  totalCost = 0;
  var StartingItem = 1;
  for(var i = 1; i <= boxAmount; i++){
    var itemId = "Item-Cost-"+i;
    var value = document.getElementById(itemId).value;
    totalCost += Number(value);
  }
  calculateTip();
}
