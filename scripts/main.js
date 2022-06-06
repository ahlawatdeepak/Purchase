
  let getAllDetails = document.querySelector('form')
  
  getAllDetails.addEventListener("submit",storeData)
  
  // <-----creating function for userData----->
  
  function userInfo(name,email,address,amount)
  {
      this.name = name;
      this.email = email;
      this.address=address;
      this.amount = amount;
  }
  
  let dataBucket =JSON.parse(localStorage.getItem("user"))||"";
  
  
  function storeData()
  {
      
      let name = getAllDetails.name.value
      let email = getAllDetails.email.value
      let address=getAllDetails.address.value
      let amount = getAllDetails.amount.value
  
      if(name === '' || email === '' ||address === '' || amount === '')
      {
          event.preventDefault()
          alert("Please fill all blanks")
      }
      else
      {
          // event.preventDefault()
          let userDetails = new userInfo(name,email,address,amount)
           dataBucket=(userDetails)
          localStorage.setItem("user",JSON.stringify(dataBucket))
          return;
      }
      
  }