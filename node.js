const mainSection=document.querySelectorAll(".main")

function updateData(){
  document.getElementById("totalJob").innerText=document.querySelectorAll(".main").length;
  document.getElementById("interviewJob").innerText=document.querySelectorAll('.main[status="interview"]').length;
  document.getElementById("rejectedJob").innerText=document.querySelectorAll('.main[status="rejected"]').length;
  document.getElementById("job").innerText=document.querySelectorAll(".main").length;
}

mainSection.forEach(function(m){
m.querySelector(".interview").addEventListener('click', function(){
  m.setAttribute('status',"interview");
  m.querySelector('.not').classList.add('hidden');
  m.querySelector('.access').classList.remove('hidden');
  m.querySelector('.notAccess').classList.add('hidden');
  updateData();
})
  m.querySelector(".reject").addEventListener('click',function(){
    m.setAttribute('status',"rejected");
    m.querySelector('.not').classList.add("hidden");
    m.querySelector('.access').classList.add("hidden");
    m.querySelector('.notAccess').classList.remove("hidden");
    updateData();
  })
  m.querySelector(".remove").addEventListener("click", function(){
    m.remove();
    updateData();
      if(document.querySelectorAll(".main").length===0){
      document.getElementById("hiddenItem1").classList.remove('hidden')
    }
    
  })

})


document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    tab.classList.add('tab-active');

    const filter = tab.textContent.trim().toLowerCase();

    document.querySelectorAll('.main').forEach(card => {
      const status = card.getAttribute('status') || 'none';
      card.style.display =
        filter === 'all' || status === filter ? 'block' : 'none';
        
  });
  })
  
})
updateData()