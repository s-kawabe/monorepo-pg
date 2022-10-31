import { Injectable } from '@nestjs/common';

type Todo = {
  title: string
}

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'leran nx' }, { title: 'leran github' }, { title: 'cooking' }]

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: 'go to travel'
    })
  }
}
