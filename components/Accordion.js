/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { CloseIcon } from './Icons';

const ContentPlaceholder = ({ content, price }) => (
  <motion.div
    variants={{
      collapsed: { opacity: 0 },
      open: { opacity: 1 },
    }}
    transition={{ duration: 0.9 }}
    className="content-placeholder"
  >
 
    <ul className="flex-sb">
      <li>Leather mini-bag</li>
      <li>$1850.00</li>
    </ul>

    <ul className="flex-sb">
      <li>Estimated Shipping</li>
      <li>$370.00</li>
    </ul>

    <ul className="flex-sb">
      <li>Discount</li>
      <li>$0.00</li>
    </ul>

    <ul className="flex-sb">
      <li>Total</li>
      <li>$2220.00</li>
    </ul>
  </motion.div>
);

const AccordionComponent = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;

  return (
    <AnimatedBody>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex-sb">
          <h4>{title}</h4>
          <motion.div
            initial={false}
            animate={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(45deg)' }}
          >
            <CloseIcon />
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <ContentPlaceholder content={content} />
          </motion.section>
        )}
      </AnimatePresence>
    </AnimatedBody>
  );
};

const Accordion = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
      content={content}
    />
  );
};

export default Accordion;

const AnimatedBody = styled.div`
  header {
    background: var(--white);
    border: 1px solid var(--border-color);
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;
    margin-bottom: 25px !important;
    padding: 1rem;
    width: 100%;
    border-radius: 4px;
  }

  header h4 {
    line-height: 1.375;
    text-align: left;
  }

  section {
    overflow: hidden;
  }

  .content-placeholder {
    padding: 0 0 2rem 0;

    ul{
      margin-top: 1rem;
      padding: 1rem;
    }

    li{
      &:last-child{
        font-weight: 900;
      }
    }
  }
`;
