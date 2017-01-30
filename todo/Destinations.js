// This code runs when the page loads
$(function() {

  $(".btn").on("click", function(event) {
    event.preventDefault()
    var buttonclicked = $(this)
    console.log(buttonclicked)
    buttonclicked.parent().remove()
    // remove the element
  })

})
