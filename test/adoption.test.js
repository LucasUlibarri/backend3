import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Test del router /api/adoptions', () => {
    
    it('GET /api/adoptions - Debería retornar un array de adopciones', async () => {
        const response = await requester.get('/api/adoptions');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('status', 'success');
        expect(response.body).to.have.property('payload');
        expect(response.body.payload).to.be.an('array');
    });

    it('GET /api/adoptions/:aid - Debería retornar una adopción específica', async () => {
        const adoptionId = ''; //REMPLAZAR POR UN ID VÁLIDO DE ADOPCIÓN
        const response = await requester.get(`/api/adoptions/${adoptionId}`);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body).to.have.property('payload');
    });

    it('POST /api/adoptiosn/:uid/:pid - Debería crear una nueva adopción', async () => {
        const userId = ''; //REMPLAZAR POR UN ID VÁLIDO DE USUARIO
        const petId = ''; //REMPLAZAR POR UN ID VÁLIDO DE MASCOTA
        const response = await requester.post(`/api/adoptions/${userId}/${petId}`);

        expect(response.status).to.equal(201);
        expect(response.body).to.be.property('status', 'success');
        expect(response.body).to.have.property('message');
    });
});