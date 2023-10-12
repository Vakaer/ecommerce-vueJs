/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js}"],
	theme: {
		extend: {
			width: {
				"width-24":"24%",
				"width-60": "60%",
				"width-24":"24%",
				"width-73":"73%"
			},
			height:{
				'h-400':'400px'
			},
			fontSize: {
				f14: "14px",
				f16: "16px",
				f28: "28px",
			},
			colors: {
				primary: "#7fad39",
				gray:"#f5f5f5"
			},
			backgroundImage: {
				banner: "url('/src/assets/bg/banner.jpg')",
			},
		},
	},
	plugins: [],
};
