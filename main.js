let btn = document.querySelector('button')

btn.addEventListener("click", fetchMarvelCharacterDetails)

function fetchMarvelCharacterDetails(){
    let characterHeroName = document.querySelector('#characterName')
    let characterImage = document.querySelector('#characterImage')
    let characterUltimate = document.querySelector('#characterUltimate')
    let group = document.querySelector('#group')
    let userInput = document.querySelector('input').value

    fetch( `/api/${userInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        characterHeroName.innerHTML  = data.hero_name
        characterImage.src = data.image
        characterUltimate.innerHTML = data.ultimate_ability
        group.innerHTML = data.group
    })

}