
import React from 'react'
import StyledTable from './styled/StyledTable';


const List = ({
    items,
}) => (
    < StyledTable>
        <tbody>
            {items.map((item, i) => (
                <tr
                    key={item.id}

                >
                    <td>{i + 1}</td>
                    <td>{item.text}</td>
                    <td key={Math.round(4)}>{item.date}</td>
                </tr>   
            ))}
        </tbody>
    </StyledTable>
)

export default List
