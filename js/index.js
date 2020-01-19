const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


const nav = document.querySelector('nav')
const aTag = document.querySelector('a')
const h1 = document.querySelector('.cta-text h1')
const button = document.querySelector('.cat-text button')
const ctaImage = document.getElementById('cta-img')
const topContenth4 = document.querySelectorAll('.top-content .text-content h4')
const topContentp = document.querySelectorAll('.top-content .text-content p')
const middleImage = document.getElementById('.middle-img')
const bottomContenth4 = document.querySelectorAll('.bottom-content .text-content h4')
const bottomContentp = document.querySelectorAll('.bottom-content .text-content h4')
const contacth4 = document.querySelector('.contact h4')
const contactp = document.querySelectorAll('.contact p')
const footer = document.querySelector('footer p') 

//nav info
aTag[0].textContent = siteContent.nav['nav-item-1'];
aTag[1].textContent = siteContent.nav['nav-item-2'];
aTag[2].textContent = siteContent.nav['nav-item-3'];
aTag[3].textContent = siteContent.nav['nav-item-4'];
aTag[4].textContent = siteContent.nav['nav-item-5'];
aTag[5].textContent = siteContent.nav['nav-item-6'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
