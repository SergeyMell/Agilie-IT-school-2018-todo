import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TodoDataService} from './todo-data.service';
import {FormsModule} from '@angular/forms';
import {Todo} from './todo';

describe('app component', () => {
  let todoService: TodoDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
      providers: [TodoDataService]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    todoService = TestBed.get(TodoDataService);
    const todo = new Todo({title: 'TODO'});
    todoService.addTodo(todo);
  }));

  it('should be compiled correctly', () => {
    const component = TestBed.createComponent(AppComponent);
    expect(component).toBeTruthy();
  });

  it('should render todo', () => {
    const component = TestBed.createComponent(AppComponent);

    component.detectChanges();

    expect(component.debugElement.nativeElement.querySelector('.todo-list label').textContent)
      .toContain('TODO');
  });

});
