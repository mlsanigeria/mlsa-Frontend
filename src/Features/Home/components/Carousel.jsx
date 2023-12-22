import { Avatar, Box, Image, Wrap, WrapItem } from '@chakra-ui/react'
import quote from '../../../assets/quote.svg'
import CarouselItem from './CarouselItem'
import { useEffect, useState } from 'react'

export default function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleClick = (index) => {
		setActiveIndex(index)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			if (activeIndex < 0) {
				setActiveIndex(0)
			} else if (activeIndex >= CarouselList.length - 1) {
				setActiveIndex(0)
			} else {
				let newActiveIndex = activeIndex + 1
				setActiveIndex(newActiveIndex)
			}
		}, 3000)
		return () => clearTimeout(timer)
	})

	return (
		<Box>
			<Image src={quote} alt="quote" />
			<Box>
				<Box translateX={activeIndex * 100}>
					{CarouselList.map((item, index) => {
						return (
							<>
								<Box display={index !== activeIndex ? 'none' : 'block'}>
									<CarouselItem item={item} key={index} index={index} />
								</Box>
							</>
						)
					})}
				</Box>
				<Box mt="51px">
					<Wrap spacing="1rem">
						{CarouselList.map((item, index) => (
							<WrapItem
								onClick={() => handleClick(index)}
								key={index}
								_hover={{ cursor: 'pointer' }}
								opacity={index !== activeIndex ? '0.5' : '1'}
							>
								<Avatar name={item.name} />
							</WrapItem>
						))}
					</Wrap>
				</Box>
			</Box>
		</Box>
	)
}

const CarouselList = [
	{
		name: 'Chidera Johnson',
		role: 'Front-end Engineer',
		testimonial:
			'Being a part of this incredible tech community has been a game-changer for me. The wealth of resources and supportive environment catapulted my learning journey. '
	},
	{
		name: 'Michael Ukpeh',
		role: 'Backend-end Engineer & Idolo',
		testimonial:
			'Learning is the norm. The wealth of resources and supportive environment catapulted my learning journey. '
	},
	{
		name: 'Chino Ukwuegbu',
		role: 'Chief Community Builder',
		testimonial:
			'Got better at public speaking. The wealth of resources and supportive environment catapulted my learning journey. '
	},
	{
		name: 'Devgenix Nehemiah',
		role: 'Odogwu Fullstack Engineer',
		testimonial:
			'Being a part of this incredible tech community has been a game-changer for me. The wealth of resources and supportive environment catapulted my learning journey. '
	}
]
