
  let get=async () =>{
    try {
      let api=` https://masai-vouchers-api.herokuapp.com/api/vouchers`

      let res=await fetch(api)

      let data=await res.json()
     append(data[0].vouchers)
         
  } catch (error) {
      console.log(error);
    }
  };

 let storagedata
  let append=(data)=> {
    let box=document.getElementById("voucher_list")
    storagedata=data
    // console.log(data)

    data.forEach(({name,image,price}) => {
      //  console.log(name)

      let upperdiv=document.createElement("div")
      upperdiv.setAttribute("id","boxdiv")

      let div=document.createElement("div")
      div.setAttribute("id","imgdiv")
      let img=document.createElement("img")
      img.src=image;
      div.append(img)
     
      let namediv=document.createElement("div")
      let pname=document.createElement("h4")
      pname.textContent=name;
      namediv.append(pname)

     
      let pprice=document.createElement("p")
      pprice.textContent=price;


      let buy=document.createElement("button")
      buy.textContent="Buy"
      buy.addEventListener("click",function(){

          test({name,image,price})
      })

    
      

      upperdiv.append(div,namediv,pprice,buy)

      box.append(upperdiv)

    })
  }
get()
let user=JSON.parse(localStorage.getItem("user"))||[]
let amount=document.getElementById("wallet_balance")
          amount.textContent=user.amount

    function test({name,image,price}){
          let user=JSON.parse(localStorage.getItem("user"))||[]
          let amount=document.getElementById("wallet_balance")
          amount.textContent=user.amount

          console.log({name,image,price})
          if(user.amount<price){

            alert("Sorry! insufficient balance")
          }
          else{
             let purchase=JSON.parse(localStorage.getItem("purchase"))||[]
            
             localStorage.setItem("purchase",JSON.stringify({name,image,price}))


             user.amount-=price
             alert("Hurray! purchase successfull")
             localStorage.setItem("user",JSON.stringify(user))
             window.location.reload()
             
          }
              
          
         

    }