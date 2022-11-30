import React from 'react';
import {Link} from 'react-router-dom'
import './Product.css';


type Props = {
    img: string,
    name: string
  }

const Product:React.FC<Props> = ({img, name}) =>  {
  return (
  <div className ="product">
    
  <div>
      <img src={img}/>
  </div>
  <h3>{ name }</h3>
</div>
)
    
}
export default Product;



/*<header>
<section className="logoContainer">
    <section className="logo">
        <img src="/img\logo.jpg" alt="logo"/>
    </section>
    <section className="logoText">
        <h2>DND helper<br/>fun version </h2>
    </section>
</section>
</header>

<form className="Category">
<div>
<ul>
    Категории
        <li className="heroes"><img className ="icon" style={{width: "40px"}} src="/img/icon/hero.png"/> <Link to='/' style={{font: "20px"}}> Персонажи </Link> </li> 
        <li className="monster"><img className="icon" src="/img\icon\monster.png"/><Link to='/bestiary'>Бестиарий</Link></li>
        <li className="magic"><img className="icon" src="/img\icon\magic.jpg"/><a href="#">Заклинания</a></li>
        <li className="weapon"><img className="icon" src="/img\icon\weapon.png"/><a href="#">Предметы</a></li>
        <li className="races"><img className="icon" src="/img\icon\races.jpg"/><a href="#">Расы</a></li>
        <li className="classes"><img className="icon" src="/img\icon\classes.jpg"/><a href="#">Классы</a></li>
    </ul>
</div>
</form>   */