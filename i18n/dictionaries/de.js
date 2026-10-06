// Keys mirror en.js; anything missing falls back to English key by key
// (i18n/index.js). The brand line stays English everywhere: AHSP is its
// acronym.

const de = {
  meta: {
    title: "AHSP — are here some pteryx?",
    description:
      "Ein Quiz über Dinosaurier — und über alles, was Leute aus Versehen für Dinosaurier halten.",
    sharedTitle: "{score} von {total} — {rank}",
    sharedDescription:
      "So hat jemand bei AHSP abgeschnitten – dem Quiz über Dinosaurier, wie Hollywood sie nie gezeigt hat. Schaffst du mehr?",
  },
  cover: {
    kicker: "Feldtagebuch",
    title: "Are here some pteryx?",
    subtitle:
      "Acht Fragen über die Welt vor Millionen von Jahren. Das meiste, was du über Dinosaurier weißt, hat sich Hollywood ausgedacht.",
    start: "Tagebuch öffnen",
    meta: "8 Fragen · etwa 4 Minuten",
    // Shown when the visit came through a shared result link.
    challenge: "Jemand hat {score} von {total} geschafft — {rank}. Jetzt du.",
  },
  ui: {
    question: "Frage",
    of: "von",
    progress: "Frage {current} von {total}",
    check: "Prüfen",
    next: "Weiter",
    seeResult: "Zum Urteil",
    restart: "Neu starten",
    yourAnswer: "Deine Antwort",
    correctAnswer: "Tatsächlich",
    language: "Sprache",
    theme: "Helles / dunkles Design umschalten",
    true: "Stimmt",
    myth: "Mythos",
    correctLabel: "Richtig",
    wrongLabel: "Nicht ganz",
    close: "Knapp dran",
    off: "Daneben",
  },
  eras: {
    cenozoic: "Känozoikum",
    cretaceous: "Kreide",
    jurassic: "Jura",
    triassic: "Trias",
  },
  units: {
    cm: "{value} cm",
    g: "{value} g",
    kg: "{value} kg",
    Ma: "vor {value} Mio. J.",
    Myr: "{value} Mio. Jahre",
  },
  result: {
    kicker: "Urteil",
    scoreLine: "{score} von {total}",
    restart: "Noch einmal",
    share: {
      label: "Urteil teilen",
      text: "{score} von {total} bei AHSP — {rank}.",
      action: "Auf {network} teilen",
      twitter: "X",
      telegram: "Telegram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  ranks: {
    filmSchool: {
      title: "Absolvent von Jurassic Park",
      note: "Dein ganzes Wissen stammt aus dem Kino. Die gute Nachricht: Fast nichts davon stimmt – da ist noch viel Luft nach oben.",
    },
    giftShop: {
      title: "Museumsshop",
      note: "Die Plastikdinos hast du, und wer nach wem kam, weißt du ungefähr. Bei den Jahreszahlen wird es noch fantasievoll.",
    },
    fieldAssistant: {
      title: "Grabungshelfer",
      note: "Du weißt, dass ein Flugsaurier kein Dinosaurier ist – ein Vogel dagegen schon. Nur bei den Millionen Jahren kommst du noch durcheinander.",
    },
    curator: {
      title: "Kurator",
      note: "Die Erdzeitalter hältst du auseinander, und von einem Rückensegel lässt du dich nicht täuschen. Nur ein einziger Fehler.",
    },
    palaeontologist: {
      title: "Paläontologe",
      note: "Kein einziger Fehler. Du weißt, dass zwischen Stegosaurus und T. rex mehr Zeit liegt als zwischen T. rex und dir.",
    },
  },

  questions: {
    "titanosaur-egg": {
      prompt: "Ein Titanosaurier wog bis zu 70 Tonnen. Wie groß war sein Ei?",
      fact:
        "Etwa 30 cm — so groß wie ein Fußball. Die Schale muss dünn genug bleiben, um Sauerstoff zum Embryo durchzulassen, deshalb stoßen Eier an eine harte physikalische Grenze, egal wie riesig das Elterntier ist.",
    },
    "stego-brain": {
      prompt: "Ein Stegosaurus wog rund fünf Tonnen. Und wie schwer war sein Gehirn?",
      fact:
        "Rund 80 g — eine Walnuss, die fünf Tonnen Tier steuert. Große Körper brauchen keine großen Gehirne.",
    },
    "velociraptor-weight": {
      prompt: "Wie viel wog ein echter Velociraptor?",
      fact:
        "Etwa 15 kg — so groß wie ein Truthahn und gefiedert. Im Film sieht man eigentlich einen Deinonychus, nur der Name Velociraptor klang besser.",
    },
    "trex-arm-lift": {
      prompt:
        "Über die kurzen Ärmchen von T. rex machen sich alle lustig. Wie viel konnte so ein Arm stemmen?",
      fact:
        "Rund 200 kg pro Arm — ein Vielfaches dessen, was ein trainierter Mensch curlen kann. Die Arme waren kurz, nicht schwach.",
    },
    "smallest-dino": {
      prompt: "Wie lang war der kleinste bekannte Dinosaurier (Vögel nicht mitgezählt)?",
      fact:
        "Etwa 34 cm vom Schnabel bis zum Schwanz — Anchiornis, taubengroß und mit Federn.",
    },
    "trex-timeline": {
      prompt: "Wann lebte Tyrannosaurus rex?",
      fact:
        "Vor 66–68 Millionen Jahren. Stegosaurus starb rund 83 Millionen Jahre vor T. rex aus — T. rex steht dir zeitlich näher als dem Stegosaurus.",
    },
    "dino-era-length": {
      prompt: "Wie lange dauerte das Zeitalter der Dinosaurier?",
      fact:
        "Etwa 165 Millionen Jahre, von rund 230 bis vor 66 Millionen Jahren. Die Dinosaurier herrschten zweieinhalbmal so lange, wie seit ihrem Aussterben bis heute vergangen ist.",
    },
    "spino-trex": {
      prompt: "Spinosaurus und T. rex hätten sich begegnen können.",
      fact:
        "Ein Mythos, und das aus zwei Gründen: verschiedene Kontinente — Afrika und Nordamerika — und rund 30 Millionen Jahre Abstand. Der Film hat sie trotzdem in denselben Sumpf gesteckt.",
    },
    "versus-cassowary": {
      prompt: "Was ist das?",
      description:
        "Läuft auf zwei Beinen, wird bis zu 1,8 m groß und trägt an der Innenzehe eine 12 cm lange Dolchkralle. Lebt im tropischen Regenwald und kann einen Menschen mit einem Tritt töten.",
      optionA: "Vogel",
      optionB: "Dinosaurier",
      fact:
        "Ein Kasuar — ein sehr großer flugunfähiger Vogel, der heute in Australien und Neuguinea lebt und als gefährlichster Vogel der Welt gilt. Streng genommen sind Vögel Dinosaurier. Dieser hier ist nur nie ausgestorben.",
    },
    "versus-ichthyosaur": {
      prompt: "Was ist das?",
      description:
        "Delfinförmig, jagte Ammoniten im offenen Ozean, atmete Luft, brachte lebende Junge zur Welt.",
      optionA: "Meeresreptil",
      optionB: "Dinosaurier",
      fact:
        "Ein Ichthyosaurier — ein Meeresreptil, kein Dinosaurier. Dinosaurier sind nie ins Meer gegangen; jeder „Meeresdinosaurier“ gehört in Wahrheit zu einer anderen Reptiliengruppe.",
    },
    "versus-dunkleosteus": {
      prompt: "Was ist das?",
      description:
        "Ein gepanzerter Kopf so groß wie ein Kühlschrank, dazu Knochenklingen statt Zähnen. Lebte vor 380 Millionen Jahren im Ozean.",
      optionA: "Fisch",
      optionB: "Dinosaurier",
      fact:
        "Dunkleosteus, ein Panzerfisch. Er ist fast 150 Millionen Jahre älter als die ersten Dinosaurier — die tauchen erst vor rund 240 Millionen Jahren auf.",
    },
    "versus-terrorbird": {
      prompt: "Was ist das?",
      description:
        "Ein 2,5 m großer flugunfähiger Räuber, der Beute von der Größe eines Pferdes zur Strecke brachte — und nach dem Aussterben der Dinosaurier lebte.",
      optionA: "Vogel",
      optionB: "Dinosaurier",
      fact:
        "Phorusrhacos, ein „Terrorvogel“, jagte vor 15 bis 2 Millionen Jahren — zig Millionen Jahre nachdem die Dinosaurier (bis auf die Vögel) ausgestorben waren.",
    },
    "versus-dimetrodon": {
      prompt: "Was ist das?",
      description:
        "Ein hohes Segel auf dem Rücken, seitlich abgespreizte Beine und ein fester Platz in jeder Tüte Plastikdinos.",
      optionA: "Dinosaurier",
      optionB: "Verwandter der Säugetiere",
      fact:
        "Dimetrodon lebte rund 40 Millionen Jahre vor dem ersten Dinosaurier und steht im Stammbaum näher bei uns als bei irgendeinem Reptil.",
    },
    "versus-pterosaur": {
      prompt: "Was ist das?",
      description:
        "Flughautflügel mit bis zu 10 m Spannweite, teilte sich 150 Millionen Jahre lang den Himmel des Mesozoikums mit den Dinosauriern.",
      optionA: "Fliegender Dinosaurier",
      optionB: "Fliegendes Reptil, aber kein Dinosaurier",
      fact:
        "Ein Flugsaurier — eine eigene Gruppe der Reptilien. Er lebte neben den Dinosauriern, deshalb wird er ständig zu ihnen gezählt.",
    },
    pterodactyl: {
      prompt: "Was meinen Paläontologen mit „Pterodaktylus“?",
      options: {
        any: "Jedes fliegende Reptil des Mesozoikums",
        genus: "Nur eine bestimmte, eher kleine Gattung: Pterodactylus",
        synonym: "Genau dasselbe wie „Flugsaurier“",
        invented: "Gar nichts — das Wort stammt aus dem Kino",
      },
      fact:
        "Pterodactylus ist eine einzige bescheidene Gattung mit etwa einem Meter Spannweite. Der große mit dem Kamm, den du dir vorstellst, ist Pteranodon.",
    },
    biggest: {
      prompt: "Welcher ist der größte bekannte Dinosaurier?",
      options: {
        argentinosaurus: "Argentinosaurus",
        trex: "Tyrannosaurus rex",
        brachiosaurus: "Brachiosaurus",
        spinosaurus: "Spinosaurus",
      },
      fact:
        "Argentinosaurus — 30–35 m lang und 65–75 Tonnen schwer. T. rex kommt kaum auf ein Zehntel dieses Gewichts.",
    },
    color: {
      prompt: "Was wissen wir wirklich über die Farbe von Dinosauriern?",
      options: {
        nothing: "Nichts — Farbe versteinert nie",
        some: "Bei einigen Arten wissen wir es, anhand versteinerter Pigmentstrukturen",
        allGreen: "Sie waren grün und braun, wie große Eidechsen",
        everyone: "Wir können die Farbe der meisten Arten rekonstruieren",
      },
      fact:
        "Melanosomen — Pigmentkapseln — bleiben in manchen Fossilien erhalten. Sinosauropteryx war rotbraun mit gestreiftem Schwanz, Anchiornis grau mit rotem Schopf, Borealopelta rötlich-braun mit hellem Bauch.",
    },
    "stego-second-brain": {
      prompt: "Stegosaurus hatte ein zweites Gehirn in der Hüfte.",
      fact:
        "Ein Mythos aus dem 19. Jahrhundert. In den Hüftwirbeln gibt es einen Hohlraum, aber darin saß höchstwahrscheinlich ein Glykogenkörper — ein Energiespeicher wie bei Vögeln — und kein Nervengewebe.",
    },
    "polar-dinos": {
      prompt: "Dinosaurier lebten jenseits des Polarkreises, bei Schnee und monatelanger Dunkelheit.",
      fact:
        "Stimmt. Fossilien stammen aus Alaska, der Antarktis und dem Süden Australiens. Manche Arten waren an Kälte und ein halbes Jahr ohne Sonne angepasst.",
    },
  },
};

export default de;
