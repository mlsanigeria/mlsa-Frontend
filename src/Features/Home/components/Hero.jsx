import { AspectRatio, Box, Button, Flex, Heading } from '@chakra-ui/react'

export default function Hero() {
	return (
		<Box>
			<Heading
				margin="0 auto"
				fontSize={{ base: '25px', md: '34px' }}
				mt="70px"
				width={{ base: '100%', md: '80%' }}
				textAlign="center"
				color="brand.black"
			>
				Microsoft Learn Student Ambassadors Nigeria is a community of students passionate about
				technology, learning, sharing, and building a better future.
			</Heading>
			<Flex justify="center" gap="20px" my="43px" flexDir={{ base: 'column', sm: 'row' }}>
				<Button
					bg="white"
					color="brand.primary"
					border="1px solid #CEE6FF"
					borderRadius="8px"
					fontWeight="500"
					minWidth="190px"
					_hover={{ bg: 'none' }}
				>
					Join a Community
				</Button>

				<Button
					color={'white'}
					bg={'brand.primary'}
					borderRadius="8px"
					fontWeight="500"
					_hover={{ bg: 'brand.primary' }}
				>
					Become an Ambassador
				</Button>
			</Flex>
			<AspectRatio ratio={1} height={{ base: '70vh', '2xl': '100%' }}>
				<iframe
					title="MLSA ambassador helper video"
					src="https://www.youtube.com/embed/jPP5fEkF0To"
					allowFullScreen
				/>
			</AspectRatio>
		</Box>
	)
}
