import "./styles/main.scss";

// -- Start of configuration setting/variables
// TMDB configurations
const API_KEY = "api_key=280cea638de62fa610523ecbebf23321";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

// variables
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const controlPanelEl = document
  .getElementById("control-panel")
  .querySelector(".container");
const pagination = document.querySelector(".pagination");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");
const logo = document.querySelector(".logo");
const favoritesButton = createButton("Favorites", showFavorites);
const removeAllButton = createButton("Remove All", removeAllFavorites);

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = "";
let totalPages = 100;
let selectedGenre = [];

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 53, name: "Thriller" },
  { id: 37, name: "Western" },
  { id: 878, name: "Science Fiction" },
  { id: 9648, name: "Mystery" },
  { id: 10751, name: "Family" },
  { id: 10402, name: "Music" },
  { id: 10749, name: "Romance" },
  { id: 10770, name: "TV Movie" },
  { id: 10752, name: "War" },
];
//* End of configuration setting/variables



// --- Start of movie component 
class Movie {
  constructor({ title, poster_path, id, release_date }) {
    this.title = title;
    this.poster_path = poster_path;
    this.id = id;
    this.release_date = release_date;
  }

  formatDate() {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(this.release_date).toLocaleDateString(undefined, options);
  }

  createMovieElement() {
    const formattedReleaseDate = this.formatDate();
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.dataset.movieId = this.id;

    movieEl.innerHTML = `
      <img src="${
        this.poster_path
          ? IMG_URL + this.poster_path
          : "http://via.placeholder.com/1080x1580"
      }" alt="${this.title}">
      <div class="movie-info">
          <h3>${this.title}</h3>
          <span>${formattedReleaseDate}</span>
      </div>
    `;

    const addToFavoriteButton = createButton("+", () => addToFavorites(this));
    addToFavoriteButton.classList.add("add-to-favorite");
    movieEl.appendChild(addToFavoriteButton);

    return movieEl;
  }
}

// Usage
function showMovies(data) {
  main.innerHTML = "";
  console.log(data);

  data.forEach((movieData) => {
    const movie = new Movie(movieData);
    const movieEl = movie.createMovieElement();
    main.appendChild(movieEl);
  });
}

async function getMovies(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length !== 0) {
      showMovies(data.results);
      currentPage = data.page;
      nextPage = currentPage + 1;
      prevPage = currentPage - 1;
      totalPages = data.total_pages;

      current.innerText = currentPage;

      prev.classList.toggle("disabled", currentPage <= 1);
      next.classList.toggle("disabled", currentPage >= totalPages);

      controlPanelEl.scrollIntoView({ behavior: "smooth" });
    } else {
      main.innerHTML = `<h1 class="no-results">No Results Found</h1>`;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
//* End of movie component



// --- Start of Modal
// Function to create a new modal element
function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.removeChild(modal);
    adjustModalPositions();
  };

  const modalMessage = document.createElement("p");
  modalMessage.classList.add("modal-message");

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalMessage);
  modal.appendChild(modalContent);

  return modal;
}

// Function to adjust the positions of modals
function adjustModalPositions() {
  const modals = document.querySelectorAll(".modal");
  let topOffset = 60;

  modals.forEach((modal, index) => {
    modal.style.top = topOffset + "px";
    topOffset += modal.offsetHeight + 10;
  });
}
// * End of Modal




// --- Start Genre
setGenre();

function setGenre() {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown");

  const dropdownButton = document.createElement("button");
  dropdownButton.innerText = "Genres";
  dropdownButton.classList.add("dropbtn");

  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  genres.forEach((genre) => {
    const t = document.createElement("div");
    t.classList.add("tag");
    t.id = genre.id;
    t.innerText = genre.name;
    t.addEventListener("click", () => {
      toggleGenreSelection(genre.id);
    });
    dropdownContent.append(t);
  });

  dropdownContainer.appendChild(dropdownButton);
  dropdownContainer.appendChild(dropdownContent);
  controlPanelEl.appendChild(dropdownContainer);
}

function toggleGenreSelection(id) {
  const index = selectedGenre.indexOf(id);
  if (index !== -1) {
    selectedGenre.splice(index, 1);
  } else {
    selectedGenre.push(id);
  }

  getMovies(API_URL + "&with_genres=" + encodeURI(selectedGenre.join(",")));
  highlightSelection();
}

function highlightSelection() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => tag.classList.remove("highlight"));

  if (selectedGenre.length !== 0) {
    selectedGenre.forEach((id) => {
      const highlightedTag = document.getElementById(id);
      highlightedTag && highlightedTag.classList.add("highlight");
    });
  }
}
// *End Genre




// --- Start of Favorites functionality
// Add class 'favorites' and appent to controlPanel
favoritesButton.classList.add("favorite");
controlPanelEl.appendChild(favoritesButton);

// Function to add a movie to favorites
function addToFavorites(movie) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Create a new modal element
  const newModal = createModal();
  document.body.appendChild(newModal);

  const modalMessage = newModal.querySelector(".modal-message");

  if (modalMessage) {
    const modalNumber = document.querySelectorAll(".modal").length + 1;
    newModal.dataset.modalNumber = modalNumber;

    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      modalMessage.textContent = `Movie added to favorites!`;
    } else {
      modalMessage.textContent = `Movie is already in favorites!`;
    }

    // Display the new modal
    newModal.style.display = "block";

    // Adjust the position of the new modal
    adjustModalPositions();

    // Close the new modal after 10 seconds
    setTimeout(() => {
      // Check if the newModal is still a child of the document.body
      if (document.body.contains(newModal)) {
        newModal.style.display = "none";
        // Remove the new modal from the DOM after it disappears
        document.body.removeChild(newModal);
        // Adjust the position of remaining modals
        adjustModalPositions();
      } else {
        console.error("newModal is not a child or was already deleted");
      }
    }, 3000);
  } else {
    console.error("Modal message element not found");
  }
}

// Function to show favorites
function showFavorites() {
  // Retrieve favorites from local storage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Display favorites in the main container
  showMovies(favorites);
  pagination.classList.add("hidden");

  // Toggle visibility of "Remove All" button based on whether there are favorites
  removeAllButton.style.display =
    favorites.length > 0 ? "inline-block" : "none";

  // Attach a "Remove from Favorite" button for each movie
  const movieElementsFromFavorite = document.querySelectorAll(".movie");
  movieElementsFromFavorite.forEach((element) => {
    const movieId = element.dataset.movieId;
    const removeFromFavoriteButton = createButton("X", () =>
      removeFromFavorites(movieId)
    );
    removeFromFavoriteButton.classList.add("remove-from-favorite");

    element.appendChild(removeFromFavoriteButton);
  });

  // Add the 'hidden' class to all elements with the class 'add-to-favorite'
  const addToFavoriteButtons = document.querySelectorAll(".add-to-favorite");
  addToFavoriteButtons.forEach((button) => {
    button.classList.add("hidden");
  });

  // Update the URL to include '/favorite'
  history.pushState(null, null, "/favorite");

  // Check if there are no favorites
  if (favorites.length === 0) {
    // Create a paragraph element with a message
    const noFavoritesMessage = document.createElement("p");
    noFavoritesMessage.innerHTML =
      `You have no favorite movies. Add some movies to your favorites! </br>
              If you want to see all the movies, click the logo`;

    noFavoritesMessage.classList.add("no-favorite-message");
    // Append the message to the body
    main.appendChild(noFavoritesMessage);
    // Hide the "Remove All" button
    removeAllButton.style.display = "none";
  }
}

// Function to remove all movies from favorites
function removeAllFavorites() {
  // Clear favorites in local storage
  localStorage.removeItem("favorites");

  // Display updated favorites (which will be an empty array)
  showFavorites();
}

// Add class 'remove-all' and append to controlPanel
removeAllButton.classList.add("remove-all");
controlPanelEl.appendChild(removeAllButton);
removeAllButton.style.display = "none"; // Hide initially

// Remove from favorite function
function removeFromFavorites(movieId) {
  // Retrieve existing favorites from local storage or initialize an empty array
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the movie is in favorites
  const updatedFavorites = favorites.filter(
    (fav) => String(fav.id) !== String(movieId)
  ); // Compare as strings

  if (updatedFavorites.length !== favorites.length) {
    // Update the local storage with the new favorites array
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Display updated favorites
    showFavorites();
  }
  else {
    modalMessage.textContent = "Movie is not in favorites!";
  }
}

// when resize
// Function to update the button text based on screen width
function updateButtonText() {
  // Check if the screen width is greater than 992px
  if (window.innerWidth > 992) {
    favoritesButton.innerHTML = "Favorites";
    removeAllButton.innerHTML = "Remove All";
  } else {
    // Use the heart icon if the screen width is 992px or smaller
    favoritesButton.innerHTML = "&#10084;";
    removeAllButton.innerHTML = "&#128465;";
  }
}

// Add an event listener to update the button text on window resize
window.addEventListener("resize", updateButtonText);

// Call the function initially to set the button text
updateButtonText();
//* End of favorite functionality



// --- Start of header functionality
// Add an event listener to the logo
logo.addEventListener("click", function () {
  // Remove '/favorite' from the URL
  history.pushState(null, null, "/");
  pagination.classList.remove('hidden');
  // Call the function to show the home page content
  getMovies(API_URL);
});

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  selectedGenre = [];
  setGenre();

  // Use template literals for string concatenation
  const url = searchTerm ? `${searchURL}&query=${searchTerm}` : API_URL;
  getMovies(url);
});
// *End of header functionality

// --- Start of general functions
function createButton(text, clickHandler) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", clickHandler);
  return button;
}
// *End of general functions



// --- Start pagination
// Refactored pageCall function
function pageCall(page) {
  // Check if lastUrl is defined before splitting
  if (lastUrl) {
    const urlSplit = lastUrl.split("?");
    const queryParams = urlSplit[1] ? urlSplit[1].split("&") : [];
    const key = queryParams[queryParams.length - 1]
      ? queryParams[queryParams.length - 1].split("=")
      : [];

    // Use ternary operator for cleaner conditional
    const url =
      key[0] !== "page"
        ? `${lastUrl}&page=${page}`
        : `${urlSplit[0]}?${queryParams.join("&")}&${key[0]}=${page}`;

    getMovies(url);
  } else {
    console.error("lastUrl is undefined");
  }
}

// Event listener for previous button
prev.addEventListener("click", () => {
  if (prevPage > 0) {
    // Update lastUrl before calling pageCall
    lastUrl = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&page=${prevPage}`;
    const loader = document.getElementById("loader-wrapper");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none"; // Hide the loader after 500 milliseconds
      pageCall(prevPage);
    }, 500);
  }
});

// Event listener for next button
next.addEventListener("click", () => {
  if (nextPage <= totalPages) {
    // Update lastUrl before calling pageCall
    lastUrl = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&page=${nextPage}`;
    const loader = document.getElementById("loader-wrapper");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
      pageCall(nextPage);
    }, 500);
  }
});
// *End pagination




// --- start loader
document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.getElementById("loader-wrapper");

  // Check if the element exists before accessing its style
  if (loaderWrapper) {
    // Display the loader and overlay
    loaderWrapper.style.display = "block";

    // Hide the loader and overlay after 5 seconds
    setTimeout(function () {
      loaderWrapper.style.display = "none";
    }, 500);
  } else {
    console.error('Element with ID "loader-wrapper" not found');
  }
});
// *End the loader




// Shows the *home page 
getMovies(API_URL);
