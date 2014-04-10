/**
 * Nanobar
 *
 * A progress bar for Yuehu.
 */

function Nanobar(options) {
  var el = document.createElement('div');
  el.className = 'nanobar';
  var bar = document.createElement('div');
  bar.className = 'nanobar-progress';
  el.appendChild(bar);
  this.el = el;
  this.bar = bar;

  document.body.appendChild(el);
}

Nanobar.prototype.go = function(percent) {
  var bar = this.bar;

  bar.className = 'nanobar-progress';
  bar.style.width = percent + '%';

  if (percent >= 100) {
    bar.style.height = '0';
  } else {
    bar.style.height = '100%';
  }
};

Nanobar.prototype.dismiss = function() {
  this.go(100);
  var el = this.el;
  setTimeout(function() {
    document.body.removeChild(el);
  }, 300);
};

Nanobar.prototype.infinite = function() {
  var bar = this.bar;
  bar.style.width = '0';
  bar.style.height = '100%';
  bar.className = 'nanobar-progress nanobar-progress-infinite';
};

module.exports = Nanobar;
