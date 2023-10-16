/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js}"],
	theme: {
		extend: {
			width: {
				"width-22":"22%",
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
				f44: "44px",
			},
			colors: {
				primary: "#7fad39",
				secondary:"#219ebc"
			},
			backgroundImage: {
				banner: "url('/src/assets/bg/banner.jpg')",
			},
			lineHeight:{
				"11":"2.75rem",
				"12":"3rem",
				"13":"3.25rem",
			}
		},
	},
	plugins: [],
};
