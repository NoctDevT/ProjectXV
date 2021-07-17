import react, { useState, useEffect } from 'react'
import JSONDATA from './MOCK_DATA.json'
import './search.css'
// import { IFFT } from '@tensorflow/tfjs';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [wordEntered, setWordEntered] = useState('');



    const clearInput = () => {
        setSearchTerm('')
    }

    return (

        <div className="search">
            <input type="type"
                placeholder="Search..."
                value={searchTerm}
                onChange={event => {
                    setSearchTerm(event.target.value)
                }} />
            <div className="searchIcon">
                {searchTerm.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={() => setSearchTerm('')} />}
            </div>



            <div className="listContainer">
                {JSONDATA.filter((val) => {
                    if (searchTerm === "") {
                        return null;
                    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => {
                    console.log(searchTerm.length)
                    return (
                        <li className="listItem" key={key} onClick={() => { }}>
                            {val.first_name}
                        </li>
                    );
                })}
            </div>

        </div>
    )
}

export default Search;