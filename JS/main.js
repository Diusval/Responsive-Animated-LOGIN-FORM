/*===== FOCUS =====*/
const inputs = document.querySelectorAll('.form__input')

/*=== Add focus ===*/
function addfocus() {
  let parent = this.parentNode.parentNode
  parent.classList.add('focus')
}

/*===== REMOVE FOCUS =====*/
function remfocus() {
  let parent = this.parentNode.parentNode
  if (this.value == '') {
    parent.classList.remove('focus')
  }
}

/*===== TO CALL FUNCTION =====*/
inputs.forEach(input => {
  input.addEventListener('focus', addfocus)
  input.addEventListener('blur', remfocus)
})
