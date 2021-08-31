import { TheatorRoom } from "./theatorRoom";
import { Movie } from "./movie";

export interface RoomSeats{
    seatsId: number;
    timeSlot: Date;
    seatsSold: number;
    theatorRoom: {
        [key: string]: TheatorRoom
    };
    movie: {
        [key: string]: Movie
    };
}