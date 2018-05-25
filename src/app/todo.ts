export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: { [key: string]: any } = {}) {
    Object.assign(this, values);
  }
}
