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

//----------------------------------------------------------------------------


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//------------------------------------------------------------------------------


//nav info
const navItems = document.querySelectorAll('header nav a');

navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];


//------------------------------------------------------------------------------


//CTA Image
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

//CTA h1
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta.h1;

//break in h1 text
const mainHeader = document.getElementsByTagName("h1")[0];
mainHeader.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

//CTA Button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;


//---------------------------------------------------------------------------------


//top content h4
const topContenth4 = document.querySelectorAll('.top-content .text-content h4');
topContenth4[0].textContent = siteContent['main-content']['features-h4'];
topContenth4[1].textContent = siteContent['main-content']['about-h4'];

//top content paragraph
const topContentp = document.querySelectorAll('.top-content .text-content p');
topContentp[0].textContent = siteContent['main-content']['features-content'];
topContentp[1].textContent = siteContent['main-content']['about-content'];

//middle image
const midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

//bottom content h4
const bottomContenth4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomContenth4[0].textContent = siteContent['main-content']['services-h4'];
bottomContenth4[1].textContent = siteContent['main-content']['product-h4'];
bottomContenth4[2].textContent = siteContent['main-content']['vision-h4'];

//bottom content p
const bottomContentp = document.querySelectorAll('.bottom-content .text-content p');
bottomContentp[0].textContent = siteContent['main-content']['services-content'];
bottomContentp[1].textContent = siteContent['main-content']['product-content'];
bottomContentp[2].textContent = siteContent['main-content']['vision-content'];


//----------------------------------------------------------------------------


//contact h4
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent.contact['contact-h4'];

//break in h4 text
// const contactHeader = document.getElementsByTagName('contact-h4')[0];
// contactHeader.innerHTML = siteContent['contact']['contact-h4'].split(' ').join('<br>');

//contact paragraph [0]
const contactp = document.querySelectorAll('.contact p');
contactp[0].textContent = siteContent.contact['address'];
contactp[1].textContent = siteContent.contact['phone'];
contactp[2].textContent = siteContent.contact['email'];


//-----------------------------------------------------------------------------


//footer paragraph
const footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent.footer.copyright;

