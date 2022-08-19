

 let n = 877;
  isFail = true;
  for(let i = 2; i< n; i++){
   if(n % i == 0){
      console.log(`Составное число`);
      isFail = false;
      break;
   }else{
    console.log(`Простое число ${n}`);
    isFail
   }
 }