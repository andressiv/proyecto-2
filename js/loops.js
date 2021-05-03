var link = '<a href="#home">...</a>'


var linksContainer = document.querySelector('.second-nav-links')

var links = [
 {   
     href :  '#Inicio',
     name :  'Inicio',

 },
 {   
    href :  '#Todos-los-productos',
    name :  'Todos-los-productos',

},
{   
    href :  '#Marcas',
    name :  'Marcas',

},
{   
    href :  '#Sale',
    name :  'Sale',

},
{   
    href :  '#Quienes-Somos',
    name :  'Quienes Somos',

},
{   
    href :  '#Conctato',
    name :  'Conctato',

}

]
for (var i = 0; i < links.length; i++) {
    linksContainer.innerHTML += generateLink(links[i])
}

function generateLink(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>'
}