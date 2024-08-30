import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "cfbf9464e14f94eb714117ea35d307b8";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ year, genres }, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100${
          genres.length ? `&with_genres=${genres.join(",")}` : ""
        }`
      );

      const jsonData = await response.json();

      return jsonData.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
  reducers: {},
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
      });
  },
});

export const { selectGenre, deselectGenre, setYear } = movieSlice.actions;
export default movieSlice.reducer;
