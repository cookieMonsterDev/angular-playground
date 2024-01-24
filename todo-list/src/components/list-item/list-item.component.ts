import { Component, Input } from '@angular/core';
import { ListService } from '../../servicies/list.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() id!: string;
  @Input() text!: string;

  constructor(private listServise: ListService) {}

  removeItem() {
    this.listServise.remove(this.id);
  }
}
