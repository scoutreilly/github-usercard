/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

function cardMaker (dataObject) {
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  let userImage = document.createElement('img');
  userImage.src = dataObject.avatar_url;
  let cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  let usersName = document.createElement('h3');
  usersName.classList.add('name');
  usersName.innerText = dataObject.name;
  let username = document.createElement('p');
  username.classList.add('username');
  username.innerText = dataObject.login;
  let location = document.createElement('p');
  location.innerText = dataObject.location;
  let profile = document.createElement('p');
  profile.setAttribute('href', dataObject.html_url);
  profile.innerText = dataObject.html_url;
  let followers = document.createElement('p');
  followers.innerText = dataObject.followers;
  let following = document.createElement('p');
  following.innerText = dataObject.following;
  let bio = document.createElement('p');
  bio.innerText = dataObject.bio;

// console.log(myInfo);

  cardDiv.appendChild(userImage);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(usersName);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profile);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);

  return cardDiv

}

let myInfo = '';
const cardsDiv = document.querySelector('.cards');
axios.get('https://api.github.com/users/scoutreilly')
  .then((response) =>{
    myInfo = response.data;
    // console.log(myInfo);
    cardsDiv.appendChild(cardMaker(myInfo));
    });


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
let theirInfo = '';
followersArray.forEach (user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then((response) =>{
    theirInfo = response.data;
    console.log(theirInfo);
    cardsDiv.appendChild(cardMaker(theirInfo));
    });
});

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
