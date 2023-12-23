import { Box, Container, Divider, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/x.svg'
import youtube from '../../assets/youtube.svg'
import ig from '../../assets/ig.svg'
import email from '../../assets/email.svg'

export default function Footer() {
	const date = new Date()
	let year = date.getFullYear()
	return (
		<Box bg="secondary.gray300">
			<Container maxW="container.xl">
				<Flex
					gap={4}
					justifyContent="space-between"
					py="35px"
					flexDir={{ base: 'column', md: 'row' }}
				>
					<HStack
						gap={8}
						flexDir={{ base: 'column', sm: 'row' }}
						color="secondary.gray500"
						justifyContent="center"
					>
						<Text>Follow us</Text>
						{Socials.map((item, index) => (
							<Link href={item.link} key={index}>
								<Image src={item.icon} alt="" />
							</Link>
						))}
					</HStack>
					<HStack gap={8} flexDir={{ base: 'column', sm: 'row' }} justifyContent="center">
						{FooterLinks.map((item, index) => (
							<Link key={index} _hover={{ textDecoration: 'none' }}>
								<Text color="secondary.gray100">{item.title}</Text>
							</Link>
						))}
					</HStack>
				</Flex>
				<Divider />
				<HStack
					flexDir={{ base: 'column', md: 'row' }}
					justifyContent="space-between"
					py="35px"
					fontSize="14px"
					color="secondary.gray400"
				>
					<Text>© {year} All rights reserved.</Text>
					<Text textAlign="center">
						Disclaimer: This site is not owned or operated by Microsoft or the Microsoft Learn
						Student Ambassadors Program.
					</Text>
				</HStack>
			</Container>
		</Box>
	)
}

const FooterLinks = [
	{
		title: 'About',
		link: '/'
	},
	{
		title: 'Communities',
		link: '/'
	},
	{
		title: 'Resources',
		link: '/'
	},
	{
		title: 'Events',
		link: '/'
	}
]

const Socials = [
	{
		icon: linkedin,
		link: '/'
	},
	{
		icon: email,
		link: '/'
	},
	{
		icon: ig,
		link: '/'
	},
	{
		icon: youtube,
		link: '/'
	},
	{
		icon: twitter,
		link: '/'
	}
]
