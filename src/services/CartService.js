import ApiUtil from "@/utils/ApiUtils";

// Get all cart items
export async function getAllCartItems() {
	try {
		const res = await ApiUtil.SendAsync({
			url: "carts",
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching all cart items:", error);
	}
}
// Get  cart item by id
export async function getCartItemById(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts/${id}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching cart item:", error);
	}
}

//sort cart items ascending or descending
//sortOrder = ascending || descending
export async function sortCartItems(sortOrder) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts?sort=${sortOrder}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error sorting cart items:", error);
	}
}
//get cart items in a date range
//2019-12-10 (YY/MM/DD)
export async function sortCartItemsByDate(startDate, endDate) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts?startdate=${startDate}&enddate=${endDate}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error sorting cart items by date:", error);
	}
}

//get cart items by user
export async function getCartItemByUserId(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts/user/${id}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching cart item:", error);
	}
}


// Add  product in cart
export async function addCartItem(data) {
	try {
		const res = await ApiUtil.SendAsync({
			url: "carts",
			method: "POST",
			body: { ...data },
		});
		return res.data;
	} catch (error) {
		console.error("Error adding a this product to cart:", error);
	}
}
// update product in cart
export async function updateCartItem(id,data) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts/${id}`,
			method: "PATCH",
			body: { ...data },
		});
		return res.data;
	} catch (error) {
		console.error("Error adding updating this product in cart:", error);
	}
}


// delete cart item
export async function getCartItemById(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `carts/${id}`,
			method: "DELETE",
		});
		return res.data;
	} catch (error) {
		console.error("Error deleting cart item:", error);
	}
}
