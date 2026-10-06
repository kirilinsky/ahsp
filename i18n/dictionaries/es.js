// Keys mirror en.js; anything missing falls back to English key by key
// (i18n/index.js). The brand line stays English everywhere: AHSP is its
// acronym.

const es = {
  meta: {
    title: "AHSP — are here some pteryx?",
    description:
      "Un quiz sobre dinosaurios, y sobre todo lo que la gente mete en el saco de los dinosaurios por error.",
    sharedTitle: "{score} de {total} — {rank}",
    sharedDescription:
      "Así le fue a alguien en AHSP, el quiz sobre los dinosaurios que el cine nunca te enseñó. ¿Lo superas?",
  },
  cover: {
    kicker: "Cuaderno de campo",
    title: "Are here some pteryx?",
    subtitle:
      "Ocho preguntas sobre el mundo de hace millones de años. Casi todo lo que sabes de los dinosaurios se lo inventó Hollywood.",
    start: "Abrir el cuaderno",
    meta: "8 preguntas · unos 4 minutos",
    // Shown when the visit came through a shared result link.
    challenge: "Alguien sacó {score} de {total} — {rank}. Te toca.",
  },
  ui: {
    question: "Pregunta",
    of: "de",
    progress: "Pregunta {current} de {total}",
    check: "Comprobar",
    next: "Siguiente",
    seeResult: "Ver el veredicto",
    restart: "Empezar de nuevo",
    yourAnswer: "Tu respuesta",
    correctAnswer: "En realidad",
    language: "Idioma",
    theme: "Cambiar tema claro / oscuro",
    true: "Verdad",
    myth: "Mito",
    correctLabel: "Correcto",
    wrongLabel: "No del todo",
    close: "Casi",
    off: "Lejos",
  },
  eras: {
    cenozoic: "Cenozoico",
    cretaceous: "Cretácico",
    jurassic: "Jurásico",
    triassic: "Triásico",
  },
  units: {
    cm: "{value} cm",
    g: "{value} g",
    kg: "{value} kg",
    Ma: "{value} Ma",
    Myr: "{value} millones de años",
  },
  result: {
    kicker: "Veredicto",
    scoreLine: "{score} de {total}",
    restart: "Otra vez",
    share: {
      label: "Compartir el veredicto",
      text: "{score} de {total} en AHSP — {rank}.",
      action: "Compartir en {network}",
      twitter: "X",
      telegram: "Telegram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  ranks: {
    filmSchool: {
      title: "Graduado de Jurassic Park",
      note: "Todo lo que sabes viene del cine. La buena noticia: casi nada es cierto, así que tienes mucho margen de mejora.",
    },
    giftShop: {
      title: "Tienda del museo",
      note: "Tienes los dinosaurios de plástico y sabes más o menos quién vino antes. Con las fechas, todavía ciencia ficción.",
    },
    fieldAssistant: {
      title: "Ayudante de campo",
      note: "Sabes que un pterosaurio no es un dinosaurio, pero un ave sí. Con los millones de años todavía te lías.",
    },
    curator: {
      title: "Conservador",
      note: "No confundes las eras y una vela en el lomo no te engaña. Solo un fallo.",
    },
    palaeontologist: {
      title: "Paleontólogo",
      note: "Ni un fallo. Sabes que entre el estegosaurio y el T. rex pasó más tiempo que entre el T. rex y tú.",
    },
  },

  questions: {
    "titanosaur-egg": {
      prompt: "Un titanosaurio pesaba hasta 70 toneladas. ¿Qué tamaño tenía su huevo?",
      fact:
        "Unos 30 cm, como un balón de fútbol. La cáscara tiene que ser lo bastante fina para dejar pasar el oxígeno al embrión, así que los huevos chocan con un techo físico por enorme que sea el progenitor.",
    },
    "stego-brain": {
      prompt: "Un estegosaurio pesaba unas cinco toneladas. ¿Y cuánto pesaba su cerebro?",
      fact:
        "Unos 80 g: una nuez al mando de cinco toneladas de animal. Un cuerpo grande no necesita un cerebro grande.",
    },
    "velociraptor-weight": {
      prompt: "¿Cuánto pesaba un velocirraptor de verdad?",
      fact:
        "Unos 15 kg, del tamaño de un pavo y con plumas. En la pantalla en realidad se ve un deinonico; solo se quedaron con el nombre más pegadizo.",
    },
    "trex-arm-lift": {
      prompt:
        "Todo el mundo se ríe de los bracitos del T. rex. ¿Cuánto podía levantar uno de ellos?",
      fact:
        "Unos 200 kg por brazo, varias veces lo que levanta en curl un humano entrenado. Los brazos eran cortos, no débiles.",
    },
    "smallest-dino": {
      prompt: "¿Cuánto medía el dinosaurio más pequeño que conocemos (sin contar las aves)?",
      fact:
        "Unos 34 cm del pico a la cola: Anchiornis, del tamaño de una paloma, con plumas y todo.",
    },
    "trex-timeline": {
      prompt: "¿Cuándo vivió el Tyrannosaurus rex?",
      fact:
        "Hace entre 66 y 68 millones de años. El estegosaurio se extinguió unos 83 millones de años antes de que naciera el T. rex: el T. rex está más cerca de ti en el tiempo que del estegosaurio.",
    },
    "dino-era-length": {
      prompt: "¿Cuánto duró la era de los dinosaurios?",
      fact:
        "Unos 165 millones de años, de aproximadamente 230 a 66 Ma. Los dinosaurios reinaron dos veces y media más que todo el tiempo transcurrido desde su extinción hasta hoy.",
    },
    "spino-trex": {
      prompt: "El espinosaurio y el T. rex pudieron cruzarse.",
      fact:
        "Un mito por partida doble. Continentes distintos, África y Norteamérica, y unos 30 millones de años de diferencia. La película los metió en el mismo pantano de todos modos.",
    },
    "versus-cassowary": {
      prompt: "¿Qué es esto?",
      description:
        "Camina sobre dos patas, mide hasta 1,8 m y tiene una garra como un puñal de 12 cm en el dedo interior. Vive en la selva tropical y puede matar a una persona de una patada.",
      optionA: "Ave",
      optionB: "Dinosaurio",
      fact:
        "Un casuario: un ave enorme que no vuela, viva hoy en Australia y Nueva Guinea, y considerada a menudo el ave más peligrosa del planeta. Técnicamente, las aves son dinosaurios. Esta simplemente nunca se extinguió.",
    },
    "versus-ichthyosaur": {
      prompt: "¿Qué es esto?",
      description:
        "Con forma de delfín, cazaba amonites en mar abierto, respiraba aire y paría crías vivas.",
      optionA: "Reptil marino",
      optionB: "Dinosaurio",
      fact:
        "Un ictiosaurio: un reptil marino, no un dinosaurio. Los dinosaurios nunca se lanzaron al océano; cada «dinosaurio marino» es en realidad otro grupo de reptiles.",
    },
    "versus-dunkleosteus": {
      prompt: "¿Qué es esto?",
      description:
        "Una cabeza acorazada del tamaño de una nevera y cuchillas de hueso en lugar de dientes. Vivía en el océano hace 380 millones de años.",
      optionA: "Pez",
      optionB: "Dinosaurio",
      fact:
        "Dunkleosteus, un pez acorazado. Es casi 150 millones de años anterior a los primeros dinosaurios, que no aparecen hasta hace unos 240 Ma.",
    },
    "versus-terrorbird": {
      prompt: "¿Qué es esto?",
      description:
        "Un depredador de 2,5 m que no volaba, daba caza a presas del tamaño de un caballo y vivió después de la extinción de los dinosaurios.",
      optionA: "Ave",
      optionB: "Dinosaurio",
      fact:
        "Phorusrhacos, un «ave del terror», cazaba hace entre 15 y 2 millones de años, decenas de millones de años después de que se extinguieran los dinosaurios (salvo las aves).",
    },
    "versus-dimetrodon": {
      prompt: "¿Qué es esto?",
      description:
        "Una vela alta en el lomo y las patas abiertas hacia los lados. Nunca falta en una bolsa de dinosaurios de plástico.",
      optionA: "Dinosaurio",
      optionB: "Pariente de los mamíferos",
      fact:
        "Dimetrodon vivió unos 40 millones de años antes del primer dinosaurio, y en el árbol genealógico está más cerca de nosotros que de cualquier reptil.",
    },
    "versus-pterosaur": {
      prompt: "¿Qué es esto?",
      description:
        "Alas membranosas de hasta 10 m de envergadura; compartió el cielo del Mesozoico con los dinosaurios durante 150 millones de años.",
      optionA: "Dinosaurio volador",
      optionB: "Reptil volador, pero no dinosaurio",
      fact:
        "Un pterosaurio: un grupo de reptiles aparte. Vivió junto a los dinosaurios, por eso siempre lo meten en el mismo saco.",
    },
    pterodactyl: {
      prompt: "Para un paleontólogo, ¿qué es un «pterodáctilo»?",
      options: {
        any: "Cualquier reptil volador del Mesozoico",
        genus: "Solo un género concreto y bastante pequeño: Pterodactylus",
        synonym: "Lo mismo que un pterosaurio",
        invented: "Nada: la palabra viene del cine",
      },
      fact:
        "Pterodactylus es un solo género modesto, de un metro de envergadura. El grande con cresta que te imaginas es el pteranodon.",
    },
    biggest: {
      prompt: "¿Cuál es el dinosaurio más grande que se conoce?",
      options: {
        argentinosaurus: "Argentinosaurus",
        trex: "Tyrannosaurus rex",
        brachiosaurus: "Brachiosaurus",
        spinosaurus: "Spinosaurus",
      },
      fact:
        "Argentinosaurus: 30–35 m de largo y 65–75 toneladas. El T. rex apenas llega a una décima parte de ese peso.",
    },
    color: {
      prompt: "¿Qué sabemos de verdad sobre el color de los dinosaurios?",
      options: {
        nothing: "Nada: el color nunca se fosiliza",
        some: "En unas pocas especies lo sabemos, por estructuras de pigmento fosilizadas",
        allGreen: "Eran verdes y marrones, como lagartos grandes",
        everyone: "Podemos reconstruir el color de la mayoría de las especies",
      },
      fact:
        "Los melanosomas, cápsulas de pigmento, se conservan en algunos fósiles. Sinosauropteryx era pelirrojo con la cola a rayas, Anchiornis gris con una cresta roja y Borealopelta pardo rojizo con el vientre claro.",
    },
    "stego-second-brain": {
      prompt: "El estegosaurio tenía un segundo cerebro en la cadera.",
      fact:
        "Un mito del siglo XIX. Hay una cavidad en las vértebras de la cadera, pero lo más probable es que albergara un cuerpo de glucógeno, una reserva de energía como la de las aves, y no tejido nervioso.",
    },
    "polar-dinos": {
      prompt: "Hubo dinosaurios más allá del círculo polar, entre nieve y meses de oscuridad.",
      fact:
        "Verdad. Hay fósiles en Alaska, la Antártida y el sur de Australia. Algunas especies estaban adaptadas al frío y a medio año sin sol.",
    },
  },
};

export default es;
