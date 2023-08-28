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
                {items.map((item)=> (
                    <tr key={item.id} className="table-body-trs">
                        <td>{item.id}</td>
                        <td className="nameTB">{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.category}</td>
                        <td className="actionTB">
                            <button className="iconsBtn"><img src='../../../public/lupa.png' alt="lupa"/></button>
                            <button className="iconsBtn"><img src='../../../public/setas-circulares.png' alt="atualizar" /></button>
                            <button className="iconsBtn"><img src='../../../public/lixeira.png' alt="lixeira" /></button>
                        </td>  
                    </tr>
                    
                ))}
                
            </tbody>
        </table>
    )
}