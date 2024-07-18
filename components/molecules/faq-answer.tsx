import type React from 'react';

type FAQAnswerProps = {
	answer: string;
	isVisible: boolean;
};

const FAQAnswer: React.FC<FAQAnswerProps> = ({answer, isVisible}) => (
	<div className={`faq-answer ${isVisible ? 'visible' : ''}`}>
		{answer}
	</div>
);

export default FAQAnswer;