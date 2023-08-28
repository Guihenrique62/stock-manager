import React from "react";
import './CreateItems.scss'
import CreateItemButton from "../CreateItemButton/CreateItemButton";
export default function CreateItems(){

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
                            <input type="text" id="newnameInput"/>
                        </div>
                        
                        <div className="quatityInput">
                            <label htmlFor="newQuantityInput">Quantidade:</label>
                            <input type="text" id="newQuantityInput"/>
                        </div>

                        <div className="priceInput">
                            <label htmlFor="newPriceInput">Preço:</label>
                            <input type="text" id="newPriceInput"/>
                        </div>

                        <div className="categoryInput">
                            <label htmlFor="newCategoryInput">Categoria:</label>
                            <input type="text" id="newCategoryInput"/>
                        </div>
                        <div className="descriptionInput">
                            <label htmlFor="newDescriptionInput">Descrição:</label>
                            <input type="text" id="newDescriptionInput" className="Inputdescription"/>
                        </div>
                        <CreateItemButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}