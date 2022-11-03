import axios from 'axios';

export async function getImg(searchValue, page) {
  const params = new URLSearchParams({
    key: '31044778-b32f7b2c13ee5e474f3d777e0',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
    page,
  });

  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${params}`,
    });
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
