console.log('in client.js');

$(document).ready(onReady);

let eArray =[];
let monthlyTotal = 0;

function onReady() {
    console.log("DOM is loaded!");
    $('.eForm').on('submit', submitInfo);
    $('#eTable').on('click', '.rBtn', removeFunc);
}

function submitInfo(event){
    event.preventDefault();

    let newObject = {
        firstName: $('#fnInput').val(),
        lastName: $('#lnInput').val(),
        ID: $('#idInput').val(),
        Title: $('#titleInput').val(),
        annualSalary: $('#asInput').val()
    };
    eArray.push(newObject);
    console.log('eArray is now ',eArray);

$('#fnInput').val('');
$('#lnInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#asInput').val('');
    
    monthlyCost();
    renderToState();
}

function renderToState(){
     $('#eTable').empty();

    for(let e of eArray){
        $('#eTable').append(`
        <tr class = newTr>
         <td>${e.firstName}</td>
         <td>${e.lastName}</td>
         <td>${e.ID}</td>
         <td>${e.Title}</td>
         <td>${e.annualSalary}</td>
         <td>
         <button class="rBtn">Delete</button>
         </td>

        `);
        
    }

}

 function removeFunc(){
    $(this).parent().parent().remove();
}


function monthlyCost(){
    let mValue = 0;
    console.log('in monthlyCost');
  
    for(let person of eArray){
        mValue += Number(person.annualSalary);
        monthlyTotal = (mValue / 12).toFixed(2);
        $('.totalM').text(`Total Monthly:$${monthlyTotal}`);

        if(monthlyTotal >= 20000){
        $('.totalM').css("background-color", "red");

}
}
}
