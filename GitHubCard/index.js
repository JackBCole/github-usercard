import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myGithub = 'https://api.github.com/users/JackBCole'
axios.get(myGithub)
.then(function (something) {

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

//const followersArray = [];

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
  imageURL: githubProfile.avatar_url,
  name: githubProfile.name,
  username: githubProfile.login,
  location: githubProfile.location,
  profile: githubProfile.profile,
  followers: githubProfile.followers,
  following: githubProfile.following,
  bio: githubProfile.bio,
})

console.log(gitCard)

function githubProfileMaker(imageURL, name, username, location, profile, followers,
  following, bio){


  const card = document.createElement('div')
  
  const profilePic = document.createElement('img')
  profilePic.classList.add('.card img')
  profilePic.src = imageURL
  card.appendChild(profilePic)

  const gitName = document.createElement('h3')
  gitName.classList.add('.card .name')
  gitName.textContent = `${name}`
  
  card.appendChild(gitName)

  const gitUsername = document.createElement('p')
  gitUsername.classList('.card .username')
  gitUsername.textContent = `${username}`
  card.appendChild(gitUsername)

  const userLocation = document.createElement('p')
  userLocation.classList('.card p')
  userLocation.textContent = `${location}`
  card.appendChild(userLocation)

  const gitProfile = document.createElement('p')
  gitProfile.textContent = `${profile}`
  gitProfile.classList('.card p')

  card.appendChild(gitProfile)

  const gitFollowers = document.createElement('p')
  gitFollowers.classList('.card p')
  gitFollowers.textContent = `${followers}`
  card.appendChild(gitFollowers)

  const gitFollowing = document.createElement('p')
  gitFollowing.classList('.card p')
  gitFollowing.textContent = `${following}`

  card.appendChild(gitFollowing)

  const gitBio = document.createElement('p')
  gitBio.classList('.card p')
  gitBio.textContent = `${bio}`
  card.appendChild(gitBio)

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
