const MOVIES = [
  {
    title: 'The Great Gatsby',
    director: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Proposal',
    director: 'Anne Fletcher',
    year: 2009,
    genre: 'Comedy',
    rating: 6.8,
    description:
      'The Proposal is the story of a tough editor Margaret Tate (Bullock) who forces her assistant Andrew Tate (Ryan Reynolds) to marry her so she can stay in the U.S.',
    img: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Hippo',
    director: 'Sven Karlsson',
    year: 2022,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Fish',
    director: 'Anne Fletcher',
    year: 2019,
    genre: 'Comedy',
    rating: 7.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Dog',
    director: 'Pippi Svensson',
    year: 2011,
    genre: 'Drama',
    rating: 0.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: './books-images/the-great-gatsby.jpg'
  },

  {
    title: 'The Baby',
    director: 'Anne Fletcherzon',
    year: 2019,
    genre: 'Comedy',
    rating: 7.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: './books-images/the-great-gatsby.jpg'
  }
]

const container = document.getElementById('container');

const getMovies = (moviesArray) => {
  container.innerHTML = '';
  moviesArray.forEach(movie => {
    container.innerHTML += `
      <div class="card">
        <h3>${movie.title}</h3>
        <img src="${movie.img}" alt="${movie.name}" />
        <p>Director: ${movie.director}, Year: ${movie.year}</p>
        <p>Genre: ${movie.genre}, Rating: ${movie.rating}</p>
        <p>${movie.description}</p>
      </div>`;
  });
}

getMovies(MOVIES);

// Filter movies by genre 

document.getElementById('all-btn').addEventListener('click', function () {
  showMoviesByGenre('all');
});

document.getElementById('comedy-btn').addEventListener('click', function () {
  showMoviesByGenre('Comedy');
});

document.getElementById('drama-btn').addEventListener('click', function () {
  showMoviesByGenre('Drama');
});

// Fiction is used here instead of 'Action' for demo purposes
document.getElementById('action-btn').addEventListener('click', function () {
  showMoviesByGenre('Fiction');
});

function showMoviesByGenre(genre) {
  let filteredMovies = MOVIES;

  if (genre !== 'all') {
    filteredMovies = MOVIES.filter(movie => movie.genre === genre);
  }

  getMovies(filteredMovies);

  // Function to select a random movie
  const showRandomMovie = () => {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * MOVIES.length);

    // Get the random movie
    const randomMovie = MOVIES[randomIndex];
  }

};

// Function to display a random movie
const showRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * MOVIES.length);
  const randomMovie = MOVIES[randomIndex];

  const randomMovieContainer = document.getElementById("randomMovieContainer");
  randomMovieContainer.innerHTML = `
    <div class="card">
      <h3>${randomMovie.title}</h3>
      <img src="${randomMovie.img}" alt="${randomMovie.title}" />
      <p>Director: ${randomMovie.director}, Year: ${randomMovie.year}</p>
      <p>Genre: ${randomMovie.genre}, Rating: ${randomMovie.rating}</p>
      <p>${randomMovie.description}</p>
    </div>
  `;
}

// Add event listener for the "Show Random Movie" button
const randomMovieButton = document.getElementById('random-btn');
randomMovieButton.addEventListener("click", showRandomMovie);



// const filterMovies = () => {
//   // 1. get the value from the select
//   const value = filterDropdown.value

//   if (value === 'all') {
//     // get all the moviess
//     getMovies(MOVIES)
//   } else {
//     // filter the dogs
//     const filteredList = MOVIES.filter(dog => dog.fur === value)
//     console.log('filtered list:', filteredList)
//     getDogs(filteredList)
//   }
// }


// Function to handle sorting
const sortMovies = (sortBy) => {
  let sortedMovies = [...MOVIES]; // Create a copy of the array to sort

  switch (sortBy) {
    case 'title':
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title
      break;
    case 'director':
      sortedMovies.sort((a, b) => a.director.localeCompare(b.director)); // Sort alphabetically by director
      break;
    case 'year':
      sortedMovies.sort((a, b) => b.year - a.year); // Sort by year, latest to oldest
      break;
    case 'rating':
      sortedMovies.sort((a, b) => b.rating - a.rating); // Sort by rating, highest to lowest
      break;
    case 'all':
    default:
      sortedMovies = MOVIES; // No sorting, return to original order
      break;
  }

  // Display the sorted movies
  getMovies(sortedMovies);
};

// Add event listener to the dropdown for sorting
document.getElementById('filterDropdown').addEventListener('change', function () {
  const selectedOption = this.value;
  sortMovies(selectedOption);
});
