import { ApiUtil } from "@/utils/ApiUtils";

export async function getAllCategories() {
	// debugger
	const res = await ApiUtil.SendAsync({
		url: "products/categories",
		method: "GET",
	});
	return res;
}
