// Récupération des endroits ou l'ont va afficher les compétences
let tableCompetence = document.getElementById("competences");

// Tableau des compétences
let competences = [
    {
        nom: "Cybersécurité",
        image: "../img/competences/cybersécurité.png",
        lien: "./pages-competences/cybersécurité.html",
        designation: "Logiciel open source (Cybersécurité)",
        projet: true
    },
    {
        nom: "DVWA", 
        image: "../img/competences/dvwa.jpg",
        lien: "",
        designation: "Application web vulnerable pour la formation en cybersécurité",
        projet: false
    },
    {
        nom: "HTML / CSS",
        image: "../img/competences/html-css.jpg",
        lien: "./pages-competences/html-css.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "JavaScript",
        image: "../img/competences/javascript.webp",
        lien: "./pages-competences/js.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "PHP",
        image: "../img/competences/php.png",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "JAVA - Intellij Idea",
        image: "../img/competences/java.png",
        lien: "./pages-competences/java.html",
        designation: "Langage de programmation orienté objet",
        projet: true
    },
    {
        nom: "Python",
        image: "../img/competences/python.png",
        lien: "./pages-competences/python.html",
        designation: "Langage de programmation",
        projet: true
    },
    {
        nom: "Cloud",
        image: "../img/competences/cloud.png",
        lien: "./pages-competences/cloud.html",
        designation: "Services informatiques",
        projet: true
    },
    {
        nom: "Virtualisation",
        image: "../img/competences/virtualisation.png",
        lien: "./pages-competences/virtualisation.html",
        designation: "Logiciel de virtualisation",
        projet: true
    },
    {
        nom: "PUTTY", 
        image: "../img/competences/putty.png",
        lien: "",
        designation: "Logiciel emulateur de terminal doublé d'un client open source",
        projet: false
    },
    {
        nom: "Tmate.io", 
        image: "../img/competences/tmate.png",
        lien: "",
        designation: "Outil de partage instantannée de terminal (SSH) à distance",
        projet: false
    },
    {
        nom: "wsl (Windows subsystem linux)", 
        image: "../img/competences/wsl.png",
        lien: "",
        designation: "Fonctionnalité de compatibilité linux sous windows",
        projet: false
    },   
    {
        nom: "Ubuntu", 
        image: "../img/competences/ubuntu.png",
        lien: "",
        designation: "Distribution linux fondé sur Debian",
        projet: false
    },
    {
        nom: "SQL",
        image: "../img/competences/sql.jpg",
        lien: "",
        designation: "Langage de programmation",
        projet: false
    },
    {
        nom: "Maria DB",
        image: "../img/competences/mariadb.png",
        lien: "",
        designation: "Système de gestion de base de donnée relationnel open-source",
        projet: false
    },
    {
        nom: "ReactJS",
        image: "../img/competences/reactjs.jpg",
        lien: "./pages-competences/react.html",
        designation: "Framework JavaScript",
        projet: true
    },
    {
        nom: "NodeJS",
        image: "../img/competences/nodejs.png",
        lien: "",
        designation: "Framework JavaScript",
        projet: false
    },
    {
        nom: "Symfony 6 / Twig",
        image: "../img/competences/Symf-twig.jpg",
        lien: "./pages-competences/symfony.html",
        designation: "Framework PHP",
        projet: true
    },
    {
        nom: "Dart / Flutter",
        image: "../img/competences/flutter-dart.jpg",
        lien: "",
        designation: "Langage de programmation et Framework",
        projet: false
    },
    {
        nom: "Angular",
        image: "../img/competences/angular.jpg",
        lien: "./pages-competences/angular.html",
        designation: "Framework TypeScript",
        projet: true
    },
    {
        nom: "PHPUnit",
        image: "../img/competences/phpunit.png",
        lien: "",
        designation: "Framework PHP",
        projet: false
    },
    {
        nom: "Visual studio code", 
        image: "../img/competences/vscode.png",
        lien: "",
        designation: "Editeur de code source extensible et open source",
        projet: false
    },
    {
        nom: "Python / Jupyter Notebook", 
        image: "../img/competences/jupyter.png",
        lien: "",
        designation: "Framework Python",
        projet: false
    },
    {
        nom: "Python / Django",
        image: "../img/competences/django.png",
        lien: "./pages-competences/django.html",
        designation: "Framework Python",
        projet: false
    },
    {
        nom: "Python / Turtle editor", 
        image: "../img/competences/turtle-editor.jpeg",
        lien: "",
        designation: "Editeur de texte pour langage de balisage (HTML,XML,etc...)",
        projet: false
    },
    {
        nom: "Git",
        image: "../img/competences/git.png",
        lien: "",
        designation: "Outil de versioning",
        projet: false
    },
    {
        nom: "Github",
        image: "../img/competences/github.svg",
        lien: "",
        designation: "Outil de versioning",
        projet: false
    },
    {
        nom: "Azure",
        image: "../img/competences/azure.webp",
        lien: "",
        designation: "Plateforme cloud (Service de calcul/IA/BDD/Stockage)",
        projet: false
    },
    {
        nom: "Power Bi",
        image: "../img/competences/powerbi.webp",
        lien: "",
        designation: "Outil de visualisation et d'analyse de donnée",
        projet: false
    },
    {
        nom: "OVH Cloud",
        image: "../img/competences/ovh.webp",
        lien: "",
        designation: "Service d'hébergement",
        projet: false
    },
    {
        nom: "Figma",
        image: "../img/competences/Figma.jpg",
        lien: "",
        designation: "Outil de maquettage",
        projet: false
    },
    {
        nom: "UML",
        image: "../img/competences/uml.svg.png",
        lien: "./pages-competences/uml.html",
        designation: "Outil de de modélisation graphique",
        projet: true
    },
    {
        nom: "Matlab", 
        image: "../img/competences/matlab.jpg",
        lien: "",
        designation: "Langage de programmation / logiciel de calcul numérique",
        projet: false
    },
    {
        nom: "Électronique",
        image: "../img/competences/puce.png",
        lien: "./pages-competences/electronique.html",
        designation: "Composant électronique et logiciel affilié",
        projet: true
    },
    {
        nom: "VHDL", 
        image: "../img/competences/vhdl.png",
        lien: "",
        designation: "Langage de description matériel pour un système electronique numérique",
        projet: false
    },
    {
        nom: "Gantt",
        image: "../img/competences/gantt.jpg",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "Postman",
        image: "../img/competences/postman.jpg",
        lien: "",
        designation: "Outil de test API",
        projet: false
    },
    {
        nom: "Jira",
        image: "../img/competences/jira.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "IceScrum",
        image: "../img/competences/icescrum.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "Trello",
        image: "../img/competences/trello.png",
        lien: "",
        designation: "Outil de gestion de projet ",
        projet: false
    },
    {
        nom: "Snipe-IT",
        image: "../img/competences/snipeit.png",
        lien: "",
        designation: "Logiciel opensource de gestion de parc informatique (ASSET Management System) ",
        projet: false
    },
    {
        nom: "Slack",
        image: "../img/competences/slack.webp",
        lien: "",
        designation: "Plateforme de communication collaboratif",
        projet: false
    },
    {
        nom: "Freenode IRC",
        image: "../img/competences/freenode.png",
        lien: "",
        designation: "Réseau de chat IRC (communauté informatique)",
        projet: false
    },
    {
        nom: "Obsidian",
        image: "../img/competences/obsidian.png",
        lien: "",
        designation: "Application de prise de note",
        projet: false
    },
    {
        nom: "Draw.io", 
        image: "../img/competences/drawio.webp",
        lien: "",
        designation: "Logiciel de dessin graphique mupltiplateforme",
        projet: false
    },
    {
        nom: "Audacity", 
        image: "../img/competences/audacity.jpg",
        lien: "",
        designation: "Logiciel d'edition audio open source",
        projet: false
    },
    {
        nom: "OBS studio", 
        image: "../img/competences/obs.png",
        lien: "",
        designation: "Logiciel de streaming et d'enregistrement video open source",
        projet: false
    },
    {
        nom: "Teamviewer", 
        image: "../img/competences/teamviewer.png",
        lien: "",
        designation: "Logiciel d'accès et contrôle à distance (PC et terminaux) ",
        projet: false
    },
    {
        nom: "Real VNC", 
        image: "../img/competences/realvnc.png",
        lien: "",
        designation: "Logiciel d'accès et contrôle à distance (Remote use VNC protocol) ",
        projet: false
    },
    {
        nom: "Canva", 
        image: "../img/competences/canva.webp",
        lien: "",
        designation: "Logiciel de conception graphique",
        projet: false
    },    
    {
        nom: "Pack office", 
        image: "../img/competences/office.jpeg",
        lien: "",
        designation: "Logiciel d'edition",
        projet: false
    },
    {
        nom: "Photoshop", 
        image: "../img/competences/photoshop.png",
        lien: "",
        designation: "Logiciel de retouche d'image et de création graphique",
        projet: false
    },
    {
        nom: "Notions", 
        image: "../img/competences/notion.png",
        lien: "",
        designation: "Applicationde prise de note et de gestion de projet",
        projet: false
    },
    {
        nom: "Slack", 
        image: "../img/competences/slack.png",
        lien: "",
        designation: "Plateforme de communication collaborative",
        projet: false
    },
    {
        nom: "Cisco Packet Tracer", 
        image: "../img/competences/cisco.webp",
        lien: "",
        designation: "Logiciel de simulation réseau",
        projet: false
    },
    {
        nom: "Fortinet (Fortigate)", 
        image: "../img/competences/fortinet.webp",
        lien: "",
        designation: "Pare-feu",
        projet: false
    },
    {
        nom: "Projets",
        image: "../img/competences/projet.png",
        lien: "./pages-competences/projets.html",
        designation: "Projets",
        projet: true
    },
    {
        nom: "Apprentissage personnel",
        image: "../img/competences/apprentissage_personnel.webp",
        lien: "./pages-competences/apprentissage_personnel.html",
        designation: "Apprentissage personnel",
        projet: true
    },
];

// Affichage des diplomes
for (let i = 0; i < competences.length; i++) {
    let competence = competences[i];
    let competenceHTML = `
    <div class="card card-competence" style="width:20rem; color: black; margin: 1rem; height: 20rem;">
            <div class="card-header" style="min-height: 4rem; ">
                ${competence.designation}
            </div>
            <img src="${competence.image}" class="card-img-top" alt="competence-img" style="min-height: 160px; max-height: 10rem;">
            <div class="card-body">
                <h5 class="card-title"><b>${competence.nom}</b></h5>
                ${competence.projet ? `<a href='${competence.lien}' class="btn btn-dark">Voir les projets</a>` : ``}
                
            </div>
        </div>
    `;
    
    // Affichage des compétences
    tableCompetence.innerHTML += competenceHTML;
}
