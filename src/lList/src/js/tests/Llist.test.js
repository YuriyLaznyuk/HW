const{Llist}=require('../Llist');

describe("getSize", function() {
    it("size", function() {
      let llist0 = new Llist([2, 3, 4, 5]);
      assert.equal(llist0.getSize(), 4);

      llist0.addStart(5);
      assert.equal(llist0.getSize(), 5);
    });
  });

  describe("addStart", function() {
    it("addStart", function() {
      let llist1 = new Llist([2, 3, 4, 5]);
      assert.equal(llist1.getSize(), 4);

      llist1.addStart(5);
      assert.equal(llist1.getSize(), 5);

      assert.equal(llist1.getIndex(1).data, 5);
    });
  });

  describe("addEnd", function() {
    it("addEnd", function() {
      let llist2 = new Llist([2, 3, 4, 5]);
      assert.equal(llist2.getSize(), 4);

      llist2.addEnd(5);
      assert.equal(llist2.getSize(), 5);

      assert.equal(llist2.getIndex(5).data, 5);
    });
  });

  describe("myTostring", function() {
    it("myTostring", function() {
      let llist3 = new Llist([4, 5, 7, 8]);
      llist3.addEnd(10);
      assert.equal(llist3.myToString(), "457810");
    });
  });

  describe("getIndex", function() {
    it("getIndex", function() {
      let llist4 = new Llist([2, 3, 4, 5, 6]);
      llist4.addEnd(10);
      assert.equal(llist4.getIndex(6).data, 10);
      assert.equal(llist4.getIndex(9), "Error position");

    });
  });

  describe("delStar", function() {
    it("delStar", function() {
      let llist5 = new Llist([2, 3, 4, 5, 6]);
      llist5.delStar();
      assert.equal(llist5.getIndex(1).data, 3);
      assert.equal(llist5.getSize(), 4);
    });
  });

  describe("delEnd", function() {
    it("delEnd", function() {
      let llist6 = new Llist([2, 3, 4, 5, 6]);
      assert.equal(llist6.delEnd(), 6);
      assert.equal(llist6.getIndex(4).data, 5);
      assert.equal(llist6.getSize(), 4);
    });
  });

  describe("delPos", function() {
    it("delPos", function() {
      let llist7 = new Llist([3, 5, 7, 8, 9]);

      assert.equal(llist7.delPos(2), 5);
      assert.equal(llist7.delPos(1), 3);
      assert.equal(llist7.getSize(), 3);
      assert.equal(llist7.delPos(llist7.getSize()), 9);
      assert.equal(llist7.getSize(), 2);
    });
  });

  describe("sort", function() {
    it("sort", function() {
      let llist8 = new Llist([5, 3, 1, 2, 4]);
      llist8.sort();
      assert.equal(llist8.getIndex(1).data, 1);
      assert.equal(llist8.getIndex(2).data, 2);
      assert.equal(llist8.getIndex(3).data, 3);
      assert.equal(llist8.getIndex(4).data, 4);
      assert.equal(llist8.getIndex(5).data, 5);
      assert.equal(llist8.myToString(), "12345");
    });
  });

  describe("revers", function() {
    it("revers", function() {
      let llist9 = new Llist([3, 4, 6, 7, 1]);
      llist9.getRevers();
      assert.equal(llist9.getIndex(1).data, 1);
      assert.equal(llist9.getIndex(2).data, 7);
      assert.equal(llist9.getIndex(3).data, 6);
      assert.equal(llist9.getIndex(4).data, 4);
      assert.equal(llist9.getIndex(5).data, 3);
    });
  });

  describe("halfrevers", function() {
    it("halfrevers", function() {
      let llist10 = new Llist([3, 4, 6, 7, 1]);
      llist10.getHalfRevers();
      assert.equal(llist10.getIndex(1).data, 4);
      assert.equal(llist10.getIndex(2).data, 3);
      assert.equal(llist10.getIndex(3).data, 6);
      assert.equal(llist10.getIndex(4).data, 1);
      assert.equal(llist10.getIndex(5).data, 7);
    });
  });

  describe("clearInit", function() {
    it("clearInit", function() {
      let llist11 = new Llist([3, 4, 6, 7, 1]);
      llist11.getHalfRevers();
      llist11.clearInit();
      assert.equal(llist11.getIndex(1).data, 3);
      assert.equal(llist11.getIndex(2).data, 4);
      assert.equal(llist11.getIndex(3).data, 6);
      assert.equal(llist11.getIndex(4).data, 7);
      assert.equal(llist11.getIndex(5).data, 1);
    });
  });

  describe("setIndex", function() {
    it("setIndex", function() {
      let llist12 = new Llist([1, 2, 3, 4, 5]);
      llist12.setIndex(1, 10);
      llist12.setIndex(6, 30);

      assert.equal(llist12.getIndex(1).data, 10);
      assert.equal(llist12.getIndex(7).data, 30);
      llist12.setIndex(6, 30);
      assert.equal(llist12.getIndex(6).data, 30);
      assert.equal(llist12.setIndex(12,55), "Index error");

    });
  });
  describe("getMin", function() {
    it("getMin", function(){
      let llist13=new Llist([3,4,5,6,1]);
      assert.equal(llist13.getMin(),1);
      assert.equal(llist13.getMinIndex(),5);

    });
  });
  describe("getMax", function() {
    it("getMax", function(){
      let llist14=new Llist([3,4,5,6,1]);
      assert.equal(llist14.getMax(),6);
      assert.equal(llist14.getMaxIndex(),4);

    });
  });

  describe("getMinIndex", function() {
    it("getMin", function(){
      let llist15=new Llist([3,4,5,6,1,4,1]);
      assert.equal(llist15.getMinIndex(),5);
      assert.equal(llist15.getMin(),1);

    });
  });
  describe("getMaxIndex", function() {
    it("getMax", function(){
      let llist16=new Llist([3,4,5,6,1,4,1,6]);
      assert.equal(llist16.getMaxIndex(),4);
      assert.equal(llist16.getMax(),6);

    });
  });