import { useState, useEffect } from 'react';
import { fetchCoinByID } from '../utils/coins';
import { Link } from 'react-router-dom'
function Favorites() {
  const [IDs, setIDs] = useState([]);
  const [vacio, setVacio] = useState(null);
  const [favorites, setFavorites] = useState([])
  const [datosId, setDatosId] = useState("")
  useEffect(() => {

    const favo = (JSON.parse(localStorage.getItem("favorites")))

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
  },[])
  async function getData(id) {
    const data = await fetchCoinByID(id)
    console.log(data)
    return data
  }
  return (
    <>
      <ul>
        {IDs.map((id) => {
         { setDatosId(getData(id))}
            < li >
            <Link key={datosId.id} to={`/coin/${datosId.id}`}>
              <li>
                <h2 >{datosId.name}</h2>
                <p>{datosId.symbol}</p>
                <p>{datosId.priceUsd}</p>
              </li>
            </Link>
            </li>


        })}
    </ul >
    </>
  )
}

export default Favorites

// 