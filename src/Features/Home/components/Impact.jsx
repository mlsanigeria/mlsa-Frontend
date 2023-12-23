import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text
} from '@chakra-ui/react'
import community from '../../../assets/community.svg'
import event from '../../../assets/event.svg'
import university from '../../../assets/university.svg'
import handshake from '../../../assets/handshake.svg'
import Carousel from './Carousel'
import ExternalLink from '../../../common/components/Link'

export default function Impact() {
	return (
		<Box>
			<Grid my="74px" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap="8">
				<GridItem>
					<Heading color="brand.black" mb="20px">
						Our Impact
					</Heading>
					<Text color="secondary.gray200" mb="60px">
						Real people, Real Numbers, Real Stories.
					</Text>
					<Carousel />
				</GridItem>

				<GridItem>
					<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={10}>
						{ImpactList.map((item, index) => (
							<GridItem key={index}>
								<Card
									h="100%"
									bg="rgba(231, 243, 255, 0.45)"
									borderRadius="20px"
									boxShadow="none"
									py="10px"
									display="flex"
									alignContent="center"
								>
									<CardBody textAlign="center">
										<Image src={item.icon} margin="0 auto" mb="10px" />
										<Heading mb="10px">{item.impactNumber}</Heading>
										<Text lineHeight="25px" color="secondary.gray600">
											{item.description}
										</Text>
									</CardBody>
								</Card>
							</GridItem>
						))}
					</Grid>
				</GridItem>
			</Grid>

			<Box
				bg="secondary.gray300"
				pt="50px"
				pb="30px"
				mb="74px"
				borderRadius="16px"
				px={{ base: '10px', md: '10%' }}
			>
				<Heading textAlign="center">
					Join thousands of students like you, be a part of the most progressive student tech
					community.
				</Heading>
				<Flex justify="center" gap="20px" my="43px" flexDir={{ base: 'column', sm: 'row' }}>
					<Button
						color={'white'}
						bg={'brand.primary'}
						borderRadius="8px"
						fontWeight="500"
						_hover={{ bg: 'brand.primary' }}
						>
						Join a Community
					</Button>

					<ExternalLink href="https://mvp.microsoft.com/studentambassadors" target="_blank">
						<Button
							bg="white"
							color="brand.primary"
							border="1px solid #CEE6FF"
							borderRadius="8px"
							fontWeight="500"
							minWidth="190px"
							_hover={{ bg: 'none' }}
						>
							Become an Ambassador
						</Button>
					</ExternalLink>
				</Flex>
			</Box>
		</Box>
	)
}

const ImpactList = [
	{
		icon: community,
		impactNumber: '50+',
		description: 'Ambassadors Communities across Universities in Nigeria.'
	},
	{
		icon: university,
		impactNumber: '250+',
		description: 'Student Ambassadors across the 36 states in Nigeria.'
	},
	{
		icon: event,
		impactNumber: '100+',
		description: 'Events organized by our Student Ambassadors.'
	},
	{
		icon: handshake,
		impactNumber: '10k+',
		description: 'Active community members across Universities iin Nigeria'
	}
]
