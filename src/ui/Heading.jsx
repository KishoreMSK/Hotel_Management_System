import styled, { css } from "styled-components";

// const test = css`
//     text-align: center;
// `;

const H1 = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 20px;
      font-weight: 400;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 15px;
      font-weight: 300;
    `}
`;

export default H1;
