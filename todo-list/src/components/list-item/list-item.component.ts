import { Component, Input } from '@angular/core';

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

  removeItem() {
    console.log(this.id);
  }
}
