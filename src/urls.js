import {API_KEY} from './Constants/constants'
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const horrors = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;


