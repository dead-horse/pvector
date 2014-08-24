/*!
 * pvector - test/index.test.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var PVector = require('..');

describe('PVector', function () {
  describe('fromAngle()', function () {
    it('should ok', function () {
      var v = PVector.fromAngle(Math.PI / 2);
      v.x.should.equal(0);
      v.y.should.equal(1);
    });
  });

  describe('random2D()', function () {
    it('should get a random vector', function () {
      var v = PVector.random2D();
      v.should.have.keys(['x', 'y']);
    });

    it('should set a vector to random', function () {
      var v = PVector(0, 0);
      PVector.random2D(v);
      v.x.should.not.equal(0);
      v.y.should.not.equal(0);
    });
  });

  describe('set()', function () {
    it('should set ok', function () {
      var v = PVector(1, 1);
      v.set();
      v.x.should.equal(0);
      v.y.should.equal(0);
      v.set(2, 1);
      v.x.should.equal(2);
      v.y.should.equal(1);
    });
  });

  describe('add()', function () {
    it('should v1.add(v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      var v3 = v1.add(v2);
      v3.x.should.equal(2);
      v3.y.should.equal(2);
    });

    it('should PVector.add(v1, v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      PVector.add(v1, v2).x.should.equal(2);
      PVector.add(v1, v2).y.should.equal(2);
    });
  });

  describe('sub()', function () {
    it('should v1.sub(v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      var v3 = v1.sub(v2);
      v3.x.should.equal(0);
      v3.y.should.equal(0);
    });

    it('should PVector.sub(v1, v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      PVector.sub(v1, v2).x.should.equal(0);
      PVector.sub(v1, v2).y.should.equal(0);
    });
  });

  describe('div()', function () {
    it('should v1.div(n) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = v1.div(2);
      v2.x.should.equal(0.5);
      v2.y.should.equal(0.5);
    });

    it('should PVector.div(v1, v2) ok', function () {
      var v1 = PVector(1, 1);
      PVector.div(v1, 2).x.should.equal(0.5);
      PVector.div(v1, 2).y.should.equal(0.5);
    });

    it('should PVector.div(v1, v2) assign to target', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(0, 0);
      PVector.div(v1, 2, v2).x.should.equal(0.5);
      PVector.div(v1, 2, v2).y.should.equal(0.5);
      v2.x.should.equal(0.5);
      v2.y.should.equal(0.5);
    });
  });

  describe('mult()', function () {
    it('should v1.mult(n) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = v1.mult(2);
      v2.x.should.equal(2);
      v2.y.should.equal(2);
    });

    it('should PVector.mult(v1, v2) ok', function () {
      var v1 = PVector(1, 1);
      PVector.mult(v1, 2).x.should.equal(2);
      PVector.mult(v1, 2).y.should.equal(2);
    });

    it('should PVector.mult(v1, v2) assign to target', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(0, 0);
      PVector.mult(v1, 2, v2).x.should.equal(2);
      PVector.mult(v1, 2, v2).y.should.equal(2);
      v2.x.should.equal(2);
      v2.y.should.equal(2);
    });
  });

  describe('dot()', function () {
    it('should v1.dot(v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      v1.dot(v2).should.equal(2);
    });

    it('should PVector.dot(v1, v2) ok', function () {
      var v1 = PVector(1, 1);
      var v2 = PVector(1, 1);
      PVector.dot(v1, v2).should.equal(2);
    });
  });

  describe('mag()', function () {
    it('should v1.mag() ok', function () {
      var v1 = PVector(3, 4);
      v1.mag().should.equal(5);
    });
  });

  describe('dist', function () {
    it('should PVector.dist(v1, v2) ok', function () {
      var v1 = PVector(3, 4);
      var v2 = PVector(0, 0);
      PVector.dist(v1, v2).should.equal(5);
    });
  });

  describe('normalize()', function () {
    it('should v1.normalize() ok', function () {
      var v1 = PVector(3, 4);
      v1.normalize();
      v1.x.should.equal(0.6);
      v1.y.should.equal(0.8);
    });

    it('should PVector(0, 0).normalize() ok', function () {
      var v1 = PVector(0, 0);
      v1.normalize();
      v1.x.should.equal(0);
      v1.y.should.equal(0);
    });
  });

  describe('limit()', function () {
    it('should v1.limit(2) ok', function () {
      var v1 = PVector(3, 4);
      v1.limit(2);
      v1.x.should.equal(1.2);
      v1.y.should.equal(1.6);
    });

    it('should v1.limit(10) ok', function () {
      var v1 = PVector(3, 4);
      v1.limit(10);
      v1.x.should.equal(3);
      v1.y.should.equal(4);
    });
  });

  describe('setMag()', function () {
    it('should v1.setMag(2) ok', function () {
      var v1 = PVector(3, 4);
      v1.setMag(2);
      v1.x.should.equal(1.2);
      v1.y.should.equal(1.6);
    });

    it('should v1.setMag(10) ok', function () {
      var v1 = PVector(3, 4);
      v1.setMag(10);
      v1.x.should.equal(6);
      v1.y.should.equal(8);
    });
  });

  describe('clone()', function () {
    it('should v1.clone() ok', function () {
      var v1 = PVector(3, 4);
      v1.clone().setMag(10).x.should.equal(6);
      v1.x.should.equal(3);
    });
  });

  describe('heading()', function () {
    it('should v.heading() ok', function () {
      PVector(0, 1).heading().should.equal(Math.PI / 2);
      PVector(0, -1).heading().should.equal(-Math.PI / 2);
      PVector(1, 0).heading().should.equal(0);
      PVector(-1, 0).heading().should.equal(Math.PI);
      PVector(1, 1).heading().should.equal(Math.PI / 4);
    });
  });

  describe('angleBetween()', function () {
    it('should v1.angleBetween(v2) ok', function () {
      var v1 = PVector(1, 0);
      var v2 = PVector(0, 1);
      v1.angleBetween(v2).should.equal(Math.PI / 2);
    });

    it('should PVector.angleBetween(v1, v2) ok', function () {
      var v1 = PVector(1, 0);
      var v2 = PVector(0, 1);
      PVector.angleBetween(v1, v2).should.equal(Math.PI / 2);
    });
  });
});
