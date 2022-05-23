import  React, {useState} from "react";

function AddWords(props) {
    const [word, setWord] = useState("");

    const add = () => {
        if (props.array.includes(word) === false && word.includes(" ") === false && word !== "") {
            props.array.push(word);
            setWord('');
        } 
    }

    return (
        <div className="list">
            Enter the word here:
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => {setWord(e.target.value)}}/>
            <br></br>
            <br></br>
            <button onClick={add}>Add</button>
            <br></br>
            <br></br>
            {props.array.map(id => <li key={id}>{id}</li>)}
            <br></br>
        </div>
    );
}

export default AddWords;