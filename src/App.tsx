import { useEffect, useState, ChangeEvent } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';
import { getData } from './utils/dataUtils';

export type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  }

  console.log('rendering...');

  useEffect(() => {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(users => setMonsters(users));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, []);


  // Create a new array of filtered monsters
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())});
    setFilteredMonsters(filteredMonsters);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rodolex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        className='monster-search-box'
        // value={searchField}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     // console.log('Constructor');
//     super();
//     this.state = { 
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     // console.log('DidMount');
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return {monsters: users}
//         },
//         // () => {
//         //   console.log(`4 ${this.state}`);
//         // }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value;
//     this.setState(
//       () => {
//         return {searchField};
//     })
//   }

//   render() {
//     // console.log('Rendering');
//     const {monsters, searchField} = this.state;
//     // const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return (
//       <div className="App">
//         {/* <input 
//           className='search-box' 
//           type='search' 
//           placeholder='search monsters' 
//           onChange={onSearchChange}
//         /> */}
//         <h1 className='app-title'>Monster Rodolex</h1>
//         <SearchBox 
//           onChangeHandler={this.onSearchChange} 
//           placeholder='search monsters'
//           className='monster-search-box'
//         />
//         <CardList monsters={filteredMonsters} />
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
//           <button 
//             // onClick={() => {
//             //   this.setState({name: {firstName: 'Sonic', lastName: 'Ciwei'}})
//             //   console.log(this.state)
//             // }}

//             onClick = {() => {
//               this.setState(
//                 (state, props) => {return {name: {firstName: 'Sonic', lastName: 'Ciwei'}}},
//                 () => {console.log(this.state)}
//               )
//             }}
//           >
//             Change Name
//           </button>
//         </header> */}
//       </div>
//     );
//   }
// }

export default App;
