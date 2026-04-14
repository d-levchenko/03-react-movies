# 03-react-movies

A React application for searching and displaying movies using The Movie Database
(TMDB) API.

## Features

- Search for movies by title or keyword
- Display a list of movies with their titles, release dates, and ratings
- Display a modal with more information about a selected movie, including its
  poster, genres, and overview
- Handle errors and loading states

## Installation

To install the application, clone the repository and run `npm install` in the
root directory.

## Usage

To start the application, run `npm run dev` in the root directory. The
application will be available at `http://localhost:5173`.

## Configuration

The application uses the following environment variables:

- `VITE_TMDB_TOKEN`: The API token for The Movie Database (TMDB) API.

To configure the application, create a `.env` file in the root directory with
the following content:
