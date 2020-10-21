import axios from 'axios';

const KEY = 'AIzaSyBT6tV5lhGCIR00KeGAq93wOD0gRs1ELTE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
