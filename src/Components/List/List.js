/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

const List = ({
    items,
}) => (
    <table css={styledTable}>
        <tbody>
            {items.map((item, i) => (
                <tr
                    key={item.id}
                    css={styledRow}
                >
                    <td>{i + 1}</td>
                    <td>{item.text}</td>
                    <td key={Math.round(4)}>{item.date}</td>
                </tr>   
            ))}
        </tbody>
    </table>
)

export default List

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
