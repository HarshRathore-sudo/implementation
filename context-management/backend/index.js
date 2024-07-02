const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const {createNamespace} = require('cls-hooked');
const {v4:uuid} = require('uuid');

const ns = createNamespace('MyApp')
const asyncLocalStorage = new AsyncLocalStorage();
const asyncLSContext = false

const requestIdMiddleWare= (req,res,next) => {
    if(asyncLSContext){
        asyncLocalStorage.run(new Map(),() => {
            asyncLocalStorage.getStore().set('requestId',uuid());
            next();
        })
    }else {
        ns.run(()=>{
            ns.set('requestId',uuid());
            next();
        })
    }
};

const app = express();
app.use(requestIdMiddleWare);


app.get('/',(req,res) => {
    const requestId = asyncLSContext ? asyncLocalStorage.getStore().get('requestId') : ns.get('requestId');
    console.log(`[${requestId}] request received`);
    res.send('Hello World');
})
app.get('/api',(req,res) => {
    const requestId = asyncLSContext ? asyncLocalStorage.getStore().get('requestId') : ns.get('requestId');
    console.log(`[${requestId}] api request received`);
    res.send('Hello Api');
})
app.get('/api/2',(req,res) => {
    const requestId = asyncLSContext ? asyncLocalStorage.getStore().get('requestId') : ns.get('requestId');
    console.log(`[${requestId}] api2 request received`);
    res.send('Hello Api 2');
})

const port = 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));