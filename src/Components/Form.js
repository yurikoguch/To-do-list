/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import shortid from 'shortid';

class Form extends React.Component {
    state ={
        text:"",
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,

        });

        this.setState({
            text: "",

        })
    };



  render() {

    return (
      <div css={form}>
        <form onSubmit={this.handleSubmit}>
          <input css={styledinput} value={this.state.text}  onChange={this.handleChange} name={'text'} placeholder={'Add task'}/>
          <button css={styledbutton}  onClick={this.handleSubmit}>Get</button>
        </form>
      </div>
    );
  };
};



export default Form

/////////styles//////

const form = css `
  margin: 0;
  padding: 30px 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  background: -webkit-linear-gradient(left, rgba(228,235,206,1) 0%, rgba(164,174,214,1) 100%);
`

const styledinput = css `
 height: 30px;
 border: none;
`

const styledbutton = css `
 height: 34px;
 width: 70px;
 color: #ffffff;
 line height: 30px
 border: none;
 background: rgba(73,155,234,1);
 font-size: 16px;
`