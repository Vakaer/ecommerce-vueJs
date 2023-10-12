import { ApiUtil } from "@/utils/ApiUtils";
export async function loginUser(data) {
	debugger
	const res = await ApiUtil.SendAsync({
		url: "auth/login",
		method: "POST",
		data: {
			...data,
		},
	});
	return res;
}
