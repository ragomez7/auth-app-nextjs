import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";
const H1 = styled.h1`
  font-size: 20px;
  background-color: lightgrey;
  color: green;
`;
const Title = styled(Box)`
  font-size: 1.5em;
  color: palevioletred;
`;
const jff = () => {
  return (
    <>
      <Title>Hello</Title>
      <H1>It's me</H1>
    </>
  );
};

export default jff;
