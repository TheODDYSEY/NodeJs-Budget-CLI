const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let budget = 0;
const exprrsss = {};

// function for showing menu available options
function showMenu() {
    console.log('\nBudgeting Tool');
    console.log('1.Set Budget');
    console.log('2.Add Expense');
    console.log('3.View Budget');
    console.log('5. Save and Exit')
}

// function to handle input
function promptUser() {
    rl.question('Select an option: ', answer => {
      switch (answer) {
        case '1':
          setBudget();
          break;
        case '2':
          addExpense();
          break;
        case '3':
          viewBudget();
          break;
        case '4':
          rl.close();
          break;
        default:
          console.log('Invalid option');
          showMenu();
          promptUser();
      }
    });
  }

function setBudget(){
    rl.question('Enter budget amount: ', answer => {
        budget = parseFloat(answer);
        saveBudgetToFile();

        console.log(`Budget set to $${budget.toFixed(2)}`); 

        showMenu();
        promptUser();
    })
}


function saveBudgetToFile() {
    let content = `Budget : ${budget.toFixed(2)}\n`;

    for (let expenseName in expenses) {
        content  += `${expenseName} : ${expenses[expenseName].toFixed(2)}\n`;
    }

    content += `Total Budget: ${(budget - calculateTotalExpenses()).toFixed(2)}`;

    fs.writeFile('budget.txt', content, (err) => {
        if (err) throw err;
        console.log('Budget saved to budget.txt');
    });
}