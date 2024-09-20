const MOVIES = [
  // Action Movies
  {
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genre: 'Action',
    rating: 8.1,
    description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical leader and his army.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjQzOTM2NDAzMV5BMl5BanBnXkFtZTgwNTM5OTQ1NTE@._V1_.jpg'
  },
  {
    title: 'John Wick',
    director: 'Chad Stahelski',
    year: 2014,
    genre: 'Action',
    rating: 7.4,
    description: 'An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjIwMjI3NTc2M15BMl5BanBnXkFtZTgwNzAyMjU5MDE@._V1_.jpg'
  },
  {
    title: 'Die Hard',
    director: 'John McTiernan',
    year: 1988,
    genre: 'Action',
    rating: 8.2,
    description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjIxMzc1NjA3Nl5BMl5BanBnXkFtZTgwNzQ4MzI3MTE@._V1_.jpg'
  },

  // Comedy Movies
  {
    title: 'The Hangover',
    director: 'Todd Phillips',
    year: 2009,
    genre: 'Comedy',
    rating: 7.7,
    description: 'Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.',
    img: 'https://m.media-amazon.com/images/M/MV5BMTYzMjk5NjE5MF5BMl5BanBnXkFtZTcwMTEyOTg2Mg@@._V1_.jpg'
  },
  {
    title: 'Superbad',
    director: 'Greg Mottola',
    year: 2007,
    genre: 'Comedy',
    rating: 7.6,
    description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to throw a party goes awry.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjA2NzI2NTAzNl5BMl5BanBnXkFtZTcwNzk0MzYwMw@@._V1_.jpg'
  },
  {
    title: 'Anchorman: The Legend of Ron Burgundy',
    director: 'Adam McKay',
    year: 2004,
    genre: 'Comedy',
    rating: 7.2,
    description: 'Ron Burgundy is the top-rated newsman in San Diego in the 1970s, but that\'s all about to change for him and his cronies.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjI3Mzk4NzQ2MF5BMl5BanBnXkFtZTcwMzM5NzcyMQ@@._V1_.jpg'
  },

  // Drama Movies
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    img: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDIzLWJmNzUtYmFlZDQxODBmNzQ2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    genre: 'Drama',
    rating: 8.8,
    description: 'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
    img: 'https://m.media-amazon.com/images/M/MV5BNWIwODk3NmQtNzFjNC00MjhkLWJlZjItYmRjNDRhZmNkNTRlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    genre: 'Drama',
    rating: 9.2,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwNi00ZjQ5LWFmNDEtODM1ZjRlNzJmNTRlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },

  // Sci-Fi Movies
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
    img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3Y2EtYWMwMy00NTBmLWIzNTEtNTc3ZTA0YzNlNmQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  },
  {
    title: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    year: 1999,
    genre: 'Sci-Fi',
    rating: 8.7,
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    img: 'https://m.media-amazon.com/images/M/MV5BNzQzZjA3ZjktNzEwYS00MjQ3LTkzM2ItOTQ5OTg1OTdjNzc1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },
  {
    title: 'Blade Runner 2049',
    director: 'Denis Villeneuve',
    year: 2017,
    genre: 'Sci-Fi',
    rating: 8.0,
    description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who\'s been missing for thirty years.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjE2NTQ0OTg0OF5BMl5BanBnXkFtZTgwNjUwOTg2MzI@._V1_.jpg'
  }
];


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

document.getElementById('sci-fi-btn').addEventListener('click', function () {
  showMoviesByGenre('Sci-Fi');
});


// Fiction is used here instead of 'Action' for demo purposes
document.getElementById('action-btn').addEventListener('click', function () {
  showMoviesByGenre('Action');
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
