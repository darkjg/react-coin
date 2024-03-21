import { useState, useEffect } from 'react';
import { fetchCoinByID } from '../utils/coins';

function Favorites() {
  const [IDs, setIDs] = useState([]);
  const [vacio, setVacio] = useState(null);
  const [favorites, setFavorites] = ([])
  useEffect(() => {

    const favo = (localStorage.getItem("favorites"))

    console.log(favo)
    if (favo != null) {
      favo.map((fav) => {
        setIDs([
          ...IDs,
          fav
        ])
      })
    } else {
      setVacio("No existen favoritos")
    }
  })
  async function getData(id) {
    const data = await fetchCoinByID(id)
    return data
  }
  return (
    IDs.map((id) => {
      { let datosId = getData(id) }
      <Link key={datosId.id} to={`/coin/${datosId.id}`}>
        <li>
          <h2 className={styles.title}>{datosId.name}</h2>
          <p>{datosId.symbol}</p>
          <p>{datosId.priceUsd}</p>
        </li>
      </Link>
    })
  )
}

export default Favorites

// 