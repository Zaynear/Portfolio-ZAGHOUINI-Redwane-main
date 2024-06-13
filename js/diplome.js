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
        titre: "CPGE PSI validé",
        date: "2019-2021",
        lieu: "Jean Jaures",
        etat: "obtenu",
        description: "La CPGE PSI (Classes Préparatoires aux Grandes Écoles, filière Physique et Sciences de l'Ingénieur) est une formation de deux ans après le baccalauréat, destinée à préparer les étudiants aux concours des grandes écoles d'ingénieurs. Cette filière met un accent particulier sur les mathématiques, la physique, et les sciences de l'ingénieur, offrant une formation rigoureuse et approfondie dans ces disciplines. Les étudiants y développent des compétences en résolution de problèmes complexes, en modélisation mathématique, et en analyse de systèmes techniques. La CPGE PSI est conçue pour former des esprits analytiques et polyvalents, capables de s'adapter à divers domaines scientifiques et technologiques. Les diplômés de cette filière ont la possibilité d'intégrer les grandes écoles d'ingénieurs françaises, où ils poursuivent des études spécialisées pour devenir ingénieurs dans des secteurs variés comme l'aéronautique, l'énergie, les technologies de l'information, et bien d'autres.",
        image:"../img/cropped-logoljj.jpg"
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
