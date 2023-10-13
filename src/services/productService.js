import { ApiUtil } from "@/utils/ApiUtils";
// Get all products
export async function getAllProducts() {
	try {
		const res = await ApiUtil.SendAsync({
			url: "products",
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching all products:", error);
	}
}

// Get products by category
export async function getProductsByCategory(category) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `products/category/${category}`,
			method: "GET",
		});
		if (res.status === 200) {
			return res.data;
		} else {
			throw new Error("Failed to retrieve products by category");
		}
	} catch (error) {
		console.error("Error fetching products by category:", error);
	}
}

// Get a product by ID
export async function getProductsById(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `products/${id}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching product by ID:", error);
	}
}

// Add a new product
export async function addProduct(data) {
	try {
		const res = await ApiUtil.SendAsync({
			url: "/products",
			method: "POST",
			body: { ...data },
		});
		return res.data;
	} catch (error) {
		console.error("Error adding a new product:", error);
	}
}

// Update a product by ID
export async function updateProduct(id, data) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `products/${id}`,
			method: "PATCH",
			body: { ...data },
		});
		return res.data;
	} catch (error) {
		console.error("Error updating product by ID:", error);
	}
}

// Delete a product by ID
export async function deleteProduct(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `products/${id}`,
			method: "DELETE",
		});
		return res;
	} catch (error) {
		console.error("Error deleting product by ID:", error);
	}
}
