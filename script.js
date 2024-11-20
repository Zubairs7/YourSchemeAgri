const schemes = [
    {
        name: "Pradhan Mantri Kisan Samman Nidhi",
        description: "Provides ₹6,000 annually to small and marginal farmers.",
        link: "https://pmkisan.gov.in",
        type: "central"
    },
    {
        name: "Krishi Bhagya Scheme",
        description: "Promotes rainwater harvesting and micro-irrigation in Karnataka.",
        link: "https://raitamitra.karnataka.gov.in",
        type: "state"
    },
    {
        name: "PM Fasal Bima Yojana",
        description: "Crop insurance for protection against natural calamities.",
        link: "https://pmfby.gov.in",
        type: "central"
    }
    // Add more schemes here as needed
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemeItems = document.querySelectorAll('.scheme-item');
    
    schemeItems.forEach(item => {
        const schemeType = item.querySelector('a').href.includes('pmkisan') ? 'central' : 'state';
        if (filterValue === 'all' || schemeType === filterValue) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

window.onload = populateSchemes;

document.addEventListener("scroll", () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
  });
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
