import axios from 'axios';

const API_KEY = '736e934f96a448adb65203305250707'; // ¡Reemplaza esto!
const BASE_URL = 'https://api.weatherapi.com/v1';

// Buscar ciudades coincidentes
export const searchCities = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
    );
    return response.data.map((city) => ({
      name: `${city.name}, ${city.country}`,
      id: `${city.id}`,
    }));
  } catch (error) {
    throw new Error('Error al buscar ciudades');
  }
};

// Obtener clima de una ciudad específica
export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    return {
      city: `${response.data.location.name}, ${response.data.location.country}`,
      temp: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: `https:${response.data.current.condition.icon.replace('64x64', '128x128')}`,
    };
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Error al obtener el clima');
  }
};


