(function(exports){
  function testNoteIsInstantiatedWithGivenText() {
    var note = new Note("My first note");
    assert.isTrue(note.getText() === "My first note");
  };
  testNoteIsInstantiatedWithGivenText();
})(this);
