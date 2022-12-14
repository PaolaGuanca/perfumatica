import { Link } from 'react-router-dom';
import '../App.css';

const Item = ({ id, pictureUrl, title }) => {
    return (
        <div className="perf card mat-card">
          <div className="imgCont">
            <img src={pictureUrl} alt={title}/>             
          </div>
          <h1>{title}</h1> 
          <Link to={`/item/${id}`}><span className="navLinkColorD">Detalles</span></Link>                 
        </div>
);	
}

export default Item;