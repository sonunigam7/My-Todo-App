const todosKey = 'reactTodo';

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todosKey);
    if (!rawTodos) return [];
    try {
        return JSON.parse(rawTodos);
    } catch (e) {
        console.error("Failed to parse todos from localStorage:", e);
        return [];
    }
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todosKey, JSON.stringify(task));
}