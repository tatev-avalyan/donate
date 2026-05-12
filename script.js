const campaigns = [
  {
      id: "child-health-mariam",
      title: "Հիվանդ երեխաներ",
      name: "Մարիամ, 7 տարեկան",
      location: "Երևան",
      description: "Մարիամը բուժման և դեղորայքի աջակցության կարիք ունի։ Ընտանիքը փորձում է հոգալ բուժման ծախսերը, սակայն օգնության կարիք ունի։",
      image: "images/child.jpg",
      needed: 5000,
      raised: 3250
  },
  {
      id: "child-health-arek",
      title: "Հիվանդ երեխաներ",
      name: "Արեն, 5 տարեկան",
      location: "Արմավիր",
      description: "Արենին անհրաժեշտ են հետազոտություններ, դեղորայք և շարունակական բժշկական վերահսկողություն։",
      image: "images/child-2.jpg",
      needed: 4200,
      raised: 1900
  },
  {
      id: "elder-care-aram",
      title: "Տարեց մարդիկ",
      name: "Պարոն Արամ, 74 տարեկան",
      location: "Գյումրի",
      description: "Պարոն Արամը միայնակ է ապրում և կարիք ունի սննդի, դեղորայքի և ձմեռային կենցաղային աջակցության։",
      image: "images/elder.jpg",
      needed: 1800,
      raised: 960
  },
  {
      id: "elder-care-seda",
      title: "Տարեց մարդիկ",
      name: "Տիկին Սեդա, 81 տարեկան",
      location: "Վանաձոր",
      description: "Տիկին Սեդային անհրաժեշտ են դեղորայք, տաք հագուստ և ամենօրյա խնամքի աջակցություն։",
      image: "images/elder-2.jpg",
      needed: 2200,
      raised: 870
  },
  {
      id: "family-hakobyan",
      title: "Անապահով ընտանիքներ",
      name: "Հակոբյանների ընտանիք",
      location: "Վանաձոր",
      description: "Ընտանիքում կան երեք երեխաներ։ Նրանց անհրաժեշտ են սնունդ, տաք հագուստ և դպրոցական պարագաներ։",
      image: "images/family.jpg",
      needed: 3000,
      raised: 1750
  },
  {
      id: "family-martirosyan",
      title: "Անապահով ընտանիքներ",
      name: "Մարտիրոսյանների ընտանիք",
      location: "Աբովյան",
      description: "Ընտանիքը ժամանակավոր ֆինանսական դժվարության մեջ է և կարիք ունի սննդի ու կենցաղային աջակցության։",
      image: "images/family-2.jpeg",
      needed: 2800,
      raised: 1120
  },
  {
      id: "large-family",
      title: "Բազմազավակ ընտանիքներ",
      name: "Գրիգորյանների ընտանիք",
      location: "Սևան",
      description: "Բազմազավակ ընտանիքին անհրաժեշտ են սնունդ, հագուստ և երեխաների համար դպրոցական պարագաներ։",
      image: "images/large-family.jpg",
      needed: 3500,
      raised: 1480
  },
  {
      id: "orphanage-armavir",
      title: "Մանկատներ",
      name: "Մանկատան երեխաներ",
      location: "Արմավիր",
      description: "Երեխաներին անհրաժեշտ են կրթական նյութեր, գրքեր, խաղալիքներ և ամենօրյա խնամքի պարագաներ։",
      image: "images/orphanage.jpg",
      needed: 4200,
      raised: 2100
  },
  {
      id: "orphanage-gyumri",
      title: "Մանկատներ",
      name: "Երեխաների խնամքի կենտրոն",
      location: "Գյումրի",
      description: "Կենտրոնի երեխաների համար անհրաժեշտ են հիգիենայի պարագաներ, հագուստ և ուսումնական նյութեր։",
      image: "images/orphanage-2.jpg",
      needed: 3800,
      raised: 1680
  },
  {
      id: "disability-lilit",
      title: "Հաշմանդամություն ունեցող մարդիկ",
      name: "Աննա, 32 տարեկան",
      location: "Աբովյան",
      description: "Աննային անհրաժեշտ է վերականգնողական աջակցություն և հատուկ խնամքի պարագաներ առօրյա կյանքը հեշտացնելու համար։",
      image: "images/support.jpg",
      needed: 2600,
      raised: 1380
  },
  {
      id: "disability-vardan",
      title: "Հաշմանդամություն ունեցող մարդիկ",
      name: "Վարդան, 45 տարեկան",
      location: "Երևան",
      description: "Վարդանին անհրաժեշտ է շարժունակության և կենցաղային հարմարեցման աջակցություն։",
      image: "images/support-2.jpg",
      needed: 3200,
      raised: 1560
  },
  {
      id: "single-mother",
      title: "Միայնակ ծնողներ",
      name: "Աննա և իր երկու երեխաները",
      location: "Հրազդան",
      description: "Աննան միայնակ է խնամում երկու երեխաներին և կարիք ունի սննդի, հագուստի և վարձավճարի աջակցության։",
      image: "images/single-mother.webp",
      needed: 3100,
      raised: 990
  },
  {
      id: "student-support",
      title: "Կրթական աջակցություն",
      name: "Նարեկ, ուսանող",
      location: "Երևան",
      description: "Նարեկին անհրաժեշտ է ուսման վարձի և կրթական նյութերի աջակցություն՝ ուսումը շարունակելու համար։",
      image: "images/student.jpg",
      needed: 2400,
      raised: 870
  },
  {
      id: "homeless-support",
      title: "Անօթևան մարդիկ",
      name: "Ժամանակավոր կացարանի աջակցություն",
      location: "Հայաստան",
      description: "Օգնությունը կուղղվի անօթևան մարդկանց սննդի, տաք հագուստի և ժամանակավոր կացարանի կազմակերպմանը։",
      image: "images/homeless.jpg",
      needed: 4500,
      raised: 2350
  },
  {
      id: "medical-fund",
      title: "Բուժման ֆոնդ",
      name: "Շտապ բուժման աջակցություն",
      location: "Հայաստան",
      description: "Ֆոնդը նախատեսված է այն մարդկանց համար, ովքեր անհապաղ բուժման կամ դեղորայքի կարիք ունեն։",
      image: "images/medical-fund.jpeg",
      needed: 6500,
      raised: 4100
  },
  {
      id: "urgent-help",
      title: "Այլ հրատապ կարիքներ",
      name: "Շտապ օգնության ֆոնդ",
      location: "Հայաստան",
      description: "Այս ֆոնդը նախատեսված է անհապաղ աջակցության կարիք ունեցող մարդկանց արագ օգնելու համար։",
      image: "images/urgent.jpg",
      needed: 6000,
      raised: 4150
  },
  {
    id: "veteran-support",
    title: "Վետերանների աջակցություն",
    name: "Պարոն Սամվել, 68 տարեկան",
    location: "Եղեգնաձոր",
    description: "Պարոն Սամվելին անհրաժեշտ են դեղորայք, առողջական հետազոտություններ և կենցաղային աջակցություն։",
    image: "images/veteran.jpg",
    needed: 2700,
    raised: 1180
},
{
    id: "winter-support",
    title: "Ձմեռային աջակցություն",
    name: "Ջեռուցման և տաք հագուստի ֆոնդ",
    location: "Հայաստան",
    description: "Օգնությունը կուղղվի այն ընտանիքներին և տարեցներին, ովքեր ձմռանը ջեռուցման, վառելափայտի կամ տաք հագուստի կարիք ունեն։",
    image: "images/winter-support.jpeg",
    needed: 5200,
    raised: 2460
}
];


const artsakhCampaign = {
    id: "artsakh-support",
    title: "Օգնություն Արցախին",
    name: "Արցախից տեղահանված ընտանիքներ",
    location: "Հայաստան",
    description: "Սնունդ, հագուստ, դեղորայք, կացարան և կրթական աջակցություն Արցախից տեղահանված ընտանիքների համար։",
    image: "",
    needed: 10000,
    raised: 5350
  };
  
  const selectArtsakhButton = document.getElementById("selectArtsakhBtn");
  
  selectArtsakhButton.addEventListener("click", function () {
    selectedCampaign = artsakhCampaign;
    selectedCauseInput.value = artsakhCampaign.title;
  
    document.querySelectorAll(".campaign-card").forEach((card) => {
        card.classList.remove("active");
    });
  
    selectedCampaignBox.innerHTML = `
        <strong>Ընտրված է՝ ${artsakhCampaign.name}</strong>
        <span>${artsakhCampaign.title} • ${artsakhCampaign.location}</span>
    `;
  
    donationForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
  });

const campaignsContainer = document.getElementById("campaignsContainer");
const donationForm = document.getElementById("donationForm");
const selectedCauseInput = document.getElementById("selectedCause");
const selectedCampaignBox = document.getElementById("selectedCampaignBox");

const thankYouModal = document.getElementById("thankYouModal");
const thankYouMessage = document.getElementById("thankYouMessage");
const newDonationButton = document.getElementById("newDonation");
const closeModalButton = document.getElementById("closeModal");

let selectedCampaign = null;

function formatMoney(amount) {
  return `$${amount.toLocaleString()}`;
}

function getProgressPercent(raised, needed) {
  return Math.min(Math.round((raised / needed) * 100), 100);
}

function renderCampaigns() {
  campaignsContainer.innerHTML = campaigns
      .map((campaign) => {
          const progress = getProgressPercent(campaign.raised, campaign.needed);

          return `
              <article class="campaign-card" data-id="${campaign.id}">
                  <div class="campaign-image">
                      <img src="${campaign.image}" alt="${campaign.title}">
                      <span class="campaign-badge">${campaign.title}</span>
                  </div>

                  <div class="campaign-content">
                      <div class="campaign-meta">
                          <h3>${campaign.name}</h3>
                          <span>${campaign.location}</span>
                      </div>

                      <p>${campaign.description}</p>

                      <div class="progress-info">
                          <span>Հավաքվել է ${formatMoney(campaign.raised)}</span>
                          <strong>${formatMoney(campaign.needed)}</strong>
                      </div>

                      <div class="progress-bar">
                          <div style="width: ${progress}%"></div>
                      </div>

                      <button type="button" class="select-campaign-btn">
                          Ընտրել և օգնել
                      </button>
                  </div>
              </article>
          `;
      })
      .join("");
}

function selectCampaign(campaignId) {
  selectedCampaign = campaigns.find((campaign) => campaign.id === campaignId);

  if (!selectedCampaign) {
      return;
  }

  selectedCauseInput.value = selectedCampaign.title;

  document.querySelectorAll(".campaign-card").forEach((card) => {
      card.classList.remove("active");
  });

  document.querySelector(`[data-id="${campaignId}"]`).classList.add("active");

  selectedCampaignBox.innerHTML = `
      <strong>Ընտրված է՝ ${selectedCampaign.name}</strong>
      <span>${selectedCampaign.title} • ${selectedCampaign.location}</span>
  `;

  donationForm.scrollIntoView({
      behavior: "smooth",
      block: "start"
  });
}

function openModal() {
  thankYouModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  thankYouModal.hidden = true;
  document.body.classList.remove("modal-open");
}

campaignsContainer.addEventListener("click", function (event) {
  const button = event.target.closest(".select-campaign-btn");

  if (!button) {
      return;
  }

  const card = button.closest(".campaign-card");
  const campaignId = card.dataset.id;

  selectCampaign(campaignId);
});

donationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!selectedCampaign) {
      alert("Խնդրում ենք նախ ընտրել, թե ում եք ցանկանում օգնել։");
      return;
  }

  const formData = new FormData(donationForm);
  const donorName = formData.get("donorName");
  const amount = formData.get("amount");

  thankYouMessage.textContent = `${donorName}, շնորհակալություն։ Դուք նվիրաբերեցիք $${amount} «${selectedCampaign.name}» օգնության համար։`;

  donationForm.reset();
  selectedCampaign = null;
  selectedCauseInput.value = "";

  document.querySelectorAll(".campaign-card").forEach((card) => {
      card.classList.remove("active");
  });

  selectedCampaignBox.textContent = "Նախ ընտրեք օգնության ուղղությունը վերևի քարտերից։";

  openModal();
});

newDonationButton.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);

thankYouModal.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal-overlay")) {
      closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !thankYouModal.hidden) {
      closeModal();
  }
});

renderCampaigns();