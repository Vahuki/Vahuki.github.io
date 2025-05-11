function openNavMb() {
    document.querySelector('nav').classList.toggle('open');
    document.querySelector('main').classList.toggle('opaciti-main');
}
document.querySelectorAll('header nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('nav').classList.remove('open');
    document.querySelector('main').classList.remove('opaciti-main');
  });
});