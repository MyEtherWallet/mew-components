function copyToClipboard(ref, isRef) {
  isRef ? (ref.select(), document.execCommand('Copy')) : createTextarea(ref);
}

function createTextarea(ref) {
  var textArea = document.createElement('textarea');
  textArea.value = ref;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
}

export default copyToClipboard; 
