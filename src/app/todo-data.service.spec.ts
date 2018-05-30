import {async, TestBed} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

describe('todo service functionality', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  }));

  it('should be compiled correctly', () => {
    const dataService = TestBed.get(TodoDataService);
    expect(dataService).toBeTruthy();
  });

  it('should add todo correctly', () => {
    const dataService = TestBed.get(TodoDataService);
    expect(dataService.todos.length).toEqual(0);

    const todo = new Todo();
    dataService.addTodo(todo);
    expect(dataService.todos.length).toEqual(1);
    expect(dataService.todos).toContain(todo);
  });

});
