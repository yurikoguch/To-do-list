/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

const Title = () =>{
  return(
    <h1 css={title}> To do list</h1>
  );
};

export default Title;

/////////styles///////////

const title = css `
  margin: 0;
  padding: 30px 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  background: -webkit-linear-gradient(left, rgba(228,235,206,1) 0%, rgba(164,174,214,1) 100%);
`