import cart from './Assets/cart.svg'

const CartWidget = ({quantity}) => {

  return (
    <div className='cartWidget'>
        <img src={cart} alt='cart icon'/>
        <div className='cartWidgetNumber'>{quantity}</div>
    </div>
  )
}

export default CartWidget;