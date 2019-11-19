import axios from "axios";

  
    const apiBase = 'https://api.github.com/search/users'

    let gitClientId;
    let gitSecretId;
    
    if( process.env.NODE_ENV !== 'production' ){
      gitClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
      gitSecretId = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    } else {
      gitClientId = process.env.GITHUB_CLIENT_ID;
      gitSecretId = process.env.GITHUB_CLIENT_SECRET;
    }
    
    export const getUsers =  (text) =>{
        const res = axios.get(
            `${apiBase}?q=${text}&client_id=${gitClientId}&&client_secret=${gitSecretId}`
          );
          return  res;
    }

    export const getDefaultUsers =  ()=>{
        const res =  axios.get(
            `https://api.github.com/users?client_id=${gitClientId}&client_secret=${gitSecretId}`
          );
          return res;
    }
    


