import "../Styles/ItemListContainer.css"

const ItemListContainer = ({name, description, price, img}) => {

    return(
        <div className='ItemCard'>
            <div className='ItemCardImgContainer'>
                <img src={img} alt={name} className='ItemCardImg'/>
            </div>
            <div className='ItemCardDetails'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default ItemListContainer 