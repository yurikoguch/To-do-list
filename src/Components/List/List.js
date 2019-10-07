import React from 'react'
import StyledTable from './styled/StyledTable';
import DeleteButton from './styled/DeleteButton';


const List = ({
                  items,
                  removeTodo,


              }) => (
    < StyledTable>
        <tbody>
        {items.map((item, i) => (
            <tr
                key={item.id}

            >
                <td>{i + 1}</td>
                <td>{item.text}</td>
                <td>{item.date}</td>
                <DeleteButton onClick={removeTodo.bind(i)}>Delete</DeleteButton>
            </tr>

        ))}
        </tbody>
    </StyledTable>
)

export default List
