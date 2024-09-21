const MOVIES = [
  {
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genre: 'Action',
    rating: 8.1,
    description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical leader and his army.',
    img: 'https://neiloseman.com/wp-content/uploads/2015/05/cars.jpg'
  },
  {
    title: 'John Wick',
    director: 'Chad Stahelski',
    year: 2014,
    genre: 'Action',
    rating: 7.4,
    description: 'An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    img: 'https://images.squarespace-cdn.com/content/v1/58c9b86bd1758e1f19dec72a/1501069711610-DG98OOT2PVRWH7K317BJ/SKC+Blog+Hero+John+Wick+2+BW.jpg'
  },
  {
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    genre: 'Sci-Fi',
    rating: 8.7,  // IMDb rating as of September 2024
    description: 'A mysterious black monolith is discovered on the moon, leading to a journey of exploration and philosophical contemplation.',
    img: 'https://ychef.files.bbci.co.uk/1280x720/p0639ffn.jpg'
  },
  {
    title: 'Die Hard',
    director: 'John McTiernan',
    year: 1988,
    genre: 'Action',
    rating: 8.2,
    description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.',
    img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/die-hard-movies-ranked.jpg'
  },

  {
    title: 'The Hangover',
    director: 'Todd Phillips',
    year: 2009,
    genre: 'Comedy',
    rating: 7.7,
    description: 'Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.',
    img: 'https://cdn.europosters.eu/image/750/posters/the-hangover-strips-i8824.jpg'
  },
  {
    title: 'Superbad',
    director: 'Greg Mottola',
    year: 2007,
    genre: 'Comedy',
    rating: 7.6,
    description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to throw a party goes awry.',
    img: 'https://media.vanityfair.com/photos/62fa88ecd703349a746d4ea2/4:3/w_1776,h_1332,c_limit/vf-822-superbad-making-of-005.jpg'
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
  {
    title: 'Jurassic Park',
    director: 'Steven Spielberg',
    year: 1993,
    genre: 'Sci-Fi',
    rating: 8.3, // IMDb rating as of September 2024 
    description: 'A theme park featuring cloned dinosaurs is opened, but things go wrong when the dinosaurs escape.',
    img: 'LINK'

  },
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
  {
    title: 'Blue Valentine',
    director: 'Derek Cianfrance',
    year: 2010,
    genre: 'Drama',
    rating: 8.1,  // IMDb rating as of September 2024
    description: `A couple's relationship deteriorates over the course of several years as they navigate the challenges of love, marriage, and parenthood.`,
    img: 'LINK'
  },
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
    title: 'Gladiator',
    director: 'Ridley Scott',
    year: 2000, genre: 'Drama',
    rating: 8.7, // IMDb rating as of September 2024 
    description: 'A Roman general is betrayed and sold into slavery, forced to fight as a gladiator in the Colosseum. He seeks revenge against the emperor who ruined his life.',
    img: 'LINK'
  },
  {
    title: 'Dogville',
    director: 'Lars von Trier',
    year: 2003,
    genre: 'Drama',
    rating: 8.0, // IMDb rating as of September 2024 
    description: 'A woman on the run from the mob seeks refuge in a small town, but the townspeople gradually become increasingly hostile and controlling.',
    img: 'LINK'
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
  },
  {
    title: 'Raiders of the Lost Ark',
    director: 'Steven Spielberg',
    year: 1981,
    genre: 'Action',
    rating: 8.7, // IMDb rating as of September 2024 
    description: 'Archaeologist Indiana Jones embarks on a perilous quest to find the Ark of the Covenant before it falls into the wrong hands.',
    img: 'LINK'

  },
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
