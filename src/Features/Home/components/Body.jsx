import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'
import family from '../../../assets/family.svg'
import results from '../../../assets/results.svg'

export default function Body() {
	return (
		<Box mt="100px" color="brand.black">
			<Box position="relative">
				<Box textAlign="center" mb="50px" display={{ base: 'block', md: 'none' }}>
					<Heading mb="20px">We are a Family</Heading>
					<Text>
						United by a collective enthusiasm to create meaningful change and foster innovation, our
						community thrives on the shared passion of its members. Together, we are committed to
						making a positive impact through our dedication to technology and its transformative
						potential.
					</Text>
				</Box>
				<Flex justifyContent="flex-end">
					<Image src={family} alt="a group picture" />
				</Flex>
				<Card
					borderRadius="20px"
					borderTop="none"
					display={{ base: 'none', md: 'block' }}
					padding="44px"
					width={{ md: '70%' }}
					bottom="100px"
					position="absolute"
				>
					<CardHeader pb="0">
						<Heading>We are a Family</Heading>
					</CardHeader>
					<CardBody lineHeight="34px">
						United by a collective enthusiasm to create meaningful change and foster innovation, our
						community thrives on the shared passion of its members. Together, we are committed to
						making a positive impact through our dedication to technology and its transformative
						potential.
					</CardBody>
				</Card>
			</Box>

			<Box position="relative" mt="100px">
				<Box textAlign="center" mb="50px" display={{ base: 'block', md: 'none' }}>
					<Heading mb="20px">We are Results-Driven</Heading>
					<Text>
						Our commitment is results-driven. We channel our energy, skills, and passion into
						tangible outcomes, consistently striving for impactful achievements and meaningful
						progress within the realm of technology.
					</Text>
				</Box>
				<Flex>
					<Image src={results} alt="a group picture" />
				</Flex>
				<Card
					borderRadius="20px"
					borderTop="none"
					display={{ base: 'none', md: 'block' }}
					padding="44px"
					width={{ md: '70%' }}
					bottom="100px"
					left="30%"
					position="absolute"
				>
					<CardHeader pb="0">
						<Heading>We are Results-Driven</Heading>
					</CardHeader>
					<CardBody lineHeight="34px">
						Our commitment is results-driven. We channel our energy, skills, and passion into
						tangible outcomes, consistently striving for impactful achievements and meaningful
						progress within the realm of technology.
					</CardBody>
				</Card>
			</Box>
		</Box>
	)
}
