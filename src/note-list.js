(function(exports){
   var noteList;

  function NoteList(){
  noteList = new Array();
};
  NoteList.prototype.getNotesList = function(){
    return noteList;
    };

  NoteList.prototype.storeNote = function(noteText){
    note = new Note(noteText);
    noteList.push(note);
  };
  exports.NoteList = NoteList;
})(this);
