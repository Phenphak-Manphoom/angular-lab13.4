import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  lists :string[]=['Coffee','Breakfast'];
  constructor() {

   }

  ngOnInit(): void {
  }

  addList(list: string) {
    if (list) {
      this.lists.push(list);
    }
  }

  removeList(index :number){
    this.lists.splice(index,1);
  }

}
