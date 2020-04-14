const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.get('/api/posts', (req, res, next) => {
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
