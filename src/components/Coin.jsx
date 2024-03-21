import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { fetchCoinByID } from '../utils/coins';
import styles from "./Coin.module.css"

function Coin() {
    const [coin, setCoin] = useState();
    let { id } = useParams();

    useEffect(() => {
        const getData = async() => {
            const data = await fetchCoinByID(id)
            setCoin(data.data)
            console.log(data.data)
        }
        getData()
    }, [])

    const addToFavorite = () => {
        localStorage.setItem("favorites",coin.id)
    }

    return (
        <>
        {coin ? (
            <div>
                <h2>{coin.name}</h2>
                <button onClick={addToFavorite}>Añadir a favoritos</button>
            </div>
        ) : (
            'Loading'
        )}

        </>

    )
}

export default Coin