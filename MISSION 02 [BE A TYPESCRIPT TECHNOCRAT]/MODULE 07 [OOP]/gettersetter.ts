class BankAccount {
  userId: number;
  userName: string;
  _userBallance: number;
  constructor(userId: number, userName: string, _userBallance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBallance = _userBallance;
  }
  set addBallance(amount: number) {
    this._userBallance += amount;
  }
  get getUserBallance() {
    return this._userBallance;
  }
}

const myBankAccount = new BankAccount(101, "lukmanxpert", 1000);

myBankAccount.addBallance = 2000;
myBankAccount.addBallance = 2000;
myBankAccount.addBallance = 2000;

console.log(myBankAccount.getUserBallance);
