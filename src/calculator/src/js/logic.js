module.exports.calcRezult=calcRezult;
function calcRezult(a, b, c) {
    switch (c) {
      case "+":
        return parseFloat(a) + parseFloat(b);
        
      case "-":
        return parseFloat(a) - parseFloat(b);
      case "*":
        return parseFloat(a) * parseFloat(b);
      case "/":
        return parseFloat(a) / parseFloat(b);  
      default:
        break;
    }
  }
