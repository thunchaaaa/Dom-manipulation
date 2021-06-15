var inputFlower =document.getElementById('Flower')
var inputdes=document.getElementById('des')
var inputLink=document.getElementById('Link')
var inputp=document.getElementById('p')
var outputTableBody=document.getElementById('outputTableBody')
var submitData=document.getElementById('submitData')


function addData(index){
    let row =document.createElement('tr')
    let cell=document.createElement('th')
    let img =document.createElement('img')
    
    cell.setAttribute('score',row)
    cell.innerHTML=index
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=inputFlower.value
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=inputdes.value
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=Link.value
    img.src=inputLink.value
    row.appendChild(img)
    cell=document.createElement('td')
    cell.innerHTML=inputp.value
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=`<button>Add to Cart</button>`
    row.appendChild(cell)
    outputTableBody.appendChild(row)
}
var index=2
submitData.addEventListener('click',(event)=>{
    
    addData(index++)
})