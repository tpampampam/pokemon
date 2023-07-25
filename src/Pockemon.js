import axios from "axios";
import { useState, useEffect } from "react";


const Pockemon = () => {

    const [pock, setPock] = useState([])


    useEffect(() => {
        const getPock = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPock([...response.data.results])
            
        }
        getPock()
    }, [])
    console.log(pock)

    return (
        <div style={{display: 'flex', justifyContent:'space-between', width: '90%', flexWrap: 'wrap'}}>
            
            {pock && pock.map(({name,}, i) => (
                    <div >
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`} style={{width: '100px', height: '100px'}} alt="" />
                        <b>{name}</b>
                    </div>
            ))}
        </div>
    )
}

export default Pockemon;