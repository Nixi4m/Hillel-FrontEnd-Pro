let getLink;

document.querySelector('#linkChange').addEventListener('click',() => {
     getLink = prompt('Введите свою ссылку')
})

document.querySelector('#linkChange2').addEventListener('click',() => {
    if (getLink.startsWith( 'http' || 'https' ) === true){
        location.href = getLink; 
    }else{
        if(getLink.startsWith( 'http' || 'https' ) === false){
        let protocol = 'https:'
        let protocolLink = protocol.concat(getLink)
        location.href = protocolLink    
        }
    }   
})