(function(exports){
  function testNoteListIsInstantiated() {
    var notelist = new NoteList();
    // var noteListArray = new Array();
    assert.isTrue(Array.isArray(notelist.getNotesList()));
    assert.isTrue(notelist.getNotesList().length === 0);
  };
  testNoteListIsInstantiated();

  function testNoteListCreatesAndStoresNotesInArray() {
    var notelist = new NoteList();
    notelist.storeNote("A note");
    testNote = notelist.getNotesList().shift();
    assert.isTrue(testNote.getText() === "A note")
    assert.isTrue(testNote instanceof Note)
  };
  testNoteListCreatesAndStoresNotesInArray()
})(this);
