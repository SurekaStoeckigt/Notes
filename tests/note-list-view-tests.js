(function(exports){
  function testThatNoteListViewReturnsAnEmptyList(){
    var notelist = new NoteList();

    var notelistView = new NoteListView(notelist);
    assert.isTrue(notelistView.view() === "<ul></ul>")
  }
  testThatNoteListViewReturnsAnEmptyList();

  function testThatNoteLstViewReturnsTheRightHTMLforNotelistWithANote(){
    var notelist = new NoteList();
    notelist.storeNote("A note");
    var notelistView = new NoteListView(notelist);
    assert.isTrue(notelistView.view() === "<ul><li><div>A note</div></li></ul>")
  }
  testThatNoteLstViewReturnsTheRightHTMLforNotelistWithANote();

  function testThatNoteLstViewReturnsTheRightHTMLforNotelistWithTwoNotes(){
    var notelist = new NoteList();
    notelist.storeNote("A first note");
    notelist.storeNote("A second note");
    var notelistView = new NoteListView(notelist);
    assert.isTrue(notelistView.view() === "<ul><li><div>A first note</div></li><li><div>A second note</div></li></ul>")
  }
  testThatNoteLstViewReturnsTheRightHTMLforNotelistWithTwoNotes();

})(this);
