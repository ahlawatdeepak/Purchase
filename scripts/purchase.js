let get=JSON.parse(localStorage.getItem("purchase"))||[]



console.log(get)


 let box=document.getElementById("purchased_vouchers")

   let upperdiv=document.createElement("div")
   upperdiv.setAttribute("id","boxdiv")

   let div=document.createElement("div")
   div.setAttribute("id","imgdiv")
   let img=document.createElement("img")
   img.src=get.image;
   div.append(img)
  
   let namediv=document.createElement("div")
   let pname=document.createElement("h4")
   pname.textContent=get.name;
   namediv.append(pname)

  
   let pprice=document.createElement("p")
   pprice.textContent=get.price;

   upperdiv.append(div,namediv,pprice)

   box.append(upperdiv)

 
   let user=JSON.parse(localStorage.getItem("user"))||[]
   let amount=document.getElementById("wallet_balance")
    amount.textContent=user.amount
