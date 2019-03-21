create html page
create js file - app runner
notesview - controller
insert all apps into one element

src="app.js" with script tag (console.log("hello feb"))
on load create the app -
window.addEventListener('load', function(){
  //understands the list of notes and returns string
var notesView = new NotesView([])
var noteModel = NotemModel
// listens to submit eventa, cretaes note adds to list and updates DOM
  var controller = new NotesController()
  controller.updateDOM;
}

//cretaes notes file to load in app
//creates notescontroller object
function NotesController(noteModel, notesView){
this.noteModel = noteModel
this.notesVIEW = NOTESVIEW
//run only once
this._setup()

NotesController.prototype = {
  _setup: function(){
    var self = this // context of this has changed

    window.addEventListener('submit', function(event){
      event.preventDefault()
      //create a note
      console.log(event)
      var note = new self.NoteModel() //argument to get info from event
      this.notesView.add(note)
      this.updateDOM()
      })
  };

  updateDOM: function(){
    //grab app element and insert html
    document.getElementbyId('app').innerHTML = this.notesView.render();

  }
  //create notesView - notesview.js to add note and return a string
  // in notesview.js
}
}


// function NotesView(note){
this.notes = notes

NotesView.prototype = {
  add: function(note){
    this.notes.push(note)
  }

  render: function(){
    return|
    "<form>"
    "<input type='text'></input>"
      "<input type='submit'></input>"
      ""</form>""
  }
  this.notes.app(function(note){
    return "<p>" = NOTE.TEXT...
  }).join('')
}).join('')
  }
}
}

1.start by building the notesview like a feature test first
2. separate app flow and data flow
