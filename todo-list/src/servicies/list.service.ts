import { Injectable } from '@angular/core';

export type Item = { id: string; text: string };

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private data: Item[];

  constructor() {
    this.data = [];
  }

  public add(item: Item) {
    this.data.push(item);
  }

  public remove(id: string) {
    const index = this.data.findIndex((e) => e.id === id);
    this.data.splice(index, 1);
  }

  public getData() {
    return this.data;
  }
}
