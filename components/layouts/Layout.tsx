import Head from "next/head";
import { FC } from "react";
import { NavBar } from '../ui/NavBar';

interface Props  {
	children: React.ReactNode,
	title?: string
}


export const Layout: FC<Props> = ({ children, title}) => {
	return (
		<>
			<Head>
				<title>{ title || "Pokemon App" }</title>
				<meta name="author" content="Mauricio Cartagena" />
				<meta name="description" content={`Información sobre el pokémon ${ title }`} />
				<meta name="keywords" content={`${ title}, pokemon, pokedex`} />
			</Head>

			<NavBar />

			<main
				style={{ 
					padding:'0px 20px' 
				 }}
			>
					{ children }
			</main>
			
		</>
	);
}