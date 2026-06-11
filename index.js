function showSection(sectionId) {
  // Masquer toutes les sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active'));
  
  // Afficher la section demandée
  document.getElementById(sectionId).classList.add('active');
  
  // Scroll vers le haut
  window.scrollTo(0, 0);
}
