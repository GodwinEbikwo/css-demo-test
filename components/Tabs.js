import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { TabContainer, TabHead, Tab, TabBody } from './styles/TabStyles';
import styled from 'styled-components';
import { FormBody } from './CreditForm';

function Tabs({ router }) {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === '1' || tab == null;
  const isTabTwo = tab === '2';
  const isTabThree = tab === '3';
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: '/', query: { tab: '1' } }}>
            <a>Credit Card</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: '/', query: { tab: '2' } }}>
            <a>Paypal</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: '/', query: { tab: '3' } }}>
            <a>Other</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && (
          <React.Fragment>
            <OneComp />
          </React.Fragment>
        )}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
        {isTabThree && (
          <React.Fragment>This is tab three content</React.Fragment>
        )}
      </TabBody>
    </TabContainer>
  );
}

export default withRouter(Tabs);

const OneComp = () => {
  return (
    <OneGrid>
      <div className="OneGridLeft">
        <Card primary={true} />
        <Card />
        <Card />
      </div>

      <div className="OneGridRight">
        <FormBody />
      </div>
    </OneGrid>
  );
};

const Card = ({ primary }) => {
  return (
    <OneCard primary={primary}>
      <OneCardInner>
        <span>**** 4222</span>
       

        <div className="bottom">
          <span>Visa</span>
        </div>
      </OneCardInner>
    </OneCard>
  );
};

const OneGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const OneCard = styled.div`
  position: relative;
  width: 220px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 2rem;
  background: ${(props) => (props.primary ?  '#b8b5ff' : '#eeb76b' )};

  &:last-child{
    background-color: #cee6b4;
  }
`;

const OneCardInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .bottom {
    margin-top: auto;
  }
`;

