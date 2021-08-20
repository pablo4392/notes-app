const notes = JSON.parse(localStorage.getItem('notes')) || [];
const formulary = document.getElementById('dataForm');

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

function printPostIt() {
    const cardContainer = document.getElementById('containerNotes');
    let html = ""
    notes.forEach((note) => {
        html += `
            <div class="post-it ${note.color}" role="alert">
                <div class="post-header">
                    <h4 class="post-title">${note.user}</h4>
                    <button class="delete-button">
                        <i class="far fa-trash-alt" onclick="deleteNote(${note.id})"></i>
                    </button>
                </div>                
                <h6 class="post-date">${note.pDate}</h6>
                <p class="post-text">
                    ${note.message} 
                </p>
            </div>`
    });
        cardContainer.innerHTML = html
}

formulary.addEventListener('submit', () => {
    const user = document.getElementById('nameBox').value,
          color = document.getElementById('colorBox').value,
          message = document.getElementById('messageBox').value,
          pDate = allDate();
    let id = 1;

    if(user === '' || message === '') {
        alert("You should complete all fields");
    } else {        
        if (notes.length > 0) {
            id = notes[notes.length -1].id+1
        }
        
        const newNote = {
            id,
            user,
            color,
            message,
            pDate
        }
        
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        formulary.reset()
        printPostIt();
    }
});

const deleteNote = (id) => {
    const index = notes.findIndex((post) => post.id === id);
    notes.splice(index, 1);
    printPostIt();
}

printPostIt();