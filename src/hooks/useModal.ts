import { useState } from "react";

export default function useModal(){
    const [updateModal, setUpdateModal] = useState(false)

    const openOrNot = () => {

        setUpdateModal(!updateModal)
        console.log(updateModal)
    }

    return { updateModal, openOrNot}
    
}