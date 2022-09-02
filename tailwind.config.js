/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				istok: ["Istok Web", "sans-serif"],
			},
			animation: {
				lights: "lights 2.5s",
				softlights: "softlights 2.2s",
				scrollText: "scrollText 13s linear infinite",
			},
			screens: {
				xsm: "380px",
				'desktophover': {'raw': '(hover: hover)'},
			},
			keyframes: {
				lights: {
					"0%, 10%": {
						opacity: "0.0",
					},
					"11%,50%": {
						opacity: "0.7",
						"text-shadow": "0px 0px 4px #FFFFFF",
					},

					"20%,36%": {
						opacity: "0.5",
						"text-shadow": "0px 0px 3px #FFFFFF",
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
						"text-shadow": "0px 0px 5px #FFFFFF",
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
				scrollText: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(-300%)",
					},
				},
			},
		},
	},
	plugins: [],
};
