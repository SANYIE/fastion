function open_nav(){
     document.getElementById('aside').style.width ='50%'
}
function close_nav(){
     document.getElementById('aside').style.width ='0%'
}

// slide_show

var container = document.getElementById('contain')
var images_content = container.getElementsByClassName('images')

function next() {
    container.append(images_content[0])
}

function prev() {
    container.prepend(images_content[images_content.length-1])
}

console.log('good');