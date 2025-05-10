import "../styles/globals.css"
import { ThemeProvider } from "/context/ThemeContext"
import { Istok_Web } from "next/font/google"

const istok = Istok_Web({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-istok",
	display: "swap",
})

function MyApp({ Component, pageProps }) {
	return (
		<div className={istok.className}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</div>
	)
}

export default MyApp
