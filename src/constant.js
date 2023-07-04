const path = require("path");

const correctGifts = [
  path.join(__dirname, "..", "public", "img", "correct", "bingo.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "thatiscorrect.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "true.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "yes.gif"),
  path.join(__dirname, "..", "public", "img", "correct", "this-is-my-secret.gif"),
];

const incorrectGifts = [
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect-third.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "incorrect-second.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "im-groot.gif"),
  path.join(__dirname, "..", "public", "img", "incorrect", "fail.gif"),
];

const clinicalCases = {
  "1": {
    "id": 1,
    "case": "Un paciente de 55 años acude a la consulta con dolor abdominal intenso y fiebre. Después de realizar un examen físico y pruebas de laboratorio, se diagnostica una apendicitis aguda. Como cirujano general, debes determinar el tratamiento más adecuado para esta condición y brindar las recomendaciones correspondientes.",
    "speciality": "Cirugía General",
    "subSpeciality": "Cirugía General",
    "book": "https://www.uandes.cl/wp-content/uploads/2020/02/Manual-de-Cirugia-UANDES.pdf",
    "feedbackGeneral": "En este caso específico, el tratamiento más apropiado para la apendicitis aguda es la apendicectomía, que consiste en la extirpación quirúrgica del apéndice inflamado. La apendicectomía es el procedimiento estándar para el manejo de la apendicitis y ayuda a prevenir complicaciones graves. Los antibióticos pueden administrarse antes o después de la cirugía, pero no son suficientes como tratamiento único. Las recetas caseras no son efectivas en el tratamiento de la apendicitis aguda. Siempre es crucial buscar atención médica especializada en Cirugía General para garantizar un manejo adecuado de esta condición.",
    "question": [
      {
        "id": 1,
        "text": "¿Cuál es el tratamiento más adecuado para una fractura de hueso?",
        "correctAnswer": 3,
        "feedbackQuestion": "La respuesta correcta es la opción C) Apendicectomía. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Antibióticos",
            "answer": "Respuesta incorrecta. Si bien los antibióticos pueden administrarse antes o después de la apendicectomía, no son suficientes como tratamiento único para la apendicitis aguda. La extirpación quirúrgica del apéndice es esencial para resolver la condición."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Fisioterapia",
            "answer": "Respuesta incorrecta. La fisioterapia no tiene un papel en el tratamiento de la apendicitis aguda. La apendicectomía es el enfoque principal para abordar esta condición."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Apendicectomia",
            "answer": "Respuesta correcta. La apendicectomía es el tratamiento estándar para la apendicitis aguda, ya que implica la extirpación quirúrgica del apéndice inflamado. Esto ayuda a prevenir complicaciones graves asociadas con la apendicitis."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Receta casera",
            "answer": "Respuesta incorrecta. Son mitos."
          }
        ]
      },
      {
        "id": 2,
        "text": "¿Cuál es la complicación más común asociada a la apendicitis aguda no tratada?",
        "correctAnswer": 3,
        "feedbackQuestion": "En este pregunta, la respuesta correcta es la opción C: Inmovilización. La inmovilización es un tratamiento común y efectivo para las fracturas de hueso, ya que ayuda a estabilizar la lesión y promover la correcta recuperación del hueso fracturado.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Peritonitis",
            "answer": "Respuesta incorrecta. Los antibióticos no son el tratamiento principal para una fractura de hueso."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Neumonía",
            "answer": "Respuesta incorrecta. La fisioterapia puede ser útil durante la rehabilitación después de una fractura, pero no es el tratamiento inicial."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Hipertensión arterial",
            "answer": "Respuesta correcta. La inmovilización es un tratamiento común para las fracturas óseas, ya que ayuda a estabilizar y permitir la recuperación adecuada del hueso fracturado."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Artritis",
            "answer": "Respuesta incorrecta. Son mitos."
          }
        ]
      }
    ]
  },
  "2": {
    "id": 2,
    "case": "Un paciente de 60 años acude a la consulta de Cardiología con síntomas de fatiga, dificultad para respirar y retención de líquidos en las piernas. Después de realizar una evaluación cardiológica completa, se diagnostica con insuficiencia cardíaca congestiva. Como cardiólogo clínico, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    "speciality": "Cardiología",
    "subSpeciality": "Clinica",
    "book": "https://infolibros.org/pdfview/5801-insuficiencia-cardiaca-aspectos-basicos-de-una-epidemia-en-aumento-dr-javier-e-pereira-rodriguez-lic-gina-rincon-gonzalez-y-lic-damaris-r-nino-serrato/",
    "feedbackGeneral": "En este caso específico, la opción de tratamiento más adecuada para la fractura de hueso radio es la inmovilización. La inmovilización ayuda a estabilizar el hueso fracturado y promover su correcta recuperación. No se recomienda el uso de antibióticos como tratamiento principal para una fractura de hueso, y las recetas caseras no son efectivas. Siempre es esencial buscar atención médica especializada en Cirugía General para garantizar un manejo adecuado de las fracturas óseas.",
    "question": [
      {
        "id": 1,
        "text": "¿Cuál es el tratamiento de primera línea para la insuficiencia cardíaca congestiva?",
        "correctAnswer": 1,
        "feedbackQuestion": "En esta pregunta, la respuesta correcta es la opción A: Infarto de miocardio. Los síntomas de dolor en el pecho, opresión y dificultad para respirar son indicativos de un posible infarto de miocardio, una emergencia médica que requiere atención inmediata.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Diuréticos",
            "answer": "Respuesta correcta. Los diuréticos son parte del tratamiento de primera línea en la insuficiencia cardíaca congestiva, ya que ayudan a controlar la retención de líquidos y reducir los síntomas de edema."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Estatinas",
            "answer": "Respuesta incorrecta. Las estatinas son medicamentos utilizados principalmente para reducir los niveles de colesterol en sangre y no son el tratamiento principal para la insuficiencia cardíaca congestiva."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Angioplastia coronaria",
            "answer": "Respuesta incorrecta. La angioplastia coronaria es un procedimiento utilizado para abrir las arterias coronarias obstruidas en el contexto de la enfermedad arterial coronaria y no es el tratamiento principal para la insuficiencia cardíaca congestiva."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Terapia con aspirina",
            "answer": "Respuesta incorrecta. Si bien la terapia con aspirina puede ser parte del tratamiento para ciertas condiciones cardíacas, no es el tratamiento de primera línea para la insuficiencia cardíaca congestiva."
          }
        ]
      },
      {
        "id": 2,
        "text": "¿Cuál de las siguientes pruebas diagnósticas se utiliza comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca?",
        "correctAnswer": 3,
        "feedbackQuestion": "La respuesta correcta es la C. La RMC es una prueba diagnóstica utilizada comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca, ya que proporciona información detallada sobre la estructura y la función del corazón.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Radiografía de tórax",
            "answer": "Respuesta incorrecta. Si bien la radiografía de tórax puede proporcionar información general sobre el tamaño y la forma del corazón, no es la prueba más adecuada para evaluar la función cardíaca en la insuficiencia cardíaca."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Electrocardiograma (ECG)",
            "answer": "Respuesta incorrecta. El ECG registra la actividad eléctrica del corazón y puede ayudar a detectar ciertos trastornos del ritmo cardíaco, pero no proporciona una evaluación completa de la función cardíaca en la insuficiencia cardíaca."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Resonancia magnética cardíaca (RMC)",
            "answer": "Respuesta correcta. La RMC es una prueba diagnóstica utilizada comúnmente para evaluar la función cardíaca en la insuficiencia cardíaca, ya que proporciona información detallada sobre la estructura y la función del corazón."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Prueba de esfuerzo",
            "answer": "Respuesta incorrecta. La prueba de esfuerzo evalúa la respuesta del corazón durante el ejercicio físico y puede ayudar a detectar problemas de flujo sanguíneo, pero no proporciona una evaluación completa de la función cardíaca en la insuficiencia cardíaca."
          }
        ]
      }
    ]
  },
  "3": {
    "id": 3,
    "case": "Un paciente de 55 años acude a la consulta de Neurología con síntomas de debilidad en el brazo derecho y dificultad para hablar. Después de realizar una evaluación neurológica completa y pruebas de imagen, se diagnostica con un accidente cerebrovascular isquémico. Como neurólogo especializado en cirugía neurológica, debes determinar el tratamiento más adecuado y brindar las recomendaciones correspondientes.",
    "speciality": "Neurología",
    "subSpeciality": "Cirugia Neorología",
    "book": "https://smeo.org.mx/wp-content/uploads/2022/01/3399AX161_Oncologia-Basica_SMEO.pdf",
    "feedbackGeneral": "En este caso específico de accidente cerebrovascular isquémico, el tratamiento de primera línea puede incluir la administración de medicamentos trombolíticos o la realización de una trombectomía mecánica para restablecer el flujo sanguíneo cerebral. Además, se pueden recomendar terapias de rehabilitación, como fisioterapia y terapia del habla, para promover la recuperación funcional. El seguimiento cercano con el neurólogo especializado en cirugía neurológica es esencial para evaluar la respuesta al tratamiento y realizar intervenciones adicionales si es necesario.",
    "question": [
      {
        "id": 1,
        "text": "¿Cuál es la causa más común de un accidente cerebrovascular isquémico?",
        "correctAnswer": 3,
        "feedbackQuestion": "La respuesta correcta es la opción C) Tumor cerebral. Entre las opciones proporcionadas, el tumor cerebral es la afección neurológica que con mayor frecuencia requiere una intervención quirúrgica para su manejo, que puede incluir la extirpación del tumor o técnicas de radioterapia.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Hemorragia cerebral",
            "answer": "Respuesta incorrecta. La hemorragia cerebral, que implica la ruptura de un vaso sanguíneo en el cerebro, es una causa diferente de accidente cerebrovascular y se clasifica como un accidente cerebrovascular hemorrágico."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Obstrucción de una arteria cerebral por un coágulo",
            "answer": "Respuesta incorrecta. La causa más común de un accidente cerebrovascular isquémico es la obstrucción de una arteria cerebral por un coágulo, lo que se conoce como accidente cerebrovascular isquémico de origen trombótico o embólico."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Tumor cerebral",
            "answer": "Respuesta correcta. Entre las opciones proporcionadas, el tumor cerebral es la afección neurológica que con mayor frecuencia requiere una intervención quirúrgica para su manejo, que puede incluir la extirpación del tumor o técnicas de radioterapia."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Infección del sistema nervioso central",
            "answer": "Respuesta incorrecta. Las infecciones del sistema nervioso central, como la meningitis o la encefalitis, pueden tener consecuencias graves, pero no son la causa más común de un accidente cerebrovascular isquémico."
          }
        ]
      },
      {
        "id": 2,
        "text": "¿Cuál es el objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo?",
        "correctAnswer": 2,
        "feedbackQuestion": "En esta pregunta, la respuesta correcta es la opción B: Restablecer el flujo sanguíneo cerebral. El objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo es restablecer el flujo sanguíneo cerebral lo antes posible para minimizar el daño cerebral y mejorar el pronóstico del paciente.",
        "answers": [
          {
            "id": 1,
            "option": "A",
            "text": "Reducir la presión intracraneal",
            "answer": "Respuesta incorrecta. Si bien el control de la presión intracraneal puede ser importante en ciertos casos de accidente cerebrovascular, el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral."
          },
          {
            "id": 2,
            "option": "B",
            "text": "Restablecer el flujo sanguíneo cerebral",
            "answer": "Respuesta correcta. El objetivo principal del tratamiento del accidente cerebrovascular isquémico agudo es restablecer el flujo sanguíneo cerebral lo antes posible para minimizar el daño cerebral y mejorar el pronóstico del paciente."
          },
          {
            "id": 3,
            "option": "C",
            "text": "Prevenir futuros accidentes cerebrovasculares",
            "answer": "Respuesta incorrecta. Si bien la prevención de futuros accidentes cerebrovasculares es importante, el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral."
          },
          {
            "id": 4,
            "option": "D",
            "text": "Controlar los síntomas de manera conservadora",
            "answer": "Respuesta incorrecta. El control conservador de los síntomas puede ser parte del manejo a largo plazo del accidente cerebrovascular, pero el objetivo principal del tratamiento agudo es restablecer el flujo sanguíneo cerebral."
          }
        ]
      }
    ]
  }
}


module.exports = { correctGifts, incorrectGifts, clinicalCases };
