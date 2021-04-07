import styled from "styled-components"

export const TabHead = styled.div`
  border-bottom: 0.5px solid #eaeaea;
  display: flex;
  background: transparent;
`
export const TabContainer = styled.div`
  width: 90%;
  /* height: 30em; */

`
export const TabBody = styled.div`
  height: 100%;
`
export const Tab = styled.div`
  position: relative;
  padding-right: 1em;
  padding-top: 1em;
  padding-bottom: 1.05rem;
  /* background: ${({ selected }) => (selected ? "red" : "transparent")}; */
  transition: all 0.3s linear;
  border-bottom: 2px solid ${({ selected }) => (selected ? "black" : "transparent")};

  a {
    color: black;
  }
`