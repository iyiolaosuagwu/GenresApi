const Joi = require('joi');
const express = require('express');
const app = express();

// express json middleware
app.use(express.json());

// genres api obj
const genres = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },
  { id: 4, name: 'Cartoon' },  
  { id: 5, name: 'Animay' },
  { id: 6, name: 'Family' },
];


// get all genres
app.get('/api/genres', (req, res) => {
  res.send(genres);
});

// create new genres
app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});


// update single genres
app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name; 
  res.send(genre);
});


// delete single genres
app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});


// get single genres
app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});


// Joi validate func
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));