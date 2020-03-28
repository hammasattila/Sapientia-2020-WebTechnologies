//fordított lengyel jelölésű számológép

var expr1 = "2 3 + .";
var expr2 = "2 3 4 + * 6 - .";
var expr3 = "22 3.7 444 + * 66.5 - .";

var expr4 = "2 +";
var expr5 = "+";
var expr6 = "2 3 + /";
var expr7 = "2 3 + . .";

function polishCalc(expr) {
    if (expr[expr.length - 1] !== '.') { throw "invalid expression"; }
    return expr + expr.split(" ").reduce((acc, c) => {
        if (0 < acc.length && isNaN(acc[0])) { throw "invalid expression"; }
        if (isNaN(c)) {
            try {
                switch (c) {
                    case '+': acc.push(acc.pop() + acc.pop()); break;
                    case '-': acc.push(acc.pop() - acc.pop()); break;
                    case '*': acc.push(acc.pop() * acc.pop()); break;
                    case '/': acc.push(acc.pop() / acc.pop()); break;
                    case '.': acc.push(' = ' + acc.pop().toString()); break;
                    default: throw "invalid operator in expression";
                }
            } catch (error) {
                throw "invalid expression";
            }
        } else {
            acc.push(Number(c));
        }

        return acc;
    }, []).pop();
}

try {
    console.debug(polishCalc(expr7));
    //polishCalc(expr1);//5
    //polishCalc(expr2);//8
    //polishCalc(expr3);//9782.9
} catch (msg) {
    console.error(msg);
}
