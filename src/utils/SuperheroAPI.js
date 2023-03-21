import axios from 'axios';

const BASE_URL = 'https://akabab.github.io/superhero-api/api';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    // Add any logic before sending the request, e.g., add authentication headers
    console.log('Request:', config);
    return config;
  },
  error => {
    // Handle any request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  response => {
    // Add any logic after receiving the response, e.g., handling custom error codes
    console.log('Response:', response);
    return response;
  },
  error => {
    // Handle any response error
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export async function getHero(id) {
  try {
    const response = await apiClient.get(`/id/${id}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hero:', error);
    return null;
  }
}

export async function searchHeroes(query) {
  try {
    const response = await apiClient.get(`/all.json`);
    const allHeroes = response.data;
    if (query) return allHeroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()));
    return allHeroes;
  } catch (error) {
    console.error('Error searching for heroes:', error);
    return [];
  }
}
