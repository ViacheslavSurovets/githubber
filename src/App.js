import React, { Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';



function App () {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null)
  
  useEffect(()=>{
  setLoading(true);
  async function res(){
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    return setUsers(res.data)  
  }
  res()
setLoading(false)
},[])
  
 

/* async componentDidMount(){
  
this.setState({ loading: true})

const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

this.setState({ users: res.data, loading: false })

} */



const searchUsers = async text =>{
  setLoading( true );
const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
setUsers(res.data.items)
setLoading(false );
}

//clear users from state
const clearUsers = () =>{
setUsers( [] )
setLoading(false)
}

const setAlertMsg = (msg, type) =>{
  setAlert({msg, type})

  setTimeout(() => setAlert(null), 5000)
}

 
  
    return(
      <Router>
        <div className="App">
      <Navbar />
      <div className='container'></div>
      <Alert alert={alert}/>
      <Switch>
        <Route exact path='/' render={props =>(
          <Fragment>
      <Search 
      searchUsers= {searchUsers} 
      clearUsers={clearUsers} 
      showClear={users.length > 0 ? true : false}
      setAlertMsg={setAlertMsg}
      />
      <Users loading= {loading} users={users}/>
          </Fragment>
        )} />
        <Route exact path ='/about' component={About} />
        )}/>
      </Switch>
    
    </div>
      </Router>
    
    )


  
}

export default App;


