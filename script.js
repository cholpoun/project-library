/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const movies = [
  {
    title: 'The Great Gatsby',
    director: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    runtime: 145,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Proposal',
    director: 'Anne Fletcher',
    year: 2009,
    genre: 'Romantic Comedy',
    rating: 6.8,
    runtime: 108,
    description:
      'The Proposal is the story of a tough editor Margaret Tate (Bullock) who forces her assistant Andrew Tate (Ryan Reynolds) to marry her so she can stay in the U.S.',
    image: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Hippo',
    director: 'Sven Karlsson',
    year: 2022,
    genre: 'Fiction',
    rating: 4.2,
    runtime: 145,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Fish',
    director: 'Anne Fletcher',
    year: 2019,
    genre: 'Romantic Comedy',
    rating: 7.2,
    runtime: 135,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Dog',
    director: 'Pippi Svensson',
    year: 2011,
    genre: 'Drama',
    rating: 0.2,
    runtime: 115,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Baby',
    director: 'Anne Fletcherzon',
    year: 2019,
    genre: 'Comedy',
    rating: 7.2,
    runtime: 125,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
]


/*
const loadMovies = (movies) => {
  movieCard.innerHTML = ""

  // Create card that should be inserted
  movies.forEach((movies) => {
    movieCard.innerHTML +=
      `
    <div class="movie-card"> 
    <h3 class="title"> ${movies.title} </h3>
    <img class="card-img" src=${movies.image}>
    <p> Written by ${movies.director} </p>
    <br>
    <p> <strong>Genre:</strong> ${movies.genre} </p>
    <p> <strong>Published:</strong> ${movies.year} </p>
    <p> <strong>Rating:</strong> ${movies.rating} </p>
    <br>
    <p> ${movies.description} </p>
    <br>
    </div> 
    `
  })
}

loadMovies();

*/

window.onload = function () {
  displayMovies(movies); // Display all movies when the page loads
};

function displayMovies(movieArray) {
  const moviesContainer = document.getElementById('movie-list');
  movieContainer.innerHTML = ''; // Clear any previous content

  movieArray.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.innerHTML = `${movies.title} (${movies.year}) - Rating: ${movies.rating}`;
    movieContainer.appendChild(movieElement);
  });
}

/*
loadMovies();

window.onload = function() {
  displayMovies(movies);  // Display all movies when the page loads
};
function displayMovies(movieArray) {
  const loadMovies = document.getElementById('book-list');
  movies.innerHTML = '';  // Clear any previous content
  movies.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `${movies.title} (${movies.year}) - Rating: ${book.rating}`;
    bookContainer.appendChild(bookElement);
  });
}
*/