function submitData(userName, userEmail){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify({
    name: userName,
    email:userEmail  
    })
    })
    .then((res)=>res.json()) 
    .then(( data => document.body.innerHTML = JSON.stringify(data)) )
    .catch((object)=> {
      return document.body.innerHTML = object;;
    })
  
 
}
submitData('Steve','steve@steve.com')

