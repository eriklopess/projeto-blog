import chai from 'chai';
import chaiHtpp from 'chai-http';

const should = chai.should();

chai.use(chaiHtpp);

describe('testes if data validation is correct', () => {
  it('Test data validation on post /authentication', (done) => {
    chai.request('http://localhost:3000')
      .post('/auth')
      .send({
        email: 'emailinvalido',
        password: 'teste',
      })
      .end((_err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('message');
        done();
      });
  });
});
