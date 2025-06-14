// ✨ Welcome to our magical JavaScript! ✨
// This is where all the interactive fun happens!

// 🪄 Wait for the page to load before casting any spells
// =========================
// Typewriter Effect
// =========================
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 200 - 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

// =========================
// Startup Function
// =========================
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // Add cursor style
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
    // Hide main content initially
    document.querySelector('.rainx').style.display = 'none';
};

// =========================
// Show Main Content on Startup
// =========================
function startup() {
    // Add loading animation
    const startScreen = document.querySelector('.start');
    startScreen.style.opacity = '0';
    startScreen.style.transform = 'scale(0.9)';
    // Show main content with animation
    setTimeout(() => {
        document.querySelector('.start').style.display = 'none';
        const rainx = document.querySelector('.rainx');
        rainx.style.display = 'flex';
        setTimeout(() => {
            rainx.classList.add('show');
        }, 50);
    }, 500);
}

// =========================
// Navigation Functions
// =========================
function socials() { window.open("web"); }
function download() { window.open("PUTSITEHERE"); }
function somethinghere() { window.open("SITEHERE"); }
function changelogs() { window.open("HERETOO"); }
function panel() { window.location = "panel.php"; }

// =========================
// Particles.js Initialization
// =========================
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: ['#00bfff', '#ffffff', '#1e90ff'] },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000' },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.7, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false } },
    size: { value: 2, random: true, anim: { enable: true, speed: 2, size_min: 0.3, sync: false } },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00bfff',
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 8, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// 🎮 Button click handler for magical actions
// ... existing code ...

// 🦶 Footer emoji animations to spread joy
// ... existing code ...

// 🧹 The end! Thanks for reading our enchanted JS! //
