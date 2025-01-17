require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1292303151516487750',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.AIzaSyCkk4QkaDYtZgHoAgzMcLvSnCL0DCTWXzk,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.241929b03c664ee0b5ee38f7ffcada6b,
        clientSecret: process.env.ac7f0d5b0ff14eb989dc3a3e549a9fa7,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
