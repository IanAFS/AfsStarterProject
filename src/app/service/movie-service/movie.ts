import { Genre } from "./genre";

export interface Movie{
    movieNumber: number;
    movieTitle: string;
    runtime: string;
    // genre: Genre;
    genre: {
        [key: string]: Genre
    };

}