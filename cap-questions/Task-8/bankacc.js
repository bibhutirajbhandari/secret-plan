// 2: Create a class named BankAccount with properties accountNumber and balance. Implement methods deposit and withdraw to update the account balance. The withdraw method should also perform a check to ensure sufficient balance.
// Sample Input:	const account = new BankAccount('123456789', 1000);
// 		account.deposit(500);
// 		account.withdraw(200);
// Expected output: console.log(account.balance); // Output: 1300

let finalBalance;

class BankAccount {
  constructor(accNo, balance) {
    this.balance = balance;
  }
  deposit(amt) {
    this.balance += amt;
    finalBalance = this.balance;
  }
  withdraw(amt) {
    this.balance -= amt;
    finalBalance = this.balance;
  }
}

function main() {
  let account = new BankAccount("123456789", 1000);
  account.deposit(500);
  account.withdraw(200);

  console.log(finalBalance);
}

main();
