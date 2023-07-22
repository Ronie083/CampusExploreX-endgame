import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import useColleges from '../../../Hooks/useColleges/useColleges';

const ResearchPaper = () => {
    const [colleges] = useColleges();
    const [papersLimit, setPapersLimit] = useState(2);

    const handleSeeAll = () => {
        setPapersLimit(colleges.flatMap(college => college.researchPapers).length);
    };

    return (
        <div className='p-10 bg-[#F5E1C7] rounded-3xl'>
            <div>
                <p className="text-lg text-[#F56A1E]">Featured Research Papers according to universities</p>
                <h1 className="text-3xl">Some researches</h1>
            </div>
            <div className='p-10'>
                <Accordion allowZeroExpanded>
                    {colleges.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.name}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            {item.researchPapers.slice(0, papersLimit).map(researchPaper => (
                                <AccordionItemPanel key={researchPaper.id}>
                                    <h2 className='text-lg font-bold'>{researchPaper.title}</h2>
                                    <p>Authors: {researchPaper.authors}</p>
                                    <a href={researchPaper.link}>Link: {researchPaper.link}</a>

                                </AccordionItemPanel>
                            ))}
                            <AccordionItemPanel>
                                {item.researchPapers.length > 2 && (
                                    <div className='text-right'>
                                        <button className='btn btn-info rounded-3xl' onClick={handleSeeAll}>
                                            See all
                                        </button>
                                    </div>
                                )}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default ResearchPaper;
