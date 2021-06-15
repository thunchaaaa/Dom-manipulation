var inputName =document.getElementById('name')
var inputDes=document.getElementById('des')
var inputPic=document.getElementById('pic')
var inputPri=document.getElementById('pri')
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
    cell.innerHTML=inputName.value
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=inputDes.value
    row.appendChild(cell)
    cell=document.createElement('td')
    cell.innerHTML=pic.value
    img.src=inputPic.value
    row.appendChild(img)
    cell=document.createElement('td')
    cell.innerHTML=inputPri.value
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