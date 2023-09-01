import React from 'react'

export default function FinishedItemsTable() {
  return (
    <table className='finished-item-table' >
            <thead className='finished-item-head'>
                <tr className='finished-tr-head'>
                    <th >Itens Acabando</th>
                    <th>Qtd</th>
                    <th>Ações</th>
                </tr>
            </thead>
           
            <tbody className='finished-item-body'>
                
                    <tr className='finished-tr-body'>
                        <td>O senhor do aneis</td>
                        <td id='quantity-finished'>8</td>
                        <td className='button-finished-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr>
                    
            </tbody>
        </table>
  )
}
