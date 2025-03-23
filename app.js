// Import the required modules
import express from "express"; // Import the Express framework for building web applications
import axios from "axios"; // Import Axios for making HTTP requests
import dotenv from "dotenv"; // Import dotenv for loading environment variables

// Load environment variables from .env file
dotenv.config();

// Set the port for the server to listen on, either from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
// Define the API key for authorization with the external API
const API_KEY = process.env.API_KEY;// Load the API key from environment variables


// Initialize an instance of an Express application
const app = express();

// Define a GET endpoint at  ('/') that indicating that the server is running
app.get('/', (req, res) => res.send('Render service application is running'));

// Define a GET endpoint at '/services' that fetches service data
app.get("/services", async (req, res) => {
    try {
        // Make a GET request to the external API to retrieve service data
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}` // Include API key in the Authorization header
            },
        });

        // Send the retrieved service data as a JSON response
        res.json(response.data);
    } catch (error) {
        // Log any errors that occur during the request
        console.error(error);
        // Send a 500 status code and a JSON error message back to the client
        res.status(500).json({ error: 'Error fetching services' });
    }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("Runnnn"); // Log a message indicating that the server is running
});
