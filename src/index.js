const express = require('express')
const app = express()

const appList = [
 'Travis'
]
appList.map(appName=>{
 app.use(`/${appName}`,require(`${appName}`))
})


app.listen(process.env.PORT||3003,()=>{
 console.log('Ativado')
})
