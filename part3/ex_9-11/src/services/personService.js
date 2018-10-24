import axios from 'axios'

const apiUrl = 'http://localhost:3001/api'
const personsUrl = apiUrl + '/persons'

const personUrl = (id) => (
  `${personsUrl}/${id}`
)

const all = () => (
  axios
    .get(personsUrl)
    .then(response => response.data)
)

const insert = newEntry => (
  axios
    .post(personsUrl, newEntry)
    .then(response => response.data)
)

const update = entry => (
  axios
    .put(personUrl(entry.id), entry)
    .then(response => response.data)
)

const remove = id => (
  axios.delete(personUrl(id))
)

export default { all, insert, update, remove }