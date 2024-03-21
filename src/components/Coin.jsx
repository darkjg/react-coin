import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { fetchCoinByID } from '../utils/coins';
import styles from "./Coin.module.css"

function Coin() {

    console.log((localStorage.getItem("favorites")));
    const [coin, setCoin] = useState();
    const [favs, setFavorites] = useState([])
    let { id } = useParams();


    useEffect(() => {
        const getData = async () => {
            const data = await fetchCoinByID(id)
            setCoin(data.data)
            console.log(data.data)
        }
        getData()

    }, [])

    const addToFavorite = () => {
        console.log(JSON.parse(localStorage.getItem("favorites"))+"Log")
        console.log(favs + "favs")
        setFavorites([
            ...favs,
            JSON.parse(localStorage.getItem("favorites"))
        ])
        console.log(favs + "favs")
        setFavorites([
            ...favs,
            coin.id
        ])
        setFavorites(Oldfavs => {
            return Oldfavs.filter(favsold => favsold != null)
        })
        setFavorites(Oldfavs => {
            return Oldfavs.filter((favsold, i) => Oldfavs.indexOf(favsold) == i)
        })

        localStorage.setItem("favorites", JSON.stringify(favs))
       

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