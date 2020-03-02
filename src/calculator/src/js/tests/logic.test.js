const {calcRezult}=require('../logic')

describe("calcRezult", function(){
    it("Impart a=5, b=10, c=+",function(){
        assert.equal(calcRezult(5,10,"+"),15);
    });
    it("Impart a=5, b=2.5, c=+",function(){
        assert.equal(calcRezult(5,2.5,"+"),7.5);
    });
    it("Impart a=5, b=0, c=+",function(){
        assert.equal(calcRezult(5,0,"+"),5);
    });
    
    it("Impart a=5, b=10, c= -",function(){
        assert.equal(calcRezult(5,10,"-"),-5);
    });
    it("Impart a=5, b=2.5, c=-",function(){
        assert.equal(calcRezult(5,2.5,"-"),2.5);
    });
    it("Impart a=5, b=0, c=-",function(){
        assert.equal(calcRezult(5,0,"-"),5);
    });
    it("Impart a=5, b=5, c=-",function(){
        assert.equal(calcRezult(5,5,"-"),0);
    });


    it("Impart a=5, b=10, c=*",function(){
        assert.equal(calcRezult(5,10,"*"),50);
    });

    it("Impart a=5, b=2.1, c=*",function(){
        assert.equal(calcRezult(5,2.1,"*"),10.5);
    })

    it("Impart a=5, b=0, c=*",function(){
        assert.equal(calcRezult(5,0,"*"),0);
    })


    it("Impart a=5, b=10, c=/",function(){
        assert.equal(calcRezult(5,10,"/"),0.5);
    });
    
    it("Impart a=5, b=0.2, c=/",function(){
        assert.equal(calcRezult(5,0.2,"/"),25);
    });
    
    it("Impart a=5, b=0, c=/",function(){
        assert.equal(calcRezult(5,0,"/"),Infinity );
    });
});