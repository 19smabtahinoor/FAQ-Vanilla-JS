
const addbtn = document.querySelectorAll('.add')


addbtn.forEach(btn => {
    btn.addEventListener('click', () => {

        if(btn.parentNode.parentNode.classList.contains('active')){
            btn.parentNode.parentNode.classList.remove('active')
        }else{
            addbtn.forEach( newQue => {
                newQue.parentNode.parentNode.classList.remove('active')
            })
            btn.parentNode.parentNode.classList.add('active')
        }

    })
})