(function() {
  document.body.classList.remove('dit-modal-open');
  var ele = document.querySelector('.dit-modal-overlay--transparent');
  ele.parentElement.removeChild(ele);
})();
