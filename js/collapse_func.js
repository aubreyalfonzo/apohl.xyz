var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var activeCollapsible = document.querySelector(".collapsible.active");

    if (activeCollapsible && activeCollapsible !== this) {
      activeCollapsible.classList.toggle("active");
      activeCollapsible.nextElementSibling.style.display = "none";
      activeCollapsible.parentElement.style.width = "";
      var img = activeCollapsible.querySelector(".plus");
      var img2 = activeCollapsible.querySelector(".minus");
      if (img) {
        img.style.display = "block";
        img2.style.display = "none";
      }
    }
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      var img = this.querySelector(".plus");
      var img2 = this.querySelector(".minus");
      if (img) {
        img.style.display = "block";
        img2.style.display = "none";
         this.parentElement.style.width = "";
         this.parentElement.style.height = "";
    }
    } else {
      content.style.display = "block";
      var img = this.querySelector(".plus");
      var img2 = this.querySelector(".minus");
      if (img) {
        img.style.display = "none";
        img2.style.display = "block";
        this.parentElement.style.width = "70vw";
        this.parentElement.style.height = "auto";
      }

      if (width < 1200){
        this.parentElement.style.width = "100vw";
      }
    }

  });
}



var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      this.parentElement.style.width = "100vw";
    }
  });
}