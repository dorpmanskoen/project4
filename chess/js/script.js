// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btn = document.getElementsByClassName('btnMovement');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < btn.length; i++) {    
btn[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.value;
    captionText.innerHTML = this.name;
  }
    
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}