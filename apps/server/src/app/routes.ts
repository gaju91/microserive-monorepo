import getAttendanceLogData from'./controller';

async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })

    fastify.get('/getattendancelog', async (request, reply) => {
        const res = await getAttendanceLogData(request, reply);
        return res;
    })
  }
  
export default routes