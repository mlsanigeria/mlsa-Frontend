import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	useDisclosure,
	Link,
	Container,
	Image,
	Divider
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import mlsaLogo from '../../assets/mlsa-logo.svg'
import ExternalLink from '../../common/components/Link'

export default function NavBar() {
	const { isOpen, onToggle } = useDisclosure()
	return (
		<Box position="sticky" top="0" zIndex="99" bg="white">
			<Container maxW="container.xl">
				<Flex
					h={'80px'}
					py={{ base: 2 }}
					align={'center'}
					justifyContent={{ base: 'normal', md: 'space-between' }}
				>
					<Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
						<IconButton
							onClick={onToggle}
							icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
							aria-label={'Toggle Navigation'}
						/>
					</Flex>

					<Flex
						justify={{ base: 'center', md: 'start' }}
						margin={{ base: '0 auto', md: 'inherit' }}
					>
						<Link href="/">
							<Image src={mlsaLogo} />
						</Link>
					</Flex>
					<Flex gap="18px" display={{ base: 'none', md: 'flex' }}>
						{NavLinks.map((item, index) => (
							<Link href={item.link} key={index} _hover={{ textDecoration: 'none' }}>
								<Text color="secondary.gray100">{item.title}</Text>
							</Link>
						))}
					</Flex>

					<Stack
						display={{ base: 'none', md: 'flex' }}
						justify={'flex-end'}
						direction={'row'}
						spacing={6}
					>
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
					</Stack>
				</Flex>

				<Collapse in={isOpen} animateOpacity>
					<Box>
						<Flex flexDirection="column" gap="18px">
							{NavLinks.map((item, index) => (
								<Link href={item.link} key={index} _hover={{ textDecoration: 'none' }}>
									<Text color="secondary.gray100">{item.title}</Text>
								</Link>
							))}
						</Flex>
						<Divider my="18px" />
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
					</Box>
				</Collapse>
			</Container>
			<Divider display={{ base: 'none', md: 'block' }} />
		</Box>
	)
}

const NavLinks = [
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
