var ice = document.getElementsByClassName("bagel");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(ice).forEach(function(element) {
      element.addEventListener('click', function(){
        const order = document.querySelector('test').innerText
        const ice = parseFloat(document.querySelector('zero').innerText)
        fetch('ice', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          
            'order': order,
            'ice':ice
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const order = this.parentNode.parentNode.childNodes[1].innerText
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const msg = this.parentNode.parentNode.childNodes[5].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    fetch('thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'order': order,
        'thumbDown':thumbDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const order = this.parentNode.parentNode.childNodes[1].innerText
        const name = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'order': order
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const order = this.parentNode.parentNode.childNodes[1].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'order': order
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


let total = document.querySelector('li')

console.log (total)

