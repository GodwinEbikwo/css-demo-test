import styled from 'styled-components'
import Image from "next/image";

export  const FormBody = () => {
  return (
    <Form>
      <fieldset>
        <label htmlFor="Credit Card">
          Credit Card
          <div className="card-view">
            <div className="cc-img">
              <Image src="/mc.svg" width={30} height={30} alt="steps-icon" />
            </div>
            <input
              required
              type="number"
              name="credit card"
              placeholder="4422 2354 3266 5655"
              autoComplete="name"
              inputMode="text"
            />
          </div>
        </label>

        <label htmlFor="name">
          Name
          <input
            required
            type="name"
            name="name"
            placeholder="Annetter Murphy"
            autoComplete="name"
            inputMode="name"
          />
        </label>

        <div className="sflex">
          <label htmlFor="number">
            Expiration Date
            <input
              required
              type="number"
              name="number"
              placeholder="08/2021"
              autoComplete="number"
            />
          </label>

          <div className="card-view">
            <div className="eye-img">
              <Image src="/eye.svg" width={25} height={25} alt="steps-icon" />
            </div>
            <label htmlFor="password">
              CVV
              <input
                required
                type="password"
                name="password"
                placeholder="08/2021"
                autoComplete="password"
              />
            </label>
          </div>
        </div>

        <div className="btn-row">
          <ButtonComponent primary={true} type="submit">
            Confirm order
          </ButtonComponent>
          <ButtonComponent type="submit">Cancel and Return</ButtonComponent>
        </div>
      </fieldset>
    </Form>
  );
};



const Form = styled.form`
  padding: 0 25px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 100%;

  @media (max-width: 767px) {
    padding: 20px;
  }

  .sflex {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.7em;
    }
  }

  .card-view {
    position: relative;

    .cc-img {
      position: absolute;
      top: 16px;
      right: 10px;
    }

    .eye-img {
      position: absolute;
      top: 48px;
      right: 10px;
    }
  }

  label {
    display: block;
    margin-bottom: 2rem;
    margin-top: 1rem;
    letter-spacing: var(--ls);
    color: var(--grey);
  }

  input,
  textarea,
  select {
    color: black;
    margin-top: 0.5rem;
    width: 100%;
    padding: 1.45rem;
    font-size: 1.5rem;
    border-radius: 3px;
    background: var(--background-color);
    font-family: 'Helvetica Neue', Helvetica, -apple-system, sans-serif;
    border: 1px solid var(--border-color);
    &:focus {
      outline: 0;
      border-color: var(--red);
    }

    ::placeholder {
      color: black;
      font-weight: 600;
    }
  }

  input[type='submit'] {
    width: auto;
    background: var(--red);
    color: black;
    border: 0;
    font-size: 1.45rem;
    font-weight: 600;
    padding: 1.5rem 3rem;
    border-radius: 3px;
    box-shadow: var(--btn-bs);
  }

  input {
    border: 1px solid var(--border-color);
  }

  fieldset {
    border: 0;
    padding: 0;
  }

  strong {
    font-weight: 500;
    color: var(--lightRed);
  }

  p {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    color: var(--grey);
    font-weight: 400;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .flx-end {
    span {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      font-weight: 500;
      color: var(--lightRed);
    }
  }

  .btn-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;

    button {
      margin-top: 3rem;
      border-radius: 10px;
    }

    #btn-2 {
      border: 1px solid var(--red);
      background: red;
      color: var(--white);
      transform: all 0.3s ease;
      opacity: 1;
    }
    #btn-2:hover {
      background: black;
      color: var(--white);
    }
  }
`;

const ButtonComponent = styled.button`
  background: ${(props) => (props.primary ? '#000' : 'transparent')};
  color: ${(props) => (props.primary ? '#fff' : '#999')};
  font-family: inherit;
  margin-right: 1rem;
  padding: 1.85rem 5rem;
  border: ${(props) => (props.primary ? '1px solid #2e6da4' : 'transparent')};
  cursor: pointer;
  /* font-size: 11px; */
  font-weight: 600;
  text-align: center;
`;