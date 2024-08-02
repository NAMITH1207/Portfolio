function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.querySelectorAll('.about-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.classList.add('flipped');
    });
  });
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
  });
  
  