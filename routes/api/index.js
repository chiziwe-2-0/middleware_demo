const moment = require('moment');

module.exports = x => { 
    const router = x.Router();

    router
    .route('/')
    .get(r => r.res.send('Аоифметика: add, mpy'));

    router
    .route('/add/:n1/:n2')
    .get(r => {
        
        const sum =  Number(r.params.n1) + Number(r.params.n2);
        r.res.format({
            'text/html': () => r.res.send(`<h2>GOT: ${sum}</h2>`),
            'application/json': () => r.res.json({"GOT": sum})

        });

    })

    router
    .post('/moment', r => {
        const z = moment().format('DD.MM.YYYY HH:mm:ss');
        console.log(r.body.name);
        r.res.send(`Hello, ${r.body.name}, сейчас ${z}`);
    });

    return router;

}