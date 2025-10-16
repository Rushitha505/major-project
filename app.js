import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000; // EB assigns the port

app.get('/', (req, res) => {
  res.send('Hello from Elastic Beanstalk!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
