import { Component } from '@angular/core';
import { ListService } from '../../servicies/list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header class="navbar">
      <div class="container d-flex justify-content-between">
        <a href="/">Logo</a>
        <div class="d-flex gap-2">
          <input class="form-control" [(ngModel)]="textInput" />
          <button class="btn btn-light" (click)="addListItem()">
            <i class="bi bi-plus-square"></i>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  textInput: string = '';

  constructor(private listServise: ListService) {}

  addListItem() {
    if (!this.textInput) return;
    const newItem = { id: crypto.randomUUID(), text: this.textInput };
    this.listServise.add(newItem);
    this.textInput = '';
  }
}
