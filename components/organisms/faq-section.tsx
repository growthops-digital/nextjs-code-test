/* eslint-disable react/jsx-handler-names */ // i changed the handlers to onHandlers but this wouldn't work

'use client';

import type React from 'react';
import {useState, useEffect} from 'react';
import getFAQData from '@app/data/faq-data';
import {FAQPanel, FAQItem} from '@app/components/organisms';
import type {FAQData} from '@app/components/shared/types';

const FAQSection: React.FC = () => {
	const [faqData, setFaqData] = useState<FAQData | null>();
	const [activePanel, setActivePanel] = useState(0);
	const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const data = await getFAQData();
			setFaqData(data);
			const initialOpenQuestions: Record<string, boolean> = {};

			for (let panelIndex = 0; panelIndex < data.panels.length; panelIndex++) {
				initialOpenQuestions[`${panelIndex}-0`] = true;
			}
			setOpenQuestions(initialOpenQuestions);
		};
		fetchData();
	}, []);

	const onPanelClickHandle = (index: number): void => {
		setActivePanel(index);
	};

	const handleQuestionClick = (panelIndex: number, questionIndex: number): void => {
		setOpenQuestions(prev => ({
			...prev,
			[`${panelIndex}-${questionIndex}`]: !prev[`${panelIndex}-${questionIndex}`],
		}));

		return;
	};

	const onKeyDownHandler = (event: React.KeyboardEvent<HTMLButtonElement>, panelIndex: number, questionIndex?: number): void => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();

			if (questionIndex === undefined) {
				onPanelClickHandle(panelIndex);
			} else {
				handleQuestionClick(panelIndex, questionIndex);
			}
		}
	};

	if (!faqData) return;

	return (
		<section className="faq-section" aria-labelledby="faq-heading">
			<h2 id="faq-heading">{faqData.heading}</h2>
			<div className="faq-panels" role="tablist">
				{faqData.panels.map((panel, panelIndex) => (
					<FAQPanel
						key={panel.id}
						panel={panel}
						isActive={activePanel === panelIndex}
						onClick={() => { onPanelClickHandle(panelIndex); }}
						onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => { onKeyDownHandler(e, panelIndex); }}
					/>
				))}
			</div>
			<div 
				className="faq-content" 
				role="tabpanel" 
				id={`panel-${activePanel}`}
				aria-labelledby={`tab-${activePanel}`}
			>
				{faqData.panels[activePanel]?.blocks.map((block, blockIndex) => (
					<FAQItem
						key={block.id}
						block={block}
						isOpen={openQuestions[`${activePanel}-${blockIndex}`] || false}
						onClick={() => { handleQuestionClick(activePanel, blockIndex); }}
						onKeyDown={(e) => { onKeyDownHandler(e, activePanel, blockIndex); }}
					/>
				))}
			</div>
		</section>
	);
};

export default FAQSection;