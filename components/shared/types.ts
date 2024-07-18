/* eslint-disable import/group-exports */
// eslint-disable-next-line import/group-exports
export type FAQBlock = {
    id: number;
    question: string;
    answer: string;
  };
  
export type FAQPanelTypes = {
    id: number;
    label: string;
    blocks: FAQBlock[];
  };
  
export type FAQData = {
    heading: string;
    panels: FAQPanelTypes[];
  };