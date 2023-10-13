import ApiUtil from "@/utils/ApiUtils";

// Get all users
export async function getAllUsers() {
	try {
		const res = await ApiUtil.SendAsync({
			url: "users",
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching all users:", error);
	}
}

// Get a user by ID
export async function getUserById(id) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `users/${id}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching user by ID:", error);
	}
}

//sort users items ascending or descending
//sortOrder = ascending || descending
export async function sortUsers(sortOrder) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `users?sort=${sortOrder}`,
			method: "GET",
		});
		return res.data;
	} catch (error) {
		console.error("Error sorting users items:", error);
	}
}
//UPDATE USER
export async function updateUser(id, data) {
	try {
		const res = await ApiUtil.SendAsync({
			url: `/users/${id}`,
			method: "PATCH",
			body: {
				...data,
			},
		});
		return res.data;
	} catch (error) {
		console.error("Error fetching user by ID:", error);
	}
}
