
export const fetchDataFromApi = async () => {
    try {
      const result = await fetch('https://dummyjson.com/products');
      const data = await result.json();
      // console.log('Fetched data:', data);

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  