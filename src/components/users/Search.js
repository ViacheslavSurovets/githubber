import React, {  useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, setAlertMsg, showClear, clearUsers,}) => {
const [text, setText] = useState('');


const onSubmit = (e) => {
    e.preventDefault();

    if(text === ''){
       setAlertMsg('Please write something...', 'light')
    } else {
        searchUsers(text)
        setText('')
    }    
}

const onChange = (e) =>  setText( e.target.value)


        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input 
                    type="text"
                     name="text"
                     placeholder="Search for ViacheslavSurovets or someone else..."
                   value={text}
                    onChange={onChange}
                       />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }


export default Search

Search.propTypes ={
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlertMsg: PropTypes.func.isRequired
}
