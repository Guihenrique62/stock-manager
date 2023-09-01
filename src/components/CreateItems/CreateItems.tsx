import React, { useState } from "react";
import './CreateItems.scss'
import CreateItemButton from "../CreateItemButton/CreateItemButton";

const defaultItem = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: ''
}

const CATEGORIES = [
    "Jogos",
    "Livros",
    "Brinquedos",
    "Acessórios"
]

export default function CreateItems(){

    const [item,setItem] = useState(defaultItem)

    const handleChange = (ev) => {
        setItem(currentState => {
            return {
                ...currentState,
                [ev.target.name]: ev.target.value
            }
        })
    }

    return(
        <div className="newItemsContainer">
            <div className="newitemtitle-container">
                <h3>Criar Novo Item</h3>
            </div>

            <div className="newitemForm-container">
                <form action="">
                    <div className="inputContainer">
                        <div className="nameinput">
                            <label htmlFor="newnameInput">Nome:</label>
                            <input type="text" id="newnameInput" required value={item.name} onChange={handleChange} />
                        </div>
                        
                        <div className="quatityInput">
                            <label htmlFor="newQuantityInput">Quantidade:</label>
                            <input type="text" id="newQuantityInput" required min={0} step={1} value={item.quantity} onChange={handleChange}/>
                        </div>

                        <div className="priceInput">
                            <label htmlFor="newPriceInput">Preço:</label>
                            <input type="text" id="newPriceInput" required min={0.00} step={0.01} value={item.price} onChange={handleChange}/>
                        </div>

                        <div className="categoryInput">
                            <label htmlFor="newCategoryInput">Categoria:</label>
                            <select name='newCategoryInput' id='newCategoryInput' required value={item.category} onChange={handleChange}>
                            <option disabled value=''>Selecione Uma Categoria</option>
                            {CATEGORIES.map((category)=>(
                                <option key={category} value={category} defaultChecked={item.category === category}>{category}</option>
                            ))}
                            </select>
                        </div>
                        <div className="descriptionInput">
                            <label htmlFor="newDescriptionInput">Descrição:</label>
                            <textarea name="newDescriptionInput" id="newDescriptionInput" required rows={6} value={item.description} onChange={handleChange}></textarea>
                        </div>
                        <CreateItemButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}