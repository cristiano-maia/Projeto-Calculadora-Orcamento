import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  standalone: false,

  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
// Recebe a lista de transações do componente pai
@Input() transactions: { description: string; amount: number }[] = [];

// Evento para notificar o componente pai que uma transação deve ser removida
@Output() transactionRemoved = new EventEmitter<number>();

// Método chamado ao clicar no botão de remoção
removeTransaction(index: number) {
  this.transactionRemoved.emit(index);
}
}
