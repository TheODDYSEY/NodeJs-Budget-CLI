# Budget Master 

## Overview
This budgeting tool is a simple command-line application designed to help users manage their budgets and track expenses. It allows users to set a budget, add expenses, view their current budget status, and save their budget details to a file for future reference.

## Installation
1. Clone or download the repository to your local machine.
2. Make sure you have Node.js installed on your system.
3. Open a terminal or command prompt and navigate to the directory where the project is located.
4. Install the required dependencies by running the following command:
   ```
   npm install
   ```

## Usage
To use the budgeting tool, follow these steps:

1. Run the application by executing the following command in your terminal:
   ```
   node budget.js
   ```

2. You will be presented with a menu containing the following options:
   - Set Budget
   - Add Expense
   - View Budget
   - Exit

3. Choose an option by entering the corresponding number and following the prompts.

## Features
- **Set Budget:** Allows users to set their budget by entering the desired amount.
- **Add Expense:** Enables users to add expenses along with their names and amounts.
- **View Budget:** Displays the current budget, list of expenses, and the remaining budget after deducting total expenses.
- **Save Budget:** Automatically saves the budget details to a file named `budget.txt` for future reference.
- **Load Budget:** Reads the budget details from the `budget.txt` file when the application starts.

## File Structure
- **budget.js:** Main application file containing the budgeting tool implementation.
- **budget.txt:** Text file used to store the budget details.

## Notes
- Make sure to enter valid numeric values when setting the budget or adding expenses.
- The application will create a `budget.txt` file in the current directory if it doesn't exist.
- Existing `budget.txt` file will be overwritten each time the budget is saved.
