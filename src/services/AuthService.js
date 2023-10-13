import { ApiUtil } from "@/utils/ApiUtils";
export async function loginUser(data) {
	const res = await ApiUtil.SendAsync({
		url: "auth/login",
		method: "POST",
		data: {
			...data,
		},
	});
	return res;
}
export async function regsiterUser(data) {
	const res = await ApiUtil.SendAsync({
		url: "users",
		method: "POST",
		data: {
			...data,
		},
	});
	return res;
}
