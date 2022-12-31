function solve(st,a,b){
    let string = st.slice(0,a)+st.slice(a,b+1).split('').reverse().join('')+st.slice(b+1)
    return string

   }



   console.log(solve("FunctionalProgramming", 2,15))//,"FuargorPlanoitcnmming");
   console.log(solve("abcdefghijklmnopqrstuvwxyz",0,20))//,"utsrqponmlkjihgfedcbavwxyz");