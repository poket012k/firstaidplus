export type LessonCategory = {
  slug: string;
  title: string;
  level: number;
  icon: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
};

export const lessonCategories: LessonCategory[] = [
  {
    slug: "first-aid-kit",
    title: "Medicines & Equipment in a First Aid Kit",
    level: 1,
    icon: "🧰",
    summary: "Know what belongs in every first aid kit and how each item is used.",
    sections: [
      {
        heading: "Essential equipment",
        body: [
          "Sterile gauze pads, roller bandages, triangular bandages and adhesive plasters of various sizes.",
          "Scissors, tweezers, safety pins, disposable gloves, CPR face shield and a digital thermometer.",
          "Instant cold pack, eye-wash solution, splints and a torch with spare batteries.",
        ],
      },
      {
        heading: "Common medicines",
        body: [
          "Antiseptic solution (e.g. povidone-iodine) for cleaning wounds.",
          "Antiseptic cream and burn gel for minor burns and abrasions.",
          "Oral rehydration salts, paracetamol and antihistamine tablets — only use if trained and per local rules.",
        ],
      },
      {
        heading: "Maintenance",
        body: [
          "Check the kit monthly. Replace expired medicines and used items immediately.",
          "Store in a cool, dry, clearly labelled location known to everyone in the household or workplace.",
        ],
      },
    ],
    quiz: [
      { question: "Which item is NOT typically in a first aid kit?", options: ["Sterile gauze", "Power drill", "Triangular bandage", "Disposable gloves"], answer: 1 },
      { question: "How often should a first aid kit be checked?", options: ["Once a year", "Every 5 years", "Monthly", "Only when used"], answer: 2 },
      { question: "What is povidone-iodine used for?", options: ["Stop heart attack", "Clean wounds", "Treat fractures", "Cool burns"], answer: 1 },
    ],
  },
  {
    slug: "human-body",
    title: "Human Body Structure",
    level: 2,
    icon: "🫀",
    summary: "Basic anatomy & physiology a first aider must understand.",
    sections: [
      { heading: "Major systems", body: ["Skeletal system: 206 bones giving shape and protecting organs.", "Circulatory system: heart, blood and vessels delivering oxygen.", "Respiratory system: airway, lungs and diaphragm enabling breathing.", "Nervous system: brain, spinal cord and nerves controlling the body."] },
      { heading: "Vital signs", body: ["Normal pulse: 60–100 beats/min in adults.", "Normal breathing: 12–20 breaths/min in adults.", "Normal temperature: ~36.5–37.5°C."] },
    ],
    quiz: [
      { question: "How many bones are in the adult human body?", options: ["106", "206", "306", "406"], answer: 1 },
      { question: "Normal adult pulse range is:", options: ["20–40", "40–60", "60–100", "100–140"], answer: 2 },
    ],
  },
  {
    slug: "manlifting",
    title: "Manlifting & Casualty Movement",
    level: 3,
    icon: "🤝",
    summary: "Safely move a casualty when staying put is dangerous.",
    sections: [
      { heading: "Golden rule", body: ["Do NOT move a casualty unless there is immediate danger or movement is essential for treatment."] },
      { heading: "Common techniques", body: ["Human crutch — for a conscious casualty who can walk with support.", "Cradle / pick-a-back — for light casualties.", "Two-handed seat & four-handed seat — two rescuers carrying a conscious casualty.", "Blanket lift / fireman's lift — for unconscious casualties when no stretcher is available."] },
      { heading: "Lifting safely", body: ["Bend at the knees, keep the back straight, keep the load close to the body, and lift with the legs."] },
    ],
    quiz: [
      { question: "When should you move a casualty?", options: ["Always", "Only when in immediate danger or treatment requires it", "Never", "When they ask"], answer: 1 },
      { question: "Which lift uses two rescuers and is for a conscious casualty?", options: ["Fireman's lift", "Cradle", "Four-handed seat", "Blanket lift"], answer: 2 },
    ],
  },
  {
    slug: "bandaging",
    title: "Bandaging",
    level: 4,
    icon: "🩹",
    summary: "Apply bandages to control bleeding, support injuries and hold dressings.",
    sections: [
      { heading: "Types of bandage", body: ["Roller bandage — secures dressings and supports limbs.", "Triangular bandage — used as a sling or broad/narrow bandage.", "Tubular bandage — supports joints like ankles or fingers."] },
      { heading: "General rules", body: ["Apply firmly enough to control bleeding but not so tight as to cut off circulation.", "Check fingertips/toes for warmth and colour every 10 minutes.", "Tie knots away from the wound and on the uninjured side."] },
    ],
    quiz: [
      { question: "How tight should a bandage be?", options: ["As tight as possible", "Loose", "Firm but not cutting circulation", "Doesn't matter"], answer: 2 },
      { question: "How often check circulation below a bandage?", options: ["Every 10 min", "Every hour", "Once a day", "Never"], answer: 0 },
    ],
  },
  {
    slug: "fracture",
    title: "Fractures",
    level: 5,
    icon: "🦴",
    summary: "Recognise and immobilise broken bones.",
    sections: [
      { heading: "Signs & symptoms", body: ["Pain, swelling, deformity, inability to move the part, grating sound (crepitus), exposed bone in open fractures."] },
      { heading: "Treatment", body: ["Steady and support the injured part with your hands.", "Immobilise with a splint or by tying to an uninjured body part.", "Treat for shock and arrange transport to hospital.", "Do NOT try to push back protruding bones — cover with a sterile dressing."] },
    ],
    quiz: [
      { question: "What should you NEVER do with an open fracture?", options: ["Cover the wound", "Push the bone back", "Call for help", "Treat for shock"], answer: 1 },
      { question: "Crepitus refers to:", options: ["Bleeding", "Grating sound from broken bone ends", "Swelling", "Bruising"], answer: 1 },
    ],
  },
  {
    slug: "shock",
    title: "Shock",
    level: 6,
    icon: "💔",
    summary: "A life-threatening drop in circulation requiring urgent action.",
    sections: [
      { heading: "Causes", body: ["Severe bleeding, burns, heart attack, severe allergic reaction, fluid loss from vomiting/diarrhoea."] },
      { heading: "Signs", body: ["Pale, cold, clammy skin; rapid weak pulse; rapid shallow breathing; thirst; restlessness; eventual unconsciousness."] },
      { heading: "Treatment", body: ["Treat the cause (e.g. stop bleeding).", "Lay the casualty down and raise their legs ~30 cm.", "Loosen tight clothing and keep them warm with a blanket.", "Do NOT give food or drink. Call emergency services."] },
    ],
    quiz: [
      { question: "Should you give a shock casualty water?", options: ["Yes, plenty", "No", "Only if conscious", "Only warm water"], answer: 1 },
      { question: "Correct position for a shock casualty:", options: ["Standing", "Lying with legs raised", "Sitting up", "Face down"], answer: 1 },
    ],
  },
  {
    slug: "wounds-bleeding",
    title: "Wounds & Bleeding",
    level: 7,
    icon: "🩸",
    summary: "Control external bleeding and care for wounds.",
    sections: [
      { heading: "Steps to control bleeding", body: ["Apply direct pressure with a sterile dressing.", "Elevate the injured limb above heart level if possible.", "Apply a pressure bandage; if blood seeps through, add another on top — do not remove the first.", "Treat for shock and seek medical help."] },
      { heading: "Embedded objects", body: ["Do NOT remove. Pad around the object and bandage without pressing on it."] },
    ],
    quiz: [
      { question: "First action for severe bleeding:", options: ["Apply tourniquet", "Direct pressure", "Give water", "Run cold tap"], answer: 1 },
      { question: "Embedded object in wound — you should:", options: ["Pull it out", "Pad around it", "Push it deeper", "Ignore it"], answer: 1 },
    ],
  },
  {
    slug: "animal-bites",
    title: "Animal Bites",
    level: 8,
    icon: "🐕",
    summary: "Manage bites to prevent infection and disease transmission.",
    sections: [
      { heading: "General care", body: ["Wash the wound with soap and running water for at least 5 minutes.", "Apply antiseptic and cover with a sterile dressing.", "Seek medical help — rabies and tetanus prevention may be needed."] },
      { heading: "Snake bites", body: ["Keep the casualty still and calm. Immobilise the bitten limb at heart level.", "Do NOT cut the wound, suck the venom, or apply ice.", "Get to hospital immediately."] },
    ],
    quiz: [
      { question: "Wash an animal bite for at least:", options: ["10 sec", "1 min", "5 min", "30 min"], answer: 2 },
      { question: "For a snake bite you should:", options: ["Suck the venom", "Cut the wound", "Keep casualty still and seek hospital", "Apply ice"], answer: 2 },
    ],
  },
  {
    slug: "muscle-injuries",
    title: "Muscle Injuries",
    level: 9,
    icon: "💪",
    summary: "Strains, sprains, cramps and dislocations.",
    sections: [
      { heading: "RICE method", body: ["Rest the injured part.", "Ice — apply a cold pack wrapped in cloth for up to 20 min.", "Compression with an elastic bandage.", "Elevation above heart level."] },
      { heading: "Cramps", body: ["Stretch and gently massage the affected muscle. Drink water with electrolytes."] },
    ],
    quiz: [
      { question: "RICE stands for:", options: ["Run, Ice, Cool, Eat", "Rest, Ice, Compression, Elevation", "Rub, Inject, Cover, Elevate", "Rest, Inhale, Compress, Eat"], answer: 1 },
      { question: "Max time for a cold pack:", options: ["5 min", "20 min", "1 hour", "All day"], answer: 1 },
    ],
  },
  {
    slug: "environmental",
    title: "Environmental Injuries",
    level: 10,
    icon: "🌡️",
    summary: "Heat, cold, burns and drowning emergencies.",
    sections: [
      { heading: "Burns", body: ["Cool the burn with running water for at least 20 minutes.", "Cover loosely with cling film or a clean non-fluffy cloth.", "Do NOT apply butter, ice or break blisters."] },
      { heading: "Heat stroke", body: ["Move to a cool place, remove outer clothing, sponge with cool water and fan. Call emergency services."] },
      { heading: "Hypothermia", body: ["Move to shelter, replace wet clothes, wrap in blankets, give warm sweet drinks if conscious."] },
    ],
    quiz: [
      { question: "Cool a burn for at least:", options: ["1 min", "5 min", "20 min", "1 hour"], answer: 2 },
      { question: "What should you NOT put on a burn?", options: ["Cling film", "Cool water", "Butter", "Clean cloth"], answer: 2 },
    ],
  },
  {
    slug: "trauma",
    title: "Trauma Cases",
    level: 11,
    icon: "🚑",
    summary: "Head, spinal, chest and abdominal injuries.",
    sections: [
      { heading: "Head injury", body: ["Watch for unconsciousness, vomiting, unequal pupils or clear fluid from ears/nose. Keep casualty still and call for help."] },
      { heading: "Suspected spinal injury", body: ["Do NOT move the casualty. Support the head in the position found and wait for paramedics."] },
      { heading: "Chest injury", body: ["Sit the casualty up leaning toward the injured side to help the uninjured lung work."] },
    ],
    quiz: [
      { question: "Suspected spinal injury — you should:", options: ["Roll them over", "Sit them up", "Keep them still", "Carry them out"], answer: 2 },
      { question: "A chest injury casualty should lean toward:", options: ["Injured side", "Uninjured side", "Forward", "Backward"], answer: 0 },
    ],
  },
  {
    slug: "medical-emergencies",
    title: "Medical Emergencies",
    level: 12,
    icon: "⚕️",
    summary: "Heart attack, stroke, seizures, asthma, anaphylaxis.",
    sections: [
      { heading: "Heart attack", body: ["Sit casualty in W-position (half-sitting, knees bent). Loosen tight clothing. Call ambulance. Give 300 mg aspirin to chew if not allergic."] },
      { heading: "Stroke — FAST", body: ["Face drooping, Arm weakness, Speech difficulty, Time to call emergency services."] },
      { heading: "Seizure", body: ["Protect from injury, cushion the head, do NOT restrain or put anything in the mouth. Time the seizure."] },
    ],
    quiz: [
      { question: "FAST is used to recognise:", options: ["Heart attack", "Stroke", "Seizure", "Choking"], answer: 1 },
      { question: "During a seizure you should:", options: ["Hold them down", "Put a spoon in mouth", "Cushion the head", "Pour water"], answer: 2 },
    ],
  },
  {
    slug: "cpr",
    title: "Cardiopulmonary Resuscitation (CPR)",
    level: 13,
    icon: "❤️‍🩹",
    summary: "Restart circulation when breathing and heartbeat have stopped.",
    sections: [
      { heading: "DRSABCD", body: ["Danger — check the scene is safe.", "Response — tap and shout.", "Send for help / call ambulance.", "Airway — open with head-tilt chin-lift.", "Breathing — look, listen, feel for 10 sec.", "CPR — 30 compressions : 2 breaths.", "Defibrillation — attach AED as soon as available."] },
      { heading: "Compressions", body: ["Centre of chest, depth 5–6 cm, rate 100–120 per minute. Allow full recoil.", "Continue until help arrives, the casualty recovers, or you are physically unable to continue."] },
    ],
    quiz: [
      { question: "CPR ratio (adult):", options: ["15:2", "30:2", "5:1", "10:1"], answer: 1 },
      { question: "Compression rate per minute:", options: ["40–60", "60–80", "100–120", "150–180"], answer: 2 },
      { question: "DRSABCD — 'D' first stands for:", options: ["Defibrillation", "Drugs", "Danger", "Diagnosis"], answer: 2 },
    ],
  },
];
