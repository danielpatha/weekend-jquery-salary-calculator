console.log('in client.js');

$(document).ready(onReady);

let eArray =[];

function onReady() {
    console.log("DOM is loaded!");
    $('.eForm').on('submit', submitInfo);
}

function submitInfo(event){
    event.preventDefault();

    let newObject = {
        firstName: $('#fnInput').val(),
        lastName: $('#lnInput').val(),
        ID: $('#IDInput').val(),
        Title: $('#titleInput').val(),
        annualSalary: $('#asInput').val()
    };
    eArray.push(newObject);
    console.log('eArray is now ',eArray);

}