"use strict";
module.exports = {
  regExp1,
  regExp2,
  regExp3,
  regExp4,
  regExp5,
  regExp6,
  regExp7,
  regExp8,
  regExp9,
  regExp10,
  regExp11,
  regExp12,
  regExp13,
  regExpReplace14,
  regExp15,
  regExp16,
  regExp17,
  regExp18,
  regExp19,
  regExp20,
  regExp21,
  regExp22,
  regExpReplace23,
  regExp24,
  regExp25,
  regExp26,
  regExp27,
  regExp28,
  regExp29,
  regExp30,
  regExp31,
  regExp32,
  regExp33,
  regExp34,
  regExp35,
  regExpReplace36,
  regExpReplace37,
  regExp38,
  regExp39,
  regExpReplace40,
  regExpReplace41,
  regExpReplace42,
  regExpReplace43,
  regExpReplace44,
  regExpTest45,
  regExp46,
  regExpTest47,
  regExpTest48,
  regExpTest49,
  regExpTest50,
  regExpTest51,
  regExpTest52,
  regExpTest53,
  regExpSum54,
  regExpReplace55,
  regExpReplace56,
  regExpReplace57,
  regExpReplace58,
  regExpPositivNegativ59,
  regExpPositivNegativ60,
  regExpReplace61,
  regExpReplace62,
  regExpReplace63,
  regExpReplace64,
  regExpTest65,
  regExpTest66,
  regExpTest67,
  regExpReplace68,
  regExpReplace69,
  regExpReplace70
};

function regExp1(st) {
  let shablon1 = /a.b/g;

  return st.match(shablon1);
}
function regExp2(st) {
  let shablon2 = /a..a/g;

  return st.match(shablon2);
}

function regExp3(st) {
  let shablon3 = /ab.a/g;

  return st.match(shablon3);
}

function regExp4(st) {
  let shablon4 = /ab+a/g;

  return st.match(shablon4);
}

function regExp5(st) {
  let shablon5 = /ab*a/g;

  return st.match(shablon5);
}

function regExp6(st) {
  let shablon6 = /ab?a/g;

  return st.match(shablon6);
}

function regExp7(st) {
  let shablon7 = /ab*a/g;

  return st.match(shablon7);
}

function regExp8(st) {
  let shablon8 = /(ab)+(ab)/g;

  return st.match(shablon8);
}

function regExp9(st) {
  let shablon9 = /a\.a/g;

  return st.match(shablon9);
}
function regExp10(st) {
  let shablon10 = /2\+3/g;

  return st.match(shablon10);
}
function regExp11(st) {
  let shablon11 = /2\++3/g;

  return st.match(shablon11);
}

function regExp12(st) {
  let shablon12 = /2\+*3/g;

  return st.match(shablon12);
}

function regExp13(st) {
  let shablon13 = /\*q+\+/g;

  return st.match(shablon13);
}

function regExpReplace14(st) {
  let shablon14 = /a.*?a/g;

  return st.replace(shablon14, "!");
}
regExpReplace14("aba accca azzza wwwwa");

function regExp15(st) {
  let shablon15 = /ab{2,4}a/g;

  return st.match(shablon15);
}

function regExp16(st) {
  let shablon16 = /ab{1,3}a/g;

  return st.match(shablon16);
}
function regExp17(st) {
  let shablon17 = /ab{4}b*a/g;

  return st.match(shablon17);
}

function regExp18(st) {
  let shablon = /a\da/g;

  return st.match(shablon);
}
function regExp19(st) {
  let shablon = /a\d+a/g;

  return st.match(shablon);
}

function regExp20(st) {
  let shablon = /a\d*a/g;

  return st.match(shablon);
}

function regExp21(st) {
  let shablon = /a\Db/g;

  return st.match(shablon);
}

function regExp22(st) {
  let shablon = /a\Wb/g;

  return st.match(shablon);
}

function regExpReplace23(st) {
  let shablon = /\s/g;

  return st.replace(shablon, "!");
}

function regExp24(st) {
  let shablon = /a[bex]a/g;

  return st.match(shablon);
}

function regExp25(st) {
  let shablon = /a[b\.\+\*]a/g;

  return st.match(shablon);
}

function regExp26(st) {
  let shablon = /a[3-7]a/g;

  return st.match(shablon);
}
function regExp27(st) {
  let shablon = /a[a-g]a/g;

  return st.match(shablon);
}

function regExp28(st) {
  let shablon = /a[a-fj-z]a/g;

  return st.match(shablon);
}

function regExp29(st) {
  let shablon = /a[a-fA-Z]a/g;

  return st.match(shablon);
}

function regExp30(st) {
  let shablon = /a[^ex\s]a/g;

  return st.match(shablon);
}

function regExp31(st) {
  let shablon = /a[а-яА-ЯЁёйЙ]a/g;

  return st.match(shablon);
}

function regExp32(st) {
  let shablon = /a[a-z]+a/g;

  return st.match(shablon);
}
function regExp33(st) {
  let shablon = /a[a-zA-Z]+a/g;

  return st.match(shablon);
}
function regExp34(st) {
  let shablon = /a[a-z\d]+a/g;

  return st.match(shablon);
}
function regExp35(st) {
  let shablon = /[а-яА-я]+/g;

  return st.match(shablon);
}

function regExpReplace36(st) {
  let shablon = /^aaa/g;

  return st.replace(shablon, "!");
}

function regExpReplace37(st) {
  let shablon = /aaa$/g;

  return st.replace(shablon, "!");
}

function regExp38(st) {
  let shablon = /ae+a|ax+a/g;

  return st.match(shablon);
}

function regExp39(st) {
  let shablon = /ae{2}a|ax+a/g;

  return st.match(shablon);
}
regExp38("aeeea aeea aea axa axxa axxxa");
regExp39("aeeea aeea aea axa axxa axxxa");

function regExpReplace40(st) {
  let shablon = /a\\a/g;

  return st.replace(shablon, "!");
}
regExpReplace40("aa abc");

function regExpReplace41(st) {
  let shablon = /a(\\){3}a/g;

  return st.replace(shablon, "!");
}
regExpReplace41("aa  a\\a  a\\a");

function regExpReplace42(st) {
  let shablon = /\/.+?\\/g;

  return st.replace(shablon, "!");
}

regExpReplace42("bbb/aaa\\ bbb/ccc\\");

function regExpReplace43(st) {
  let shablon = /([\w]+)@([\w]+)/g;

  return st.replace(shablon, "$2@$1");
}
regExpReplace43("aaa@bbb eee7@kkk");
function regExpReplace44(st) {
  let shablon = /(\d)/g;

  return st.replace(shablon, "$1$1");
}
regExpReplace44("a1b2c3");

function regExpTest45(st) {
  let shablon = /^[a-zA-z]+\D[a-zA-z]+@[a-z]+\.[a-z]{2,5}$/;

  return shablon.test(st);
}
regExpTest45("mai-Wl@mail.comii");
function regExp46(st) {
  let shablon = /[a-zA-z]+\D+[a-zA-Z]+@[a-z]+\.[a-z]{2,5}/g;

  return st.match(shablon);
}

regExp46("mymail@mail.ru  mymail@mail.r///u");
// http://site.ru, http://site.com.

function regExpTest47(st) {
  let shablon = /^[a-z]+\.[a-z]{2,3}$/;

  return shablon.test(st);
}
regExpTest47("site.ru");

function regExpTest48(st) {
  let shablon = /^(http:\/\/)[a-z]+\.[a-z]{2,3}$/;

  return shablon.test(st);
}
regExpTest48("http://site.ru");

function regExpTest49(st) {
  let shablon = /^(http)|(https)(:\/\/) [a-z]+\.[a-z]{2,3}$/;

  return shablon.test(st);
}
regExpTest49("https://site.ru");

function regExpTest50(st) {
  let shablon = /^(http)|(https)/;

  return shablon.test(st);
}
regExpTest50("https://site.r.....u");

function regExpTest51(st) {
  let shablon = /(\.txt)|(\.html)|(\.php)$/;

  return shablon.test(st);
}
regExpTest51("site.php");

function regExpTest52(st) {
  let shablon = /(\.jpg)|(\.jpeg)$/;

  return shablon.test(st);
}
regExpTest52("php.jpg");
// 53. С помощью test узнайте является ли строка числом, длиной до 12 цифр.
function regExpTest53(st) {
  let shablon = /^\d{12}$/;

  return shablon.test(st);
}
regExpTest53("111111111111");

function regExpSum54(st) {
  let shablon = /\d/g;

  let mus = st.match(shablon);
  let sum = 0;
  for (let i = 0; i < mus.length; i++) {
    sum += parseInt(mus[i]);
  }

  return sum;
}
regExpSum54("dd 4 9 1ss sd6sd ");

function regExpReplace55(st) {
  let shablon = /(http:\/\/)[a-z]{4}\.[a-z]{2,3}/g;

  return st.replace(shablon, '<a href="http://site.ru">site.ru</a>');
}
regExpReplace55("http://site.ru");

function regExpReplace56(st) {
  let shablon = /\s{2}/g;

  return st.replace(shablon, " ");
}
regExpReplace56("aa    aa    dd   dd       r  rr");

function regExpReplace57(st) {
  let shablon = /\/\*.*\*\//g;

  return st.replace(shablon, "");
}
regExpReplace57("/*ggg*/ /*,,,,*/ /**/  dd   dd       r  rr");

function regExpReplace58(st) {
  let shablon = /\<\!\-\-.*\-\-\>/g;

  return st.replace(shablon, "");
}
regExpReplace58("<!--ggg--> <!--,,,,--> <!---->  d1d   d1d       r  r1r");

function regExpPositivNegativ59(st) {
  return st.replace(/aaa(?=b)/g, "!");
}
regExpPositivNegativ59("aaab aaax aaay");

function regExpPositivNegativ60(st) {
  return st.replace(/aaa(?!b)/g, "!");
}
regExpPositivNegativ60("aaab aaax aaay");

function regExpReplace61(st) {
  let shablon = /\d/g;
  let rez = st.replace(shablon, function(shablon) {
    return shablon * shablon;
  });

  return rez;
}
regExpReplace61("2 4 5");

function regExpReplace62(st) {
  let shablon = /\d(?=')/g;
  let rez = st.replace(shablon, function(shablon) {
    return 2 * shablon;
  });

  return rez;
}
regExpReplace62("aaa2 aaa'4'c ccc'5'");

function regExpReplace63(st) {
  let shablon = /текст(?=)/g;
  let rez = st.replace(shablon, "тскет");

  return rez;
}
regExpReplace63("aaa2 {{текст}} ccc'5'");

function regExpReplace64(st) {
  let shablon = /(\d+)\s\+\s(\d+)\s=/g;
  let rez = st.replace(shablon, function(shablon, shablon1, shablon2) {
    let sum = parseInt(shablon1) + parseInt(shablon2);
    return shablon + sum;
  });

  return rez;
}
regExpReplace64("233 + 350 =");

function regExpTest65(st) {
  let shablon = /19\d\d|20\d\d|2100$/;

  return shablon.test(st);
}

regExpTest65("1999");

function regExpTest66(st) {
  let shablon = /(^[0-2][0-9]:[0-5][0-9]$)/g;
  let rez = shablon.test(st);

  return rez;
}
regExpTest66("12:19");

function regExpTest67(st) {
  let shablon = /([0-12]\.[0-5][0-9]\sam)|([0-12]\.[0-5][0-9]\spm)/g;
  let rez = shablon.test(st);

  return rez;
}
regExpTest67("12.09 pm");

function regExpReplace68(st) {
  let shablon = /\W*\w*([a-zа-я])\1\w*\W*/g;
  let rez = st.replace(shablon, " ");

  return rez;
}
regExpReplace68("rtyy dftjjn dfyt sgglx");

function regExpReplace69(st) {
  let shablon = /\b(\w+)\s+\1/g;
  let rez = st.replace(shablon, "$1");

  return rez;
}
regExpReplace69("rtyy dftjjn dfyt sgglx rtyy");

function regExpReplace70(st) {
  let shablon = /\b(\w+)\b(\s\1)+/g;
  let rez = st.replace(shablon, "$1");

  return rez;
}
regExpReplace70("rtyy dftjjn dfyt sgglx rtyy");
