export interface ITodo {


    todoId: string;
    todoItem: string;
    todoStatus: 'Pending' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    isImportant: boolean;

}
