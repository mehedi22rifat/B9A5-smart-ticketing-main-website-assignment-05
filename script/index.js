
 let count =40;
 let setCount = 0;
 let totalPrice =0;
 let maxSeat = 0
 
 const setButton =document.getElementsByClassName('seet-button')
for(const setBtn of setButton){
    setBtn.addEventListener('click',function(){
      //  setBtn.style.backgroundColor='green';
      //  setBtn.style.color='white';
      if (maxSeat !== 4) {
          setBtn.classList.add('bg-green-500');
          setBtn.classList.add('text-white');
          maxSeat++;
      }

       else if (maxSeat == 4) {
          alert('Sorry you can buy a maximum of four seats');
          setBtn.setAttribute("disabled")

      } 


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
      
      //  set economoy
      
      const seteconomoy = document.getElementById('economoy');
      const p1 = document.createElement('p');
      p1.innerText='Economy';
      seteconomoy.appendChild(p1);
  
      // set price 550
     const setPrice = document.getElementById('price');
     const p2 = document.createElement('p');
       p2.innerText ='550';
       setPrice.appendChild(p2);



    //    total price
     const ticketPrice = document.getElementById('ticket-price').innerText;
     const ticketPriceConverted = parseFloat(ticketPrice);
     
     totalPrice += ticketPriceConverted
    //  console.log(totalPrice);

     document.getElementById('total-price').innerText =totalPrice;
      document.getElementById('grand-total').innerText=totalPrice;


})
}




 let couponCode = 'NEW15';
 let couponCodeis = "Couple 20";
// discount part
      
  const applyButton = document.getElementById('apply-button');
   applyButton.addEventListener('click',function(){
      

    const couponElement = document.getElementById("input-fuld").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
     const coupon= couponCodeis.slice('').toLocaleUpperCase();
     console.log(coupon);
    // console.log(couponCode);
    if (totalPrice>= 2200) {
    if (couponCode === "NEW15") {
       
    //   discount calculatio  
      const discountAmount = totalPrice *15/100;   
    //   RES TOTAL
      const restTotal = document.getElementById("grand-total");
        restTotal.innerText = totalPrice - discountAmount.toFixed(2);
        document.getElementById("input-fuld").value = "";

    }
    else if(coupon === "Couple 20"){
        
           //   discount calculatio  
             const discountAmount = totalPrice * 20/100;   
          //   RES TOTAL
           const restTotal = document.getElementById("grand-total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
             document.getElementById("input-fuld").value = "";

    } else {
          alert("Invalid Coupone Code");
          document.getElementById("input-fuld").value = "";
        }


   }else(
    alert('2200 taka khoroc koren vai')
    // document.getElementById("grand-total")
    // document.getElementById("input-fuld").value = "";
   )})
          



// // appending title in the title container
// const titleContainer = document.getElementById("title-container");
// const p = document.createElement("p");
// p.innerText = titleCount + ". " + title; 
// titleContainer.appendChild(p);
// titleCount++;
// // calculate price
// totalPrice += price;
// document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
// });
// }

// const btn = document.getElementById("apply-btn");
// btn.addEventListener("click", function () {
// //   get the value from input
// const couponElement = document.getElementById("input-field").value;
// const couponCode = couponElement.split(" ").join("").toUpperCase();
// console.log(couponCode);
// if (totalPrice >= 200) {
// if (couponCode === "SELL200") {
//   // discount calculation
//   const discountElement = document.getElementById("discountPrice");
//   const discountAmount = totalPrice * 0.2;
//   discountElement.innerText = discountAmount.toFixed(2);

//   //   rest total calculation
//   const restTotal = document.getElementById("total");
//   restTotal.innerText = totalPrice - discountAmount.toFixed(2);
//   document.getElementById("input-field").value = "";
// } else {
//   alert("Invalid Coupone Code");
//   document.getElementById("input-field").value = "";
// }
// } else {
// alert("Please at least $200 khoroch koren bhai!");
// document.getElementById("input-field").value = "";
// }
// });












//   const btn = document.getElementById('apply-button');
//     btn.addEventListener('click',function(){
//       // get the value of input
//       const couponElement = document.getElementById('input-fuld').value;
//       const couponCode = couponElement.split(" ").join("").toUpperCase();
//           console.log(couponCode);

//       if(setBtn >= 4){
//           if(couponCode === "NEW15"){
//             let price = totalPrice;

//           }
//       }

//     })


// const btn = document.getElementById("apply-btn");
// btn.addEventListener("click", function () {
//   //   get the value from input
//   const couponElement = document.getElementById("input-field").value;
//   const couponCode = couponElement.split(" ").join("").toUpperCase();
//   console.log(couponCode);
//   if (totalPrice >= 200) {
//     if (couponCode === "SELL200") {
//       // discount calculation
//       const discountElement = document.getElementById("discountPrice");
//       const discountAmount = totalPrice * 0.2;
//       discountElement.innerText = discountAmount.toFixed(2);

//       //   rest total calculation
//       const restTotal = document.getElementById("total");
//       restTotal.innerText = totalPrice - discountAmount.toFixed(2);
//       document.getElementById("input-field").value = "";
//     } else {
//       alert("Invalid Coupone Code");
//       document.getElementById("input-field").value = "";
//     }
//   } else {
//     alert("Please at least $200 khoroch koren bhai!");
//     document.getElementById("input-field").value = "";
//   }




 

// let titleCount = 1;
// let totalPrice = 0;
// const cards = document.querySelectorAll(".card");

// for (let index = 0; index < cards.length; index++) {
//   const card = cards[index];
//   card.addEventListener("click", function () {
//     // get the title and price value
//     const title = card.querySelector("h3").innerText;
//     const price = parseFloat( 
//       card.querySelector("span").innerText.split(" ")[1]
//     );
//     // appending title in the title container
//     const titleContainer = document.getElementById("title-container");
//     const p = document.createElement("p");
//     p.innerText = titleCount + ". " + title; 
//     titleContainer.appendChild(p);
//     titleCount++;
//     // calculate price
//     totalPrice += price;
//     document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
//   });
// }



// const btn = document.getElementById("apply-btn");
// btn.addEventListener("click", function () {
//   //   get the value from input
//   const couponElement = document.getElementById("input-field").value;
//   const couponCode = couponElement.split(" ").join("").toUpperCase();
//   console.log(couponCode);
//   if (totalPrice >= 200) {
//     if (couponCode === "SELL200") {
//       // discount calculation
//       const discountElement = document.getElementById("discountPrice");
//       const discountAmount = totalPrice * 0.2;
//       discountElement.innerText = discountAmount.toFixed(2);

//       //   rest total calculation
//       const restTotal = document.getElementById("total");
//       restTotal.innerText = totalPrice - discountAmount.toFixed(2);
//       document.getElementById("input-field").value = "";
//     } else {
//       alert("Invalid Coupone Code");
//       document.getElementById("input-field").value = "";
//     }
//   } else {
//     alert("Please at least $200 khoroch koren bhai!");
//     document.getElementById("input-field").value = "";
//   }
// });











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
