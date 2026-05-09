export type LessonCategory = {
  slug: string;
  title: string;
  level: number;
  icon: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
  sources?: { label: string; url: string }[];
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
    summary:
      "Know every medicine and piece of equipment in a standard BSMM first aid kit — what it looks like, how it is used, and when to reach for it.",
    sections: [
      {
        heading: "1. Dettol Solution",
        body: [
          "Characteristics: must be diluted with water before use; turns white once mixed with water; for EXTERNAL use only.",
          "Uses: cleans wounds, cuts, animal bites and insect stings by washing away dirt and bacteria from the surface of the skin.",
          "Eliminates germs around the injury so the wound can begin to heal without becoming infected.",
          "How to use: pour the diluted solution onto sterilised gauze or cotton, then gently dab (do not scrub) the wound from the centre outwards.",
        ],
      },
      {
        heading: "2. Alcohol Swab",
        body: [
          "Characteristics: small sachet laminated in paper (similar to a plaster wrapper); strong alcohol smell; stings sharply on contact with broken skin.",
          "Uses: a quick substitute for Dettol Solution when you need to clean a small area fast — e.g. before applying a plaster.",
          "Kills germs and bacteria effectively on the skin's surface, including around minor cuts and grazes.",
          "Also useful to wipe down tools (scissors, forceps) before using them on a casualty.",
        ],
      },
      {
        heading: "3. Saline Solution",
        body: [
          "Characteristics: clear, colourless liquid; does NOT need to be diluted; can be extremely painful when poured onto open wounds.",
          "Uses: only used when a wound has too much debris (sand, gravel, dirt) that ordinary cleaning cannot remove.",
          "Flushes out foreign material so the wound can be properly inspected, cleaned and dressed.",
          "Eliminates germs and acts as a substitute for Dettol Solution when stronger flushing is needed.",
        ],
      },
      {
        heading: "4. Yellow Solution",
        body: [
          "Characteristics: brownish-yellow liquid; normally applied AFTER Dettol Solution, never before.",
          "Uses: eliminates germs that remain after the wound has been cleaned with Dettol.",
          "Cleans and protects the wound by forming a thin antiseptic layer over the injured skin.",
          "Prevents further damage to the wound by reducing the risk of secondary infection while it heals.",
        ],
      },
      {
        heading: "5. Antiseptic Cream",
        body: [
          "Characteristics: white cream that acts as a protection coat over wounds and injuries; needs to be reapplied every 4–5 hours; should be applied on a piece of gauze, not directly with bare fingers.",
          "Uses: protects wounds, cuts, burns and fungal infections from dirt and bacteria.",
          "Keeps the area moist so the skin can heal without forming hard scabs that crack and re-open.",
          "How to use: squeeze a small amount onto sterilised gauze, lay the gauze over the cleaned wound, and secure with micropore tape or a bandage.",
        ],
      },
      {
        heading: "6. Mopiko",
        body: [
          "Characteristics: white cream in a small tube; light medicated smell.",
          "Uses: relieves itching and pain caused by insect bites such as mosquito, ant or sandfly bites.",
          "Helps stop the casualty from scratching the bite, which prevents the skin from breaking and getting infected.",
        ],
      },
      {
        heading: "7. Perskindol Spray (PR Spray)",
        body: [
          "Characteristics: aerosol spray that produces a cool feeling when sprayed onto a muscle injury.",
          "Uses: temporarily relieves pain from sprains and strains, commonly used so athletes can keep moving (e.g. continue a race) after a muscle injury.",
          "Important: it is only a pain reliever, NOT a cure for the injury. Not generally recommended because it can mask pain and cause the casualty to make the injury worse.",
          "How to use: shake the can, hold ~15 cm from the skin, spray briefly over the injured muscle. Avoid eyes, open wounds and broken skin.",
        ],
      },
      {
        heading: "8. Counterpain Cream",
        body: [
          "Characteristics: in cream form (the cream version of PR Spray); for EXTERNAL use only; ensure no water contact within an hour of application.",
          "Uses: temporarily relieves muscle aches and rheumatic pains, e.g. shoulder, neck or back stiffness after exercise.",
          "How to use: squeeze a small amount onto your gloved fingers, massage gently into the sore muscle until absorbed, then wash hands thoroughly.",
        ],
      },
      {
        heading: "9. Eye Mo",
        body: [
          "Characteristics: colourless solution in a small dropper bottle; the date of first usage MUST be recorded on the bottle or its box; can only be used for 30 days after opening.",
          "Uses: helps ease off minor irritation of the eye caused by dust, smoke, sweat or chlorine.",
          "How to use: tilt the casualty's head back, gently pull down the lower eyelid, and squeeze 1–2 drops into the eye. Do NOT touch the dropper to the eye.",
        ],
      },
      {
        heading: "10. Medicated Oil",
        body: [
          "Characteristics: transparent oil with a strong, sharp medicated scent.",
          "Uses: relieves giddiness, headache, blocked nose, cold symptoms and stomach ache.",
          "How to use: place a few drops on the palm, rub hands together to warm the oil, then massage onto the temples (for headache/giddiness), under the nose (for blocked nose) or over the abdomen (for stomach ache).",
        ],
      },
      {
        heading: "11. Plaster",
        body: [
          "Characteristics: soft material with excellent adhesive power and elasticity; ventilation holes keep skin breathable and comfortable.",
          "Uses: covers wounds and prevents infection by sealing out dirt and germs.",
          "Suitable for small cuts, grazes and blisters where a full bandage is unnecessary.",
          "How to use: clean and dry the wound first, peel the plaster, place the absorbent pad directly over the wound, and press the adhesive sides down firmly.",
        ],
      },
      {
        heading: "Equipment in the kit",
        body: [
          "1. Cotton Roll — used with antiseptic to clean around wounds and to pad bandages.",
          "2. Cotton Bud — for cleaning small or hard-to-reach areas (e.g. between fingers, around the nose).",
          "3. Sterilised Gauze — sterile pad placed directly on a wound to absorb blood and apply creams. Never reuse.",
          "4. Micropore Surgical Tape — gentle adhesive paper tape that secures gauze and dressings without irritating the skin.",
          "5. Plaster — covers small cuts and grazes (see medicine #11 above).",
          "6. Ice Pack — applied (wrapped in cloth) to sprains, bruises and bumps to reduce swelling and pain. Apply 10–15 minutes at a time.",
          "7. Splint — rigid support used to immobilise a suspected fracture or dislocation before moving the casualty.",
          "8. Triangular Bandage — versatile cloth used as a sling for arm injuries, a head dressing, or a broad bandage to secure splints.",
          "9. Roller Bandage — long stretchable bandage used to hold dressings in place, support sprains and apply pressure to control bleeding.",
          "10. Latex Glove — worn on both hands to protect the first aider and the casualty from cross-infection. Replace between casualties.",
          "11. Face Mask — worn over the nose and mouth to reduce the spread of droplets between the first aider and the casualty.",
          "12. Pocket Mask / Face Shield — placed over the casualty's mouth to give rescue breaths safely without direct mouth-to-mouth contact.",
          "13. Stainless Steel Scissors — for cutting bandages, tape and clothing away from an injury without snagging the wound.",
          "14. Forceps — used to remove small foreign objects (splinters, glass, ticks) from a wound.",
          "15. Safety Pins — secure the ends of triangular and roller bandages so they do not unravel.",
          "16. Notebook and Pencil — used to record the casualty's condition, vital signs (pulse, breathing, level of response) and treatment given so that the information can be handed over to medical professionals.",
        ],
      },
      {
        heading: "Kit care & safety reminders",
        body: [
          "Check the kit regularly and immediately replace any item that is used, damaged or expired.",
          "Keep medicines in their original labelled packaging; never mix solutions in unmarked bottles.",
          "Always wear latex gloves and a face mask when treating a casualty to protect both of you.",
          "Solutions like Dettol, Saline and Yellow Solution are for EXTERNAL use only — never swallow them.",
        ],
      },
      {
        heading: "Kit care & safety reminders",
        body: [
          "Check the kit regularly and immediately replace any item that is used, damaged or expired.",
          "Keep medicines in their original labelled packaging; never mix solutions in unmarked bottles.",
          "Wear gloves and a face mask whenever you treat a casualty to protect both of you.",
          "Solutions like Dettol, Saline and Yellow Solution are for EXTERNAL use only — never swallow them.",
        ],
      },
    ],
    sources: [
      { label: "BSMM Training Bureau — First Aid Kit (SL(Y)64 2025)", url: "https://www.bsmm.org.sg/" },
      { label: "American Red Cross — Anatomy of a First Aid Kit", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html" },
      { label: "NHS — What should I keep in my first aid kit?", url: "https://www.nhs.uk/common-health-questions/accidents-first-aid-and-treatments/what-should-i-keep-in-my-first-aid-kit/" },
    ],
    quiz: [
      { question: "Dettol Solution must be:", options: ["Used straight from the bottle", "Diluted with water before use", "Swallowed in small doses", "Mixed with alcohol"], answer: 1 },
      { question: "Which item is a quick substitute for Dettol that stings sharply and smells of alcohol?", options: ["Mopiko", "Alcohol Swab", "Eye Mo", "Yellow Solution"], answer: 1 },
      { question: "Yellow Solution is normally applied:", options: ["Before Dettol", "Instead of plaster", "After Dettol Solution", "Inside the eye"], answer: 2 },
      { question: "Antiseptic Cream should be reapplied roughly every:", options: ["30 minutes", "1 hour", "4–5 hours", "24 hours"], answer: 2 },
      { question: "Mopiko is mainly used for:", options: ["Muscle sprains", "Itching from insect bites", "Eye irritation", "Cleaning wounds"], answer: 1 },
      { question: "Perskindol (PR) Spray is used to:", options: ["Heal a fracture", "Temporarily relieve muscle pain", "Disinfect wounds", "Stop bleeding"], answer: 1 },
      { question: "After applying Counterpain Cream you should avoid water contact for at least:", options: ["5 minutes", "1 hour", "6 hours", "1 day"], answer: 1 },
      { question: "Once opened, Eye Mo can only be used for:", options: ["7 days", "30 days", "6 months", "1 year"], answer: 1 },
      { question: "Medicated Oil is suitable for relieving:", options: ["Broken bones", "Giddiness, headache, blocked nose and stomach ache", "Bleeding wounds", "Burns"], answer: 1 },
      { question: "Which equipment item is used to give rescue breaths safely?", options: ["Forceps", "Pocket Mask / Face Shield", "Safety Pin", "Cotton Bud"], answer: 1 },
      { question: "Saline Solution should mainly be used when:", options: ["A wound has a lot of debris", "The casualty is thirsty", "There is no bleeding", "Treating insect bites"], answer: 0 },
      { question: "Why are a notebook and pencil kept in the kit?", options: ["To draw the casualty", "To record condition, vital signs and treatment given", "To wedge open wounds", "They are not needed"], answer: 1 },
    ],
  },
  {
    slug: "human-body",
    title: "Human Body Structure",
    level: 2,
    icon: "🫀",
    summary:
      "Basic anatomy & physiology a first aider must understand. Reference values from the American Heart Association and Mayo Clinic.",
    sections: [
      {
        heading: "Major body systems",
        body: [
          "Skeletal system: 206 bones in the adult skeleton — gives shape, allows movement, and protects organs (skull, ribs, vertebral column).",
          "Muscular system: ~600 muscles enabling movement; the diaphragm is essential for breathing.",
          "Circulatory system: heart pumps ~5 L of blood/min at rest through arteries, capillaries and veins.",
          "Respiratory system: nose/mouth → trachea → bronchi → alveoli, where oxygen and CO₂ are exchanged.",
          "Nervous system: brain, spinal cord and peripheral nerves; controls all body functions and consciousness.",
        ],
      },
      {
        heading: "Normal vital signs (AHA / Mayo Clinic adult ranges)",
        body: [
          "Heart rate: 60–100 beats/min at rest. Athletes may be 40–60.",
          "Respiratory rate: 12–20 breaths/min.",
          "Body temperature: 36.1–37.2 °C (97–99 °F) measured orally.",
          "Blood pressure: around 120/80 mmHg; <90/60 may indicate shock; ≥180/120 is a hypertensive crisis.",
          "Oxygen saturation (SpO₂): 95–100% on room air.",
        ],
      },
      {
        heading: "Why this matters in first aid",
        body: [
          "Knowing normal values lets you identify abnormal — e.g. a pulse over 120 with cold clammy skin suggests shock.",
          "Understanding the airway path explains head-tilt chin-lift in CPR — it lifts the tongue off the back of the throat.",
          "Knowing where major arteries lie (carotid, brachial, femoral) tells you where to feel a pulse and where pressure points are most effective for bleeding control.",
        ],
      },
    ],
    sources: [
      { label: "American Heart Association — Vital Signs", url: "https://www.heart.org/" },
      { label: "Mayo Clinic — Vital signs (heart rate, blood pressure, temperature)", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/heart-rate/art-20045895" },
    ],
    quiz: [
      { question: "How many bones are in the adult human body?", options: ["106", "206", "306", "406"], answer: 1 },
      { question: "Normal adult resting pulse range is:", options: ["20–40", "40–60", "60–100", "100–140"], answer: 2 },
      { question: "Normal SpO₂ on room air is:", options: ["70–80%", "85–90%", "95–100%", "Always 100%"], answer: 2 },
    ],
  },
  {
    slug: "manlifting",
    title: "Manlifting & Casualty Movement",
    level: 3,
    icon: "🤝",
    summary:
      "Safely move a casualty when staying put is dangerous. Techniques from St John Ambulance and the Health & Safety Executive (HSE) manual handling guidance.",
    sections: [
      {
        heading: "Golden rule (St John Ambulance)",
        body: [
          "Do NOT move a casualty unless leaving them puts them in greater danger (fire, traffic, collapsing structure, drowning) or movement is essential to give life-saving treatment such as CPR on a hard surface.",
          "If you must move a suspected spinal-injury casualty, use the in-line stabilisation log-roll with at least 4 trained rescuers.",
        ],
      },
      {
        heading: "Common one- and two-rescuer techniques",
        body: [
          "Human crutch — conscious casualty who can bear weight on at least one leg; place their arm over your shoulder.",
          "Cradle / pick-a-back — for small or light conscious casualties.",
          "Drag methods (clothes drag, ankle drag, blanket drag) — fastest way for a single rescuer to move an unconscious casualty out of immediate danger over a short distance.",
          "Two-handed seat (for casualties who cannot use their arms) and four-handed seat (for those who can) — two rescuers, conscious casualty.",
          "Fore-and-aft carry — two rescuers, one at the head/shoulders and one at the knees, used when a chair-carry is not possible.",
        ],
      },
      {
        heading: "Safe lifting (HSE TILE principles)",
        body: [
          "Task — plan the lift, clear the route, decide who leads.",
          "Individual — only lift within your capacity; ask for help.",
          "Load — keep the casualty close to your body; support the head and trunk.",
          "Environment — check for slips, trips, sharp objects, hot surfaces.",
          "Bend at the knees and hips, keep the back straight, lift smoothly with the legs — never twist while lifting.",
        ],
      },
    ],
    sources: [
      { label: "St John Ambulance — Moving a casualty", url: "https://www.sja.org.uk/get-advice/first-aid-advice/" },
      { label: "HSE — Manual handling at work (INDG143)", url: "https://www.hse.gov.uk/pubns/indg143.htm" },
    ],
    quiz: [
      { question: "When should you move a casualty?", options: ["Always", "Only when in greater danger or treatment requires it", "Never", "When they ask"], answer: 1 },
      { question: "Which lift uses two rescuers and is for a conscious casualty who can use their arms?", options: ["Fireman's lift", "Cradle", "Four-handed seat", "Blanket drag"], answer: 2 },
      { question: "When lifting, you should:", options: ["Bend the back, keep legs straight", "Bend the knees, keep back straight", "Twist as you lift", "Hold the load away from your body"], answer: 1 },
    ],
  },
  {
    slug: "bandaging",
    title: "Bandaging",
    level: 4,
    icon: "🩹",
    summary:
      "Apply bandages to control bleeding, support injuries and hold dressings. Based on British Red Cross and St John Ambulance technique guides.",
    sections: [
      {
        heading: "Types of bandage and their uses",
        body: [
          "Roller bandage (conforming or crepe) — secures dressings and supports limbs; apply with the rolled head upward.",
          "Triangular bandage — folded broad (for limbs) or narrow (to secure splints), or used open as an arm sling or elevation sling.",
          "Tubular bandage — supports joints (ankle, knee) or holds dressings on fingers.",
          "Adhesive dressings (plasters) — for small clean cuts and abrasions.",
        ],
      },
      {
        heading: "Application principles",
        body: [
          "Wear disposable gloves whenever possible to protect both you and the casualty.",
          "Sit or lay the casualty down and support the injured part in the position it is to remain.",
          "Work from the inside of the limb outwards and from below the injury upward, so the rolled head is above the limb.",
          "Cover the dressing fully and extend the bandage at least 2.5 cm beyond it on all sides.",
          "Tie the knot over the dressing on the uninjured side using a reef knot (left-over-right, then right-over-left) — never over a joint or wound.",
        ],
      },
      {
        heading: "Checking circulation (CSM check)",
        body: [
          "Immediately after bandaging, check fingertips or toes beyond the bandage: press a nail bed for 2 seconds — colour should return within 2 seconds (capillary refill).",
          "Recheck Circulation, Sensation and Movement every 10 minutes.",
          "If the limb becomes pale, cold, blue, numb or tingly, loosen the bandage and reapply more loosely.",
        ],
      },
    ],
    sources: [
      { label: "British Red Cross — First aid skills (bandaging)", url: "https://www.redcross.org.uk/first-aid" },
      { label: "St John Ambulance — How to apply a bandage", url: "https://www.sja.org.uk/get-advice/first-aid-advice/" },
    ],
    quiz: [
      { question: "How tight should a bandage be?", options: ["As tight as possible", "Loose", "Firm but does not cut off circulation", "Doesn't matter"], answer: 2 },
      { question: "How often should you re-check circulation below a bandage?", options: ["Every 10 min", "Every hour", "Once a day", "Never"], answer: 0 },
      { question: "Capillary refill should return within:", options: ["2 seconds", "10 seconds", "30 seconds", "1 minute"], answer: 0 },
    ],
  },
  {
    slug: "fracture",
    title: "Fractures",
    level: 5,
    icon: "🦴",
    summary:
      "Recognise and immobilise broken bones. Based on Mayo Clinic and St John Ambulance fracture care guidelines.",
    sections: [
      {
        heading: "Types of fracture",
        body: [
          "Closed (simple) fracture — bone is broken but the skin is intact.",
          "Open (compound) fracture — bone breaks the skin or a wound leads down to the fracture; high infection risk.",
          "Greenstick fracture — bone bends and cracks (common in children).",
          "Comminuted fracture — bone is shattered into multiple fragments.",
        ],
      },
      {
        heading: "Signs & symptoms (the 6 Ps)",
        body: [
          "Pain at the site, worse on movement.",
          "Pallor — pale skin distal to the injury if circulation is impaired.",
          "Pulselessness below the injury (severe).",
          "Paraesthesia (pins and needles) or numbness.",
          "Paralysis or loss of movement.",
          "Plus deformity, swelling, bruising, and crepitus (a grating sound from broken bone ends).",
        ],
      },
      {
        heading: "First aid treatment",
        body: [
          "Tell the casualty to keep still. Steady and support the injured part with your hands above and below the fracture site.",
          "For open fractures: cover the wound with a sterile dressing and apply pressure around (not on) any protruding bone — never push the bone back.",
          "Immobilise the limb in the position found using padding, a splint, or by securing it to an uninjured body part (e.g. an injured leg to the other leg).",
          "Treat for shock: lay them down, raise the uninjured leg, keep them warm. Do NOT give food or drink in case surgery is needed.",
          "Call EMS (911 / 999 / 112). For suspected pelvis, hip, spine, skull or femur fractures, do not move the casualty unless absolutely necessary.",
        ],
      },
    ],
    sources: [
      { label: "Mayo Clinic — Fractures: First aid", url: "https://www.mayoclinic.org/first-aid/first-aid-fractures/basics/art-20056641" },
      { label: "St John Ambulance — Broken bones", url: "https://www.sja.org.uk/get-advice/first-aid-advice/bone-muscle-and-joint-injuries/broken-bone/" },
    ],
    quiz: [
      { question: "What should you NEVER do with an open fracture?", options: ["Cover the wound", "Push the bone back in", "Call for help", "Treat for shock"], answer: 1 },
      { question: "Crepitus refers to:", options: ["Bleeding", "A grating sound from broken bone ends", "Swelling", "Bruising"], answer: 1 },
      { question: "Why withhold food and drink from a fracture casualty?", options: ["To save supplies", "Surgery may be needed", "It causes pain", "It increases bleeding"], answer: 1 },
    ],
  },
  {
    slug: "shock",
    title: "Shock",
    level: 6,
    icon: "💔",
    summary:
      "A life-threatening drop in tissue perfusion requiring urgent action. Guidance from the American Red Cross and ERC.",
    sections: [
      {
        heading: "What shock is",
        body: [
          "Shock is a failure of the circulatory system to deliver enough oxygenated blood to the body's tissues.",
          "Common causes: severe internal or external bleeding (hypovolaemic), heart attack (cardiogenic), severe burns, severe vomiting/diarrhoea, severe allergic reaction (anaphylactic) or major infection (septic).",
          "Untreated shock progresses rapidly and is fatal — every minute counts.",
        ],
      },
      {
        heading: "Signs & symptoms (in order of progression)",
        body: [
          "Early: pale, cold, clammy/sweaty skin; rapid weak pulse; rapid shallow breathing; thirst; anxiety or restlessness.",
          "Later: grey-blue skin (especially lips and nail beds), nausea or vomiting, dizziness, confusion, weakness.",
          "Late: gasping for air ('air hunger'), unconsciousness, eventual cardiac arrest.",
        ],
      },
      {
        heading: "First aid treatment",
        body: [
          "Call EMS immediately (911 / 999 / 112).",
          "Treat the underlying cause if you can — control severe bleeding with direct pressure.",
          "Lay the casualty flat on their back. Raise and support the legs about 30 cm (12 in) above the level of the heart unless you suspect a leg, pelvis or spine fracture, head injury, or breathing difficulty.",
          "Loosen tight clothing at the neck, chest and waist. Cover with a blanket or coat to keep them warm — but do not overheat.",
          "Reassure them. Monitor breathing, pulse and level of response every 1–2 minutes.",
          "Do NOT give food, drink, alcohol or cigarettes; do not let them move unnecessarily; do not leave them alone (except briefly to call for help).",
          "If they become unresponsive and stop breathing normally, begin CPR.",
        ],
      },
    ],
    sources: [
      { label: "American Red Cross — Shock first aid", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/shock" },
      { label: "European Resuscitation Council — First Aid Guidelines 2021", url: "https://www.erc.edu/guidelines" },
    ],
    quiz: [
      { question: "Should you give a shock casualty water?", options: ["Yes, plenty", "No", "Only if conscious", "Only warm water"], answer: 1 },
      { question: "Correct position for a shock casualty (no fractures):", options: ["Standing", "Lying flat with legs raised ~30 cm", "Sitting up", "Face down"], answer: 1 },
      { question: "Which is an EARLY sign of shock?", options: ["Unconsciousness", "Cold clammy pale skin with rapid weak pulse", "Cardiac arrest", "Seizures"], answer: 1 },
    ],
  },
  {
    slug: "wounds-bleeding",
    title: "Wounds & Bleeding",
    level: 7,
    icon: "🩸",
    summary:
      "Control external bleeding and care for wounds. Based on the American College of Surgeons 'Stop the Bleed' programme.",
    sections: [
      {
        heading: "Types of wound",
        body: [
          "Incised (clean cut) — sharp edges, may bleed heavily.",
          "Lacerated — torn or ragged edges; greater tissue damage and infection risk.",
          "Abrasion (graze) — superficial scrape; high contamination risk.",
          "Puncture — small surface, deep penetration; risk of internal injury and tetanus.",
          "Avulsion — tissue is torn away; major bleeding likely.",
          "Amputation — body part completely separated; treat as life-threatening bleeding.",
        ],
      },
      {
        heading: "Severe bleeding — Stop the Bleed steps",
        body: [
          "1. Ensure scene safety and call EMS (911 / 999 / 112).",
          "2. Wear gloves if available. Expose the wound by removing or cutting clothing.",
          "3. Apply firm direct pressure with a sterile dressing or clean cloth — push hard, do not peek.",
          "4. If bleeding soaks through, add another dressing on top and keep pressing — do not remove the original dressing.",
          "5. If the limb is still bleeding heavily, apply a commercial tourniquet 5–8 cm (2–3 in) above the wound (never on a joint), tighten until bleeding stops, and write the time of application on the casualty.",
          "6. For deep wounds where a tourniquet cannot be used (neck, groin, armpit), pack the wound with gauze and apply firm pressure.",
          "7. Treat for shock and keep the casualty warm.",
        ],
      },
      {
        heading: "Embedded objects & amputations",
        body: [
          "Embedded object: Do NOT remove it — it may be plugging the wound. Apply pressure on either side of the object and build up padding around it before bandaging.",
          "Amputated part: wrap in clean, slightly damp gauze, place in a sealed plastic bag, and put that bag in another container with ice and water — never let the part touch ice directly.",
        ],
      },
      {
        heading: "Minor wounds",
        body: [
          "Wash your hands and put on gloves if available.",
          "Rinse the wound under clean running water for several minutes; clean around it with mild soap.",
          "Apply a thin layer of antibiotic ointment and cover with a sterile adhesive dressing.",
          "Watch for signs of infection over the next days: increasing pain, redness, swelling, pus, red streaks, or fever — seek medical care.",
          "Check tetanus vaccination status; a booster is generally needed every 10 years (or after 5 years for a dirty wound).",
        ],
      },
    ],
    sources: [
      { label: "Stop the Bleed — American College of Surgeons", url: "https://www.stopthebleed.org/" },
      { label: "Mayo Clinic — Cuts and scrapes: First aid", url: "https://www.mayoclinic.org/first-aid/first-aid-cuts/basics/art-20056711" },
    ],
    quiz: [
      { question: "First action for severe bleeding:", options: ["Apply tourniquet immediately", "Direct pressure with a dressing", "Give water", "Run cold tap"], answer: 1 },
      { question: "Embedded object in a wound — you should:", options: ["Pull it out", "Pad around it and bandage without pressing on it", "Push it deeper", "Ignore it"], answer: 1 },
      { question: "After applying a tourniquet you should:", options: ["Loosen it every 5 min", "Hide it under clothing", "Note the time of application on the casualty", "Remove it once bleeding slows"], answer: 2 },
    ],
  },
  {
    slug: "animal-bites",
    title: "Animal Bites",
    level: 8,
    icon: "🐕",
    summary:
      "Manage bites to prevent infection, rabies and tetanus. Guidance from the WHO and CDC.",
    sections: [
      {
        heading: "Mammal bites (dog, cat, human, bat)",
        body: [
          "Wash the wound thoroughly with plenty of soap and clean running water for at least 15 minutes — WHO category III (deep) wounds require this immediately.",
          "Apply an antiseptic such as povidone-iodine or 70% alcohol after washing.",
          "Control bleeding with direct pressure, then cover with a sterile dressing.",
          "Seek medical care for: any cat bite, deep dog bite, human bite, bites on the face/hands/joints, or any bite from a wild or unknown animal.",
          "Rabies post-exposure prophylaxis (vaccine ± immunoglobulin) is needed urgently for category II/III exposures, especially from dogs, cats, bats, foxes and monkeys in rabies-endemic areas.",
          "Tetanus booster if last dose >5 years ago.",
        ],
      },
      {
        heading: "Snake bites (WHO guidance)",
        body: [
          "Move the casualty away from the snake; try to remember its appearance for identification — but do NOT try to catch or kill it.",
          "Keep the casualty calm, still and lying down. Movement spreads venom faster.",
          "Immobilise the bitten limb with a splint, kept at heart level.",
          "For neurotoxic elapid bites (cobra, krait, mamba) the Australian Pressure Immobilisation Bandage may be used — a firm crepe bandage from the bite up the entire limb, then splinted.",
          "Remove rings, watches and tight clothing before swelling starts.",
          "Get to hospital for antivenom as quickly as possible.",
          "Do NOT cut the wound, suck the venom, apply ice, give alcohol, use a tourniquet, or apply electric shock.",
        ],
      },
      {
        heading: "Insect stings & ticks",
        body: [
          "Bee sting — scrape the sting out sideways with a card edge; do not squeeze with tweezers.",
          "Wasp/hornet sting — there is no sting left in the skin. Wash and apply a cold pack.",
          "Watch for anaphylaxis (swelling of face/throat, wheezing, collapse) — use the casualty's adrenaline auto-injector (e.g. EpiPen) and call EMS.",
          "Tick — grasp it as close to the skin as possible with fine-tipped tweezers, pull steadily upward without twisting, then disinfect. Watch for a 'bull's-eye' rash (Lyme disease) over the next weeks.",
        ],
      },
    ],
    sources: [
      { label: "WHO — Rabies and animal bite wounds", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
      { label: "WHO — Snakebite envenoming guidance", url: "https://www.who.int/health-topics/snakebite" },
      { label: "CDC — Tick removal", url: "https://www.cdc.gov/ticks/removing_a_tick.html" },
    ],
    quiz: [
      { question: "Wash an animal bite with soap and water for at least:", options: ["10 sec", "1 min", "15 min", "1 hour"], answer: 2 },
      { question: "For a snake bite you should:", options: ["Suck out the venom", "Cut the wound", "Keep casualty still, immobilise the limb and get to hospital", "Apply ice"], answer: 2 },
      { question: "How do you remove a bee sting?", options: ["Pinch with tweezers", "Scrape it out sideways with a card edge", "Suck it out", "Leave it in"], answer: 1 },
    ],
  },
  {
    slug: "muscle-injuries",
    title: "Muscle Injuries",
    level: 9,
    icon: "💪",
    summary:
      "Strains, sprains, cramps and dislocations. Updated PEACE & LOVE protocol from the British Journal of Sports Medicine.",
    sections: [
      {
        heading: "Definitions",
        body: [
          "Strain — overstretched or torn muscle or tendon.",
          "Sprain — overstretched or torn ligament (the tissue connecting bone to bone).",
          "Cramp — sudden involuntary muscle contraction.",
          "Dislocation — bones forced out of their normal position at a joint; treat as a fracture and do NOT try to put it back.",
        ],
      },
      {
        heading: "Acute care — RICE / PRICE (first 24–48 h)",
        body: [
          "Rest — stop activity and protect the injured area.",
          "Ice — wrap a cold pack or bag of frozen peas in a thin cloth and apply for 15–20 minutes every 2–3 hours. Never put ice directly on skin.",
          "Compression — wrap with an elastic bandage firmly but not so tight it cuts off circulation.",
          "Elevation — raise the injured part above the level of the heart whenever possible.",
          "(Add P for Protect at the start — limit weight-bearing in the first 1–3 days.)",
        ],
      },
      {
        heading: "Recovery — PEACE & LOVE (after 48 h, BJSM 2019)",
        body: [
          "PEACE: Protect, Elevate, Avoid anti-inflammatories (they may slow tissue healing), Compress, Educate (active recovery beats passive treatments).",
          "LOVE: Load (gradually return to activity guided by pain), Optimism, Vascularisation (pain-free cardio to boost blood flow), Exercise (restore mobility, strength and proprioception).",
        ],
      },
      {
        heading: "When to seek medical help",
        body: [
          "Inability to bear weight or use the limb, severe pain, deformity, or numbness/tingling.",
          "Suspected dislocation or fracture.",
          "Symptoms not improving after 48–72 hours of self-care.",
        ],
      },
    ],
    sources: [
      { label: "BJSM — Soft tissue injuries simply need PEACE & LOVE", url: "https://blogs.bmj.com/bjsm/2019/04/26/soft-tissue-injuries-simply-need-peace-love/" },
      { label: "Mayo Clinic — Sprains: First aid", url: "https://www.mayoclinic.org/first-aid/first-aid-sprain/basics/art-20056622" },
    ],
    quiz: [
      { question: "RICE stands for:", options: ["Run, Ice, Cool, Eat", "Rest, Ice, Compression, Elevation", "Rub, Inject, Cover, Elevate", "Rest, Inhale, Compress, Eat"], answer: 1 },
      { question: "Maximum recommended time for a single ice application:", options: ["5 min", "15–20 min", "1 hour", "All day"], answer: 1 },
      { question: "A sprain is an injury to a:", options: ["Muscle", "Ligament", "Bone", "Nerve"], answer: 1 },
    ],
  },
  {
    slug: "environmental",
    title: "Environmental Injuries",
    level: 10,
    icon: "🌡️",
    summary:
      "Heat, cold, burns, drowning and electric shock. Aligned with the American Burn Association and CDC.",
    sections: [
      {
        heading: "Burns (American Burn Association)",
        body: [
          "Stop the burning process: remove the casualty from the source; smother flames with a blanket; flush chemicals with running water for at least 20 minutes.",
          "Cool the burn under cool (not ice-cold) running water for at least 20 minutes — ideally within 3 hours of the injury (the 'cool the burn' rule).",
          "Remove jewellery and loose clothing near the burn before swelling starts; do NOT pull off anything stuck to the skin.",
          "Cover loosely with cling film (laid lengthwise, not wrapped tightly) or a clean non-fluffy cloth.",
          "Seek hospital care for burns: larger than the casualty's palm; on the face, hands, feet, genitals or over a joint; deep (white, charred or painless); chemical or electrical burns; or any burn in a child or older adult.",
          "Do NOT apply butter, toothpaste, oil, ice, or break blisters.",
        ],
      },
      {
        heading: "Heat exhaustion and heat stroke (CDC)",
        body: [
          "Heat exhaustion: heavy sweating, weakness, cold pale clammy skin, fast weak pulse, nausea, headache. Treatment: move to a cool place, lie down with legs raised, sip water or oral rehydration salts, sponge with cool water and fan.",
          "Heat stroke (medical emergency): body temp ≥40 °C, hot dry or sweating skin, confusion, seizures, unconsciousness. Call EMS immediately.",
          "Active cooling for heat stroke: move to shade, remove outer clothing, douse with cool water and fan vigorously, or place ice packs at neck, armpits and groin.",
          "Do NOT give anything to drink if the casualty is confused or unresponsive.",
        ],
      },
      {
        heading: "Hypothermia and frostbite",
        body: [
          "Hypothermia (core body temp <35 °C): shivering (stops in severe cases), confusion, slurred speech, drowsiness. Move to shelter, replace wet clothes with dry, wrap in dry blankets including the head, give warm sweet drinks only if fully alert.",
          "Do NOT use direct heat (radiator, hot water bottle) on bare skin and do NOT rub the limbs.",
          "Frostbite: numb, white, waxy skin. Rewarm only if there is no chance of refreezing — immerse in warm (not hot) water 37–39 °C until tissue softens. Never rub frostbitten tissue.",
        ],
      },
      {
        heading: "Drowning and electric shock",
        body: [
          "Drowning: get the casualty out of water safely (without endangering yourself). If unresponsive and not breathing normally, give 5 initial rescue breaths then start CPR (30 compressions : 2 breaths).",
          "Electric shock: switch off the power at the source before touching the casualty. If you cannot, use a dry non-conductive object (wooden broom) to push them away. Then assess responsiveness and breathing, treat burns at entry/exit points, and call EMS.",
        ],
      },
    ],
    sources: [
      { label: "American Burn Association — Burn first aid", url: "https://ameriburn.org/" },
      { label: "CDC — Warning signs and symptoms of heat-related illness", url: "https://www.cdc.gov/disasters/extremeheat/warning.html" },
      { label: "ERC Guidelines 2021 — Drowning", url: "https://www.erc.edu/guidelines" },
    ],
    quiz: [
      { question: "Cool a burn under running water for at least:", options: ["1 min", "5 min", "20 min", "1 hour"], answer: 2 },
      { question: "What should you NOT put on a burn?", options: ["Cling film", "Cool water", "Butter or toothpaste", "Clean non-fluffy cloth"], answer: 2 },
      { question: "First action for an electric shock casualty still in contact with the current:", options: ["Pull them away with your hands", "Switch off the power at the source", "Pour water on them", "Start CPR immediately"], answer: 1 },
    ],
  },
  {
    slug: "trauma",
    title: "Trauma Cases",
    level: 11,
    icon: "🚑",
    summary:
      "Head, spinal, chest and abdominal injuries. Based on ATLS and ERC trauma principles.",
    sections: [
      {
        heading: "Head injury & concussion",
        body: [
          "Suspect with any blow to the head: headache, dizziness, nausea/vomiting, confusion, brief loss of consciousness, memory loss for the event.",
          "Red-flag signs (call EMS): repeated vomiting, seizures, unequal or unresponsive pupils, clear fluid or blood from ears/nose, weakness on one side, slurred speech, persistent unconsciousness, worsening headache.",
          "Keep the casualty still and rested; monitor level of response using AVPU (Alert, responds to Voice, responds to Pain, Unresponsive).",
        ],
      },
      {
        heading: "Suspected spinal injury",
        body: [
          "Suspect after: falls from height, road accidents, diving into shallow water, any unconscious trauma casualty.",
          "Tell the casualty NOT to move. Kneel behind their head and place your hands either side to provide manual in-line stabilisation; hold until EMS take over.",
          "Only move them if they are in immediate danger or you must open their airway — use the jaw-thrust manoeuvre (not head-tilt) to keep the spine neutral.",
          "If they are unresponsive but breathing and you are alone and must leave, place them in a modified recovery position keeping the spine in a straight line.",
        ],
      },
      {
        heading: "Chest injuries",
        body: [
          "Penetrating chest wound (sucking chest wound): cover with a gloved hand initially, then a vented chest seal or improvised non-occlusive dressing (e.g. a piece of plastic taped on three sides) so air can escape but not be sucked in.",
          "Flail chest (paradoxical movement of part of the chest): support the area, sit the casualty up leaning toward the injured side to help the uninjured lung expand, and call EMS urgently.",
          "Rib fractures: support the arm on the injured side in an elevation sling.",
        ],
      },
      {
        heading: "Abdominal injuries",
        body: [
          "Closed abdominal injury (e.g. blunt trauma): lay the casualty down with knees bent to relax the abdominal muscles. Treat for shock. Call EMS.",
          "Open wound with protruding organs (evisceration): do NOT push them back in. Cover with a clean dressing moistened with sterile saline or clean water and a non-stick covering. Get help fast.",
          "Do NOT give food or drink — surgery is likely.",
        ],
      },
    ],
    sources: [
      { label: "American College of Surgeons — Advanced Trauma Life Support (ATLS)", url: "https://www.facs.org/quality-programs/trauma/atls" },
      { label: "ERC Guidelines 2021 — First Aid (head, spine, chest)", url: "https://www.erc.edu/guidelines" },
    ],
    quiz: [
      { question: "Suspected spinal injury — you should:", options: ["Roll them over", "Sit them up", "Keep them still and stabilise the head", "Carry them out"], answer: 2 },
      { question: "A casualty with a chest injury should lean toward the:", options: ["Injured side", "Uninjured side", "Left side", "Right side"], answer: 0 },
      { question: "AVPU is used to assess:", options: ["Pulse rate", "Level of response", "Bleeding severity", "Burn area"], answer: 1 },
    ],
  },
  {
    slug: "medical-emergencies",
    title: "Medical Emergencies",
    level: 12,
    icon: "⚕️",
    summary:
      "Heart attack, stroke, seizures, asthma, anaphylaxis, diabetes. Based on AHA, American Stroke Association and Resuscitation Council UK.",
    sections: [
      {
        heading: "Heart attack (myocardial infarction)",
        body: [
          "Signs: central crushing chest pain that may radiate to jaw, neck, back or left arm; shortness of breath; cold sweat; nausea; sense of impending doom. Women, older adults and people with diabetes may have atypical presentations.",
          "Call EMS immediately. Sit the casualty down in the W position (half-sitting, knees bent, supported back).",
          "Loosen tight clothing at neck and waist.",
          "If the casualty is conscious, fully alert and not allergic, give one 300 mg adult aspirin tablet (or 4 x 81 mg chewables) to chew slowly.",
          "Be ready to start CPR and use an AED if they become unresponsive.",
        ],
      },
      {
        heading: "Stroke — recognise with FAST (American Stroke Association)",
        body: [
          "Face — ask the person to smile; does one side droop?",
          "Arms — ask them to raise both arms; does one drift down?",
          "Speech — ask them to repeat a simple phrase; is it slurred or strange?",
          "Time — if any of these are positive, call EMS immediately and note the time symptoms started (clot-busting drugs work best within 4.5 hours).",
          "Keep them comfortable and supported, do not give food or drink (swallowing may be impaired).",
        ],
      },
      {
        heading: "Seizures (epilepsy)",
        body: [
          "Protect the casualty from injury — clear hard or sharp objects away and cushion the head with something soft.",
          "Do NOT restrain them and do NOT put anything in their mouth — they cannot swallow their tongue.",
          "Time the seizure. Once it stops, place them in the recovery position and stay with them until fully recovered.",
          "Call EMS if: it is their first seizure, the seizure lasts >5 min, they have repeated seizures without recovering in between, they were injured, or they fail to regain consciousness.",
        ],
      },
      {
        heading: "Asthma attack",
        body: [
          "Sit the casualty up in a position they find comfortable — do NOT make them lie down.",
          "Help them use their reliever inhaler (usually blue) — 1 puff every 30–60 seconds, up to 10 puffs (use a spacer if available).",
          "Call EMS if there is no improvement after 10 puffs, the inhaler is not available, they are too breathless to speak, or their lips/face turn blue.",
          "Continue giving the inhaler every few minutes until help arrives.",
        ],
      },
      {
        heading: "Anaphylaxis",
        body: [
          "Signs: rapid swelling of the face/lips/tongue, difficulty breathing or swallowing, widespread hives, drop in blood pressure, sense of impending doom, often after a known allergen.",
          "Use the casualty's adrenaline (epinephrine) auto-injector — inject into the outer mid-thigh through clothing if needed; hold for 3–10 seconds depending on the device.",
          "Call EMS even if symptoms improve. Lay the casualty flat with legs raised (or sit them up if breathing is difficult; do NOT stand them up).",
          "A second dose can be given after 5–15 minutes if symptoms persist and a second pen is available.",
        ],
      },
      {
        heading: "Diabetic emergencies",
        body: [
          "Hypoglycaemia (low blood sugar — most common): pale, sweaty, trembling, hungry, confused, aggressive. If conscious and able to swallow, give 15–20 g of fast-acting sugar (glucose tablets, 150 ml fruit juice, sugary soft drink) and re-check after 15 min.",
          "Hyperglycaemia (high blood sugar): warm dry skin, deep sighing breathing, fruity breath, drowsiness — call EMS.",
          "If you are unsure which it is and the casualty is conscious, give sugar — it will help low sugar and not significantly worsen high sugar.",
          "If unresponsive, place in the recovery position and call EMS; never give food or drink.",
        ],
      },
    ],
    sources: [
      { label: "American Heart Association — Heart attack symptoms", url: "https://www.heart.org/en/health-topics/heart-attack" },
      { label: "American Stroke Association — Stroke F.A.S.T.", url: "https://www.stroke.org/en/about-stroke/stroke-symptoms" },
      { label: "Resuscitation Council UK — Anaphylaxis guidelines", url: "https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis" },
    ],
    quiz: [
      { question: "FAST is used to recognise:", options: ["Heart attack", "Stroke", "Seizure", "Choking"], answer: 1 },
      { question: "During a seizure you should:", options: ["Hold them down", "Put a spoon in their mouth", "Cushion the head and time the seizure", "Pour water on them"], answer: 2 },
      { question: "Adrenaline auto-injector for anaphylaxis is given into the:", options: ["Buttock", "Outer mid-thigh", "Upper arm vein", "Stomach"], answer: 1 },
      { question: "Aspirin dose for a conscious adult having a heart attack:", options: ["75 mg", "300 mg chewed", "1000 mg swallowed", "None — never give aspirin"], answer: 1 },
    ],
  },
  {
    slug: "cpr",
    title: "Cardiopulmonary Resuscitation (CPR)",
    level: 13,
    icon: "❤️‍🩹",
    summary:
      "Restart circulation when breathing and heartbeat have stopped. Based on the 2020 AHA Guidelines and 2021 ERC Guidelines.",
    sections: [
      {
        heading: "Primary survey — DRSABCD",
        body: [
          "D — Danger: check the scene is safe for you, bystanders, and the casualty.",
          "R — Response: tap the shoulders firmly and shout 'Are you OK?'",
          "S — Send for help: call EMS (911 / 999 / 112) and ask a bystander to fetch an AED.",
          "A — Airway: open with head-tilt chin-lift (jaw-thrust if spinal injury suspected).",
          "B — Breathing: look, listen and feel for normal breathing for no more than 10 seconds. Agonal gasps are NOT normal breathing.",
          "C — CPR: if not breathing normally, start chest compressions immediately.",
          "D — Defibrillation: attach an AED as soon as it arrives and follow its voice prompts.",
        ],
      },
      {
        heading: "Adult CPR (AHA 2020)",
        body: [
          "Compression location: lower half of the breastbone (centre of the chest).",
          "Compression depth: at least 5 cm but no more than 6 cm (2–2.4 in).",
          "Compression rate: 100–120 per minute (think of the beat of 'Stayin' Alive').",
          "Allow full chest recoil between compressions and minimise interruptions (<10 sec).",
          "Ratio: 30 compressions to 2 rescue breaths if trained and willing; otherwise give continuous compression-only (hands-only) CPR.",
          "Each rescue breath should last about 1 second and visibly raise the chest.",
          "Continue until: the casualty shows signs of life, an AED tells you to stop for analysis/shock, EMS take over, or you become physically exhausted.",
        ],
      },
      {
        heading: "Child & infant CPR",
        body: [
          "Child (1 year to puberty): start with 5 initial rescue breaths, then 30:2 (one rescuer) or 15:2 (two trained rescuers). Compress to about one-third of chest depth (~5 cm) with one or two hands.",
          "Infant (under 1 year): 5 initial rescue breaths, then 15:2 with two trained rescuers (30:2 if alone). Use two fingers (or two-thumb encircling for two rescuers) just below the nipple line; compress to about one-third of chest depth (~4 cm).",
          "Open the airway only to a neutral position in infants — do not over-extend the neck.",
        ],
      },
      {
        heading: "Using an AED",
        body: [
          "Switch on the AED and follow the voice prompts.",
          "Expose the chest. Dry it if wet. Remove medication patches and metal jewellery from pad sites.",
          "Apply pads as shown: one upper-right of chest below the collarbone, one on the left side below the armpit. For infants/children under 8 use paediatric pads if available, or place one on the chest and one on the back.",
          "Stand clear while the AED analyses; if a shock is advised, ensure no one is touching the casualty and press the shock button.",
          "Resume CPR immediately after the shock (or if no shock advised) for 2 minutes until the AED reanalyses.",
        ],
      },
      {
        heading: "Choking (related life-threat)",
        body: [
          "Adult/child conscious with severe airway obstruction: give up to 5 sharp back blows between the shoulder blades, then up to 5 abdominal thrusts (Heimlich manoeuvre). Alternate until cleared or the person becomes unresponsive.",
          "Infant: 5 back blows (head-down, supported on your forearm) then 5 chest thrusts (two fingers on the breastbone). Never use abdominal thrusts on infants.",
          "If the casualty becomes unresponsive, lower them to the ground, call EMS and start CPR.",
        ],
      },
    ],
    sources: [
      { label: "American Heart Association — 2020 CPR & ECC Guidelines", url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines" },
      { label: "European Resuscitation Council — Guidelines 2021", url: "https://www.erc.edu/guidelines" },
      { label: "Resuscitation Council UK — Adult Basic Life Support", url: "https://www.resus.org.uk/library/2021-resuscitation-guidelines/adult-basic-life-support-guidelines" },
    ],
    quiz: [
      { question: "Adult CPR compression-to-breath ratio:", options: ["15:2", "30:2", "5:1", "10:1"], answer: 1 },
      { question: "Adult compression rate per minute:", options: ["40–60", "60–80", "100–120", "150–180"], answer: 2 },
      { question: "Adult compression depth:", options: ["1–2 cm", "3–4 cm", "5–6 cm", "8–10 cm"], answer: 2 },
      { question: "DRSABCD — the first 'D' stands for:", options: ["Defibrillation", "Drugs", "Danger", "Diagnosis"], answer: 2 },
      { question: "For a choking infant you should give:", options: ["Abdominal thrusts (Heimlich)", "Back blows then chest thrusts", "Mouth-to-mouth only", "Nothing — wait for EMS"], answer: 1 },
    ],
  },
];
