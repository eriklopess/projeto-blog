import chai, { expect } from 'chai';
import chaiHtpp from 'chai-http';

const should = chai.should();

chai.use(chaiHtpp);

describe('POST /auth/register', () => {
    it('Check if the response is answered with a token', (done) => {
        chai.request('http://localhost:3000')
          .post('/auth')
          .send({
            email: 'email@valid.com',
            password: 'senha123',
          })
          .end((_err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('token');
            expect(res.body.token.length > 0).to.be('true')
            done();
          });
        });
});