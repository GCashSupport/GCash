const express = require('express');
const axios = require('axios'); // for making HTTP requests
const app = express();

// Define a route to interact with the website's API
app.get('/gcash', async (req, res) => {
  try {
    // Make a request to the website's API
    const response = await axios.get('https://mobilegcashwallet.com/captchav1.php');
    const data = response.data;

    // Process the response data as needed
    // ...

    res.json(data); // Send the response data back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
