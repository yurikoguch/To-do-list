/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default props => <div css = {styledDiv}>{props.text}</div>;

/////////styles///////////

const styledDiv = css `
  margin: 0;
  padding: 30px 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  font-size: 20px;
  `