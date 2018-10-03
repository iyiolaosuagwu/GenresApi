Building RESTful APIs with Express
This is a simple basic Movie Api that concentrates on the core concept of node.js.

So, in this Api Project,you will learn that:
- REST defines a set of conventions for creating HTTP services:
- POST: to create a resource
- PUT: to update it
- GET: to read it
- DELETE: to delete it
- Express is a simple, minimalistic and lightweight framework for building web servers.

 in the api we have a pretty basic object holding our data from the database to help us concentrate on node itself and no need working with a database.
 
// genres api obj
const genres = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },
  { id: 4, name: 'Cartoon' },  
  { id: 5, name: 'Animay' },
  { id: 6, name: 'Family' },
];
