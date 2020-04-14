const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Acess-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '87cyaksbc',
      title:'First Post',
      content: 'First post\'s content'
    },
    {
      id: 'a8sduhaaa',
      title:'Second Post',
      content: 'Second post\'s content'
    }
  ];

  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
})

module.exports = app;
