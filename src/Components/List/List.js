/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import shortid from 'shortid'


class List extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date,
            id: shortid.generate(),
        };
    }

    render() {
        return (
            <table css = {styledTable}>
                {this.props.items.map(item => (
                    <tbody css = {styledRow}>
                    <tr >
                        <td key={this.state.date}>{item.text}</td>
                        <td key={Math.round(4)}>{this.state.date}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        );
    };
};


export default List;

/////////styles///////////

const styledTable = css `
  margin: 0;
  padding: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  `


const styledRow = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `


