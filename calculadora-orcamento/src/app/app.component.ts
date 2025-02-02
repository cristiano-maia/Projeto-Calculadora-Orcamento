import { Component } from '@angular/core';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  transactions: { description: string; amount: number }[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // Carregar transações do Local Storage ao iniciar o app
    this.transactions = this.transactionService.getTransactions();
  }

  onTransactionAdded(transaction: { description: string; amount: number }) {
    this.transactions.push(transaction);
    this.transactionService.saveTransactions(this.transactions); // Salva no Local Storage
  }

  onTransactionRemoved(index: number) {
    this.transactions.splice(index, 1);
    this.transactionService.saveTransactions(this.transactions); // Atualiza o Local Storage
  }
}
