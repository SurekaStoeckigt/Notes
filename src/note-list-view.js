(function(exports){
var notelist;
  function NoteListView(noteList){
    notelist = noteList;
  }

  NoteListView.prototype.view = function(){
    var htmlString = "<ul>"

      notelist.getNotesList().forEach(function(note){
        htmlString +="<li><div>"+note.getText()+"</div></li>"
      })
      htmlString += "</ul>"
    return htmlString;
  };
  exports.NoteListView = NoteListView;
})(this);
