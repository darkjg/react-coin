const API_URL = 'https://api.coincap.io/v2/assets/'

    
export const fetchCoins = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error!!!')
    }
    const data = await response.json()
    return data
}
    
export const fetchCoinByID = async(id) => {
    const response = await fetch(`${API_URL}${id}`)
    if(!response.ok) {
        throw new Error('Error!!')
    }
    const data = await response.json()
    return data
}

