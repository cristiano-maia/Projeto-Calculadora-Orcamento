import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  standalone: false,

  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
 // Recebe a lista de transações do componente pai
 @Input() transactions: { description: string; amount: number }[] = [];

 // Calcula o saldo total somando todas as transações
 get balance(): number {
   return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
 }
}
