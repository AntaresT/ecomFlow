import axios from "axios";

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3030/api/products');
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
};