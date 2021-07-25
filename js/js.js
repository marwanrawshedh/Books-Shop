
this. min=1
this. max=500
let info=[]
let all=[]
function Book(book,price,page){
    this.book=book
    this.price=price
    this.page=page
    info=[]
    info.push(book,price,page)

all.push(info)
    console.log(info)
}

function randomnum() {
    return Math.floor(Math.random() * (max - min) + min); 
  }
let form=document.getElementById('form')
form.addEventListener('submit',geting)
  function geting(event){

    event.preventDefault();

let book=event.target.book.value
let price=parseInt(event.target.price.value)
let page =randomnum()
let newbook= new Book(book,price,page)

console.log(book,price,page)
store()
  }

  function store(){
let upload=JSON.stringify(all)
localStorage.setItem('info',upload)
  }
  function getstore(){
      
let backinfo=localStorage.getItem('info')
let convert=JSON.parse(backinfo)
if(convert!=null){
 all=convert}
console.log(convert)
  }
getstore()
function render(){
    let table=document.getElementById('table')
    for(let y=0;y<all.length;y++){
    let row=document.createElement('tr')
table.appendChild(row)
let bookname=document.createElement('td')
let bookpages=document.createElement('td')
let bookprice=document.createElement('td')
row.appendChild(bookname)
row.appendChild(bookpages)
row.appendChild(bookprice)
bookname.textContent=all[y][0]
bookpages.textContent=all[y][1]
bookprice.textContent=all[y][2]
}
}
render()
