import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
<div class="movie-details">
  <h1>${movie.title}</h1>
  <div class="movie-detials-info">
    ${toMovieDetailed(movie)}
  </div>
</div>`;

export const toMovieSimple = (movie) => `
<div class="movie-card">
  <h2>${movie.title}</h2>
  <h3>${movie.year}</h3>
  <div class="movie-card-img">
    <img src="${movie.poster}"/>
  </div>
  <div class="movie-card-btns">
    <button class="category-movie details-btn" id="${movie.id}">View detials</button>
    <span class="favorite" data-movie-id="${movie.id}">${renderFavoriteStatus(movie.id)}</span>
  </div>
</div>
`;


const toMovieDetailed = (movie) => `
<div class="movie-details-img">
    <img src="${movie.poster}">
</div>
<div class="movie-details-about">
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Staring: ${movie.stars.join(', ')}</p>
    <p>Plot: ${movie.description}</p>
</div>
`;
