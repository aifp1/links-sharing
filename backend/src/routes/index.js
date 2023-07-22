const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

const serviceAccount = require("../../link-sharing-5df3b-firebase-adminsdk-z340y-88345fe61c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://link-sharing-5df3b-default-rtdb.firebaseio.com/',
});

const db = admin.database();

router.get('/', (request,response) => {
    response.json({status: 'ok'})
})

router.post('/new-user', async (request, response) => {
    try {
        const newUser = {
            email: request.body.email,
            password: request.body.password,
        };
        await db.ref('users').push(newUser);
        response.json({status: 'recived'});
    } catch (error) {
        console.log(error);
        response.errored(error);        
    }
})

router.post('/login', async (request, response) => {
    let verificated = false
    let idVerificated = '';
    try {
        console.log(request.body)
        await db.ref('users').once('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            for (let element in data) {
                if((data[element].email === request.body.email) && (data[element].password === request.body.password) ){
                    verificated = true
                    idVerificated = element
                }
            }
        })
        console.log("verificated: ", verificated);
        console.log("Data: ", idVerificated)
        response.json({verificated: verificated, id: idVerificated});
    } catch (error) {
        console.error(error);        
    }
})

router.post('/addLink/:id', async (request, response) => {
    try {
        await db.ref('links').push({
            userId: request.params.id,
            link: request.body.link,
        });
        response.json({status: 'recived'});        
    } catch (error) {
        response.errored(error);        
    }
});

router.get('/showLink/:id', async (request, response) =>{
    let dataReturn = [];
    try {
        console.log('Holaaaaa');
        await db.ref('links').once('value', (snapshot) => {
            const data = snapshot.val();
            for (let element in data){
                if(data[element].userId === request.params.id){
                    dataReturn.push(data[element].link)
                }
            }
        })
        response.json({data: dataReturn});
    } catch (error) {
        
    }
    
});




module.exports = router;