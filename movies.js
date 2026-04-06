// Define the Movie class
const div=document.getElementById("movie-info")
class Movie{
  #title
  #cast
  #description
  #rating
  constructor(title,cast,description,rating){
    this.#title=title;
    this.#cast=cast;
    this.#description=description;
    this.#rating=rating;
  }
  updateRating(newRating){
    this.#rating=newRating
  }
  display(){
    div.innerHTML+="Title: "+this.#title+"<br>Cast: "+this.#cast+"<br>Description: "+this.#description+'<br>Rating: '+this.#rating
  }
  titleAccess(){
    return this.#title
  }
}
let movie= new Movie("sashank redemption","Sai SaShank, George","gud movie","10000")
movie.updateRating("6.7")
movie.display()
let movie2=new Movie("gone with wind","rhett butler, sclarlet oahra","based","1000000")
let movies=[movie,movie2]

 function updateMovieRating(title,newRating){
  
  for(let i=0; i<movies.length;i++){
    
    var movtitle=movies[i].titleAccess()
    if (movtitle===title){
      movies[i].updateRating(newRating)
      div.innerHTML+="<br><br><strong>New Info:</strong> <br>"
      movies[i].display()
    }
  }
    
  }
  updateMovieRating("sashank redemption",1234)
  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie

