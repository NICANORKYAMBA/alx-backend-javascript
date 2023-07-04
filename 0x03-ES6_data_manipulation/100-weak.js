// Create a new WeakMap instance
export const weakMap = new WeakMap();

// Function to query the API
export function queryAPI(endpoint) {
  // Get the query count for the endpoint from the WeakMap
  let queryCount = weakMap.get(endpoint) || 0;

  // Increment the query count
  queryCount += 1;

  // Update the query count in the WeakMap
  weakMap.set(endpoint, queryCount);

  // Check if the query count is >= 5
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
