import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

const CardComponent = (props) => {
    const deletefunction = (id) => {
        props.data.array.splice(props.data.array.findIndex(x => x.id == id), 1)
        props.data.setarray([...props.data.array])
    }

    const editfunction = (id) => {
        props.data.seteditid(id)
        props.data.obj = props.data.array.find((x) => x.id == id)
        props.data.setobj({ ...props.data.obj })
    }

    return (
        <>
            <Table
                bordered
                dark
                responsive
                size=""
                striped
            >
                <thead>
                    <tr>
                        <th>
                            Sr No.
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            SubTitle
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.array?.map((x, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">
                                    {i + 1}
                                </th>
                                <td>
                                    {x.title}
                                </td>
                                <td>
                                    {x.subtitle}
                                </td>
                                <td>
                                    <img src={x.image} style={{ height: '50px', width: "50px", objectFit: 'cover' }} alt="" />
                                </td>
                                <td>
                                    {x.age}
                                </td>
                                <td>
                                    <button onClick={() => editfunction(x.id)}>Edit</button>
                                    <button onClick={() => deletefunction(x.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default CardComponent
