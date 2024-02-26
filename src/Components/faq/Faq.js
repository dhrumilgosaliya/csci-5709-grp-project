import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const faqItems = [
    {
        question: 'What is Lorem Ipsum?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
];

const FAQ = () => {
    return (
        <div>
            <section id="show-faq">
            <div className="text">
              <h2>Frequently Asked Questions</h2>
            </div>
          </section> 
          <div className="faq-container">
            {faqItems.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography variant="body1" fontWeight="bold">
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            </div>
        </div>
    );
}

export default FAQ;

