
* Usage

  * Send a POST request to save a movie in the MongoDB database
  ```
  curl -d "title=avatar&yearReleased=2017&star=ewok" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:7000/movies
  ```
  * -X POST http://localhost:7000/movies --data @seeds/movies.jason -H "Content-Type: application/jason"

* Troubleshooting
  * If you can't access the form parameters in `req.body` that were sent through as a POST request to the endpoint, then ensure that you have setup `body-parser` correctly.


//Cretae A MOVIE AND ASSIGN A director
var movie,personSchema
Movie.findById('...").then (m=>movie=m)
Person.findById('...').then(p=>person=p);


// NOW THAT I HAVE MOVIE AND PERSON INITIALISED

movie.director=person;
movie.save() A PRONISE IS RETURNED BUT DISREGARD

//LATER, GO GET THE MOVIE AND POPULATE THE director

Movie.findById(‘… ‘).
	populate(‘director’)
	.populate(‘cast.actor’)
	.populate(‘cast.character’)
	.populate(‘crew.person’)
	.then (m=> movie=m)

yarn add server session
yarn add jsonwebtoken passport-jwt
