import React from 'react'
import liste from "./Modal"
import Activity from "./Activity"
import {Table} from "react-bootstrap"

export default function List() {
  return (


    <section>
        <Table>
            <thead>
                <tr>
                <th>id</th>
                <th>Tutar</th>
                <th>Açıklama</th>
                <th>Tarih</th>
                </tr>
            </thead>
            <tbody>
                {liste.map((item, index) => {
                    return <Activity {...item}></Activity>
                })
                    
                }
            </tbody>
        </Table>
    </section>
  )
}

