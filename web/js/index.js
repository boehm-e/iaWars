// RESIZE THE PANELS
$(".panel-left").resizable({
  handleSelector: ".splitter",
  resizeHeight: false
});

// INIT THE CODE EDITORS
// CSS
var iaEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
  lineNumbers: true,
  viewportMargin: Infinity,
  mode: "javascript",
  keyMap: "sublime",
  autoCloseBrackets: true,
  theme: "monokai",
  tabSize: 2,
  lineWrapping:'true'
});

//  save event
$(document).on('keydown', function(e){
  if(e.ctrlKey && e.which === 83){ // Check for the Ctrl key being pressed, and if the key = [S] (83)
    console.log('Ctrl+S!');
    e.preventDefault();
    load(iaEditor.getValue())
    return false;
  }
});

load()
