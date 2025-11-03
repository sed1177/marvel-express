const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

/*
require the express package
invoke express = to app so we can use all the express objects. the app object (.get, .listen apart of the express package)

enable cors
setup port

app.use(cors()) -- setup cors

*/
const marvelRivalsCharacters = {
    'sue storm': {
        'hero_name': 'Invisible Woman',
        'image': 'https://overgear.com/guides/wp-content/uploads/2025/01/marvel-rivals-invisible-woman-guide.jpg',
        'ultimate_ability': 'DISAPPEAR',
        'group': 'Fantastic 4'
    },
    'doom':{
       'hero_name': 'Dr Doom',
        'image': 'https://w0.peakpx.com/wallpaper/156/118/HD-wallpaper-dr-doom-kills-thanos-avengers-comics-death-dr-doom-marvel-onlymarvel.jpg',
        'ultimate_ability': 'DOOOOOM',
        'group': 'self team and archenemy of theFantastic 4' 
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
     'peter parker': {
        'hero_name': 'Spider-Man',
        'image': 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/image-30-201.jpg?w=1600&h=900&fit=crop',
        'ultimate_ability': 'THIS IS THE AMAZING SPIDER-MAN!',
        'group': 'Avengers' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

/*
get the '/', trying to get information from the server. get request

*/

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const marvelCharacterName = request.params.name.toLowerCase() //request.params   // { name: 'eminem' } -> with .name // 'eminem'


    if( marvelRivalsCharacters[marvelCharacterName] ){
        response.json(marvelRivalsCharacters[marvelCharacterName])
    }else{
        response.json(marvelRivalsCharacters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

