import { BASE_URL } from "@/constants/api";
import axios from "axios";

const AppInstance = axios.create({
	baseURL: BASE_URL,
});

AppInstance.interceptors.request.use(
	async (req) => {
		const token = await localStorage.getItem("token");
		req.headers["Access-Control-Allow-Origin"] = "*";
		req.headers["Content-Type"] = "application/json";
		req.headers["Accept"] = "*/*";
		req.headers.Authorization = `Bearer ${token}`;

		return req;
	},
	(err) => {
		console.log("Error axios interceptor", err);
		throw err;
	}
);

AppInstance.interceptors.response.use(
	(response) => {
		// console.log("Response of axios : ", response);
		return response;
	},
	(error) => {
		console.log("Error axios interceptor", error.response.data.error);
		throw error;
	}
);

export default AppInstance;
