const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const personInput = document.getElementById("person");
const totalBillSpan = document.getElementById("totalBill");
const perPersonSpan = document.getElementById("perPerson");

function calculateTotal(){
    const billValue = Number(billInput.value);
    const tipValue = Number(tipInput.value);
    const personValue = Number(personInput.value);

    if(billValue <= 0 || tipValue < 0 || personValue <= 0){
        totalBillSpan.innerText = "Invalid input";
        perPersonSpan.innerText = "";
        return;
    }
    const totalBill = billValue + (billValue * tipValue / 100);
    const totalPerPerson = totalBill / personValue;
    
    totalBillSpan.innerText = totalBill.toFixed(2);
    perPersonSpan.innerText = totalPerPerson.toFixed(2);
}
btnE1.addEventListener("click", calculateTotal);