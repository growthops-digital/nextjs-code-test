import type {FC} from 'react';
import {Logo} from '@app/components/svg';
import getFAQData from '@app/data/faq-data';
import {FAQSection} from '@app/components/organisms';

const Home: FC = (): React.ReactElement => {
	// Use the data from getFAQData() to render the FAQ component
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const faqData = getFAQData();

	return (
		<main className="py-24">
			<div className="container text-center">
				<Logo className="w-64 mx-auto"/>
				<h1 className="mt-8 text-lg max-w-[1024px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
			</div>
			<div className="mt-24 container">
				{/* Replace the div below with the missing component */}
				<FAQSection/>
			</div>
		</main>
	);
};

export default Home;
