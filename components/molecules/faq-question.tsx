import type React from 'react';
import {Button, CaretIcon} from '../atoms';

type FAQQuestionProps = {
	question: string;
	isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const FAQQuestion: React.FC<FAQQuestionProps> = ({question, isOpen, onClick, onKeyDown}) => (
	<Button
		className={`faq-question ${isOpen ? 'open' : ''}`}
		aria-expanded={isOpen}
		onClick={onClick}
		onKeyDown={onKeyDown}
	>
		{question}
		<CaretIcon isOpen={isOpen}/>
	</Button>
);

export default FAQQuestion;