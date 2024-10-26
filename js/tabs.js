let tabsBtn = document.querySelectorAll('.how__step');
let tabsItem = document.querySelectorAll('.how__info-deskr');

document.querySelectorAll('.how__step').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how__step').forEach(function (btn) {
      btn.classList.remove('how__active')
    });
    e.currentTarget.classList.add('how__active');
    document.querySelectorAll('.how__info-deskr').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('how__active-info')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__active-info');
  });
});

