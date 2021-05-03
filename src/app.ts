import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-logger';
import bodyParser from 'koa-bodyparser';

// app config
const app = new Koa();
const router = new Router();

const port : number = 3002;

interface HelloRequest {
    name: string;
}

// hello world
router.get('/', async (ctx, next) => {
    ctx.body = { message: 'Hello World'};
    await next();
})

router.post('/msg', async (ctx, next) => {
    const data = <HelloRequest>ctx.request.body;
    ctx.body = { name: data.name};
    await next();
})

// Middleware
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Koa Started`);
    console.log(`Listening port ${port}`);
})