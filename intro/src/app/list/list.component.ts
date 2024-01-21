import { Component } from '@angular/core';
import { List } from './list.types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  idIterator = 0;
  list: List[] = [];
  textInput: string = '';


  add() {
    if (!this.textInput) return;

    const newItem: List = { id: this.idIterator, title: this.textInput };
    this.list.push(newItem);
    this.idIterator++;
    this.textInput = '';

    console.log(this.list)
  }
}
