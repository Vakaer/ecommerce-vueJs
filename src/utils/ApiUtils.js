import AppInstance from "@/config/GlobalAxios";
export class ApiUtil {
	constructor() {}

	static async SendAsync(requestObject) {
		// debugger
		try {
			const res = await AppInstance(requestObject);
			return res;
		} catch (error) {
			throw error;
		}
	}
}
