
function mutat(){
    document.querySelector('ul').innerHTML=""
    for(let obj of adatok){

            document.querySelector('ul').innerHTML+=`<li>${obj.nev} - ${obj.mennyiseg}        
            <i id="${obj.id}" class="fa-solid btn text-danger fa-rectangle-xmark" onclick="ix(this)"></i></li>`
    }
}
mutat()

function hozzaad(){
    let tex=document.getElementById('beir').value
    console.log(tex)
    let mennyiseg=document.getElementById('menny').value
    console.log(mennyiseg)
    let obj={}
    obj.nev=tex
    obj.mennyiseg=mennyiseg
    let max=1
    for(let o of adatok){
        if(o.id>max){
            max=o.id
        }
    }
    let id=obj.id
    console.log(id)
    console.log(max)
    obj.id=max+1
    console.log(obj)
    adatok.push(obj)
    console.log(adatok)
    document.getElementById('lista').innerHTML=""
    mutat()
}
hozzaad(adatok)

function ix(obj){
    let id=obj.id
    let newArr=adatok.filter(obj=>obj.id!=id)
    adatok=newArr
    document.getElementById('lista').innerHTML=""
    console.log(obj.id)
    mutat()

    //let elem = document.querySelector('li')
    //elem.parentNode.removeChild(elem)
}
function del(){
    adatok=[]
    document.getElementById('lista').innerHTML=""
}
let maxId=adatok.reduce((m,obj)=>obj.id>m?obj.id:m,0)
    console.log(maxId)