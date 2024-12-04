// Stack for intermediate crafting tasks
export const craftingStack = [];

// Push a task onto the stack
export function pushTask(task) {
    craftingStack.push(task);
}

// Pop the latest task from the stack
export function popTask() {
    return craftingStack.pop();
}

// Example function to process all tasks in the stack
export function processTasks() {
    while (craftingStack.length > 0) {
        const task = popTask();
        console.log(`Processing task: ${task}`);
    }
}
