const path = require("path");

const correctGifts = [
  path.join(__dirname, "..", "public", "img", "correct", "bingo.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "thatiscorrect.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "true.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "yes.gif"),
  path.join(
    __dirname,
    "..",
    "public",
    "img",
    "correct",
    "this-is-my-secret.gif"
  ),
];

const incorrectGifts = [
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect.gif"),
  path.join(
    __dirname,
    "..",
    "public",
    "img",
    "incorrect",
    "incorrect-third.gif"
  ),
  path.join(
    __dirname,
    "..",
    "public",
    "img",
    "incorrect",
    "incorrect-second.gif"
  ),
  path.join(__dirname, "..", "public", "img", "incorrect", "im-groot.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "fail.gif"),
];

const clinicalCases = {
  1: {
    id: 1,
    case: "Un paciente de 55 años acude a la consulta con dolor abdominal intenso y fiebre. Después de realizar un examen físico y pruebas de laboratorio, se diagnostica una apendicitis aguda. Como cirujano general, debes determinar el tratamiento más adecuado para esta condición y brindar las recomendaciones correspondientes.",
    speciality: "Cirugía General",
    subSpeciality: "Cirugía General",
    book: "https://www.uandes.cl/wp-content/uploads/2020/02/Manual-de-Cirugia-UANDES.pdf",
    feedbackGeneral:
      "En este caso específico, el tratamiento más apropiado para la apendicitis aguda es la apendicectomía, que consiste en la extirpación quirúrgica del apéndice inflamado. La apendicectomía es el procedimiento estándar para el manejo de la apendicitis y ayuda a prevenir complicaciones graves. Los antibióticos pueden administrarse antes o después de la cirugía, pero no son suficientes como tratamiento único. Las recetas caseras no son efectivas en el tratamiento de la apendicitis aguda. Siempre es crucial buscar atención médica especializada en Cirugía General para garantizar un manejo adecuado de estacondició.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el tratamiento más adecuado para una fractura de hueso?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Apendicectomía. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Antibióticos",
            answer:
              "Respuesta incorrecta. Si bien los antibióticos pueden administrarse antes o después de la apendicectomía, no son suficientes como tratamiento único para la apendicitis aguda. La extirpación quirúrgica del apéndice es esencial para resolver la condición.",
          },
          {
            id: 2,
            option: "B",
            text: "Fisioterapia",
            answer:
              "Respuesta incorrecta. La fisioterapia no tiene un papel en el tratamiento de la apendicitis aguda. La apendicectomía es el enfoque principal para abordar esta condición.",
          },
          {
            id: 3,
            option: "C",
            text: "Apendicectomia",
            answer:
              "Respuesta correcta. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis.",
          },
          {
            id: 4,
            option: "D",
            text: "Receta casera",
            answer: "Respuesta incorrecta. Son mitos.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál es la complicación más común asociada a la apendicitis aguda no tratada?",
        correctAnswer: 3,
        feedbackQuestion:
          "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Peritonitis",
            answer:
              "Respuesta incorrecta. Los antibióticos no son el tratamiento principal para una fractura de hueso.",
          },
          {
            id: 2,
            option: "B",
            text: "Neumonía",
            answer:
              "Respuesta incorrecta. La fisioterapia puede ser útil durante la rehabilitación después de una fractura, pero no es el tratamiento inicial.",
          },
          {
            id: 3,
            option: "C",
            text: "Hipertensión arterial",
            answer:
              "Respuesta correcta. La inmovilización es un tratamiento común para las fracturas óseas, ya que ayuda a estabilizar y permitir la recuperación adecuada del hueso fracturado.",
          },
          {
            id: 4,
            option: "D",
            text: "Artritis",
            answer: "Respuesta incorrecta. Son mitos.",
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    case: "Un paciente de 60 años acude a la consulta de Cardiología con síntomas de fatiga, dificultad para respirar y retención de líquidos en las piernas. Después de realizar una evaluación cardiológica completa, se diagnostica con insuficiencia cardíaca congestiva. Como cardiólogo clínico, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    speciality: "Cardiología",
    subSpeciality: "Clinica",
    book: "https://infolibros.org/pdfview/5801-insuficiencia-cardiaca-aspectos-basicos-de-una-epidemia-en-aumento-dr-javier-e-pereira-rodriguez-lic-gina-rincon-gonzalez-y-lic-damaris-r-nino-serrato/",
    feedbackGeneral:
      "En este caso específico, la opción de tratamiento más adecuada para la fractura de hueso radio es la inmovilización. La inmovilización ayuda a estabilizar el hueso fracturado y promover su correcta recuperación. No se recomienda el uso de antibióticos como tratamiento principal para una fractura de hueso, y las recetas caseras no son efectivas. Siempre es esencial buscar atención médica especializada en Cirugía General para garantizar un manejo adecuado de las fracturas óseas.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el tratamiento de primera línea para la insuficiencia cardíaca congestiva?",
        correctAnswer: 1,
        feedbackQuestion:
          "En esta pregunta, la respuesta correcta es la opción A: Infarto de miocardio. Los síntomas de dolor en el pecho, opresión y dificultad para respirar son indicativos de un posible infarto de miocardio, una emergencia médica que requiere atención inmediata.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Diuréticos",
            answer:
              "Respuesta correcta. Los diuréticos son parte del tratamiento de primera línea en la insuficiencia cardíaca congestiva, ya que ayudan a controlar la retención de líquidos y reducir los síntomas de edema.",
          },
          {
            id: 2,
            option: "B",
            text: "Estatinas",
            answer:
              "Respuesta incorrecta. Las estatinas son medicamentos utilizados principalmente para reducir los niveles de colesterol en sangre y no son el tratamiento principal para la insuficiencia cardíaca congestiva.",
          },
          {
            id: 3,
            option: "C",
            text: "Angioplastia coronaria",
            answer:
              "Respuesta incorrecta. La angioplastia coronaria es un procedimiento utilizado para abrir las arterias coronarias obstruidas en el contexto de la enfermedad arterial coronaria y no es el tratamiento principal para la insuficiencia cardíaca congestiva.",
          },
          {
            id: 4,
            option: "D",
            text: "Terapia con aspirina",
            answer:
              "Respuesta incorrecta. Si bien la terapia con aspirina puede ser parte del tratamiento para ciertas condiciones cardíacas, no es el tratamiento de primera línea para la insuficiencia cardíaca congestiva.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál de las siguientes pruebas diagnósticas se utiliza comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la C. La RMC es una prueba diagnóstica utilizada comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca, ya que proporciona información detallada sobre la estructura y la función del corazón.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Radiografía de tórax",
            answer:
              "Respuesta incorrecta. Si bien la radiografía de tórax puede proporcionar información general sobre el tamaño y la forma del corazón, no es la prueba más adecuada para evaluar la función cardíaca en la insuficiencia cardíaca.",
          },
          {
            id: 2,
            option: "B",
            text: "Electrocardiograma (ECG)",
            answer:
              "Respuesta incorrecta. El ECG registra la actividad eléctrica del corazón y puede ayudar a detectar ciertos trastornos del ritmo cardíaco, pero no proporciona una evaluación completa de la función cardíaca en la insuficiencia cardíaca.",
          },
          {
            id: 3,
            option: "C",
            text: "Resonancia magnética cardíaca (RMC)",
            answer:
              "Respuesta correcta. La RMC es una prueba diagnóstica utilizada comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca, ya que proporciona información detallada sobre la estructura y la función del corazón.",
          },
          {
            id: 4,
            option: "D",
            text: "Prueba de esfuerzo",
            answer:
              "Respuesta incorrecta. La prueba de esfuerzo evalúa la respuesta del corazón durante el ejercicio físico y puede ayudar a detectar problemas de flujo sanguíneo, pero no proporciona una evaluación completa de la función cardíaca en la insuficiencia cardíaca.",
          },
        ],
      },
    ],
  },
  3: {
    id: 3,
    case: "Un paciente de 55 años acude a la consulta de Neurología con síntomas de debilidad en el brazo derecho y dificultad para hablar. Después de realizar una evaluación neurológica completa y pruebas de imagen, se diagnostica con un accidente cerebrovascular isquémico. Como neurólogo especializado en cirugía neurológica, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    speciality: "Neurología",
    subSpeciality: "Cirugia Neorología",
    book: "https://smeo.org.mx/wp-content/uploads/2022/01/3399AX161_Oncologia-Basica_SMEO.pdf",
    feedbackGeneral:
      "En este caso específico de accidente cerebrovascular isquémico, el tratamiento de primera línea puede incluir la administración de medicamentos trombolíticos o la realización de una trombectomía mecánica para restablecer el flujo sanguíneo cerebral. Además, se pueden recomendar terapias de rehabilitación, como fisioterapia y terapia del habla, para promover la recuperación funcional. El seguimiento cercano con el neurólogo especializado en cirugía neurológica es esencial para evaluar la respuesta al tratamiento y realizar intervenciones adicionales si es necesario.",
    question: [
      {
        id: 1,
        text: "¿Cuál es la causa más común de un accidente cerebrovascular isquémico?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Tumor cerebral. Entre las opciones proporcionadas, el tumor cerebral es la afección neurológica que con mayor frecuencia requiere una intervención quirúrgica para su manejo, que puede incluir la extirpación del tumor o técnicas de radioterapia.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Hemorragia cerebral",
            answer:
              "Respuesta incorrecta. La hemorragia cerebral, que implica la ruptura de un vaso sanguíneo en el cerebro, es una causa diferente de accidente cerebrovascular y se clasifica como un accidente cerebrovascular hemorrágico.",
          },
          {
            id: 2,
            option: "B",
            text: "Obstrucción de una arteria cerebral por un coágulo",
            answer:
              "Respuesta incorrecta. La causa más común de un accidente cerebrovascular isquémico es la obstrucción de una arteria cerebral por un coágulo, lo que se conoce como accidente cerebrovascular isquémico de origen trombótico o embólico.",
          },
          {
            id: 3,
            option: "C",
            text: "Tumor cerebral",
            answer:
              "Respuesta correcta. Entre las opciones proporcionadas, el tumor cerebral es la afección neurológica que con mayor frecuencia requiere una intervención quirúrgica para su manejo, que puede incluir la extirpación del tumor o técnicas de radioterapia.",
          },
          {
            id: 4,
            option: "D",
            text: "Infección del sistema nervioso central",
            answer:
              "Respuesta incorrecta. Las infecciones del sistema nervioso central, como la meningitis o la encefalitis, pueden tener consecuencias graves, pero no son la causa más común de un accidente cerebrovascular isquémico.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál es el objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo?",
        correctAnswer: 2,
        feedbackQuestion:
          "En esta pregunta, la respuesta correcta es la opción B: Restablecer el flujo sanguíneo cerebral. El objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo es restablecer el flujo sanguíneo cerebral lo antes posible para minimizar el daño cerebral y mejorar el pronóstico del paciente.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Reducir la presión intracraneal",
            answer:
              "Respuesta incorrecta. Si bien el control de la presión intracraneal puede ser importante en ciertos casos de accidente cerebrovascular, el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral.",
          },
          {
            id: 2,
            option: "B",
            text: "Restablecer el flujo sanguíneo cerebral",
            answer:
              "Respuesta correcta. El objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo es restablecer el flujo sanguíneo cerebral lo antes posible para minimizar el daño cerebral y mejorar el pronóstico del paciente.",
          },
          {
            id: 3,
            option: "C",
            text: "Prevenir futuros accidentes cerebrovasculares",
            answer:
              "Respuesta incorrecta. Si bien la prevención de futuros accidentes cerebrovasculares es importante, el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral.",
          },
          {
            id: 4,
            option: "D",
            text: "Controlar los síntomas de manera conservadora",
            answer:
              "Respuesta incorrecta. El control conservador de los síntomas puede ser parte del manejo a largo plazo del accidente cerebrovascular, pero el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral.",
          },
        ],
      },
    ],
  },
  4: {
    id: 4,
    case: "Un paciente de 4 años es llevado al hospital con síntomas de dolor abdominal agudo y distensión abdominal. Después de realizar una evaluación clínica y pruebas diagnósticas, se diagnostica con apendicitis aguda. Como cirujano pediátrico, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    speciality: "Cirugía Pediátrica",
    subSpeciality: "Cirugía Pediátrica",
    book: "http://librodigital.sangregorio.edu.ec/librosusgp/17756.pdf",
    feedbackGeneral:
      "En este caso específico de apendicitis aguda, el tratamiento habitual es la apendicectomía, que implica la extirpación quirúrgica del apéndice inflamado. La cirugía se realiza de manera urgente para evitar complicaciones como la perforación del apéndice. Además, se pueden administrar antibióticos para prevenir infecciones secundarias. Es importante un seguimiento cercano y el cumplimiento de las recomendaciones postoperatorias para una recuperación exitosa.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el tratamiento principal para la apendicitis aguda en niños?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Apendicectomía (extirpación quirúrgica del apéndice). La apendicectomía es el tratamiento principal para la apendicitis aguda en niños, ya que permite la eliminación del apéndice inflamado y previene la aparición de complicaciones graves.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Tratamiento con antibióticos solamente",
            answer:
              "Respuesta incorrecta. Si bien los antibióticos pueden usarse como parte del tratamiento de la apendicitis aguda, el tratamiento principal es la apendicectomía para eliminar el apéndice inflamado.",
          },
          {
            id: 2,
            option: "B",
            text: "Observación sin intervención quirúrgica",
            answer:
              "Respuesta incorrecta. La observación sin intervención quirúrgica no es apropiada para la apendicitis aguda en niños, ya que existe un alto riesgo de complicaciones como la perforación del apéndice.",
          },
          {
            id: 3,
            option: "C",
            text: "Apendicectomía (extirpación quirúrgica del apéndice)",
            answer:
              "Respuesta correcta. La apendicectomía es el tratamiento principal para la apendicitis aguda en niños, ya que permite la eliminación del apéndice inflamado y previene la aparición de complicaciones graves.",
          },
          {
            id: 4,
            option: "D",
            text: "Tratamiento con antiinflamatorios solamente",
            answer:
              "Respuesta incorrecta. Si bien los antiinflamatorios pueden ayudar a aliviar los síntomas, no son suficientes para tratar la apendicitis aguda de manera efectiva y requerirán la extirpación quirúrgica del apéndice.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál es la cirugía de reparación más común en recién nacidos con malformaciones congénitas del corazón?",
        correctAnswer: 3,
        feedbackQuestion:
          "En esta pregunta, la respuesta correcta es la opción B: Diabetes tipo 2. Los síntomas descritos son más consistentes con la diabetes tipo 2, una condición crónica que se caracteriza por resistencia a la insulina y niveles elevados de glucosa en sangre.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Apendicectomía",
            answer:
              "Respuesta incorrecta.  La apendicectomía es la extirpación del apéndice y no está relacionada con las malformaciones congénitas del corazón.",
          },
          {
            id: 2,
            option: "B",
            text: "Herniorrafia",
            answer:
              "Respuesta incorrecta. La herniorrafia es una cirugía utilizada para reparar una hernia y no se relaciona directamente con las malformaciones congénitas del corazón.",
          },
          {
            id: 3,
            option: "C",
            text: "Cierre de comunicación interventricular (CIV)",
            answer:
              "Respuesta correcta. El cierre de la comunicación interventricular es una cirugía común en recién nacidos con malformaciones congénitas del corazón que involucra la reparación de un agujero en la pared que separa los dos ventrículos del corazón.",
          },
          {
            id: 4,
            option: "D",
            text: "Orquiopexia",
            answer:
              "Respuesta incorrecta. La orquiopexia es una cirugía utilizada para corregir la posición de los testículos y no está relacionada con las malformaciones congénitas del corazón.",
          },
        ],
      },
    ],
  },
  5: {
    id: 5,
    case: "Un niño de 10 años es remitido a la consulta de Psiquiatría Infantil y del Adolescente debido a dificultades en el rendimiento escolar, inquietud constante y dificultades para mantener la atención. Después de una evaluación exhaustiva, se diagnostica con trastorno por déficit de atención e hiperactividad (TDAH). Como cirujano psiquiátrico especializado en Psiquiatría Infantil y del Adolescente, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    speciality: "Psiquiatría",
    subSpeciality: "Infantil y del Adolescente",
    book: "https://www.scmfh.es/Secretaria/Docs/Tomo_VIII_Patologia_Psiquiatrica.pdf",
    feedbackGeneral:
      "En este caso específico de TDAH, el tratamiento puede incluir intervenciones psicoeducativas, terapia conductual y, en algunos casos, medicación específica para el TDAH, como los estimulantes. Es importante brindar apoyo a los padres y educadores para implementar estrategias de manejo del comportamiento y establecer un entorno estructurado que favorezca el éxito académico y social del niño.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el tratamiento de primera línea recomendado para el TDAH en la población pediátrica?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Estimulantes. Los estimulantes, como el metilfenidato y la lisdexanfetamina, son el tratamiento de primera línea recomendado para el TDAH en la población pediátrica, ya que han demostrado ser eficaces para mejorar los síntomas de inatención, hiperactividad e impulsividad.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Terapia cognitivo-conductual",
            answer:
              "Respuesta incorrecta. Si bien la terapia cognitivo-conductual puede ser beneficiosa como parte del manejo del TDAH, no es el tratamiento de primera línea recomendado.",
          },
          {
            id: 2,
            option: "B",
            text: "Antidepresivos",
            answer:
              "Respuesta incorrecta. Los antidepresivos no son el tratamiento principal para el TDAH en la población pediátrica, ya que su eficacia es limitada en este trastorno específico.",
          },
          {
            id: 3,
            option: "C",
            text: "Estimulantes",
            answer:
              "Respuesta correcta. Los estimulantes, como el metilfenidato y la lisdexanfetamina, son el tratamiento de primera línea recomendado para el TDAH en la población pediátrica, ya que han demostrado ser eficaces para mejorar los síntomas de inatención, hiperactividad e impulsividad.",
          },
          {
            id: 4,
            option: "D",
            text: "Terapia ocupacional",
            answer:
              "Respuesta incorrecta. Si bien la terapia ocupacional puede tener un papel complementario en el manejo del TDAH, no es el tratamiento de primera línea recomendado.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál de las siguientes afirmaciones es cierta sobre el TDAH?",
        correctAnswer: 4,
        feedbackQuestion:
          "En esta pregunta, la respuesta correcta es la opción D: Antidepresivos inhibidores selectivos de la recaptación de serotonina (ISRS). Estos fármacos son considerados como el tratamiento de elección para la depresión mayor debido a su efectividad y perfil de efectos secundarios más favorable.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "El TDAH es exclusivamente un trastorno del comportamiento.",
            answer:
              "Respuesta incorrecta. El TDAH es un trastorno neuropsiquiátrico que involucra diferencias en la función cerebral y no se limita solo al comportamiento.",
          },
          {
            id: 2,
            option: "B",
            text: "El TDAH afecta solo a niños varones.",
            answer:
              "Respuesta incorrecta. Si bien el TDAH es más común en niños varones, también afecta a niñas y puede persistir en la edad adulta.",
          },
          {
            id: 3,
            option: "C",
            text: "El TDAH se caracteriza por síntomas de inatención, hiperactividad e impulsividad.",
            answer:
              "Respuesta incorrecta. El TDAH se caracteriza por síntomas de inatención, hiperactividad e impulsividad. El TDAH es un trastorno neurobiológico en el que los individuos presentan dificultades para mantener la atención, hiperactividad motora y comportamiento impulsivo.",
          },
          {
            id: 4,
            option: "D",
            text: "El TDAH se resuelve de forma espontánea en la adolescencia.",
            answer:
              "Respuesta correcta. Si bien algunos síntomas pueden disminuir con la edad, el TDAH puede persistir en la adolescencia y en la edad adulta, y puede requerir intervenciones continuas.",
          },
        ],
      },
      {
        id: 3,
        text: "¿Cuál de las siguientes opciones es un trastorno del espectro autista (TEA)?",
        correctAnswer: 4,
        feedbackQuestion:
          "La respuesta correcta es la opción D) Trastorno del lenguaje receptivo-expresivo. El trastorno del lenguaje receptivo-expresivo es un trastorno del desarrollo que se caracteriza por dificultades significativas en la adquisición y uso del lenguaje, pero no es considerado un trastorno del espectro autista.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Trastorno bipolar",
            answer:
              "Respuesta incorrecta. Los ansiolíticos no son el tratamiento principal para la depresión mayor.",
          },
          {
            id: 2,
            option: "B",
            text: "Trastorno de ansiedad generalizada",
            answer:
              "Respuesta incorrecta. Los antidepresivos tricíclicos pueden ser una opción de tratamiento, pero no son de primera elección debido a sus efectos secundarios.",
          },
          {
            id: 3,
            option: "C",
            text: "Trastorno de conducta oposicionista desafiante",
            answer:
              "Respuesta incorrecta. La terapia de electroconvulsiva puede ser utilizada en casos graves y resistentes de depresión, pero no es el tratamiento inicial.",
          },
          {
            id: 4,
            option: "D",
            text: "Trastorno del lenguaje receptivo-expresivo",
            answer:
              "Respuesta correcta. Trastorno del lenguaje receptivo-expresivo. El trastorno del lenguaje receptivo-expresivo es un trastorno del desarrollo que se caracteriza por dificultades significativas en la adquisición y uso del lenguaje, pero no es considerado un trastorno del espectro autista.",
          },
        ],
      },
    ],
  },
  6: {
    id: 6,
    case: "Un paciente adulto mayor es ingresado al hospital debido a un infarto agudo de miocardio. Durante su estancia, se presenta una complicación de delirium, con agitación, confusión y alucinaciones. Como cirujano psiquiátrico especializado en Psiquiatría de Enlace, debes evaluar y manejar la salud mental del paciente en el contexto de su enfermedad médica.",
    speciality: "Psiquiatría",
    subSpeciality: "Psiquiatría de Enlace",
    book: "https://www.scmfh.es/Secretaria/Docs/Tomo_VIII_Patologia_Psiquiatrica.pdf",
    feedbackGeneral:
      "En este caso específico de delirium asociado a un infarto agudo de miocardio, el enfoque principal es la estabilización médica y la identificación y tratamiento de los factores desencadenantes. La Psiquiatría de Enlace se centra en la evaluación y el manejo de las condiciones psiquiátricas que surgen en el contexto de enfermedades médicas y quirúrgicas, trabajando en colaboración con otros especialistas médicos para brindar atención integral al paciente.",
    question: [
      {
        id: 1,
        text: "¿Cuál es el objetivo principal de la Psiquiatría de Enlace?",
        correctAnswer: 3,
        feedbackQuestion:
          "La respuesta correcta es la opción C) Colaborar con otros especialistas médicos en el manejo de condiciones psiquiátricas asociadas a enfermedades médicas y quirúrgicas. El objetivo principal de la Psiquiatría de Enlace es trabajar en equipo con otros especialistas médicos para evaluar, diagnosticar y manejar las condiciones psiquiátricas que surgen en el contexto de enfermedades médicas y quirúrgicas.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "Evaluar y tratar exclusivamente trastornos mentales graves.",
            answer:
              "Respuesta incorrecta. Si bien la Psiquiatría de Enlace puede evaluar y tratar trastornos mentales graves, su enfoque principal es abordar las condiciones psiquiátricas asociadas a enfermedades médicas y quirúrgicas.",
          },
          {
            id: 2,
            option: "B",
            text: "Proporcionar terapia individual a pacientes hospitalizados.",
            answer:
              "Respuesta incorrecta. Si bien la Psiquiatría de Enlace puede proporcionar terapia individual a pacientes hospitalizados, su función va más allá de la terapia individual y se centra en la colaboración interdisciplinaria.",
          },
          {
            id: 3,
            option: "C",
            text: "Colaborar con otros especialistas médicos en el manejo de condiciones psiquiátricas asociadas a enfermedades médicas y quirúrgicas.",
            answer:
              "Respuesta correcta. Colaborar con otros especialistas médicos en el manejo de condiciones psiquiátricas asociadas a enfermedades médicas y quirúrgicas. El objetivo principal de la Psiquiatría de Enlace es trabajar en equipo con otros especialistas médicos para evaluar, diagnosticar y manejar las condiciones psiquiátricas que surgen en el contexto de enfermedades médicas y quirúrgicas.",
          },
          {
            id: 4,
            option: "D",
            text: "Brindar atención psiquiátrica en consultorios externos.",
            answer:
              "Respuesta incorrecta. Si bien la Psiquiatría de Enlace puede brindar atención psiquiátrica en consultorios externos, su enfoque principal es la evaluación y el manejo de condiciones psiquiátricas en el entorno hospitalario y de atención médica especializada.",
          },
        ],
      },
      {
        id: 2,
        text: "¿Cuál de las siguientes afirmaciones es cierta sobre el delirium?",
        correctAnswer: 4,
        feedbackQuestion:
          "En esta pregunta la respuesta correcta es D.Las personas con trastorno límite de la personalidad suelen tener relaciones intensas y volátiles, y pueden tener miedo de ser abandonadas. Este patrón de comportamiento puede hacer que sea difícil para ellas mantener relaciones estables a largo plazo.",
        answers: [
          {
            id: 1,
            option: "A",
            text: "El delirium es una condición crónica que se desarrolla gradualmente.",
            answer:
              "Respuesta incorrecta. El delirium es una condición aguda que se desarrolla rápidamente y generalmente tiene una duración limitada.",
          },
          {
            id: 2,
            option: "B",
            text: "El delirium es una condición psiquiátrica primaria.",
            answer:
              "Respuesta incorrecta.  Si bien el delirium puede tener manifestaciones psiquiátricas, es una condición médica y no se considera una condición psiquiátrica primaria.",
          },
          {
            id: 3,
            option: "C",
            text: "El delirium se caracteriza por una alteración aguda de la conciencia y la atención.",
            answer:
              "Respuesta incorrecta. El delirium se caracteriza por una alteración aguda de la conciencia y la atención. El delirium es un estado confusional agudo que se caracteriza por una alteración de la conciencia y la atención, junto con cambios en la cognición, la percepción y el comportamiento.",
          },
          {
            id: 4,
            option: "D",
            text: "El delirium es causado exclusivamente por factores psicológicos.",
            answer:
              "Respuesta correcta. El delirium puede tener múltiples causas, incluyendo factores médicos, como enfermedades, infecciones o desequilibrios metabólicos.",
          },
        ],
      },
    ],
  },
};

module.exports = { correctGifts, incorrectGifts, clinicalCases };
