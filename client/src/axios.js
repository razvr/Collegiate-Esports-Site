import axios from 'axios';

export function schools_GetAll() {
    return axios.get( '/api/schools' );
}

export function games_GetAll() {
    return axios.get( '/api/games' );
}