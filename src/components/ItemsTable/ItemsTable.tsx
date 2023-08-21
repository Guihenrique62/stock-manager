import React, { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";
import './ItemsTable.scss'

export default function ItemsTable(){

    const {items} = useContext(StockContext)


    return( 
        <table className="tableOfItems">
            <thead className="table-head">
                <tr className="tr-head">
                    <th>ID</th>
                    <th id="nameTH">NOME</th>
                    <th>EM ESTOQUE</th>
                    <th>CATEGORIA</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {/* {items.map((item)=> (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>    
                    </tr>
                    
                ))} */}
                <tr className="table-body-trs">
                    <td>2</td>
                    <td id="nameTB">o senhor dos aneis</td>
                    <td>4</td>
                    <td>ação</td>
                    <td>
                        <a href="">lupa</a>
                        <a href="">lixo</a>
                        <a href="">atualizar</a>
                    </td>
                </tr>
                <tr className="table-body-trs">
                    <td>2</td>
                    <td id="nameTB">o senhor dos aneis</td>
                    <td>4</td>
                    <td>ação</td>
                    <td>
                        <a href="">lupa</a>
                        <a href="">lixo</a>
                        <a href="">atualizar</a>
                    </td>
                </tr>
                <tr className="table-body-trs">
                    <td>2</td>
                    <td id="nameTB">o senhor dos aneis</td>
                    <td>4</td>
                    <td>ação</td>
                    <td>
                        <a href="">lupa</a>
                        <a href="">lixo</a>
                        <a href="">atualizar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}