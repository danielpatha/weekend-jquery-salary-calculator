console.log('in client.js');

$(document).ready(onReady);

let eArray =[];

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
         </tr>
        `);
    }

}

 function removeFunc(){
    $(this).parent().parent().remove();
}