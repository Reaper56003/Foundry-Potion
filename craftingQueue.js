// Queue to handle crafting requests
export const craftingQueue = [];

// Add a crafting request to the queue
export function enqueueRequest(request) {
    craftingQueue.push(request);
}

// Process the next request in the queue
export function dequeueRequest() {
    return craftingQueue.shift();
}

// Example function to process all requests
export function processQueue() {
    while (craftingQueue.length > 0) {
        const request = dequeueRequest();
        console.log(`Processing request for potion: ${request.potionName}`);
    }
}
