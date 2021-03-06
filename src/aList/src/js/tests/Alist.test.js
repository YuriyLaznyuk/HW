const { Alist } = require('../AList');

describe("getSize", function(){
    it("size", function(){
        let myArray0=new Alist([2,3,4,5])
        
        assert.equal(myArray0.getSize(),4);
    });
});
describe("addStart", function(){
    it("start=77", function(){
        let myArray1=new Alist([2,3,4,5]);
        myArray1.addStart(77);
        assert.equal(myArray1.getSize(),5);
    });
});
describe("addEnd", function(){
    it("end=78", function(){
        let myArray2=new Alist([2,3,4,5,6]);
        myArray2.addEnd(78)
        assert.equal(myArray2.getSize(),6);
        assert.equal(myArray2.getIndex(5),78);
    });
});
describe("myToString", function(){
    it("myTostring", function(){
        let myArray3=new Alist([55,22,77,101])
        assert.equal(myArray3.myToString(),"552277101");
    });
});
describe("delEnd", function(){
    it("delend", function(){
        let myArray4=new Alist([1,2,3,5,78]);

        assert.equal(myArray4.delEnd(),78);
        assert.equal(myArray4.getSize(),4);
    });
});
describe("delStart", function(){
    it("start", function(){
        let myArray5=new Alist([11,22,33,6,7,8]);
        assert.equal(myArray5.delStart(),11);
        assert.equal(myArray5.getSize(),5);
    });
});
describe("Clear", function(){
    it("clear", function(){
        let myArray6=new Alist([9,8,7,6,5]);
        myArray6.addEnd(777);
        myArray6.Clear();
        assert.equal(myArray6.getSize(),5);
        assert.equal(myArray6.Clear(),"9,8,7,6,5");
    });
});
describe("delPos", function(){
    it("delPos", function(){
        let myArray6=new Alist([1,2,3,4,0,6,7,0]);
        assert.equal(myArray6.delPos(0),1);               
        assert.equal(myArray6.delPos(16),"Thiss Index not array");
    });

    it("delPos", function(){
        let myArray7=new Alist([1,2,3,4,0,6,7,0]);               
        assert.equal(myArray7.delPos(7),0);              
         
    });
    it("delPos", function(){
        let myArray7=new Alist([1,2,3,4,0,6,7,0]);               
        assert.equal(myArray7.delPos(3),4);              
         
    });

    });
    

describe("get", function(){
    it("get=3", function(){
        let myArray8=new Alist([1,2,3,4,0,6,7,0]);
        assert.equal(myArray8.getIndex(3),4);
    });
    it("get=0", function(){
        let myArray9=new Alist([1,2,3,4,0,6,7,0]);
        assert.equal(myArray9.getIndex(0),1);
    });
    it("get=13", function(){
        let myArray10=new Alist([1,2,3,4,0,6,7,0]);
        assert.equal(myArray10.getIndex(13),undefined);
    });
});
describe("setIndex", function(){
    it("setIndex index=1, value=777", function(){
        let myArray11=new Alist([1,2,3,4,]);
        assert.equal(myArray11.setIndex(1, 777),"1,777,2,3,4");
        assert.equal(myArray11.getMaxIndex(),1);
    });
    it("setIndex index=12, value=777", function(){
        let myArray12=new Alist([1,2,3,4,]);
        assert.equal(myArray12.setIndex(12, 777),'error index ');
        
    });

    it("setIndex index=3, value=0", function(){
        let myArray13=new Alist([1,2,3,4,]);
        assert.equal(myArray13.setIndex(3, 0),'1,2,3,0,4');
        assert.equal(myArray13.getMinIndex(),3);
        
    });
});
describe("getMin", function(){
    it("getMin", function(){
        let myArray14=new Alist([1,2,3,4,0,6]);
        assert.equal(myArray14.getMin(),0);
    });
});
describe("getMax", function(){
    it("getMax", function(){
        let myArray15=new Alist([1,2,13,4,0,6]);
        assert.equal(myArray15.getMax(),13);
    });
});
describe("getMaxIndex", function(){
    it("getMaxIndex", function(){
        let myArray16=new Alist([1,2,13,4,0,6]);
        assert.equal(myArray16.getMaxIndex(),2);
    });
});
describe("getMinIndex", function(){
    it("getMinIndex", function(){
        let myArray17=new Alist([1,2,13,4,0,6]);
        assert.equal(myArray17.getMinIndex(),4);
    });
});
describe("getRevers", function(){
    it("getRevers  ", function(){
        let myArray18= new Alist([1,2,3,4,5]);
        assert.equal(myArray18.getRevers(),"5,4,3,2,1");
        assert.equal(myArray18.getMinIndex(),4);
        assert.equal(myArray18.getMaxIndex(),0);

    });
});
describe("sort", function(){
    it("sort ", function(){
        let myArray19= new Alist([2,0,4,1,5,3]);
        assert.equal(myArray19.sort(),"0,1,2,3,4,5");
        assert.equal(myArray19.getMinIndex(),0);
        assert.equal(myArray19.getMaxIndex(),5);
    });
});

describe("getHalfRevers", function(){
    it("getHalfRevers ", function(){
        let myArray20= new Alist([1,2,3,4,5,6]);
        assert.equal(myArray20.getHalfRevers(),"3,2,1,6,5,4");
        assert.equal(myArray20.getMinIndex(),2);
        assert.equal(myArray20.getMaxIndex(),3);
    });
});

describe("getHalfRevers", function(){
    it("getHalfRevers  ", function(){
        let myArray21= new Alist([1,2,3,0,4,5,6]);
        assert.equal(myArray21.getHalfRevers(),"3,2,1,0,6,5,4");
        assert.equal(myArray21.getMinIndex(),3);
        assert.equal(myArray21.getMaxIndex(),4);
    });
});
