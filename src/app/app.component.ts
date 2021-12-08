import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  collection: any;

  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  }

  removeItems() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
