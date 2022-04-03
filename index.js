document.querySelector('.btn').addEventListener('click', () => {
    const inp = document.querySelector('.inp').value;

    document.querySelector('.result').innerHTML = isValid(inp);
  });
  
document.querySelector('.check').addEventListener('click', () => {
    const inp = document.querySelector('.inp').value;

    document.querySelector('.result').innerHTML = checkBrackets(inp);
  });

function isValid(a) {
  
    const brackets = {
      ')': '('
    };
  
    const stack = [];
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "(") {
        stack.push(a[i]);
      } 
      else if (stack[stack.length - 1] === brackets[a[i]]) {
        stack.pop();
      } 
      else {
        return false;
      }
    }
  
    return stack.length ? false : true;
};

function checkBrackets(str) {
    let count = 0;
  
    for (const letter of str) {
      if (letter === '(') {
        ++count;
        }
      else if (letter === ')') {
        --count;
      
        if (count < 0) {
            return false;
        }
      }
    }
  
    return count === 0;
  }; 