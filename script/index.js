
 let count =40;
 let setCount = 0;
 let totalPrice =0;
 
 
 const setButton =document.getElementsByClassName('seet-button')
for(const setBtn of setButton){
    setBtn.addEventListener('click',function(){
       setBtn.style.backgroundColor='green';
       setBtn.style.color='white';
        

//  count
       count--;
       const DicrementValue = document.getElementById('dicrement-set');
       DicrementValue.innerText= count;
       
       setCount++;
      
       const setCountIs = document.getElementById('set-count');
       setCountIs.innerText= setCount;

      //  set set name
       
      const setValue = setBtn.innerText;
      const setPlace = document.getElementById('set-name');
      const p = document.createElement('p');
      p.innerText =setValue;
       setPlace.appendChild(p);

       // economi
      const economi = document.getElementsByClassName('economoy').innerText ='Economoy';     
      const p1= document.createElement('p');
       p1.innerText=economi;
       economi.appendChild('p');
      
     // price
         const priceIs = document.getElementById('price').innerText ='550';
         const p2 = document.createElement('p');
         p2.innerText =priceIs;
         priceIs.appendChild('p');









    //    total price
     const ticketPrice = document.getElementById('ticket-price').innerText;
     const ticketPriceConverted = parseFloat(ticketPrice);
     
     totalPrice += ticketPriceConverted
    //  console.log(totalPrice);

     document.getElementById('total-price').innerText =totalPrice;
      document.getElementById('grand-total').innerText=totalPrice;



    })
}

 

  



// dicrement-set

// let sum=0;
// function buttonValueBarano(){
//    const h2= document.getElementById('h2');
//    sum++;
//    h2.innerText=sum;
  
// }

// const buttonis = document.getElementById('buton-here');
//  buttonis.addEventListener('click',function(){
//  const h2 = document.getElementById('h2');
//   sum--;
//   h2.innerText=sum;
//  })
