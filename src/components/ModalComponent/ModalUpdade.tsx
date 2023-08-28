import React from 'react'

export default function ModalUpdade({isOpen}) {

    if(isOpen){
        return (
            <div>
                <h3>Atualizar Item</h3>
                
                <form></form>
            </div>
        )
    }
  
    return null
}
