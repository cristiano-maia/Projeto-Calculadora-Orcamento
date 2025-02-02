import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  standalone: false,

  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
 // Variáveis para armazenar a descrição e o valor da transação
 description: string = '';
 amount: number | null = null;

 // Criando um evento para enviar a transação ao componente pai (app.component)
 @Output() transactionAdded = new EventEmitter<{ description: string; amount: number }>();

 // Método chamado quando o formulário é enviado
 addTransaction() {
   // Verifica se os campos estão preenchidos
   if (!this.description || this.amount === null) {
     alert('Por favor, preencha todos os campos.');
     return;
   }

   // Dispara o evento com os dados da nova transação
   this.transactionAdded.emit({
     description: this.description,
     amount: this.amount
   });

   // Limpa os campos do formulário após adicionar a transação
   this.description = '';
   this.amount = null;
 }
}
