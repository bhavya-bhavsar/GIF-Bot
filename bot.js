const discord = require('discord.js')
const axios = require('axios').default
const client = new discord.Client()
require('dotenv').config()

const TOKEN = process.env.TOKEN
client.login(TOKEN)
const GIPHY_KEY = process.env.GIPHYKEY

function gif(usertag) {

    return axios.get('https://api.giphy.com/v1/gifs/random?api_key=' + GIPHY_KEY + '&tag=' + usertag + '=&rating=g')

}

client.on('ready', () => {
    console.log('I am ready')
})

client.on('message', message => {
    if (message.content === 'hello' || message.content === 'Hello' && message.channel.id === '792006109498048513') {
        message.channel.send('Hi, ' + message.author.username)
    }
});

const wordMatch = /!\w+/





client.on('message', message => {
    if (wordMatch.test(message)) {
        const word = wordMatch.exec(message)[0].split('!')[1]
        gif(word).then(res => {
            message.channel.send((res.data['data']['embed_url']));
        })
    }
})