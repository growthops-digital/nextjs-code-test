import type React from 'react';
import Button from '@app/components/atoms/button';
import type {FAQPanelTypes} from '@app/components/shared/types';

type FAQPanelProps = {
	panel: FAQPanelTypes;
	isActive: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const FAQPanel: React.FC<FAQPanelProps> = ({panel, isActive, onClick, onKeyDown}) => (
	<Button
		className={`panel-button ${isActive ? 'active' : ''}`}
		role="tab"
		aria-selected={isActive}
		onClick={onClick}
		onKeyDown={onKeyDown}
	>
		{panel.label}
	</Button>
);

export default FAQPanel;