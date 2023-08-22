import {createGraphFromData} from "@peren/infoblig";

const dataStructure = {
    options: {
        disableLabelBoxesOnLinks: true,
    },
    bubbleData: {
        id: 0,
        name: "Root",
        children: [{
            id: 1,
            name: "PEReN",
            color: "rgb(25,167,75)",
            sidebarData: "<h1><a href=\"https://www.peren.gouv.fr/\">PEReN</a></h1>The digital regulation expertise center (PEReN) is a service with French national competence created by decree no. 2020-1102 of August 31, 2020 published in the Official Journal on September 2, 2020. regulatory capacity of state service platforms, providing technical assistance in the areas of data processing, data science and algorithmic processes.",
            value: 100,
            children:[{
                    id: 10,
                    name: "Public Policy and Institutional Relations",
                    color: "rgb(62,215,114)",
                    value: 1
                }, {
                    id: 11,
                    name: "Operations",
                    color: "rgb(62,215,114)",
                    children:[{
                        id: 110,
                        name: "Research and Ethics Center",
                        color: "rgb(98,237,146)",
                        value: 1
                    }, {
                        id: 111,
                        name: "Data Science Center",
                        color: "rgb(98,237,146)",
                        value: 1
                    }, {
                        id: 112,
                        name: "Development Center",
                        color: "rgb(98,237,146)",
                        value: 1
                    },]
                }]
        }, {
            id: 2,
            name: "Independent National Regulators",
            color: "rgba(161,81,73,255)",
            children: [{
                id: 20,
                name: "CNIL",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>CNIL</h1>The Commission nationale de l'informatique et des libertés (CNIL, French pronunciation: ​[knil]; English: National Commission on Informatics and Liberty) is an independent French administrative regulatory body whose mission is to ensure that data privacy law is applied to the collection, storage, and use of personal data. Its existence was established by the French loi n° 78-17 on Information Technology, Data Files and Civil Liberty of 6 January 1978, and it is the national data protection authority for France. From September 2011 to February 2019, the CNIL has been chaired by Isabelle Falque-Pierrotin. It's now chaired by Marie-Laure Denis."
            }, {
                id: 21,
                name: "ART",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>ART</h1>The Transport Regulatory Authority (ART) is an independent public authority responsible for the economic regulation of rail transport activities, urban transport in Île-de-France (for its infrastructure management activities), interurban transport by coach, the motorway sector under concession, airport transport (regulation of airport charges) and responsible for a mission relating to digital services and mobility data. It thus contributes to improving the economic functioning of these six transport sectors."
            }, {
                id: 22,
                name: "ARPE",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>ARPE</h1>The Authority for Social Relations of Employment Platforms (ARPE), created on April 21, 2021, is a public administrative establishment of the State responsible for setting up, regulating and maintaining social dialogue between the networking platforms. and the self-employed who are bound to them by a commercial contract."
            }, {
                id: 23,
                name: "Arcep",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>Arcep</h1>The Autorité de Régulation des Communications Électroniques, des Postes et de la Distribution de la Presse (ARCEP or Arcep) is an independent French agency in charge of regulating telecommunications, postal services and print media distribution in France."
            }, {
                id: 24,
                name: "Arcom",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>Arcom</h1>Arcom is responsible for regulating online platforms (social media, search engines, video sharing platforms, etc.), including overseeing the means they use to combat information manipulation and hateful, infringing and harmful content."
            }, {
                id: 25,
                name: "ADLC",
                color: "rgba(192,104,79,255)",
                value: 1,
                sidebarData: "<h1>ADLC</h1>The Autorité de la concurrence (French for 'Competition Authority') is France's national competition regulator. Its predecessor, the Competition Council, was established in the 1950s. The Competition Authority is an Independent administrative authority [fr], responsible for preventing anti-competitive practices and monitoring the functioning of markets. It aims to ensure respect for the law linked \"to the defense of a sufficient market competition\". "
            }, {
                id: 26,
                name: "...",
                color: "rgba(192,104,79,255)",
                value: 1,
            }]
        }, {
            id: 3,
            name: "Government Ministries",
            color: "rgba(47,104,109,255)",
            children: [{
                id: 30,
                name: "Digital",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 31,
                name: "Culture",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 32,
                name: "Economy",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 33,
                name: "Foreign & European Affairs",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 34,
                name: "Housing",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 35,
                name: "Interior",
                color: "rgba(93,181,178,255)",
                value: 1,
            }, {
                id: 36,
                name: "...",
                color: "rgba(93,181,178,255)",
                value: 1,
            }]
        }, {
            id: 4,
            name: "European Comission",
            color: "rgba(187,153,59,255)",
            children: [{
                id: 40,
                name: "DG COMP",
                color: "rgba(247,202,56,255)",
                value: 1,
                sidebarData: "<h1>ARPE</h1>The Directorate-General for Competition (DG COMP) is a Directorate-General of the European Commission, located in Brussels. The DG Competition employs around 850 officials, as well as a number of seconded national officials, among other from national competition authorities. It is responsible for establishing and implementing competition policy for the European Union. DG Competition has a dual role in antitrust enforcement: an investigative role and a decision-making role. The current Director-General is Olivier Guersent."
            }, {
                id: 41,
                name: "DG CONNECT",
                color: "rgba(247,202,56,255)",
                value: 1,
                sidebarData: "<h1>DG CONNECT</h1>The Directorate-General for Communications Networks, Content and Technology (also called Connect) is a Directorate-General of the European Commission and is responsible for EU investment in research, innovation and development of critical digital technologies (such as Artificial Intelligence, Common Data Spaces, High-Performance Computing, 5G, Micro-Electronics, Blockchain and Quantum)."
            }, {
                id: 42,
                name: "JRC ECAT",
                color: "rgba(247,202,56,255)",
                value: 1,
                sidebarData: "<h1>JRC ECAT</h1>The European Centre for Algorithmic Transparency (ECAT) will contribute to a safer, more predictable and trusted online environment for people and business.\n" +
                    "\n" +
                    "How algorithmic systems shape the visibility and promotion of content, and its societal and ethical impact, is an area of growing concern. Measures adopted under the Digital Services Act (DSA) call for algorithmic accountability and transparency audits.\n" +
                    "\n" +
                    "The ECAT contributes with scientific and technical expertise to the European Commission's exclusive supervisory and enforcement role of the systemic obligations on Very Large Online Platforms (VLOPs) and Very Large Online Search Engines (VLOSEs) provided for under the DSA.\n" +
                    "\n" +
                    "Scientists and experts working at the ECAT will cooperate with industry representatives, academia, and civil society organisations to improve our understanding of how algorithms work: they will analyse transparency, assess risks, and propose new transparent approaches and best practices.\n" +
                    "\n" +
                    "The ECAT is part of the European Commission, hosted by the Joint Research Centre (JRC) - the Commission’s in-house science and knowledge service - in close cooperation with the Directorate General Communications Networks, Content and Technology (DG CONNECT)."
            }]
        }, {
            id: 5,
            name: "Research Institutions",
            color: "rgba(62,89,158,255)",
            children: [{
                id: 50,
                name: "CNRS",
                color: "rgba(80,124,192,255)",
                value: 1,
                sidebarData: "<h1>CNRS</h1>The French National Centre for Scientific Research (French: Centre national de la recherche scientifique, CNRS) is the French state research organisation and is the largest fundamental science agency in Europe."
            }, {
                id: 51,
                name: "Inria",
                color: "rgba(80,124,192,255)",
                value: 1,
                sidebarData: "<h1>Inria</h1>The National Institute for Research in Digital Science and Technology (Inria) (French: Institut national de recherche en sciences et technologies du numérique) is a French national research institution focusing on computer science and applied mathematics. It was created under the name French Institute for Research in Computer Science and Automation (IRIA) (French: Institut de recherche en informatique et en automatique) in 1967 at Rocquencourt near Paris, part of Plan Calcul. Its first site was the historical premises of SHAPE (central command of NATO military forces), which is still used as Inria's main headquarters. In 1980, IRIA became INRIA. Since 2011, it has been styled Inria."
            }, {
                id: 52,
                name: "Universities",
                color: "rgba(80,124,192,255)",
                value: 1,
            }]
        }]
    },
    linksData: [{
        source: 1,
        target: 2
    }, {
        source: 1,
        target: 3
    }, {
        source: 1,
        target: 4
    }, {
        source: 1,
        target: 5
    }]
};

createGraphFromData("#infobligChart", dataStructure)