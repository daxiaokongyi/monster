// import { Component } from 'react';
import './CardList.css'
import Card from '../card/Card';
import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[];
}
const CardList = ({monsters}: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => <Card key={`monster-${monster.id}`} monster={monster}/>)}
  </div>
)

// class CardList extends Component {    
//     render() {
//       console.log('render from card list');
//       const {monsters} = this.props;
//       return (
//           <div className='card-list'>
//             {monsters.map((monster) => <Card key={`monster-${monster.id}`} monster={monster}/>)}
//           </div>
//       )
//     }
// }

export default CardList;