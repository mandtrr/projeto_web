/*MODAL REQUIRED SUBMIT*/
/*document.querySelector("form").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      alert("Please fill in the required fields");
    }
  });*/
  
  /*MODAL TOGGLER*/
  document.getElementById('modalHijack').addEventListener('click', function() {
    document.getElementById('modalToggler').click();
  });