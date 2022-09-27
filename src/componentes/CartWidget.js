import { useContext } from "react"
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../App.css';

function CartWidget () {
  const contx = useContext(CartContext);

    return (
      <div className="cart-widget">  
        <Link to='/cart' ><FontAwesomeIcon icon={faCartShopping} size="1x" color="grey" /></Link>
        <div className="qty-display">{contx.calcItemsQty()}</div>
      </div>
    );
  };
  
  export default CartWidget;
  