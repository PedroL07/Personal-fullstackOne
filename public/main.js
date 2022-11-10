var trash = document.getElementsByClassName("fa-trash-o");


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

