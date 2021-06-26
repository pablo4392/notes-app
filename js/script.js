const formulary = document.getElementById('dataForm');
const cardContainer = document.getElementById('containerNotes')
const deleteNote = document.getElementById('deleteButton');

const allDate = () => {
    const nameMonths = ["Jan", "Feb", "Mar", "Aph", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let funcDate = new Date(),
        day = funcDate.getDate(),
        month = funcDate.getMonth(),
        year = funcDate.getFullYear(),
        hours = funcDate.getHours(),
        minutes = funcDate.getMinutes();

    if( hours === 0) { hours = 12 }
    if(minutes < 10) { minutes = '0' + minutes }
    
    let dateArr = [day, nameMonths[month], year]
    let hourArr = [hours, minutes]
    const joinDate = dateArr.join('/');
    const joinHour = hourArr.join(':');
    const completeDate = joinDate+ ' ' + "at" + ' ' + joinHour;

    return completeDate;
}

formulary.addEventListener('submit', event => {
    event.preventDefault();
    const user = document.getElementById('nameBox').value;
    const color = document.getElementById('colorBox').value;
    const message = document.getElementById('messageBox').value;

    if(user === '' || message === '') {
        alert("You should complete all fields")
    } else {        
        cardContainer.innerHTML += `
            <div class="post-it ${color}" role="alert">
                <div class="post-header">
                    <h4 class="post-title">${user}</h4>
                    <button class="delete-button">
                        <i class="far fa-trash-alt" id="deleteButton"></i>
                    </button>
                </div>                
                <h6 class="post-date">26/05/2021 at 23:51</h6>
                <p class="post-text">
                    ${message} 
                </p>
            </div>`
    }
        
    formulary.reset();
});

// deleteNote.addEventListener('click', () => {
//     alert("este boton es para eliminar")
// });