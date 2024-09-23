// import { Component } from "react";
import { ChangeEventHandler, ChangeEvent } from 'react';
import './SearchBox.css'

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({onChangeHandler, placeholder, className}: ISearchBoxProps) => (
  <input 
    className={`search-box ${className}`} 
    type='search' 
    placeholder={placeholder} 
    onChange={onChangeHandler}
  />
)


// class SearchBox extends Component {
//   render() {
//     const {onChangeHandler, placeholder, className} = this.props;
//     return (
//       <input 
//           className={`search-box ${className}`} 
//           type='search' 
//           placeholder={placeholder} 
//           onChange={onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox;