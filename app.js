
const addbtn = document.querySelectorAll('.add')


addbtn.forEach(btn => {
    btn.addEventListener('click', () => {

        if(btn.parentNode.parentNode.classList.contains('active')){
            btn.parentNode.parentNode.classList.remove('active')
            btn.innerHTML = '&#xe145;'
        }else{
            addbtn.forEach( newQue => {
                newQue.parentNode.parentNode.classList.remove('active')
            })
            btn.parentNode.parentNode.classList.add('active')
            btn.innerHTML = '&#xe15b;'
        };

    })
})
