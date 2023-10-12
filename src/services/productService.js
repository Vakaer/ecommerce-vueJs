import { ApiUtil } from "@/utils/ApiUtils";
export async function getAllProducts() {
	// debugger
	const res = await ApiUtil.SendAsync({
		url: "products",
		method: "GET",
	});
	return res;
}
