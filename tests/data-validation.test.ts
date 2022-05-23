import chai from 'chai';
import chaiHtpp from 'chai-http';

const should = chai.should();

chai.use(chaiHtpp);

describe('DATA VALIDATION', () => {
  describe('POST /auth', () => {
    
  describe('EMAIL', () => {
    it('Check if an incorrect email format is approved', (done) => {
      chai.request('http://localhost:3000')
        .post('/auth')
        .send({
          email: 'emailinvalido',
          password: 'senha123123',
        })
        .end((_err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          res.body.error.should.be.a('string');
          res.body.error.should.eql('"email" must be a valid email');
          done();
        });
    });

    it('Check if a resquest missing email property is approved', (done) => {
      chai.request('http://localhost:3000')
        .post('/auth')
        .send({
          password: 'senha123123',
        })
        .end((_err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          res.body.error.should.be.a('string');
          res.body.error.should.deep.eql('"email" is required');
          done();
        });
    });
  });

  describe('PASSWORD', () => {
    it('Check if an incorrect password format is approved', (done) => {
      chai.request('http://localhost:3000')
        .post('/auth')
        .send({
          email: 'email@valido.com',
          password: '',
        })
        .end((_err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          res.body.error.should.be.a('string');
          res.body.error.should.eql('"password" is not allowed to be empty');
          done();
        });
    });

    it('Check if a resquest missing password property is approved', (done) => {
      chai.request('http://localhost:3000')
        .post('/auth')
        .send({
          email: 'email@valido.com',
        })
        .end((_err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          res.body.error.should.be.a('string');
          res.body.error.should.deep.eql('"password" is required');
          done();
        });
    });
  });
});
});
