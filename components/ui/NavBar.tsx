import Image from "next/image";
import NextLink from 'next/link'
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";


export const NavBar = () => {

	const { theme } = useTheme();
	return (
		<div style={{ 
				display: "flex",
				width: "100%",
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: "start",
				padding: "0 20px",
				backgroundColor: theme?.colors.gray900.value
		}} >

			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
				alt="icono de la app"
				width={70}
				height={70}
			/>	

			<NextLink legacyBehavior href='/' passHref > 
				<Link>
					<Text color="white" h2>P</Text>
					<Text color="white" h3>okémon!</Text>
				</Link>
			</NextLink>

			<Spacer css={{ flex: 1 }} />
			
			<NextLink legacyBehavior href="/favorites" passHref>
				<Link css={{ marginRight:'10px' }} >
					<Text color="white" h3>Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	)
}