const houseURL = 'https://anapioficeandfire.com/api/houses/362'

const getHouse = () => fetch(houseURL).then(res => res.json())

const getAllURLs = urls => Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
)

export default {
    getHouse,
    getAllURLs
}