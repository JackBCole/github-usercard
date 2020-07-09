import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myGithub = 'https://api.github.com/users/JackBCole'
axios.get(myGithub)
.then(function (something) {
debugger
something.data
})
.catch(function (error) {
// debugger
console.log(error)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const githubProfile = myGithub.something.data

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const profileCards = document.querySelector('.cards')
const gitCard = githubProfileMaker({
  imageURL: '"https://avatars3.githubusercontent.com/u/64171526?v=4"',
  name: myGithub.name,
  username:
})
function githubProfileMaker(imageURL, ){


  const card = document.createElement('div')
  
  const profilePic = document.createElement('img')
  profilePic.classList.add('.card img')
  profilePic.src = imageURL
  card.appendChild(profilePic)

  const name = document.createElement('h3')
  name.classList.add('.card .name')
  name.textContent = `${githubProfile.name}`
  
  card.appendChild(name)

  const username = document.createElement('p')
  username.classList('.card .username')
  username.textContent = `${githubProfile.username}`
  card.appendChild(username)

  const location = document.createElement('p')
  location.classList('.card p')
  location.textContent = `${githubProfile.location}`
  card.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent = `${githubProfile.profile}`
  profile.classList('.card p')

  card.appendChild(profile)

  const followers = document.createElement('p')
  followers.classList('.card p')
  followers.textContent = `${githubProfile.followers}`
  card.appendChild(followers)

  const following = document.createElement('p')
  following.classList('.card p')
  following.textContent = `${githubProfile.following}`

  card.appendChild(following)

  const bio = document.createElement('p')
  bio.classList('.card p')
  bio.textContent = `${githubProfile.bio}`
  card.appendChild(bio)

  profileCards.appendChild(card)

  return card
}
console.log(profileCards)
console.log(githubProfileMaker())
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
