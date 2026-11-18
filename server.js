import express from 'express';

// 2. Initialize the application
const app = express(); 

// 3. Define the port the server will run on
const PORT = 3000;

// 4. Create our first route (When someone visits the root URL, send this response)
app.get('/', (req, res) => {
    res.json({ message: "AI Media Enhancement SaaS API is running!" });
});

// 5. Start the server and listen for network requests
app.listen(PORT, () => {
    console.log(`Server is live and listening on http://localhost:${PORT}`);
});