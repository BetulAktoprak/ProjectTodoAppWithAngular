import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrl: "./app.component.css",
  template: `
  <div class="container">
    <h1>Todo App</h1>

    <div *ngIf="!isUpdateWorkFormActive" class="input-section">
      <label for="work">Work</label>
      <input id="work" [(ngModel)]="work" class="input-box">
      <button (click)="save()" class="btn save-btn">Save</button>
    </div>

    <div *ngIf="isUpdateWorkFormActive" class="input-section">
      <label for="updateWork">Update Work</label>
      <input id="updateWork" [(ngModel)]="updateWork" class="input-box">
      <button (click)="update()" class="btn update-btn">Update</button>
    </div>

    <hr>

    <div class="list-section">
      <ul>
        
          @for(data of todos; track data){
            <li>
            {{ data }}
            @if (!isUpdateWorkFormActive) {
            <button *ngIf="!isUpdateWorkFormActive" (click)="get($index)" class="btn update-btn">Update</button>
          <button *ngIf="!isUpdateWorkFormActive" (click)="delete($index)" class="btn delete-btn">Delete</button>
          }
          </li>
          
        }
      </ul>
    </div>
  </div>
  `
})
export class AppComponent {
  work:string = '';
  updateWork:string = '';
  updateIndex:number = 0;
  todos:string[] = [];
  isUpdateWorkFormActive:boolean = false;

  save(){
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number){
    this.todos.splice(index, 1);
  }

  get(index: number){
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }

  update(){
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
}
