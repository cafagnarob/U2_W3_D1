const PetNameInput = document.getElementById("pet_name")
const OwnerNameInput = document.getElementById("owner_name")
const SpeciesInput = document.getElementById("species")
const BreedInput = document.getElementById("breed")
const form = document.getElementById("info_form")
const pets = []

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const petName = PetNameInput.value
  const ownerName = OwnerNameInput.value
  const species = SpeciesInput.value
  const breed = BreedInput.value

  const sameOwner = function () {
    if (pets[0].ownerName === pets[1].ownerName) {
      console.log(
        `${pets[0].petName} e ${pets[1].petName} hanno lo stesso padrone (${pets[0].ownerName})`,
      )
    } else {
      console.log(
        `${pets[0].petName} e ${pets[1].petName} NON hanno lo stesso padrone`,
      )
    }
  }
  const NewPet = new Pet(petName, ownerName, species, breed)
  pets.push(NewPet)
  console.log(pets)

  const listSpace = document.getElementById("list_space")
  const list = document.createElement("p")
  list.classList.add("mt-5")
  list.innerHTML = `${NewPet.petName} è l'animale di ${NewPet.ownerName}, è un ${NewPet.species} di razza ${NewPet.breed}`

  listSpace.appendChild(list)
  sameOwner()
  form.reset()
})

const ownerName = []
for (let i = 0; i < pets.length; i++) {
  if (ownerName.includes(pets[i].ownerName)) {
  } else {
    ownerName.push(pets[i].ownerName)
  }

  if (ownerName[i] === ownerName[i + 1]) {
    console.log(
      `${pets[0].petName} e ${pets[1].petName} hanno lo stesso padrone (${pets[0].ownerName})`,
    )
  }
}
