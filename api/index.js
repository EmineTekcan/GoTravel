import axios from "axios";


export const getPlaces = async () => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
    params: {
      longitude: '28.97953',
      latitude: '41.015137',
      lunit: 'km',
      limit: '10'
    },
    headers: {
      'X-RapidAPI-Key': '6576653bb4mshbaa5503b12cec53p140bbajsn545e0756ea61',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data?.data;
  } catch (error) {
    console.error(error);
  }
}


export const getRestaurants = async () => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: '41.015137',
      longitude: '28.97953',
      limit: '10',
      lunit: 'km',
    },
    headers: {
      'X-RapidAPI-Key': '69a6e16f8cmsh7edb59c79ba381ap1388d5jsn60568fa06fea',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data?.data;
  } catch (error) {
    console.error(error);
  }
}


