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
      "So hat jemand bei AHSP abgeschnitten, dem Dinosaurier-Quiz, bei dem die Filmstudios danebenlagen. Jetzt du.",
  },
  cover: {
    kicker: "Feldtagebuch",
    title: "Are here some pteryx?",
    subtitle:
      "Acht Fragen zur Tiefenzeit. Das meiste, was du über Dinosaurier weißt, stammt aus Filmstudios.",
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
      note: "Alles, was du weißt, kommt aus einem Filmstudio. Die gute Nachricht: Fast nichts davon stimmte, also ist viel Platz.",
    },
    giftShop: {
      title: "Museumsshop",
      note: "Die Plastikdinos hast du, und die Reihenfolge der Dinge ungefähr auch. Die Jahreszahlen sind noch Fiktion.",
    },
    fieldAssistant: {
      title: "Grabungshelfer",
      note: "Du weißt, dass ein Flugsaurier kein Dinosaurier ist und dass die Vögel zuletzt gelacht haben. Die Tiefenzeit rutscht dir noch weg.",
    },
    curator: {
      title: "Kurator",
      note: "Die Erdzeitalter hältst du auseinander, und ein Rückensegel führt dich nicht hinters Licht. Ein Fundstück ist dir durchgerutscht.",
    },
    palaeontologist: {
      title: "Paläontologe",
      note: "Volle Punktzahl. Du weißt, dass Stegosaurus weiter von T. rex entfernt ist als T. rex von dir.",
    },
  },

  questions: {
    "titanosaur-egg": {
      prompt: "Ein Titanosaurier wog bis zu 70 Tonnen. Wie groß war sein Ei?",
      fact:
        "Etwa 30 cm — so groß wie ein Fußball. Die Schale muss dünn genug bleiben, um Sauerstoff zum Embryo durchzulassen, deshalb stoßen Eier an eine harte physikalische Grenze, egal wie riesig das Elterntier ist.",
    },
    "stego-brain": {
      prompt: "Stegosaurus trug fünf Tonnen Körper. Was wog sein Gehirn?",
      fact:
        "Rund 80 g — eine Walnuss, die fünf Tonnen Tier steuert. Große Körper brauchen keine großen Gehirne.",
    },
    "velociraptor-weight": {
      prompt: "Wie viel wog ein echter Velociraptor?",
      fact:
        "Etwa 15 kg — truthahngroß und gefiedert. Die Filme nahmen die Proportionen von Deinonychus und behielten den griffigeren Namen.",
    },
    "trex-arm-lift": {
      prompt:
        "Die Ärmchen von T. rex sind der Running Gag des Mesozoikums. Wie viel konnte ein Arm heben?",
      fact:
        "Rund 200 kg pro Arm — ein Vielfaches dessen, was ein trainierter Mensch curlen kann. Die Arme waren kurz, nicht schwach.",
    },
    "smallest-dino": {
      prompt: "Wie lang war der kleinste bekannte Nicht-Vogel-Dinosaurier?",
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
        "Etwa 165 Millionen Jahre, von rund 230 bis vor 66 Millionen Jahren. Die Dinosaurier herrschten zweieinhalbmal so lange, wie seit ihrem Aussterben bis zu diesem Quiz vergangen ist.",
    },
    "spino-trex": {
      prompt: "Spinosaurus und T. rex hätten sich begegnen können.",
      fact:
        "Gleich doppelt ein Mythos. Verschiedene Kontinente — Afrika und Nordamerika — und rund 30 Millionen Jahre Abstand. Der Film hat sie trotzdem in denselben Sumpf gesteckt.",
    },
    "versus-cassowary": {
      prompt: "Was ist das?",
      description:
        "Zwei Beine, bis zu 1,8 m groß, eine 12 cm lange Dolchkralle an der Innenzehe, lebt im tropischen Regenwald, kann einen Menschen mit einem Tritt töten.",
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
        "Ein Ichthyosaurier — ein Meeresreptil, kein Dinosaurier. Dinosaurier sind nie ins Meer gegangen; jeder „Meeresdinosaurier“ gehört zu einer anderen Reptilienlinie.",
    },
    "versus-dunkleosteus": {
      prompt: "Was ist das?",
      description:
        "Ein gepanzerter Kopf so groß wie ein Kühlschrank, Knochenklingen statt Zähnen, Ozean, vor 380 Millionen Jahren.",
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
        "Phorusrhacos, ein „Terrorvogel“, jagte vor 15 bis 2 Millionen Jahren — zig Millionen Jahre nachdem die Nicht-Vogel-Dinosaurier verschwunden waren.",
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
        "Ein Flugsaurier — ein eigener Zweig der Reptilien. Er lebte neben den Dinosauriern und landet jedes Mal im selben Stickeralbum.",
    },
    pterodactyl: {
      prompt: "In der Paläontologie bedeutet „Pterodaktylus“:",
      options: {
        any: "Jedes fliegende Reptil des Mesozoikums",
        genus: "Pterodactylus — eine bestimmte, eher kleine Gattung",
        synonym: "Genau dasselbe wie „Flugsaurier“",
        invented: "Nichts — das Wort haben die Filme erfunden",
      },
      fact:
        "Pterodactylus ist eine einzige bescheidene Gattung mit etwa einem Meter Spannweite. Der große mit dem Kamm, den du dir vorstellst, ist Pteranodon.",
    },
    biggest: {
      prompt: "Der größte je beschriebene Dinosaurier:",
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
        "Mythos, und zwar ein viktorianischer. In den Hüftwirbeln gibt es einen Hohlraum, aber darin saß höchstwahrscheinlich ein Glykogenkörper — ein Energiespeicher wie bei Vögeln — und kein Nervengewebe.",
    },
    "polar-dinos": {
      prompt: "Dinosaurier lebten jenseits des Polarkreises, bei Schnee und monatelanger Dunkelheit.",
      fact:
        "Stimmt. Fossilien stammen aus Alaska, der Antarktis und dem Süden Australiens. Manche Arten waren an Kälte und ein halbes Jahr ohne Sonne angepasst.",
    },
  },
};

export default de;
