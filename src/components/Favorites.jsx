import { useState, useEffect } from 'react';
import { fetchCoinByID } from '../utils/coins';
import { Link } from 'react-router-dom'
import styles from "./Favorite.module.css"
function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const favo = (JSON.parse(localStorage.getItem("favorites")))   
  console.log(favo)
  useEffect(() => {
 
    favo.map(async (fav) => {
      setFavorites([
        ...favorites,
        await getData(fav)
      ])
    })


  }, [])
  async function getData(id) {
    const data = await fetchCoinByID(id)
    return data
  }
  return (
    <>
      <ul>
        {favorites.map((favorite) => {
         
          return (

            <Link key={favorite.data.id} to={`/coin/${favorite.data.id}`}>
              <li>
                <h2 className={styles.title}>{favorite.data.name}</h2>
                <p className={styles.symbol}>{favorite.data.symbol}</p>
                <p className={styles.text}>{favorite.data.priceUsd}</p>
              </li>
            </Link>
          )
        })}
      </ul >
    </>
  )
}

export default Favorites

/*
          
*/