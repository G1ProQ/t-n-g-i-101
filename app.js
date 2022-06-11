const phase1 = document.getElementById ("phase1")
const btn = document.getElementById ("button-85")
const phase2 = document.getElementById ("phase2")
const phase3 = document.getElementById ("phase3")
const btnAccept = document.getElementById ("button-49")
// const btnRefuse = document.getElementById ("button-66")
phase2.style.display = "none"
phase3.style.display = "none"
btn.addEventListener ("click",()=>{
    phase1.style.display = "none"
    phase2.style.display = "block"
})
$('#button-66').on('mouseover', function() {
    $(this).css({
       "display" : "relative",
      'top': Math.random() * 70-40+ "vh",
      'left': Math.random() * 70-20+ "vw"
    } );
  })
btnAccept.addEventListener ("click",()=>{
    phase2.style.display = "none"
    phase3.style.display = "block"
})