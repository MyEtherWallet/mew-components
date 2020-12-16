function copyToClipboard(ref, isRef) {
  return isRef ? (ref.select(), document.execCommand('Copy')) : copyValue(ref);
}

function copyValue(value) {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(value).then(resolve).catch(reject);
  });
}

// function createTextarea(ref) {
//   var textArea = document.createElement('textarea');
//   textArea.value = ref;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand('Copy');
//   textArea.remove();
// }

export default copyToClipboard; 
