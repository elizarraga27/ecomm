import app from '../../app.js'
import { afterEach, beforeEach } from '@jest/globals'
import request from 'supertest';

let server;
beforeEach( () => {
    const port = 3000;
    server = app.listen(port);
});

afterEach( () => {
    server.close();
});

describe('GET em /categorias', () => {
    it('Deve retornar uma lista de categorias', async () => {
        const resposta = await request(app)
            .get('/categorias')
            .set('Accept', 'application/json')
            .expect('content-Type', /json/)
            .expect(200);
    });
});

describe('POST em /categorias', () => {
    it('Deve adicionar uma nova categoria', async () => {
        await request(app)
        .post('/categorias')
        .send({
            nome: "LIVROS",
            status: "ATIVA"
    })
        expect(201);
    });
});

describe('GET diferenciado em /categorias/id', () => {
    it('Deve retornar categoria selecionado', async () => {
        const resposta = await request(app)
        .get('/categorias/64835a7d5b20e8affcba8616')
        .set('Accept', 'application/json')
        .expect('content-Type', /json/)
        .expect(200);
    });
});