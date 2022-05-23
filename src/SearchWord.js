import React, {useState} from "react";

function SearchWord(props) {
    const [message, setMessage] = useState("")
    const [search, setSearch] = useState("")

    const searchWord = () => {
        if (props.array.includes(search) === true) {
            setMessage(search + " - exist in the dictionary");
            setSearch('');
        } else {
            setMessage(search + " - don't exist in the dictionary");
            setSearch('');
        }
    }
    
    return (
        <div className="list">
            Search in dictionary:
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => {setSearch(e.target.value)}} />
            <br></br>
            <br></br>
            <button onClick={searchWord}>Search</button>
            <h4>{message}</h4>
        </div>
    );
}

export default SearchWord;