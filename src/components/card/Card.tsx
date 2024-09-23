// import { Component } from "react";
import './Card.css';
import { Monster } from '../../App';

type CardProps = {
  monster: Monster
}

const Card = ({monster}: CardProps) => {
  const {name, id, email} = monster;
  return (
    <div className='card-container'>
    <img src={`https://www.robohash.org/${id}?set=set2&size=180x180`} alt={`monster-${name}`}/>
    <h2 >{name}</h2>
    <p>{email}</p>
  </div>
  )
};

// class Card extends Component{
//   render(){
//     const {name, id, email} = this.props.monster;
//     return (
//       <div className='card-container'>
//         <img src={`https://www.robohash.org/${id}?set=set2&size=180x180`} alt={`monster-${name}`}/>
//         <h2 >{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }

export default Card;