import type React from 'react';
import {FAQQuestion, FAQAnswer} from '../molecules';
import type {FAQBlock} from '../shared/types';

type FAQItemProps = {
  block: FAQBlock;
  isOpen: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const FAQItem: React.FC<FAQItemProps> = ({block, isOpen, onClick, onKeyDown}) => (
	<div className="faq-item">
		<FAQQuestion
			question={block.question}
			isOpen={isOpen}
			onClick={onClick}
			onKeyDown={onKeyDown}
		/>
		<FAQAnswer
			answer={block.answer}
			isVisible={isOpen}
		/>
	</div>
);

export default FAQItem;