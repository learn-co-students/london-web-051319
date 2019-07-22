const apiEndpoint = "http://localhost:3333/"
const allSushisUrl = `${apiEndpoint}sushis`

const getAllSushis = () => fetch(allSushisUrl).then(res => res.json())

export default {
    getAllSushis
}