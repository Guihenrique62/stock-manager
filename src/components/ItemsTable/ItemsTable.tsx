import React, { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";

export default function ItemsTable(){

    const {items} = useContext(StockContext)


    return( 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>EM ESTOQUE</th>
                    <th>CATEGORIA</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item)=> (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>    
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}