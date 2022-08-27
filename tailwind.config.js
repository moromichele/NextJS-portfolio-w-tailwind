/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		extend: {
			animation: {
				lights: "lights 2.5s",
				softlights: "softlights 2.2s",
			},
			screens: {
				xsm: "380px",
			},
			keyframes: {
				lights: {
					"0%, 10%": {
						opacity: "0.0",
					},
					"11%,50%": {
						opacity: "0.7",
						"text-shadow": "0px 0px 5px #FFFFFF",
					},

					"20%,36%": {
						opacity: "0.5",
						"text-shadow": "0px 0px 4px #FFFFFF",
					},
					"12%, 18%, 35%, 52%": {
						opacity: "0.1",
						"text-shadow": "0px 0px 1px #FFFFFF",
					},
					"60%": {
						opacity: "0.7",
						"text-shadow": "0px 0px 4px #FFFFFF",
					},
					"100%": {
						"text-shadow": "0px 0px 7px #FFFFFF",
						opacity: "1",
					},
				},
				softlights: {
					"0%, 10%": {
						opacity: "0.0",
					},
					"11%,50%": {
						opacity: "0.7",
						"text-shadow": "0px 0px 3px #FFFFFF",
					},

					"20%,36%": {
						opacity: "0.5",
						"text-shadow": "0px 0px 2px #FFFFFF",
					},
					"12%, 18%, 35%, 52%": {
						opacity: "0.1",
						"text-shadow": "0px 0px 1px #FFFFFF",
					},
					"60%": {
						opacity: "0.7",
						"text-shadow": "0px 0px 2px #FFFFFF",
					},
					"100%": {
						"text-shadow": "0px 0px 2px #FFFFFF",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
