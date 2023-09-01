import React, { useState } from 'react'
import './ModalUpdade.scss'
import CreateItemButton from '../CreateItemButton/CreateItemButton'


const CATEGORIES = [
    "Jogos",
    "Livros",
    "Brinquedos",
    "Acessórios"
]

export default function ModalUpdade({isOpen, itemToUpdate}) {

    const defaultItem = {
        name: '',
        description: '',
        quantity: 0,
        price: 0,
        category: ''
    }
    const [item,setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)

    const handleChange = (ev) => {
        setItem(currentState => {
            return {
                ...currentState,
                [ev.target.name]: ev.target.value
            }
        })
    }

    if(isOpen){
        return (
            <div className='container-update-bg'>
                <div className='container-update'>
                <div className='titleModalUpdate'>
                    <h3>Atualizar Item</h3>
                    <div className='closeXUpdate'><img src="/x.png" alt="" /></div> 
                </div>
                
                    <form className='form-update'>
                        <div className='nameInputUpdate'>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name='name' id='name' required value={item.name} onChange={handleChange} />
                        </div>
                        <div className='quatityInputUpdate'>
                            <label htmlFor="quantity">Quantidade:</label>
                            <input type="number" name='quantity' id='quantity' required min={0} step={1} value={item.quantity} onChange={handleChange} />
                        </div>
                        <div className='priceInputUpdate'>
                            <label htmlFor="price">Preço:</label>
                            <input type="number" name='price' id='price' required min={0.00} step={0.01} value={item.price} onChange={handleChange} />
                        </div>
                        <div className='categoryInputupdate'>
                            <label htmlFor="category">Categoria:</label>
                            <select name='category' id='category' required value={item.category} onChange={handleChange}>
                            <option disabled value=''>Selecione Uma Categoria</option>
                            {CATEGORIES.map((category)=>(
                                <option key={category} value={category} defaultChecked={item.category === category}>{category}</option>
                            ))}
                            </select>
                        </div>
                        <div className='descriptionInputUpdate'>
                            <label htmlFor="description">Descrição:</label>
                            <textarea name="description" id="description" required rows={6} value={item.description} onChange={handleChange}></textarea>
                        </div>
                        <CreateItemButton/>
                    </form>
                </div>
            </div>
        )
    }
  
    return null
}
