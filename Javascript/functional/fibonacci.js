//递归形式
//函数中用到了f和n
//f(3)=6;
f=function(n){
 if(n<2)return 1;
 else return n*f(n-1);
}

 console.log(f(3));
