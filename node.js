// ✅ FIX: DOMContentLoaded দিয়ে wrap করা হয়েছে
// এখন GitHub Pages এও সব কাজ করবে
document.addEventListener("DOMContentLoaded", function () {

  const mainSection = document.querySelectorAll(".main");

  function updateData() {
    document.getElementById("totalJob").innerText = document.querySelectorAll(".main").length;
    document.getElementById("interviewJob").innerText = document.querySelectorAll('.main[status="interview"]').length;
    document.getElementById("rejectedJob").innerText = document.querySelectorAll('.main[status="rejected"]').length;
    document.getElementById("job").innerText = document.querySelectorAll(".main").length;
  }

  mainSection.forEach(function (m) {
    m.querySelector(".interview").addEventListener('click', function () {
      m.setAttribute('status', "interview");
      m.querySelector('.not').classList.add('hidden');
      m.querySelector('.access').classList.remove('hidden');
      m.querySelector('.notAccess').classList.add('hidden');
      updateData();
    });

    m.querySelector(".reject").addEventListener('click', function () {
      m.setAttribute('status', "rejected");
      m.querySelector('.not').classList.add("hidden");
      m.querySelector('.access').classList.add("hidden");
      m.querySelector('.notAccess').classList.remove("hidden");
      updateData();
    });

    m.querySelector(".remove").addEventListener("click", function () {
      m.remove();
      updateData();
    });
  });

  document.getElementById("clickInterview").addEventListener('click', function () {
    setTimeout(function () {
      if (document.querySelectorAll('.main[status="interview"]').length === 0) {
        document.getElementById("hiddenItem2").classList.remove('hidden');
      } else {
        document.getElementById("hiddenItem2").classList.add('hidden');
      }
    }, 100);
  });

  document.getElementById("disable").addEventListener('click', function () {
    setTimeout(function () {
      if (document.querySelectorAll('.main[status="rejected"]').length === 0) {
        document.getElementById("hiddenItem2").classList.remove('hidden');
      } else {
        document.getElementById("hiddenItem2").classList.add('hidden');
      }
    }, 100);
  });

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
    });
  });

  // ✅ Page load হলেই সাথে সাথে data দেখাবে
  updateData();

});
