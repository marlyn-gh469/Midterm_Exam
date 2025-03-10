
let tasks = [];
let taskId = 1; 


function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log(`Task added:`, task);
}


function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Task List:");
        tasks.forEach(task => console.log(task));
    }
}


function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated:`, task);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted:`, deletedTask[0]);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


addTask("Buy groceries", "Milk, Bread, Eggs");
addTask("Study JavaScript", "Learn about CRUD operations");
viewTasks();
updateTask(1, "Buy groceries", "Milk, Bread, Eggs, Butter");
deleteTask(2);
viewTasks();
