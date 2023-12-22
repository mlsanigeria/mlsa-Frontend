import {
	Box,
	Button,
	Card,
	CardBody,
	Grid,
	GridItem,
	Heading,
	Image,
	Stack,
	Text
} from '@chakra-ui/react'
import imagineCup from '../../../assets/imagine-cup.svg'
import reactor from '../../../assets/reactor.svg'
import foundersHub from '../../../assets/founders-hub.svg'
import studentHub from '../../../assets/student-hub.svg'

import { ArrowRight } from 'lucide-react'

export default function Resources() {
	return (
		<Box mt="100px">
			<Heading mb="13px" textAlign="center" color="brand.black">
				Student Resources
			</Heading>
			<Text mb="30px" textAlign="center" color="secondary.gray200">
				Dive into curated resources, join a vibrant community, and embark on a journey of growth.
			</Text>
			<Grid
				alignItems="stretch"
				templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
				gap={6}
			>
				{ResourcesList.map((item, index) => (
					<GridItem key={index}>
						<Card borderRadius="16px" height="450px">
							<CardBody p="0">
								<Image src={item.image} width="100%" />
								<Stack p="17px" position="relative">
									<Heading color="black" fontSize="20px" mt="10px" fontWeight="600">
										{item.title}
									</Heading>
									<Text color="secondary.gray200">{item.description}</Text>
									<Button
										_hover={{ bg: 'none' }}
										alignContent="flex-end"
										mt="20px"
										border="1px solid #007BFF"
										width="fit-content"
										p="0"
										bg="white"
										rounded="full"
										display="flex"
										alignSelf="end"
										position="absolute"
										top={{ base: '130px', sm: '160px', md: '200px' }}
									>
										<ArrowRight color="#007BFF" />
									</Button>
								</Stack>
							</CardBody>
						</Card>
					</GridItem>
				))}
			</Grid>
			<Box textAlign="center">
				<Button
					my="74px"
					fontWeight="500"
					_hover={{ bg: 'none' }}
					color="brand.primary"
					bg="transparent"
					border="1px solid #CEE6FF"
					borderRadius="8px"
					p="25px"
				>
					See More Resources{' '}
					<Box as="span" ml="10px">
						<ArrowRight color="#007BFF" />
					</Box>
				</Button>
			</Box>
		</Box>
	)
}

const ResourcesList = [
	{
		title: 'Imagine Cup',
		description: 'Student competition for visionary entrepreneurs building with AI.',
		image: imagineCup
	},
	{
		title: 'Microsoft Learn Student Hub',
		description: 'Learn new skills for building AI-driven solutions with Microsoft technology.',
		image: studentHub
	},
	{
		title: 'Microsoft Reactor',
		description: 'Learn from developers and startups. Community events running around the clock!',
		image: reactor
	},
	{
		title: 'Microsoft for Startups Founders Hub',
		description:
			'Grow your startup with free access to AI tools, technologies and expert guidance.',
		image: foundersHub
	}
]
