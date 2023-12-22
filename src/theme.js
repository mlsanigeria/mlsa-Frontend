import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		body: `'Rubik', sans-serif`,
		heading: `'Syne', sans-serif`
	},
	colors: {
		brand: {
			primary: '#007BFF',
			black: '#333'
		},
		secondary: {
			gray100: '#4B4B4B',
			gray200: '#555555',
			gray300: '#FAFAFA',
			gray400: '#999999',
			gray500: '#888888',
			gray600: '#7D7D7D',
			gray700: '#A6A6A6'
		}
	}
})

export default theme
