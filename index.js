function knightMoves(start, end) {
    const directions = [
      [2, 1], [2, -1], [-2, 1], [-2, -1], // 2 squares in one direction
      [1, 2], [1, -2], [-1, 2], [-1, -2]  // 2 squares in another direction
    ];
  
    // Function to check if a square is within bounds (8x8 chessboard)
    const isValid = (pos) => pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
  
    // BFS setup
    let queue = [[start]];  // Queue stores paths
    let visited = new Set(); // Set to track visited positions
    visited.add(start.toString());
  
    while (queue.length > 0) {
      let path = queue.shift(); // Get the current path
  
      let current = path[path.length - 1]; // Get the last square in the current path
  
      // If we reach the target, return the path
      if (current[0] === end[0] && current[1] === end[1]) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        return path;
      }
  
      // Explore all possible knight moves
      for (let dir of directions) {
        let next = [current[0] + dir[0], current[1] + dir[1]];
  
        // If the next square is valid and not visited, add it to the queue
        if (isValid(next) && !visited.has(next.toString())) {
          visited.add(next.toString());
          queue.push([...path, next]); // Add the new path to the queue
        }
      }
    }
  }