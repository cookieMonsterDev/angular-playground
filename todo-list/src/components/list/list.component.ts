import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { Item, ListService } from '../../servicies/list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  data: Item[];

  constructor(private listServise: ListService) {
    this.data = listServise.getData();
  }
}
