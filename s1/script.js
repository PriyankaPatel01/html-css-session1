document.getElementById('colorbutton').addEventListener('click', function(){
    let c1 = randColor();
    let c2 = randColor();
    document.getElementById('c1').style.backgroundColor=c1;
    document.getElementById('c2').style.backgroundColor=c2;
    document.body.style.background="linear-gradient(to right, "+c1+" , "+c2+")" ;
    document.getElementById('colorName1').textContent=c1;
    document.getElementById('colorName2').textContent=c2;
});

function randColor()
{
    const letter = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++)
    {
        color=color+letter[Math.floor(Math.random()*16)];
    }
    return color;
}
