function showPage(id) {
  // Sembunyikan semua container
  const containers = document.querySelectorAll('.container');
  containers.forEach((container) => {
    container.classList.remove('active');
  });

  // Tampilkan hanya container yang sesuai ID
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}