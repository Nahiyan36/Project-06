const cards = document.querySelectorAll('.main');

// Update counts
function updateStats() {
  document.getElementById('totalJob').textContent = document.querySelectorAll('.main').length;
  document.getElementById('interviewJob').textContent = document.querySelectorAll('.main[data-status="interview"]').length;
  document.getElementById('job').textContent = document.querySelectorAll('.main').length;
}

// Card buttons
cards.forEach(card => {

  // Interview button
  card.querySelector('.interview').addEventListener('click', () => {
    card.setAttribute('data-status', 'interview');
    card.querySelector('.not').classList.add('hidden');
    card.querySelector('.access').classList.remove('hidden');
    card.querySelector('.notAccess').classList.add('hidden');
    updateStats();
  });

  // Reject button
  card.querySelector('.reject').addEventListener('click', () => {
    card.setAttribute('data-status', 'rejected');
    card.querySelector('.not').classList.add('hidden');
    card.querySelector('.access').classList.add('hidden');
    card.querySelector('.notAccess').classList.remove('hidden');
    updateStats();
  });

  // Delete button
  card.querySelector('.remove').addEventListener('click', () => {
    card.remove();
    updateStats();
  });
});

// Tab buttons
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    tab.classList.add('tab-active');

    const filter = tab.textContent.trim().toLowerCase();

    document.querySelectorAll('.main').forEach(card => {
      const status = card.getAttribute('data-status') || 'none';
      card.style.display =
        filter === 'all' || status === filter ? 'block' : 'none';
    });
  });
});

updateStats();