/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
// console.log('movie time')

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
  },
]

const container = document.getElementById('container')
// const favourites = document.getElementById('favourites')
// const filterDropdown = document.getElementById('filterDropdown')

const getMovies = (moviesArray) => {
  container.innerHTML = ''
  moviesArray.forEach(movie => {
    container.innerHTML += `
      <div class="card">
      <h3>${movie.title}</h3>
      <img src=${movie.img} alt=${movie.name} />
      <p>Director: ${movie.director}, Year: ${movie.year}</p>
      <p>Genre: ${movie.genre}, Rating: ${movie.rating}</p>
      <p>${movie.description}</p>
      </div>`
  })
}

getMovies(MOVIES);

