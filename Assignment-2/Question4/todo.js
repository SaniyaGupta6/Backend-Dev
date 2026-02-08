const http = require('http');// Import http module
let todos = [];// Array to store todos in memory
let nextId = 1;// Variable for auto-increment id
const server = http.createServer((req, res) => {// Create server    
    if (req.url === '/todos' && req.method === 'GET') {// GET all todos
       
        res.writeHead(200, { 'Content-Type': 'application/json' });// Send JSON response
        res.end(JSON.stringify(todos));
    }
   
    else if (req.url === '/todos' && req.method === 'POST') {// POST new todo
        let body = ''; // store request data        
        req.on('data', chunk => body += chunk);// Collect data chunks
       
        req.on('end', () => {// When data is fully received
            const todo = JSON.parse(body); // convert JSON to object
            todo.id = nextId++; // assign id
            todos.push(todo); // store in array
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todo));
        });
    }    
    else if (req.url.startsWith('/todos/') && req.method === 'DELETE') {// DELETE todo by id
        const id = parseInt(req.url.split('/')[2]); // get id from URL        
        todos = todos.filter(t => t.id !== id);// Remove todo with given id
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Deleted" }));
    }    
    else {// If route not found
        res.writeHead(404);
        res.end('Not Found');
    }
});
server.listen(3000, () => {// Start server on port 3000
    console.log("TODO server running on port 3000");
});
