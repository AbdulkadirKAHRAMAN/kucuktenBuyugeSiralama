const sayilar=[15,25,8,50,90,1];
function siralama(){
  const siralamaKB= sayilar.sort(function(a,b){return a-b});
  console.log(siralamaKB);
   
}
siralama();
