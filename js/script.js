const saveNotes = JSON.parse(localStorage.getItem('notes')) || [];

//date variable
const date = new Date(),
      monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    allDate = monthName[month] +'/'+ day +'/'+ year;

const printNote = () => {
    const container = document.getElementById('containerNotes');
    let html = ""
    saveNotes.forEach( note => {
        html += `
            <div class="alert ${note.color} mt-4 note-card" role="alert">
                <div class="note-header">
                    <h4 class="title-note">${note.user}</h4>
                    <button onclick="deleteNote()" class="delete-button" >
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>                
                <h6 class="date-note">${allDate}</h6>
                <p class="text-note">${note.message}</p>
            </div>`        
    });
    container.innerHTML = html;
};

const addNote = () => {
    const user = document.getElementById('nameBox').value,
          color = document.getElementById('colorBox').value,
          message = document.getElementById('messageBox').value;
    let id = 0;

    if(saveNotes.length > 0) {
        id = saveNotes[saveNotes.length].id + 1;
    }

    const newNote = {
        id,
        user, 
        color, 
        message
    }
    saveNotes.push(newNote);
    printNote();

    localStorage.setItem('notes', JSON.stringify(saveNotes));

    document.getElementById('dataForm').reset();
}

const deleteNote = (id) => {
    const index = saveNotes.findIndex((note) => note.id === id);
    console.log(index)
    // saveNotes.splice(index, 1);

    // printNote();
}

printNote();