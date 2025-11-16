// Récupération des endroits ou l'ont va afficher les diplomes
let diplomeEncours = document.getElementById("diplome-en-cours");
let diplomeObtnenu = document.getElementById("diplome-obtenu");

// Récupération des boutons
let btnDEnCours = document.getElementById("btn-diplome-en-cours");
let btnDObtenu = document.getElementById("btn-diplome-obtenu");

// Tableau des diplomes
let diplomes = [
    {
        id: "diplome_avant_bac",
        titre: "Bac S-SI",
        date: "2017-2019",
        lieu: "Jean Rostand",
        etat: "obtenu",
        description: "Le bac S-SI (Scientifique option Sciences de l'Ingénieur) s'adresse aux élèves passionnés par les mathématiques, la physique-chimie et les sciences de l'ingénieur. Il prépare aux études supérieures dans des domaines scientifiques et techniques tels que les écoles d'ingénieurs, les classes préparatoires aux grandes écoles (CPGE), et les formations universitaires en sciences et technologies. Le bac S-SI se prépare en 2 ans après la seconde générale et technologique. Ce cursus met l'accent sur la modélisation, la simulation, et la conception de systèmes techniques, avec des projets pratiques pour appliquer les connaissances théoriques. Le bac S-SI ouvre la voie à de nombreuses options d'études post-bac, y compris les BTS, DUT, écoles d'ingénieurs, licences scientifiques, et masters spécialisés.",
        image:"../img/logo_rostand.png"
    },
        {
        id: "diplome_1",
        titre: "Brevet d'initiation aéronautique (BIA)",
        date: "2019",
        lieu: "Jean Rostand",
        etat: "obtenu",
        description: "Cette formation certifiante couvre un large spectre de disciplines, incluant l'aérodynamique et la mécanique du vol, la connaissance des aéronefs, la météorologie, la navigation, ainsi que la réglementation et l'histoire de l'air.",
        image:"../img/bia.jpg"
    },
    {
        id: "diplome_3",
        titre: "CPGE PSI validé",
        date: "2019-2021",
        lieu: "Jean Jaures",
        etat: "obtenu",
        description: "La CPGE PSI (Classes Préparatoires aux Grandes Écoles, filière Physique et Sciences de l'Ingénieur) est une formation de deux ans après le baccalauréat, destinée à préparer les étudiants aux concours des grandes écoles d'ingénieurs. Cette filière met un accent particulier sur les mathématiques, la physique, et les sciences de l'ingénieur, offrant une formation rigoureuse et approfondie dans ces disciplines. Les étudiants y développent des compétences en résolution de problèmes complexes, en modélisation mathématique, et en analyse de systèmes techniques. La CPGE PSI est conçue pour former des esprits analytiques et polyvalents, capables de s'adapter à divers domaines scientifiques et technologiques. Les diplômés de cette filière ont la possibilité d'intégrer les grandes écoles d'ingénieurs françaises, où ils poursuivent des études spécialisées pour devenir ingénieurs dans des secteurs variés comme l'aéronautique, l'énergie, les technologies de l'information, et bien d'autres.",
        image:"../img/cropped-logoljj.jpg"
    },
    {
        id: "diplome_4",
        titre: "TOEIC",
        date: "2025",
        lieu: "Indépendant",
        etat: "obtenu",
        description: "Je détiens la certification TOEIC® Listening & Reading avec un score de 845/990, validant un niveau B2 (Utilisateur Indépendant) sur l'échelle européenne (CECRL). Ce résultat atteste de ma capacité à utiliser l'anglais de manière efficace dans un contexte professionnel et international. Je suis à l'aise pour comprendre des documents écrits complexes, suivre des présentations, participer à des réunions et interagir avec des interlocuteurs anglophones sur des sujets techniques ou commerciaux. ->->-> (Résultat dans la rubrique Compétence/Apprentissage personnel)",
        image:"../img/Toeic.png"
    },
    {
        id: "diplome_5",
        titre: "Certification Google Ads (Publicité sur le Réseau de Recherche)",
        date: "2025",
        lieu: "Indépendant",
        etat: "obtenu",
        description: "Certifié(e) par Google, je maîtrise la création, la gestion et l'optimisation de campagnes publicitaires sur le Réseau de Recherche. Cette certification valide ma capacité à définir des stratégies d'enchères, à cibler des audiences pertinentes et à analyser les indicateurs de performance (KPIs) pour maximiser le retour sur investissement (ROI) et atteindre des objectifs commerciaux précis.",
        image:"../img/google-ads.png"
    },
    {
        id: "diplome_6",
        titre: "Certification Google Analytics 4 (GA4)",
        date: "2025",
        lieu: "Indépendant",
        etat: "obtenu",
        description: "Titulaire de la certification Google Analytics (GA4), je suis compétent(e) pour analyser le trafic web et le comportement des utilisateurs. [Image de l'interface de Google Analytics 4] Je sais configurer la plateforme, interpréter les données d'audience, suivre les conversions et créer des rapports personnalisés pour formuler des recommandations stratégiques. Mon objectif est d'utiliser la donnée pour optimiser l'expérience utilisateur et la performance globale d'un site ou d'une application.",
        image:"../img/google_analytics.png"
    },
    {
        id: "diplome_2",
        titre: "Diplôme ingénieur Cybersécurité, SI et Gouvernance",
        date: "2021-2026",
        lieu: "Paris",
        etat: "en_cours",
        description: "Le diplôme d'ingénieur en Cyber, Gouvernance et Systèmes d'Information de l'EFREI Paris forme des experts capables de concevoir, sécuriser et gérer les infrastructures informatiques et les systèmes d'information des entreprises. Ce cursus prépare les étudiants à intervenir dans la gouvernance des systèmes d'information, la cybersécurité, et la gestion des risques, en mettant un accent particulier sur la protection des données, la conformité réglementaire, et la continuité des opérations. Les diplômés maîtrisent les techniques avancées de sécurité informatique, les stratégies de gouvernance IT, et les méthodologies de gestion des projets informatiques. Les compétences acquises permettent aux diplômés de travailler dans des entreprises de toutes tailles, des cabinets de conseil en informatique, ou des services spécialisés en sécurité et gouvernance des systèmes d'information.",
        image:"../img/Logo_Efrei.png"
    },
        {
        id: "diplome_7",
        titre: "Certification ISO/IEC 27001 (Lead Implementer / Auditor)",
        date: "2026",
        lieu: "Indépendant",
        etat: "en_cours",
        description: "Aspect gouvernance (ISO 27001) - Je suis en cours de formation sur la norme ISO 27001, la référence internationale pour les Systèmes de Management de la Sécurité de l'Information (SMSI). Mon objectif est de maîtriser les exigences et les bonnes pratiques pour l'établissement, la mise en œuvre, la maintenance et l'amélioration continue d'un SMSI, afin de protéger efficacement les actifs informationnels de l'entreprise.",
        image:"../img/ISO27001.png"
    },
            {
        id: "diplome_8",
        titre: "Certification ISO/IEC 27005 (Risk Manager)",
        date: "2026",
        lieu: "Indépendant",
        etat: "en_cours",
        description: "Aspect gestion des risques (ISO 27005) - En complément de l'ISO 27001, je prépare la certification ISO 27005 pour me spécialiser dans la gestion des risques de sécurité de l'information. Cette démarche vise à acquérir une méthodologie structurée (ex: EBIOS, MEHARI) pour identifier, évaluer, traiter et surveiller les risques, ce qui est au cœur de toute stratégie de cybersécurité efficace.",
        image:"../img/ISO27005.png"
    },
            {
        id: "diplome_9",
        titre: "Certification Certified Ethical Hacker (CEH)",
        date: "2026",
        lieu: "Indépendant",
        etat: "en_cours",
        description: "Aspect sécurité offensive & défensive (CEH) - Afin de compléter mon profil par une expertise technique offensive, je prépare activement la certification CEH. L'objectif est de savoir identifier et exploiter les vulnérabilités des systèmes d'information en utilisant les mêmes outils et techniques que les attaquants, afin de mieux les anticiper et de renforcer les mesures de défense (pentesting).",
        image:"../img/CEH.png"
    },
];

// Affichage des diplomes
for (let i = 0; i < diplomes.length; i++) {
    let diplome = diplomes[i];
    let diplomeHTML = `
        <div class="card card-diplome" style="width:20rem; color: black; margin: 1rem;">
            <div class="card-header">
                <b>${diplome.date} - ${diplome.lieu}</b>    
            </div>
            <img src="${diplome.image}" class="card-img-top" alt="diplome-img">
            <div class="card-body">
                <h5 class="card-title">${diplome.titre}</h5>
                <button class="btn btn-primary" data-bs-target="#${diplome.id}" data-bs-toggle="modal" data-bs-dismiss="modal">Détails</button>
            </div>
        </div>

        <div class="modal fade" id="${diplome.id}" aria-hidden="true" aria-labelledby="${diplome.id}" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="titre"> ${diplome.titre} </h5>
                    <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${diplome.description}
                </div>
                <div class="modal-footer">
                    
                </div>
                </div>
            </div>
        </div>
    `;

    if (diplome.etat == "obtenu") {
        diplomeObtnenu.innerHTML += diplomeHTML;
    } else if (diplome.etat == "en_cours") {
        diplomeEncours.innerHTML += diplomeHTML;
    }
}

// Fonction pour afficher les diplomes en cours
function afficherDiplomeEnCours() {
    if (diplomeEncours.style.height == "0px") {
        diplomeEncours.style.height = "auto";
    } else {
        diplomeEncours.style.height = "0";
    }
}

// Fonction pour afficher les diplomes obtenus
function afficherDiplomeObtenu() {
    if (diplomeObtnenu.style.height == "0px") {
        diplomeObtnenu.style.height = "auto";
    } else {
        diplomeObtnenu.style.height = "0";
    }
}

// Ajout des évènements
btnDEnCours.addEventListener("click", afficherDiplomeEnCours);
btnDObtenu.addEventListener("click", afficherDiplomeObtenu);
