import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit{



  balance: number = 0;

  //1. add balance
  //2. withdraw
  //3. Check balance
  //4. 

  ngOnInit(): void {
    let accountType="CUR";
    if(accountType=="SB"){

      this.balance=500;
    }
    else this.balance=1000; // for current account
  }
  
  addBalance(amount: number) {
    this.balance += amount;
  }

  withDraw(amount: number): boolean { // not handling insufficent case
    if (this.balance < amount)
      return false;
    this.balance -= amount;
    return true;
  }

  checkBalance(): number | undefined {
    return this.balance;
  }
}
