import {Todo} from './todo';

describe('basic todo functionality', () => {
  it('should work without params', () => {
    const todo = new Todo();
    expect(todo).toBeTruthy();
  });

  it('should be correctly created with id', () => {
    const todo = new Todo({id: 1});
    expect(todo.id).toEqual(1);
  });

});
