console.log('okk')
  var p1 = new Promise((res , rej)=>{
    res(10)
  })

  var p2 = new Promise((res , rej)=>{
    res(10)
  })
  var p3 = new Promise((res , rej)=>{
    res(10)
  })
Promise.all([p1,p2,p3]).then((val)=>{
console.log('values')
})

function fetchDog(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res=>{
    return res.json()
  })
.then(data=>{
  document.createElement('img')
  document.querySelector(".dogImage").setAttribute("src",data.message)
})

}