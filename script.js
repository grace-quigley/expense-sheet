let i = 0;
let container = document.getElementById("container");
let a = 0;
let b = 0;
// create income rows

for(a = 0; a<20; a++){
    i = 0;
    for(i = 0; i<1; i++){
        
        let container = document.getElementById("container");

        let newIncomeItem = document.createElement("div");
        newIncomeItem.setAttribute("class","income-left");
        newIncomeItem.setAttribute("id","income-item"+b);
        newIncomeItem.textContent = " ";
        container.appendChild(newIncomeItem);

        let newBillItem = document.createElement("div");
        newBillItem.setAttribute("class","col");
        newBillItem.setAttribute("id","bill-item"+b);
        newBillItem.textContent =" ";
        container.appendChild(newBillItem);

        let newDiscretionaryItem = document.createElement("div");
        newDiscretionaryItem.setAttribute("class","disc-right");
        newDiscretionaryItem.setAttribute("id","discretionary-item"+b);
        newDiscretionaryItem.textContent = " ";
        container.appendChild(newDiscretionaryItem);

        b++;
    }
}

function emptyRows(){
    let d = 0;
    let i = 0;
    let b = 0; 
    for(d=0; d<20; d++){
        i = 0;
        for(i=0; i<1; i++){
            let container = document.getElementById("container");
            let incomeItem = document.getElementById("income-item"+b);
            incomeItem.textContent = "";

            let billsItem = document.getElementById("bill-item"+b);
            billsItem.textContent = "";

            let discretionaryItem = document.getElementById("discretionary-item"+b);
            discretionaryItem.textContent = "";
            b++;
        }
    }
}

function totalBalance(totalIncome, totalExpense){
    let totalIncomeNum = parseFloat(totalIncome);
    let totalExpenseNum = parseFloat(totalExpense);
    let total = totalIncomeNum - totalExpenseNum;

    
    return total;
}

function totalExpense(expense, currTotalExpense){
    let expenseNum = parseFloat(expense);
    let currTotalExpenseNum = parseFloat(currTotalExpense);
    let total = expenseNum + currTotalExpenseNum;
    return total;
}

function totalIncome(income,currTotalIncome){
    let incomeNum = parseFloat(income);
    let currTotalIncomeNum = parseFloat(currTotalIncome);
    let total = incomeNum + currTotalIncomeNum;
    return total;
}

function addIncome(income){
    let d = 0;
    
    for(d=0; d<20; d++){
        let currItem = document.getElementById("income-item"+d);
        if (currItem.textContent == " ") {
             currItem.textContent = income;
             break;
        }
    }
    
}

function addBill(bill){
    let d = 0;
    
    for(d=0; d<20; d++){
        let currItem = document.getElementById("bill-item"+d);
        if (currItem.textContent == " ") {
             currItem.textContent = bill;
             break;
        }
    }
    
}

function addDiscretionary(discretionary){
    let d = 0;
    
    for(d=0; d<20; d++){
        let currItem = document.getElementById("discretionary-item"+d);
        if (currItem.textContent == " ") {
             currItem.textContent = discretionary;
             break;
        }
    }
    
}

function clear(which){
    document.getElementById(which+'-input').value = "";
}

function displayResults(totalIncome, totalExpenses, totalBills, totalDiscretionary){
    let balance = totalBalance(totalIncome,totalExpenses);
    let total_balance_item = document.getElementById("total-balance");
    if(balance < 1) { 
        total_balance_item.style.color = "red";
    }
    else { 
        total_balance_item.style.color = "blue";
    }
    let total_income_item = document.getElementById("total-income");
    total_income_item.textContent = totalIncome;

    let total_bill_item = document.getElementById("total-bills");
    total_bill_item.textContent = totalBills;

    let total_disc_item = document.getElementById("total-discretionary");
    total_disc_item.textContent = totalDiscretionary;

    
    total_balance_item.textContent = balance;

}

let income_to_add = "";
let add_income_btn = document.getElementById('add-income');

let bill_to_add = "";
let add_bill_btn = document.getElementById('add-bill');

let discretionary_to_add = "";
let add_discretionary_btn = document.getElementById('add-discretionary');
let total_income = 0.00;
let total_expenses = 0.00;
let total_balance = 0.00;
let total_bills = 0.00;
let total_discretionary = 0.00;

let calcBtn = document.getElementById('calc-button');
let reset = document.getElementById('reset');

add_income_btn.addEventListener('click', function(e){
    income_to_add = document.getElementById('income-input').value;
    addIncome(income_to_add);
    total_income = totalIncome(income_to_add,total_income);
    clear("income");
    
});

add_bill_btn.addEventListener('click', function(e){
    bill_to_add = document.getElementById('bills-input').value;
    addBill(bill_to_add);
    total_bills = parseFloat(bill_to_add) + total_bills;
    total_expenses = totalExpense(bill_to_add,total_expenses);
    
    clear("bills");
});

add_discretionary_btn.addEventListener('click', function(e){
    discretionary_to_add = document.getElementById('discretionary-input').value;
    addDiscretionary(discretionary_to_add);
    total_discretionary = parseFloat(discretionary_to_add) + total_discretionary;
    total_expenses = totalExpense(discretionary_to_add, total_expenses);
    clear("discretionary");
});

calcBtn.addEventListener('click', function(e){
    displayResults(total_income, total_expenses, total_bills, total_discretionary);
    
    
});

reset.addEventListener('click', function(e){
    emptyRows();
    total_income = 0.0;
    total_bills = 0.0;
    total_balance = 0.0;
    total_discretionary =0.0;
    total_expenses = 0.0; 
    displayResults(total_income, total_expenses, total_bills, total_discretionary);
});
