import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../utils/constant";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ year, genres }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100${
          genres.length ? `&with_genres=${genres.join(",")}` : ""
        }`
      );

      const jsonData = await response.json();

      return jsonData.results;
    } catch (error) {
      return error;
    }
  }
);

export const fetchGenres = createAsyncThunk("movies/fetchGenres", async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );

    const jsonData = await response.json();
    console.log(jsonData.genres);
    return jsonData.genres;
  } catch (error) {
    return error;
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loading: false,
    error: null,
    selectedGenres: [],
    currentYear: 2012,
  },
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenres.push(action.payload);
    },
    deselectGenre: (state, action) => {
      state.selectedGenres = state.selectedGenres.filter(
        (id) => id !== action.payload
      );
    },
    setYear: (state, action) => {
      state.currentYear = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      });
  },
});

export const { selectGenre, deselectGenre, setYear } = movieSlice.actions;
export default movieSlice.reducer;
