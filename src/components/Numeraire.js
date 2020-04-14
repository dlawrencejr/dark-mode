import React, {useEffect} from 'react'
import axios from 'axios'

const Numeraire = () =>{
    useEffect(() =>{
        axios
        .get('https://api.coingecko.com/api/v3/coins/numeraire')
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='App'>
            <h1>Numeraire</h1>
        </div>
    );
};

export default Numeraire;