const input = document.querySelector('.input');
const joiNed = document.querySelector('.joined');
const repos = document.querySelector('.repos');
const follow = document.querySelector('.followers');
const following = document.querySelector('.following');
const mylocation = document.querySelector('.location');
const link = document.querySelector('.link');
const twitter = document.querySelector('.twitter');
const Search = document.querySelector('.getName');
const Bio = document.querySelector('.bio');
const img = document.querySelector('.image')
const myName = document.querySelector('.name')

const sunButton = document.querySelector('.bi-sun-fill')
const moonButton = document.querySelector('.bi-moon-fill')

const lightView = document.querySelector('.dark-mode')
const darkView = document.querySelector('.light-mode')


const resetLightMode = () => {
    lightView.classList.remove('alternate')
    darkView.classList.remove('alternate')
}

const lightMode = () => {
    lightView.classList.toggle('alternate')
    darkView.classList.toggle('alternate')
}

sunButton.addEventListener("click", lightMode);
moonButton.addEventListener("click", resetLightMode)



Search.addEventListener("click", async () => {
    const response = await fetch(`https://api.github.com/users/${input.value}`, {method: "GET"});
    const data = await response.json()
    console.log(data);
    // console.log(data.avatar_url)
    // console.log(img);


    if(response.ok) {
        img.src = data.avatar_url;
        repos.textContent = data.public_repos;
        follow.textContent = data.followers;
        following.textContent = data.following;
        Bio.textContent = data.bio
        // joiNed.textContent = new Date(data.created_at).toLocaleString()
        twitter.textContent = data.twitter_username
        link.textContent = data.url;
        myName.textContent = data.name;
    }
});

