const getDataApi = async ({ limit, offset }) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getDataApi;
