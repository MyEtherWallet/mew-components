function copyToClipboard(ref, isRef) {
  isRef ? (ref.select(), document.execCommand('Copy')) : createTextarea(ref);
}

function createTextarea(id) {
  var copyText = document.getElementById(id);
  var textArea = document.createElement('textarea');
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
}

export default copyToClipboard; 
