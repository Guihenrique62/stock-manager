import React, { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";
import './ItemsTable.scss'
import useModal from "../../hooks/useModal";
export default function ItemsTable(){

    const {items} = useContext(StockContext)
    const modal = useModal()

    const itemexample = [
        {
            id: 1,
            name: 'teste',
            quantity: 3,
            category: ['açao', 'drama']
        }
    ]
    

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
                {itemexample.map((item)=> (
                    <tr key={item.id} className="table-body-trs">
                        <td>{item.id}</td>
                        <td className="nameTB">{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.category}</td>
                        <td className="actionTB">
                            <button className="iconsBtn"><img src='/lupa.png' alt="lupa"/></button>
                            <button className="iconsBtn"><img src='/setas-circulares.png' alt="atualizar" onClick={modal.openOrNot} /></button>
                            <button className="iconsBtn"><img src='/lixeira.png' alt="lixeira" /></button>
                        </td>  
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}