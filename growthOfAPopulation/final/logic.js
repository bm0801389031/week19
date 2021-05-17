//function statement named nbYear with four parameters
//p0, percent, aug, p
function nbYear(p0, percent, aug, p) {
    //for loop with global variable y assigned to 0; condition p0 less than p
    //y plus plus
        for(var y = 0; p0 < p; y++){
    //p0 assigned to p0 times paranthasis 1 plus percent devided by 100 close paran
    //plus aug
          p0 = p0 * (1 + percent / 100) + aug
      }
      //return y
    return y;
    }