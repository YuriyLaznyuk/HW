const regExp = require("../regexp");

describe("regExp1", function() {
  it("regExp1", function() {
    assert.deepEqual(regExp.regExp1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
  });
});

describe("regExp2", function() {
  it("regExp2", function() {
    assert.deepEqual(regExp.regExp2("aba aca aea abba adca abea"), [
      "abba",
      "adca",
      "abea"
    ]);
  });
});

describe("regExp3", function() {
  it("regExp3", function() {
    assert.deepEqual(regExp.regExp3("aba aca aea abba adca abea"), ["abba", "abea"]);
  });
});

describe("regExp4", function() {
  it("regExp4", function() {
    assert.deepEqual(regExp.regExp4("aa aba abba abbba abca abea"), ["aba", "abba", "abbba"]);
  });
});
describe("regExp5", function() {
  it("regExp5", function() {
    assert.deepEqual(regExp.regExp5("aa aba abba abbba abca abea"), ["aa", "aba", "abba", "abbba"]);
  });
});
describe("regExp6", function() {
  it("regExp6", function() {
    assert.deepEqual(regExp.regExp6("aa aba abba abbba abca abea"), ["aa", "aba"]);
  });
});

describe("regExp7", function() {
  it("regExp7", function() {
    assert.deepEqual(regExp.regExp7("aa aba abba abbba abca abea"), ["aa", "aba", "abba", "abbba"]);
  });
})

describe("regExp8", function() {
  it("regExp8", function() {
    assert.deepEqual(regExp.regExp8("ab abab abab abababab abea"), ["abab", "abab", "abababab"]);
  });
})
///////////////
describe("regExp9", function() {
  it("regExp9", function() {
    assert.deepEqual(regExp.regExp9("a.a aba aea"), ["a.a"]);
  });
})

describe("regExp10", function() {
  it("regExp10", function() {
    assert.deepEqual(regExp.regExp10("2+3 223 2223"), ["2+3"]);
  });
})

describe("regExp11", function() {
  it("regExp11", function() {
    assert.deepEqual(regExp.regExp11("23 2+3 2++3 2+++3 345 567"), ["2+3", "2++3", "2+++3"]);
  });
})

describe("regExp12", function() {
  it("regExp12", function() {
    assert.deepEqual(regExp.regExp12("23 2+3 2++3 2+++3 445 677"), ["23", "2+3", "2++3", "2+++3"]);
  });
})

describe("regExp13", function() {
  it("regExp13", function() {
    assert.deepEqual(regExp.regExp13("*+ *q+ *qq+ *qqq+ *qqq qqq+"), ["*q+", "*qq+", "*qqq+"]);
  });
})
////////////
describe("regExpReplace14", function() {
  it("regExpReplace14", function() {
    assert.equal(regExp.regExpReplace14("aba accca azzza wwwwa"), "! ! ! wwwwa");
  });
})
describe("regExp15", function() {
  it("regExp15", function() {
    assert.deepEqual(regExp.regExp15("aa aba abba abbba abbbba abbbbba"), ["abba", "abbba", "abbbba"]);
  });
})
describe("regExp16", function() {
  it("regExp16", function() {
    assert.deepEqual(regExp.regExp16("aa aba abba abbba abbbba abbbbba"), ["aba", "abba", "abbba"]);
  });
})
describe("regExp17", function() {
  it("regExp17", function() {
    assert.deepEqual(regExp.regExp17("aa aba abba abbba abbbba abbbbba"), ["abbbba", "abbbbba"]);
  });
})
///////
describe("regExp18", function() {
  it("regExp18", function() {
    assert.deepEqual(regExp.regExp18("a1a a2a a3a a4a a5a aba aca"), ["a1a", "a2a", "a3a", "a4a", "a5a"]);
  });
})
describe("regExp19", function() {
  it("regExp19", function() {
    assert.deepEqual(regExp.regExp19("a1a a22a a333a a4444a a55555a aba aca"), ["a1a", "a22a", "a333a", "a4444a", "a55555a"]);
  });
})
describe("regExp20", function() {
  it("regExp20", function() {
    assert.deepEqual(regExp.regExp20("aa a1a a22a a333a a4444a a55555a aba aca"), ["aa", "a1a", "a22a", "a333a", "a4444a", "a55555a"]);
  });
})
describe("regExp21", function() {
  it("regExp21", function() {
    assert.deepEqual(regExp.regExp21("avb a1b a2b a3b a4b a5b abb acb"), ["avb", "abb", "acb"]);
  });
})
describe("regExp22", function() {
  it("regExp22", function() {
    assert.deepEqual(regExp.regExp22("ave a#b a2b a$b a4b a5b a-b acb"), ["a#b", "a$b", "a-b"]);
  });
})
describe("regExpReplace23", function() {
  it("regExpReplace23", function() {
    assert.equal(regExp.regExpReplace23("ave a#a a2a a$a a4a a5a a-a aca"), "ave!a#a!a2a!a$a!a4a!a5a!a-a!aca");
  });
})
/////////////////////////
describe("regExp24", function() {
  it("regExp24", function() {
    assert.deepEqual(regExp.regExp24("aba aea aca aza axa"), ["aba", "aea", "axa"]);
  });
})
describe("regExp25", function() {
  it("regExp25", function() {
    assert.deepEqual(regExp.regExp25("aba aea aca aza axa a.a a+a a*a"), ["aba", "a.a", "a+a", "a*a"]);
  });
})
describe("regExp26", function() {
  it("regExp26", function() {
    assert.deepEqual(regExp.regExp26("aba a3a aca a6a axa a7a a2a a5a"), ["a3a", "a6a", "a7a", "a5a"]);
  });
})
describe("regExp27", function() {
  it("regExp27", function() {
    assert.deepEqual(regExp.regExp27("aba awa aca a6a axa ada asa afa"), ["aba", "aca", "ada", "afa"]
    );
  });
})
describe("regExp28", function() {
  it("regExp28", function() {
    assert.deepEqual(regExp.regExp28("aba awa aca a6a aha ada aka afa"), ["aba", "awa", "aca", "ada", "aka", "afa"]);
  });
})
describe("regExp29", function() {
  it("regExp29", function() {
    assert.deepEqual(regExp.regExp29("aFa awa aca a6a aha aYa aka afa"), ["aFa", "aca", "aYa", "afa"]);
  });
})
describe("regExp30", function() {
  it("regExp30", function() {
    assert.deepEqual(regExp.regExp30("aFa awa axa a6a aha aea aka afa"), ["aFa", "awa", "a6a", "aha", "aka", "afa"]);
  });
})
describe("regExp31", function() {
  it("regExp31", function() {
    assert.deepEqual(regExp.regExp31("aFa aяa aca a6a aЯa aYa aЙa afa"), ["aяa", "aЯa", "aЙa"]);
  });
})
/////////////////////
describe("regExp32", function() {
  it("regExp32", function() {
    assert.deepEqual(regExp.regExp32("aAXa aeffa aGha aza ax23a a3sSa"), ["aeffa", "aza"]);
  });
})
describe("regExp33", function() {
  it("regExp33", function() {
    assert.deepEqual(regExp.regExp33("aAXa aeffa aGha aza ax23a a3sSa"), ["aAXa", "aeffa", "aGha", "aza"]);
  });
})
describe("regExp34", function() {
  it("regExp34", function() {
    assert.deepEqual(regExp.regExp34("aAXa aeffa aGha aza ax23a a3sSa"), ["aeffa", "aza", "ax23a"]);
  });
})
describe("regExp35", function() {
  it("regExp35", function() {
    assert.deepEqual(regExp.regExp35("ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ  ЙЙЙ"), ["ааа", "ббб", "ззз", "ййй", "ААА", "БББ", "ЗЗЗ", "ЙЙЙ"]);
  });
})
/////////////////
describe("regExpReplace36", function() {
  it("regExpReplace36", function() {
    assert.equal(regExp.regExpReplace36("aaa aaa aaa"), "! aaa aaa");
  });
})
describe("regExpReplace37", function() {
  it("regExpReplace37", function() {
    assert.equal(regExp.regExpReplace37("aaa aaa aaa"), "aaa aaa !");
  });
})
////////////////////
describe("regExp38", function() {
  it("regExp38", function() {
    assert.deepEqual(regExp.regExp38("aeeea aeea aea axa axxa axxxa"), ["aeeea", "aeea", "aea", "axa", "axxa", "axxxa"]);
  });
})
describe("regExp39", function() {
  it("regExp39", function() {
    assert.deepEqual(regExp.regExp39("aeeea aeea aea axa axxa axxxa"), ["aeea", "axa", "axxa", "axxxa"]);
  });
})
///////////////
describe("regExpReplace40", function() {
  it("regExpReplace40", function() {
    assert.equal(regExp.regExpReplace40("a\\a abc"), "! abc");
  });
})
describe("regExpReplace41", function() {
  it("regExpReplace41", function() {
    assert.equal(regExp.regExpReplace41("a\\a  a\\\\a  a\\\\\\a"), "a\\a  a\\\\a  !");
  });
})
/////////////////
describe("regExpReplace42", function() {
  it("regExpReplace42", function() {
    assert.equal(regExp.regExpReplace42("bbb/aaa\\ bbb/ccc\\"), "bbb! bbb!");
  });
})
//////////////////

describe("regExpReplace43", function() {
  it("regExpReplace43", function() {
    assert.equal(regExp.regExpReplace43("aaa@bbb eee7@kkk"), "bbb@aaa kkk@eee7");
  });
})

describe("regExpReplace44", function() {
  it("regExpReplace44", function() {
    assert.equal(regExp.regExpReplace44("a1b2c3"), "a11b22c33");
  });
})
//////////////regExpTest45,regExp46,regExpTest47, regExpTest48,regExpTest49,regExpTest50,regExpTest51,
// regExpTest52,regExpTest53,regExpSum54}

describe("regExpTest45", function() {
  it("regExpTest45", function() {
    assert.equal(regExp.regExpTest45("mai-Wl@mail.comii"), true);
  });
})
describe("regExp46", function() {
  it("regExp46", function() {
    assert.deepEqual(regExp.regExp46("mymail@mail.ru  mymail@mail.r///u"), ["mymail@mail.ru"]);
  });
})

describe("regExpTest47", function() {
  it("regExpTest47", function() {
    assert.equal(regExp.regExpTest47("site.ru"), true);
    assert.equal(regExp.regExpTest47("siteru"), false);
  });
})
describe("regExpTest48", function() {
  it("regExpTest48", function() {
    assert.equal(regExp.regExpTest48("http://site.ru"), true);
    assert.equal(regExp.regExpTest48("http://site"), false);
  });
})
describe("regExpTest49", function() {
  it("regExpTest49", function() {
    assert.equal(regExp.regExpTest49("https://site.ru"), true);
    assert.equal(regExp.regExpTest49("htt://site.ru"), false);
  });
})
describe("regExpTest50", function() {
  it("regExpTest50", function() {
    assert.equal(regExp.regExpTest50("https://site.r.....u"), true);
    assert.equal(regExp.regExpTest50("h://site.r.....u"), false);
  });
})
describe("regExpTest51", function() {
  it("regExpTest51", function() {
    assert.equal(regExp.regExpTest51("site.php"), true);
    assert.equal(regExp.regExpTest51("site.pyp"), false);
  });
})
describe("regExpTest52", function() {
  it("regExpTest52", function() {
    assert.equal(regExp.regExpTest52("php.jpg"), true);
    assert.equal(regExp.regExpTest52("php.jyg"), false);
  });
})
describe("regExpTest53", function() {
  it("regExpTest53", function() {
    assert.equal(regExp.regExpTest53("111111111111"), true);
    assert.equal(regExp.regExpTest53("111"), false);
  });
})
describe("regExpSum54", function() {
  it("regExpSum54", function() {
    assert.equal(regExp.regExpSum54("dd 4 9 1ss sd6sd "), 20);
  });
})

// regExpReplace55,regExpReplace56,regExpReplace57,regExpReplace58,regExpPositivNegativ59,regExpPositivNegativ60}

describe("regExpReplace55", function() {
  it("regExpReplace55", function() {
    assert.equal(regExp.regExpReplace55("http://site.ru"), '<a href="http://site.ru">site.ru</a>');
  });
})

describe("regExpReplace56", function() {
  it("regExpReplace56", function() {
    assert.equal(regExp.regExpReplace56("aa  aa  dd  dd  r  rr"), "aa aa dd dd r rr");
  });
})

describe("regExpReplace57", function() {
  it("regExpReplace57", function() {
    assert.equal(regExp.regExpReplace57("sss/*ggg*/ /*,,,,*/ /**/"), "sss");
  });
})

describe("regExpReplace58", function() {
  it("regExpReplace58", function() {
    assert.equal(regExp.regExpReplace58("aaaa<!--ggg--> <!--,,,,--> <!---->"), "aaaa");
  });
})

describe("regExpPositivNegativ59", function() {
  it("regExpPositivNegativ59", function() {
    assert.equal(regExp.regExpPositivNegativ59("aaab aaax aaay"), "!b aaax aaay");
  });
})

describe("regExpPositivNegativ60", function() {
  it("regExpPositivNegativ60", function() {
    assert.equal(regExp.regExpPositivNegativ60("aaab aaax aaay"), "aaab !x !y");
  });
})
////////////

describe("regExpReplace61", function() {
  it("regExpReplace61", function() {
    assert.equal(regExp.regExpReplace61("2 4 5"), "4 16 25");
  });
})

describe("regExpReplace62", function() {
  it("regExpReplace62", function() {
    assert.equal(regExp.regExpReplace62("aaa2 aaa'4'c ccc'5'"), "aaa2 aaa'8'c ccc'10'");
  });
})

describe("regExpReplace63", function() {
  it("regExpReplace63", function() {
    assert.equal(regExp.regExpReplace63("aaa2 {{текст}} ccc'5'"), "aaa2 {{тскет}} ccc'5'");
  });
})

describe("regExpReplace64", function() {
  it("regExpReplace64", function() {
    assert.equal(regExp.regExpReplace64("233 + 350 ="), "233 + 350 =583");
  });
})
////////////
describe("regExpTest65", function() {
  it("regExpTest65", function() {
    assert.equal(regExp.regExpTest65("1999"), true);
    assert.equal(regExp.regExpTest65('4999'), false);
  });
})
describe("regExpTest66", function() {
  it("regExpTest66", function() {
    assert.equal(regExp.regExpTest66('12:19'), true);
    assert.equal(regExp.regExpTest66('42:19'), false);
  });
})
describe("regExpTest67", function() {
  it("regExpTest67", function() {
    assert.equal(regExp.regExpTest67('12.09 pm'), true);
    assert.equal(regExp.regExpTest67('12-09 pm'), false);
  });
})

describe("regExpReplace68", function() {
  it("regExpReplace68", function() {
    assert.equal(regExp.regExpReplace68("rtyy dftjjn dfyt sgglx"), "  dfyt ");
  });
})

describe("regExpReplace69", function() {
  it("regExpReplace69", function() {
    assert.equal(regExp.regExpReplace69('dftjjn dfyt rtyy rtyy'), "dftjjn dfyt rtyy");
  });
})

describe("regExpReplace70", function() {
  it("regExpReplace70", function() {
    assert.equal(regExp.regExpReplace70("rtyy rtyy rtyy rtyy dftjjn dfyt sgglx"), "rtyy dftjjn dfyt sgglx");
  });
})
