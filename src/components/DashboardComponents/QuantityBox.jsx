import './QuatityBoxStyle.scss';

export default function QuantityBox({title,quantity}){

    return(
        <section className='quantityBox'>
            <p className='contentTitle'>{title}</p>
            <p className='contentQuantity'>{quantity}</p>
        </section>
    )
}