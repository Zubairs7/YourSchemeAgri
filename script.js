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
    },
    
    {
        "name": "Karnataka Ganga Kalyana Scheme",
        "description": "Provides irrigation facilities to farmers through borewells, pump sets, and pipelines with subsidies up to ₹3.5 lakh for specific districts and ₹2 lakh for others.",
        "link": "https://karnatakaone.in/karnataka-ganga-kalyana-scheme/",
        "type": "state"
    },
    {
        "name": "Raitha Siri",
        "description": "Offers incentives of ₹10,000 per hectare to millet growers to encourage sustainable agriculture.",
        "link": "https://govinfo.me/list-of-karnataka-government-schemes-for-farmers-innovative-schemes-for-agri-sector/",
        "type": "state"
    },
    {
        "name": "Zero Budget Farming",
        "description": "Allocates ₹40 crores for equipment grants to promote cost-effective, organic farming methods.",
        "link": "https://govinfo.me/list-of-karnataka-government-schemes-for-farmers-innovative-schemes-for-agri-sector/",
        "type": "state"
    },
    {
        "name": "CM’s Micro Irrigation Scheme",
        "description": "Grants a 90% subsidy for farmers to adopt drip irrigation systems.",
        "link": "https://govinfo.me/list-of-karnataka-government-schemes-for-farmers-innovative-schemes-for-agri-sector/",
        "type": "state"
    },
    {
        "name": "Karavali Package",
        "description": "Provides incentives to coastal region farmers for improving paddy yields at ₹7,500 per hectare.",
        "link": "https://govinfo.me/list-of-karnataka-government-schemes-for-farmers-innovative-schemes-for-agri-sector/",
        "type": "state"
    },
    {
        "name": "Sericulture Support",
        "description": "Initiatives to stabilize silk prices and promote sericulture.",
        "link": "https://govinfo.me/list-of-karnataka-government-schemes-for-farmers-innovative-schemes-for-agri-sector/",
        "type": "state"
    },
    {
        "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "description": "Offers crop insurance to farmers against natural calamities and market risks.",
        "link": "https://pmfby.gov.in",
        "type": "central"
    },
    {
        "name": "Soil Health Card Scheme",
        "description": "Provides farmers with detailed analysis of soil conditions to guide fertilizer use and improve yields.",
        "link": "https://www.india.gov.in/spotlight/soil-health-card#tab=tab-1",
        "type": "central"
    },
    {
        "name": "PM-Kisan Samman Nidhi Yojana",
        "description": "Offers financial assistance of ₹6,000 annually to small and marginal farmers in three installments.",
        "link": "https://pmkisan.gov.in",
        "type": "central"
    },
    {
        "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
        "description": "Promotes organic farming through financial support and technical guidance.",
        "link": "https://www.myscheme.gov.in/schemes/pkvy",
        "type": "central"
    },
    {
        "name": "Rashtriya Krishi Vikas Yojana (RKVY)",
        "description": "Provides states with flexibility and funding to plan and implement agricultural development projects.",
        "link": "https://www.myscheme.gov.in/schemes/rkvy",
        "type": "central"
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
