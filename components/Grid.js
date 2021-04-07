import styled from 'styled-components';
import Image from 'next/image';
import Tabs from './Tabs';
import Accordion from './Accordion';

export default function Grid() {
  return (
    <GridContainer>
      <GridLeft>
        <GridInner>
          <header>
            <div className="flex-sb">
              <h2>Tolly</h2>

              <div className="profile flex-fd-row">
                <Image src="/arrow.svg" width={8} height={8} alt="arrow-down" />
                <span>Annete</span>
                <Image src="/avatar.png" width={20} height={20} alt="avatar" />
              </div>
            </div>
          </header>

          <div className="gt-inner flex-sb">
            <h1>Payment details</h1>

            <div className="flex-row">
              <div className="flex-row-img">
                <Image
                  src="/secured.svg"
                  width={20}
                  height={20}
                  alt="arrow-down"
                />
              </div>
              <div className="">
                <h4>Card is secure</h4>
                <p>
                  Your data is protected <br />
                  everything will be private
                </p>
              </div>
            </div>
          </div>

          <Tabs />
        </GridInner>
      </GridLeft>

      <GridRight>
        <RightInner>
          <header>
            <div className="flex-sb">
              <h2>Order Summary</h2>
            </div>
          </header>

          <div className="step-container flex-sb">
            <div className="steps">
              <Circle primary={true}>
                <Image src="/cc.svg" width={20} height={20} alt="steps-icon" />
              </Circle>
              <div className="">
                <span>Step 1</span>
                <p>Shipping</p>
              </div>
            </div>

            <div className="steps">
              <Circle>
                <Image src="/sc.svg" width={20} height={20} alt="steps-icon" />
              </Circle>
              <div className="">
                <span>Step 1</span>
                <p>Shipping</p>
              </div>
            </div>

            <div className="steps">
              <Circle>
                <Image
                  src="/refresh.svg"
                  width={20}
                  height={20}
                  alt="steps-icon"
                />
              </Circle>
              <div className="">
                <span>Step 1</span>
                <p>Shipping</p>
              </div>
            </div>
          </div>

          <div className="accordion">
            <Accordion id={1} title="Prada" />

            <Accordion id={2} title="Dr Martens" />

            <Accordion id={2} title="Chanel" />
          </div>

          <div className="footer">
            <div className="flex-sb">
              <h2 className="sm">Total Amount</h2>
              <h2>$3680.60</h2>
            </div>
          </div>
        </RightInner>
      </GridRight>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  height: 100vh;
  padding: 2rem;
`;

const GridLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: var(--white);
  border-radius: var(--border-radius);
`;

const GridInner = styled.div`
  padding: 5rem;

  header {
    margin-bottom: 3rem;
  }

  .profile {
    padding: 0 0 0 2px;
    border-radius: 40px;
    background-color: var(--background-color);
    * {
      padding: 5px;
    }
  }

  .gt-inner {
    h1 {
      letter-spacing: var(--ls);
    }
  }

  .flex-row {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;

    h4 {
      letter-spacing: var(--ls);
    }
  }

  .flex-row-img {
    margin-right: 1rem;
  }
`;

const GridRight = styled.div`
  grid-area: 1 / 2 / 2 / 3;

  .step-container {
    margin-bottom: 3rem;
  }

  .steps {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => (props.primary ? '#b8b5ff' : '#eeb76b')};
  display: grid;
  place-items: center;
  margin-right: 1rem;

`;

const RightInner = styled.div`
  padding: 5rem 3rem;

  header {
    margin-bottom: 5rem;
  }

  .accordion {
    margin-top: 6rem;
  }

  .footer {
    .sm {
      font-size: 1.5rem;
    }
  }
`;
