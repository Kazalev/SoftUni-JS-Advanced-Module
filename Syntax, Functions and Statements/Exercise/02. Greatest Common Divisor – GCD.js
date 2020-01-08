function solve(x, y){
    let r = 0;
    while (x !== 0){
      r = y % x;
      y = x;
      x = r;
    }
    console.log(y);
};

solve(15, 5);