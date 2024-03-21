import { useState, useEffect } from 'react';
import { fetchCoinByID } from '../utils/coins';
import { Link } from 'react-router-dom'
import styles from "./Favorite.module.css"

const favo = (JSON.parse(localStorage.getItem("favorites")))
console.log(JSON.parse(localStorage.getItem("favorites")))
function Favorites() {
  const [favorito, setFavorito] = useState([]);

  useEffect(() => {

    favo.map(async (fav) => {
      setFavorito([
        ...favorito,
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
        {favorito.map((favorite) => {

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

