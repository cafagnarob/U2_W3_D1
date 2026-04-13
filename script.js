const firstNameInput = document.getElementById("first_name")
const lastNameInput = document.getElementById("last_name")
const ageInput = document.getElementById("age")
const locationInput = document.getElementById("location")

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  // funzione di confronto
  sameAge = function (otherUser) {
    if (this.age === otherUser.age) {
      console.log(
        `${this.firstName} e ${otherUser.firstName} hanno la stessa età`,
      )
    } else if (this.age > otherUser.age) {
      console.log(`${this.firstName} è più grande di ${otherUser.firstName}`)
    }
  }
}
// dichiarazione degli user
const nU1 = new User("Roberto", "Cafagna", 30, "Barletta")
const nU2 = new User("Mario", "Visconti", 30, "Salerno")
const nU3 = new User("Alessia", "Cotini", 29, "Roma")

nU1.sameAge(nU3)

// stampa nella pagina dei dati raccolti
const form = document.getElementById("info_form")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const age = ageInput.value
  const location = locationInput.value

  const NewUser = new User(firstName, lastName, age, location)
  console.log("Nuovo User aggiungto!", NewUser)
  form.reset()

  const listSpace = document.getElementById("list_space")
  const list = document.createElement("p")
  list.classList.add("mt-5")
  list.innerHTML = `${NewUser.firstName} ${NewUser.lastName}, ${NewUser.age} anni, ${NewUser.location}`

  listSpace.appendChild(list)
})
