import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private storageKey = 'transactions';

  // Recupera as transações do Local Storage
  getTransactions(): { description: string; amount: number }[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Salva as transações no Local Storage
  saveTransactions(transactions: { description: string; amount: number }[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(transactions));
  }

  constructor() { }
}
