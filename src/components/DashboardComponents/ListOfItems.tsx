import { useContext } from "react"
import { StockContext } from "../../contexts/StockContext"
import React from "react"

export default function ListOfItems(){

    const { items } = useContext(StockContext)

    return (
        <div className="ListOfItems">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </div>
    )
}