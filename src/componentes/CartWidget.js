import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function CartWidget () {
    return (
      <div className="cart-widget">        
        <FontAwesomeIcon icon={faCartShopping} size="1x" color="grey" />
        <div className="qty-display">3</div>
      </div>
    );
  };
  
  export default CartWidget;
  