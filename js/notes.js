var btnplus = document.querySelector("#addnote");
var main = document.querySelector("#main");

var savenotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })
    
    if(data.length == 0){
        localStorage.removeItem("notes")
    } else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
    
}



btnplus.addEventListener("click", function(){
    addNote();
});

var addNote = (text = "") => {
    const note = document.createElement("div");

    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="fa fa-save"></i>
        <i class="fa fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".fa-trash").addEventListener("click", function(){
       note.remove();
       savenotes();
    })

    note.querySelector(".fa-save").addEventListener("click", function(){
        savenotes();
    })

    note.querySelector("textarea").addEventListener("focus", function(){
        savenotes()
    })

    main.appendChild(note);
    savenotes();
}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes == null){
            addNote()

        }else{
            lsnotes.forEach((lsnote) => {
                addNote(lsnote)
            })
        }
        
    }
)()