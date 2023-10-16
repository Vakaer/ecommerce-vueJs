import { getProductsById } from '@/services/productService';
import { ref } from 'vue';

export function useProductDetails() {
  const productDetails = ref([]);

  async function fetchProductDetails(id) {
    try {
      const response = await getProductsById(id); // Replace with your actual API call
      if (response) {
        productDetails.value.push(response.data);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  return { productDetails, fetchProductDetails };
}
