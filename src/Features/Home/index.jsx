import { Container } from '@chakra-ui/react'
import NavBar from '../Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Resources from './components/Resources'
import Footer from '../Footer'
import Impact from './components/Impact'

export default function Home() {
	return (
		<>
			<NavBar />
			<Container maxW="container.xl">
				<Hero />
				<Body />
				<Resources />
				<Impact />
			</Container>
			<Footer />
		</>
	)
}
