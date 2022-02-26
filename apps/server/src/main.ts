const fastify = require("fastify")({ logger: true });
import routes from './app/routes';

fastify.register(routes)

fastify.listen(8080, () => {
    console.log("Listening at port 8080");
})

