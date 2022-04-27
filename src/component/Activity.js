import React from 'react'
import {Button} from "react-bootstrap"



export default function Activity({id, date, amount, desc}) {



  return (
    <tr>
        <td>{id}</td>
        <td>{amount} ₺</td>
        <td>{desc}</td>
        <td>{date}</td>
        <td><Button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                delete
          </Button></td>
    </tr>
  )
}
