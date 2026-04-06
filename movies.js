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
  updaterating(newrating){
    this.#rating=newrating
  }
  display(){
    div.innerHTML="Title: "+this.#title+"<br>Cast: "+this.#cast+"<br>Description: "+this.#description+'<br>Rating: '+this.#rating
  }
}
let movie= new Movie("sashank redemption","Sai SaShank, George","gud movie","10000")
movie.updaterating("6.7")
movie.display()
  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie