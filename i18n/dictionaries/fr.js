// Keys mirror en.js; anything missing falls back to English key by key
// (i18n/index.js). The brand line stays English everywhere: AHSP is its
// acronym.

const fr = {
  meta: {
    title: "AHSP — are here some pteryx?",
    description:
      "Un quiz sur les dinosaures — et sur tout ce qu’on range par erreur parmi les dinosaures.",
    sharedTitle: "{score} sur {total} — {rank}",
    sharedDescription:
      "Voilà le score de quelqu’un à AHSP, le quiz sur les dinosaures que les studios de cinéma ont ratés. À toi.",
  },
  cover: {
    kicker: "Carnet de terrain",
    title: "Are here some pteryx?",
    subtitle:
      "Huit questions sur le temps profond. Presque tout ce que tu sais des dinosaures a été écrit par des studios de cinéma.",
    start: "Ouvrir le carnet",
    meta: "8 questions · environ 4 minutes",
    // Shown when the visit came through a shared result link.
    challenge: "Quelqu’un a fait {score} sur {total} — {rank}. À toi.",
  },
  ui: {
    question: "Question",
    of: "sur",
    progress: "Question {current} sur {total}",
    check: "Vérifier",
    next: "Suivant",
    seeResult: "Voir le verdict",
    restart: "Recommencer",
    yourAnswer: "Ta réponse",
    correctAnswer: "En réalité",
    language: "Langue",
    theme: "Basculer thème clair / sombre",
    true: "Vrai",
    myth: "Mythe",
    correctLabel: "Correct",
    wrongLabel: "Pas tout à fait",
    close: "Presque",
    off: "À côté",
  },
  eras: {
    cenozoic: "Cénozoïque",
    cretaceous: "Crétacé",
    jurassic: "Jurassique",
    triassic: "Trias",
  },
  units: {
    cm: "{value} cm",
    g: "{value} g",
    kg: "{value} kg",
    Ma: "{value} Ma",
    Myr: "{value} millions d’années",
  },
  result: {
    kicker: "Verdict",
    scoreLine: "{score} sur {total}",
    restart: "Rejouer",
    share: {
      label: "Partager le verdict",
      text: "{score} sur {total} à AHSP — {rank}.",
      action: "Partager sur {network}",
      twitter: "X",
      telegram: "Telegram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  ranks: {
    filmSchool: {
      title: "Diplômé de Jurassic Park",
      note: "Tout ce que tu sais vient d’un studio de cinéma. Bonne nouvelle : presque rien n’était vrai, donc il y a de la place.",
    },
    giftShop: {
      title: "Boutique du musée",
      note: "Tu as les dinosaures en plastique et une vague idée de l’ordre des choses. Les dates restent de la fiction.",
    },
    fieldAssistant: {
      title: "Assistant de fouilles",
      note: "Tu sais qu’un ptérosaure n’est pas un dinosaure et que les oiseaux ont eu le dernier mot. Le temps profond t’échappe encore.",
    },
    curator: {
      title: "Conservateur",
      note: "Tu ne confonds pas les ères, et une voile sur le dos ne te trompe pas. Un spécimen t’a échappé.",
    },
    palaeontologist: {
      title: "Paléontologue",
      note: "Sans faute. Tu sais que le stégosaure est plus loin du T. rex que le T. rex ne l’est de toi.",
    },
  },

  questions: {
    "titanosaur-egg": {
      prompt: "Un titanosaure pesait jusqu’à 70 tonnes. Quelle taille faisait son œuf ?",
      fact:
        "Environ 30 cm — un ballon de foot. La coquille doit rester assez fine pour laisser passer l’oxygène jusqu’à l’embryon, alors les œufs butent sur un plafond physique, aussi énorme que soit le parent.",
    },
    "stego-brain": {
      prompt: "Le stégosaure portait cinq tonnes de corps. Combien pesait son cerveau ?",
      fact:
        "Environ 80 g — une noix aux commandes de cinq tonnes d’animal. Un grand corps n’exige pas un grand cerveau.",
    },
    "velociraptor-weight": {
      prompt: "Combien pesait un vrai vélociraptor ?",
      fact:
        "Environ 15 kg — la taille d’une dinde, et couvert de plumes. Les films ont pris les proportions du deinonychus et gardé le nom qui sonne mieux.",
    },
    "trex-arm-lift": {
      prompt:
        "Les petits bras du T. rex sont la blague récurrente du Mésozoïque. Combien pouvait soulever un bras ?",
      fact:
        "Environ 200 kg par bras — plusieurs fois ce qu’un humain entraîné soulève en curl. Les bras étaient courts, pas faibles.",
    },
    "smallest-dino": {
      prompt: "Quelle longueur faisait le plus petit dinosaure non aviaire connu ?",
      fact:
        "Environ 34 cm du bec à la queue — Anchiornis, de la taille d’un pigeon, plumes comprises.",
    },
    "trex-timeline": {
      prompt: "Quand vivait Tyrannosaurus rex ?",
      fact:
        "Il y a 66 à 68 millions d’années. Le stégosaure avait disparu quelque 83 millions d’années avant la naissance du T. rex — le T. rex est plus proche de toi dans le temps que du stégosaure.",
    },
    "dino-era-length": {
      prompt: "Combien de temps a duré l’âge des dinosaures ?",
      fact:
        "Environ 165 millions d’années, d’à peu près 230 à 66 Ma. Les dinosaures ont régné deux fois et demie plus longtemps que tout le temps écoulé entre leur extinction et ce quiz.",
    },
    "spino-trex": {
      prompt: "Le spinosaure et le T. rex auraient pu se croiser.",
      fact:
        "Un mythe doublement. Des continents différents — l’Afrique et l’Amérique du Nord — et environ 30 millions d’années d’écart. Le film les a quand même mis dans le même marais.",
    },
    "versus-cassowary": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "Deux pattes, jusqu’à 1,8 m de haut, une griffe-poignard de 12 cm sur le doigt intérieur, vit en forêt tropicale, peut tuer une personne d’un seul coup de patte.",
      optionA: "Oiseau",
      optionB: "Dinosaure",
      fact:
        "Un casoar — un très grand oiseau incapable de voler, bien vivant en Australie et en Nouvelle-Guinée, et souvent considéré comme l’oiseau le plus dangereux du monde. Techniquement, les oiseaux sont des dinosaures. Celui-ci ne s’est simplement jamais éteint.",
    },
    "versus-ichthyosaur": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "En forme de dauphin, chassait les ammonites en haute mer, respirait de l’air, donnait naissance à des petits vivants.",
      optionA: "Reptile marin",
      optionB: "Dinosaure",
      fact:
        "Un ichtyosaure — un reptile marin, pas un dinosaure. Les dinosaures ne sont jamais allés en mer ; chaque « dinosaure marin » appartient à une autre lignée de reptiles.",
    },
    "versus-dunkleosteus": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "Une tête cuirassée grande comme un frigo, des lames d’os à la place des dents, l’océan, il y a 380 millions d’années.",
      optionA: "Poisson",
      optionB: "Dinosaure",
      fact:
        "Dunkleosteus, un poisson cuirassé. Il précède les premiers dinosaures de près de 150 millions d’années — eux n’apparaissent que vers 240 Ma.",
    },
    "versus-terrorbird": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "Un prédateur incapable de voler, haut de 2,5 m, qui chassait des proies de la taille d’un cheval — et vivait après l’extinction des dinosaures.",
      optionA: "Oiseau",
      optionB: "Dinosaure",
      fact:
        "Phorusrhacos, un « oiseau de la terreur », chassait il y a 15 à 2 millions d’années — des dizaines de millions d’années après la disparition des dinosaures non aviaires.",
    },
    "versus-dimetrodon": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "Une haute voile sur le dos, des pattes écartées sur les côtés, et une place garantie dans chaque sachet de dinosaures en plastique.",
      optionA: "Dinosaure",
      optionB: "Parent des mammifères",
      fact:
        "Dimetrodon a vécu quelque 40 millions d’années avant le premier dinosaure, et il est plus proche de nous dans l’arbre du vivant que de n’importe quel reptile.",
    },
    "versus-pterosaur": {
      prompt: "Qu’est-ce que c’est ?",
      description:
        "Des ailes membraneuses jusqu’à 10 m d’envergure, a partagé le ciel du Mésozoïque avec les dinosaures pendant 150 millions d’années.",
      optionA: "Dinosaure volant",
      optionB: "Reptile volant, mais pas un dinosaure",
      fact:
        "Un ptérosaure — une branche à part des reptiles. Il vivait à côté des dinosaures, et finit à chaque fois dans le même album d’autocollants.",
    },
    pterodactyl: {
      prompt: "En paléontologie, « ptérodactyle » désigne :",
      options: {
        any: "N’importe quel reptile volant du Mésozoïque",
        genus: "Pterodactylus — un genre précis, plutôt petit",
        synonym: "Exactement la même chose que « ptérosaure »",
        invented: "Rien — le mot a été inventé par les films",
      },
      fact:
        "Pterodactylus est un seul genre modeste, d’environ un mètre d’envergure. Le grand à crête que tu imagines, c’est le ptéranodon.",
    },
    biggest: {
      prompt: "Le plus grand dinosaure jamais décrit :",
      options: {
        argentinosaurus: "Argentinosaurus",
        trex: "Tyrannosaurus rex",
        brachiosaurus: "Brachiosaurus",
        spinosaurus: "Spinosaurus",
      },
      fact:
        "Argentinosaurus — 30 à 35 m de long et 65 à 75 tonnes. Le T. rex atteint à peine un dixième de ce poids.",
    },
    color: {
      prompt: "Que sait-on vraiment de la couleur des dinosaures ?",
      options: {
        nothing: "Rien — la couleur ne se fossilise jamais",
        some: "Pour quelques espèces, on la connaît grâce aux structures pigmentaires fossilisées",
        allGreen: "Ils étaient verts et bruns, comme de grands lézards",
        everyone: "On peut reconstituer la couleur de la plupart des espèces",
      },
      fact:
        "Les mélanosomes — des capsules de pigment — survivent dans certains fossiles. Sinosauropteryx était roux avec une queue rayée, Anchiornis gris avec une crête rouge, Borealopelta brun-roux avec le ventre clair.",
    },
    "stego-second-brain": {
      prompt: "Le stégosaure avait un deuxième cerveau dans les hanches.",
      fact:
        "Mythe, et victorien de surcroît. Il y a bien une cavité dans les vertèbres du bassin, mais elle abritait sans doute un corps glycogénique — une réserve d’énergie, comme chez les oiseaux — et non du tissu nerveux.",
    },
    "polar-dinos": {
      prompt: "Des dinosaures vivaient au-delà du cercle polaire, dans la neige et des mois d’obscurité.",
      fact:
        "Vrai. On trouve des fossiles en Alaska, en Antarctique et dans le sud de l’Australie. Certaines espèces étaient adaptées au froid et à six mois sans soleil.",
    },
  },
};

export default fr;
