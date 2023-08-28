import React from 'react'
import './ModalComponent.scss'

export default function ModalComponent({ifUse}) {

  if(ifUse){
  return (
      <div className='bg-modal-container'>
        <div className='modal-container'>

          <div className='titleModal'>
            <h3>O senhor Dos Aneis</h3>
            <div className='closeX'><img src="/x.png" alt="" /></div> 
          </div>

            <div className='descriptions'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus, commodi doloribus temporibus natus voluptatibus sed vel ab nobis assumenda eveniet illo tempora accusantium saepe, sapiente facere. Quis, laborum eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo unde deleniti provident modi, ex dicta accusamus recusandae, magni quaerat mollitia pariatur doloremque quod veniam, maiores consequuntur aspernatur? Libero, quam tempora!</p>
            </div>

            <div className='categorys'>
              <label htmlFor="Category">Categoria:</label>
              <label htmlFor="Quantity">Quantidade em Estoque:</label>
              <label htmlFor="Price">Preço:</label>
            </div>

            <div className='datas'>
              <p>Cadastrado em: <label>16/01/2023</label></p>
              <p>Atualizado em: <label>16/01/2023</label></p>
            </div>
        </div>
      </div>
    )
  }
  
  return null
}
