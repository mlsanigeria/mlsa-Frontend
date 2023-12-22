import { Box, Text } from '@chakra-ui/react'

/* eslint-disable react/prop-types */
export default function CarouselItem({ item }) {
	return (
		<Box w={{ base: '100%', md: '80%' }}>
			<Text color="secondary.gray200" mt="35px" mb="20px" lineHeight="30px">
				{item.testimonial}
			</Text>
			<Text color="secondary.gray700">
				{item.name}, {item.role}
			</Text>
		</Box>
	)
}
