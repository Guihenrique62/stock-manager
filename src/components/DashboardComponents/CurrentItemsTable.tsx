import React from 'react'
import './tables.scss'

export default function CurrentItemsTable() {
  return (
    <table className='current-item-table' >
            <thead className='current-item-head'>
                <tr className='current-tr-head'>
                    <th id='namecurrent'>Itens mais Recentes</th>
                    <th>Ações</th>
                </tr>
            </thead>
           
            <tbody className='current-item-body'>
                
                    <tr className='current-tr-body'>
                        <td>O senhor do aneis</td>
                        <td className='button-current-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className='current-tr-body'>
                        <td>O senhor do aneis</td>
                        <td className='button-current-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr><tr className='current-tr-body'>
                        <td>O senhor do aneis</td>
                        <td className='button-current-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className='current-tr-body'>
                        <td>O senhor do aneis</td>
                        <td className='button-current-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr>
                    <tr className='current-tr-body'>
                        <td>O senhor do aneis</td>
                        <td className='button-current-td'>
                            <button className="iconsBtn"><img src="../../../public/seta-direita.png" alt="" /></button>
                        </td>
                    </tr>
                    
                   
                
                
            </tbody>
        </table>
  )
}
