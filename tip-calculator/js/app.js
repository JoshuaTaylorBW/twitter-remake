document.getElementById("Bill-Submit").addEventListener("click", calculateTip);

function calculateTip() {
  var billInDollars = document.getElementById("bill-amount-holder").value;
  var billInDollarsNumber = Number(billInDollars);
  var tipPercent = document.getElementById("tip-percent-select").value;
  var TipAmount = (billInDollars * (Number(tipPercent)));

  if(isNaN(billInDollarsNumber)){
    document.getElementById('total-tip').innerHTML = "Not a number";
  }else{
    document.getElementById('total-tip').innerHTML = "Tip Amount: " + Math.round(TipAmount);
    document.getElementById('total-bill').innerHTML = "Total Bill: " + Math.round((Number(TipAmount) + Number(billInDollars)));
  }
}
