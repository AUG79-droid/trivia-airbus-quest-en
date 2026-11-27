import type { Question } from './types';
// Authored scenario-based educational cases. No real platform or operational data.
export const EXTRA_GENERAL_QUESTIONS: (Question & {difficulty: 'foundation' | 'applied' | 'advanced'})[] = [
  {
    "id": 600,
    "category": 0,
    "text": "Light housing with frequent replacements. Which issue is most directly relevant?",
    "options": [
      "Impacts shifted to replacement",
      "Barrier to disassembly and reuse",
      "Trade-off between manufacturing and use",
      "Inspection accessibility constraint"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Impacts shifted to replacement. Appropriate response: Compare function over a common service life. Evidence to review: Replacements, materials and energy per function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 601,
    "category": 0,
    "text": "Light housing with frequent replacements. Which response best addresses this situation?",
    "options": [
      "Assess modularity and controlled interfaces",
      "Compare function over a common service life",
      "Assess durability before comparing impacts",
      "Assess controlled compatibility and interchangeability"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Impacts shifted to replacement. Appropriate response: Compare function over a common service life. Evidence to review: Replacements, materials and energy per function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 602,
    "category": 0,
    "text": "Light housing with frequent replacements. Proposed response: Compare function over a common service life. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Manufacturing and use energy per equivalent function",
      "Inspection time and coverage",
      "Replacements, materials and energy per function",
      "Comparable inventories and sensitivity analysis"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Impacts shifted to replacement. Appropriate response: Compare function over a common service life. Evidence to review: Replacements, materials and energy per function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 603,
    "category": 0,
    "text": "Fasteners destroyed during disassembly. Which issue is most directly relevant?",
    "options": [
      "Excessive coupling between modules",
      "Service-life uncertainty",
      "Standardisation with configuration constraints",
      "Barrier to disassembly and reuse"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Barrier to disassembly and reuse. Appropriate response: Assess qualifiable reversible joints. Evidence to review: Disassembly time and performance after cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 604,
    "category": 0,
    "text": "Fasteners destroyed during disassembly. Which response best addresses this situation?",
    "options": [
      "Assess qualifiable reversible joints",
      "Compare lifecycle energy by utilisation",
      "Assess access and inspectability with maintenance",
      "Harmonise scope and document sensitivity"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Barrier to disassembly and reuse. Appropriate response: Assess qualifiable reversible joints. Evidence to review: Disassembly time and performance after cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 605,
    "category": 0,
    "text": "Fasteners destroyed during disassembly. Proposed response: Assess qualifiable reversible joints. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Ageing and performance tests",
      "Disassembly time and performance after cycles",
      "Configuration matrix and interchange tests",
      "Replacements, materials and energy per function"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Barrier to disassembly and reuse. Appropriate response: Assess qualifiable reversible joints. Evidence to review: Disassembly time and performance after cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 606,
    "category": 0,
    "text": "Upgrading one board requires replacing the entire unit. Which issue is most directly relevant?",
    "options": [
      "Trade-off between manufacturing and use",
      "Inspection accessibility constraint",
      "Excessive coupling between modules",
      "Temporal and geographical inconsistency"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Excessive coupling between modules. Appropriate response: Assess modularity and controlled interfaces. Evidence to review: Independent module upgrade demonstration. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 607,
    "category": 0,
    "text": "Upgrading one board requires replacing the entire unit. Which response best addresses this situation?",
    "options": [
      "Assess durability before comparing impacts",
      "Assess controlled compatibility and interchangeability",
      "Compare function over a common service life",
      "Assess modularity and controlled interfaces"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Excessive coupling between modules. Appropriate response: Assess modularity and controlled interfaces. Evidence to review: Independent module upgrade demonstration. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 608,
    "category": 0,
    "text": "Upgrading one board requires replacing the entire unit. Proposed response: Assess modularity and controlled interfaces. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Independent module upgrade demonstration",
      "Inspection time and coverage",
      "Comparable inventories and sensitivity analysis",
      "Disassembly time and performance after cycles"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Excessive coupling between modules. Appropriate response: Assess modularity and controlled interfaces. Evidence to review: Independent module upgrade demonstration. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 609,
    "category": 0,
    "text": "Lightweight design with energy-intensive manufacturing. Which issue is most directly relevant?",
    "options": [
      "Service-life uncertainty",
      "Trade-off between manufacturing and use",
      "Standardisation with configuration constraints",
      "Impacts shifted to replacement"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Trade-off between manufacturing and use. Appropriate response: Compare lifecycle energy by utilisation. Evidence to review: Manufacturing and use energy per equivalent function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 610,
    "category": 0,
    "text": "Lightweight design with energy-intensive manufacturing. Which response best addresses this situation?",
    "options": [
      "Assess access and inspectability with maintenance",
      "Harmonise scope and document sensitivity",
      "Compare lifecycle energy by utilisation",
      "Assess qualifiable reversible joints"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Trade-off between manufacturing and use. Appropriate response: Compare lifecycle energy by utilisation. Evidence to review: Manufacturing and use energy per equivalent function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 611,
    "category": 0,
    "text": "Lightweight design with energy-intensive manufacturing. Proposed response: Compare lifecycle energy by utilisation. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Configuration matrix and interchange tests",
      "Replacements, materials and energy per function",
      "Independent module upgrade demonstration",
      "Manufacturing and use energy per equivalent function"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Trade-off between manufacturing and use. Appropriate response: Compare lifecycle energy by utilisation. Evidence to review: Manufacturing and use energy per equivalent function. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 612,
    "category": 0,
    "text": "Renewable material without durability data. Which issue is most directly relevant?",
    "options": [
      "Service-life uncertainty",
      "Inspection accessibility constraint",
      "Temporal and geographical inconsistency",
      "Barrier to disassembly and reuse"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Service-life uncertainty. Appropriate response: Assess durability before comparing impacts. Evidence to review: Ageing and performance tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 613,
    "category": 0,
    "text": "Renewable material without durability data. Which response best addresses this situation?",
    "options": [
      "Assess controlled compatibility and interchangeability",
      "Assess durability before comparing impacts",
      "Compare function over a common service life",
      "Assess modularity and controlled interfaces"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Service-life uncertainty. Appropriate response: Assess durability before comparing impacts. Evidence to review: Ageing and performance tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 614,
    "category": 0,
    "text": "Renewable material without durability data. Proposed response: Assess durability before comparing impacts. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Comparable inventories and sensitivity analysis",
      "Disassembly time and performance after cycles",
      "Ageing and performance tests",
      "Manufacturing and use energy per equivalent function"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Service-life uncertainty. Appropriate response: Assess durability before comparing impacts. Evidence to review: Ageing and performance tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 615,
    "category": 0,
    "text": "Part difficult to inspect in service. Which issue is most directly relevant?",
    "options": [
      "Standardisation with configuration constraints",
      "Impacts shifted to replacement",
      "Excessive coupling between modules",
      "Inspection accessibility constraint"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Inspection accessibility constraint. Appropriate response: Assess access and inspectability with maintenance. Evidence to review: Inspection time and coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 616,
    "category": 0,
    "text": "Part difficult to inspect in service. Which response best addresses this situation?",
    "options": [
      "Assess access and inspectability with maintenance",
      "Harmonise scope and document sensitivity",
      "Assess qualifiable reversible joints",
      "Compare lifecycle energy by utilisation"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Inspection accessibility constraint. Appropriate response: Assess access and inspectability with maintenance. Evidence to review: Inspection time and coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 617,
    "category": 0,
    "text": "Part difficult to inspect in service. Proposed response: Assess access and inspectability with maintenance. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Replacements, materials and energy per function",
      "Inspection time and coverage",
      "Independent module upgrade demonstration",
      "Ageing and performance tests"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Inspection accessibility constraint. Appropriate response: Assess access and inspectability with maintenance. Evidence to review: Inspection time and coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 618,
    "category": 0,
    "text": "Common interfaces to reduce part variety. Which issue is most directly relevant?",
    "options": [
      "Temporal and geographical inconsistency",
      "Barrier to disassembly and reuse",
      "Standardisation with configuration constraints",
      "Trade-off between manufacturing and use"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Standardisation with configuration constraints. Appropriate response: Assess controlled compatibility and interchangeability. Evidence to review: Configuration matrix and interchange tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 619,
    "category": 0,
    "text": "Common interfaces to reduce part variety. Which response best addresses this situation?",
    "options": [
      "Compare function over a common service life",
      "Assess modularity and controlled interfaces",
      "Assess durability before comparing impacts",
      "Assess controlled compatibility and interchangeability"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Standardisation with configuration constraints. Appropriate response: Assess controlled compatibility and interchangeability. Evidence to review: Configuration matrix and interchange tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 620,
    "category": 0,
    "text": "Common interfaces to reduce part variety. Proposed response: Assess controlled compatibility and interchangeability. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Configuration matrix and interchange tests",
      "Disassembly time and performance after cycles",
      "Manufacturing and use energy per equivalent function",
      "Inspection time and coverage"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Standardisation with configuration constraints. Appropriate response: Assess controlled compatibility and interchangeability. Evidence to review: Configuration matrix and interchange tests. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 621,
    "category": 0,
    "text": "Material inventories from different years and regions. Proposed response: Harmonise scope and document sensitivity. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Independent module upgrade demonstration",
      "Comparable inventories and sensitivity analysis",
      "Ageing and performance tests",
      "Configuration matrix and interchange tests"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Temporal and geographical inconsistency. Appropriate response: Harmonise scope and document sensitivity. Evidence to review: Comparable inventories and sensitivity analysis. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 622,
    "category": 1,
    "text": "Compressor consumes energy outside production. Which issue is most directly relevant?",
    "options": [
      "Trade-off between efficiency and visual requirements",
      "Storage capacity, degradation and safety",
      "Idle demand or leakage",
      "Impacts dependent on use and energy source"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Idle demand or leakage. Appropriate response: Measure idle demand and review leakage. Evidence to review: Power and flow outside production. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 623,
    "category": 1,
    "text": "Compressor consumes energy outside production. Which response best addresses this situation?",
    "options": [
      "Assess demand timing and temperature match",
      "Improve efficiency without reducing required controls",
      "Normalise consumption against actual use",
      "Measure idle demand and review leakage"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Idle demand or leakage. Appropriate response: Measure idle demand and review leakage. Evidence to review: Power and flow outside production. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 624,
    "category": 1,
    "text": "Compressor consumes energy outside production. Proposed response: Measure idle demand and review leakage. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Power and flow outside production",
      "Usable energy and losses during cycles",
      "Consumption per service and energy supply impacts",
      "Transport emissions and deadline attainment"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Idle demand or leakage. Appropriate response: Measure idle demand and review leakage. Evidence to review: Power and flow outside production. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 625,
    "category": 1,
    "text": "Lighting replacement at inspection stations. Which issue is most directly relevant?",
    "options": [
      "Heat recovery opportunity",
      "Trade-off between efficiency and visual requirements",
      "Quality and safety constraints on savings",
      "Demand variation from occupancy and weather"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Trade-off between efficiency and visual requirements. Appropriate response: Assess lighting levels and uniformity. Evidence to review: Consumption and lighting measurements at stations. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 626,
    "category": 1,
    "text": "Lighting replacement at inspection stations. Which response best addresses this situation?",
    "options": [
      "Assess sizing against demand and requirements",
      "Compare duty cycles and infrastructure",
      "Assess lighting levels and uniformity",
      "Compare consolidation against deadline constraints"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Trade-off between efficiency and visual requirements. Appropriate response: Assess lighting levels and uniformity. Evidence to review: Consumption and lighting measurements at stations. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 627,
    "category": 1,
    "text": "Lighting replacement at inspection stations. Proposed response: Assess lighting levels and uniformity. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Energy per cycle and condition compliance",
      "Consumption, occupancy and weather by period",
      "Power and flow outside production",
      "Consumption and lighting measurements at stations"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Trade-off between efficiency and visual requirements. Appropriate response: Assess lighting levels and uniformity. Evidence to review: Consumption and lighting measurements at stations. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 628,
    "category": 1,
    "text": "Waste heat from process equipment. Which issue is most directly relevant?",
    "options": [
      "Heat recovery opportunity",
      "Storage capacity, degradation and safety",
      "Impacts dependent on use and energy source",
      "Trade-off between transport and service level"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Heat recovery opportunity. Appropriate response: Assess demand timing and temperature match. Evidence to review: Simultaneous available heat and demand profiles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 629,
    "category": 1,
    "text": "Waste heat from process equipment. Which response best addresses this situation?",
    "options": [
      "Improve efficiency without reducing required controls",
      "Assess demand timing and temperature match",
      "Normalise consumption against actual use",
      "Measure idle demand and review leakage"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Heat recovery opportunity. Appropriate response: Assess demand timing and temperature match. Evidence to review: Simultaneous available heat and demand profiles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 630,
    "category": 1,
    "text": "Waste heat from process equipment. Proposed response: Assess demand timing and temperature match. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Consumption per service and energy supply impacts",
      "Transport emissions and deadline attainment",
      "Simultaneous available heat and demand profiles",
      "Consumption and lighting measurements at stations"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Heat recovery opportunity. Appropriate response: Assess demand timing and temperature match. Evidence to review: Simultaneous available heat and demand profiles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 631,
    "category": 1,
    "text": "Batteries to manage electricity peaks. Which issue is most directly relevant?",
    "options": [
      "Quality and safety constraints on savings",
      "Demand variation from occupancy and weather",
      "Idle demand or leakage",
      "Storage capacity, degradation and safety"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Storage capacity, degradation and safety. Appropriate response: Assess sizing against demand and requirements. Evidence to review: Usable energy and losses during cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 632,
    "category": 1,
    "text": "Batteries to manage electricity peaks. Which response best addresses this situation?",
    "options": [
      "Assess sizing against demand and requirements",
      "Compare duty cycles and infrastructure",
      "Compare consolidation against deadline constraints",
      "Assess lighting levels and uniformity"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Storage capacity, degradation and safety. Appropriate response: Assess sizing against demand and requirements. Evidence to review: Usable energy and losses during cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 633,
    "category": 1,
    "text": "Batteries to manage electricity peaks. Proposed response: Assess sizing against demand and requirements. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Consumption, occupancy and weather by period",
      "Usable energy and losses during cycles",
      "Power and flow outside production",
      "Simultaneous available heat and demand profiles"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Storage capacity, degradation and safety. Appropriate response: Assess sizing against demand and requirements. Evidence to review: Usable energy and losses during cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 634,
    "category": 1,
    "text": "Painting process with controlled extraction and temperature. Which issue is most directly relevant?",
    "options": [
      "Impacts dependent on use and energy source",
      "Trade-off between transport and service level",
      "Quality and safety constraints on savings",
      "Trade-off between efficiency and visual requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Quality and safety constraints on savings. Appropriate response: Improve efficiency without reducing required controls. Evidence to review: Energy per cycle and condition compliance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 635,
    "category": 1,
    "text": "Painting process with controlled extraction and temperature. Which response best addresses this situation?",
    "options": [
      "Normalise consumption against actual use",
      "Measure idle demand and review leakage",
      "Assess demand timing and temperature match",
      "Improve efficiency without reducing required controls"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Quality and safety constraints on savings. Appropriate response: Improve efficiency without reducing required controls. Evidence to review: Energy per cycle and condition compliance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 636,
    "category": 1,
    "text": "Painting process with controlled extraction and temperature. Proposed response: Improve efficiency without reducing required controls. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Energy per cycle and condition compliance",
      "Transport emissions and deadline attainment",
      "Consumption and lighting measurements at stations",
      "Usable energy and losses during cycles"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Quality and safety constraints on savings. Appropriate response: Improve efficiency without reducing required controls. Evidence to review: Energy per cycle and condition compliance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 637,
    "category": 1,
    "text": "Support vehicle propulsion change. Which issue is most directly relevant?",
    "options": [
      "Demand variation from occupancy and weather",
      "Impacts dependent on use and energy source",
      "Idle demand or leakage",
      "Heat recovery opportunity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Impacts dependent on use and energy source. Appropriate response: Compare duty cycles and infrastructure. Evidence to review: Consumption per service and energy supply impacts. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 638,
    "category": 1,
    "text": "Support vehicle propulsion change. Which response best addresses this situation?",
    "options": [
      "Compare consolidation against deadline constraints",
      "Assess lighting levels and uniformity",
      "Compare duty cycles and infrastructure",
      "Assess sizing against demand and requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Impacts dependent on use and energy source. Appropriate response: Compare duty cycles and infrastructure. Evidence to review: Consumption per service and energy supply impacts. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 639,
    "category": 1,
    "text": "Support vehicle propulsion change. Proposed response: Compare duty cycles and infrastructure. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Power and flow outside production",
      "Simultaneous available heat and demand profiles",
      "Energy per cycle and condition compliance",
      "Consumption per service and energy supply impacts"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Impacts dependent on use and energy source. Appropriate response: Compare duty cycles and infrastructure. Evidence to review: Consumption per service and energy supply impacts. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 640,
    "category": 1,
    "text": "HVAC varies with occupancy. Which issue is most directly relevant?",
    "options": [
      "Demand variation from occupancy and weather",
      "Trade-off between transport and service level",
      "Trade-off between efficiency and visual requirements",
      "Storage capacity, degradation and safety"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Demand variation from occupancy and weather. Appropriate response: Normalise consumption against actual use. Evidence to review: Consumption, occupancy and weather by period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 641,
    "category": 1,
    "text": "HVAC varies with occupancy. Which response best addresses this situation?",
    "options": [
      "Measure idle demand and review leakage",
      "Normalise consumption against actual use",
      "Assess demand timing and temperature match",
      "Improve efficiency without reducing required controls"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Demand variation from occupancy and weather. Appropriate response: Normalise consumption against actual use. Evidence to review: Consumption, occupancy and weather by period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 642,
    "category": 1,
    "text": "HVAC varies with occupancy. Proposed response: Normalise consumption against actual use. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Consumption and lighting measurements at stations",
      "Usable energy and losses during cycles",
      "Consumption, occupancy and weather by period",
      "Consumption per service and energy supply impacts"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Demand variation from occupancy and weather. Appropriate response: Normalise consumption against actual use. Evidence to review: Consumption, occupancy and weather by period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 643,
    "category": 1,
    "text": "Shipment consolidation increases waiting time. Proposed response: Compare consolidation against deadline constraints. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Simultaneous available heat and demand profiles",
      "Energy per cycle and condition compliance",
      "Consumption, occupancy and weather by period",
      "Transport emissions and deadline attainment"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Trade-off between transport and service level. Appropriate response: Compare consolidation against deadline constraints. Evidence to review: Transport emissions and deadline attainment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 644,
    "category": 2,
    "text": "Aluminium offcuts mixed with other alloys. Which issue is most directly relevant?",
    "options": [
      "Quality loss through mixing",
      "Reverse logistics impact",
      "Traceability uncertainty for reuse",
      "Contamination and quality loss"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Quality loss through mixing. Appropriate response: Segregate alloys and identify batches. Evidence to review: Composition and recovery yield by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 645,
    "category": 2,
    "text": "Aluminium offcuts mixed with other alloys. Which response best addresses this situation?",
    "options": [
      "Assess joining and feasible treatment routes",
      "Segregate alloys and identify batches",
      "Optimise nesting while respecting requirements",
      "Assess refurbishment and relevant requalification"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Quality loss through mixing. Appropriate response: Segregate alloys and identify batches. Evidence to review: Composition and recovery yield by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 646,
    "category": 2,
    "text": "Aluminium offcuts mixed with other alloys. Proposed response: Segregate alloys and identify batches. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Configuration, condition and accepted inspection",
      "Composition, limits and treatment yield",
      "Composition and recovery yield by batch",
      "Composition and property distribution against specification"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Quality loss through mixing. Appropriate response: Segregate alloys and identify batches. Evidence to review: Composition and recovery yield by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 647,
    "category": 2,
    "text": "Returnable packaging travels empty over a long distance. Which issue is most directly relevant?",
    "options": [
      "Separation barrier from permanent bonding",
      "Material yield loss",
      "Life extension conditional on performance",
      "Reverse logistics impact"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Reverse logistics impact. Appropriate response: Compare returns and actual cycles. Evidence to review: Distance, return rate and actual cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 648,
    "category": 2,
    "text": "Returnable packaging travels empty over a long distance. Which response best addresses this situation?",
    "options": [
      "Compare returns and actual cycles",
      "Assess history and condition through authorised processes",
      "Characterise contaminants and authorised treatment",
      "Assess specification and batch control"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Reverse logistics impact. Appropriate response: Compare returns and actual cycles. Evidence to review: Distance, return rate and actual cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 649,
    "category": 2,
    "text": "Returnable packaging travels empty over a long distance. Proposed response: Compare returns and actual cycles. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Yield and part conformity by batch",
      "Distance, return rate and actual cycles",
      "Additional cycles and conformity after refurbishment",
      "Composition and recovery yield by batch"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Reverse logistics impact. Appropriate response: Compare returns and actual cycles. Evidence to review: Distance, return rate and actual cycles. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 650,
    "category": 2,
    "text": "Adhesive makes materials difficult to separate. Which issue is most directly relevant?",
    "options": [
      "Traceability uncertainty for reuse",
      "Contamination and quality loss",
      "Separation barrier from permanent bonding",
      "Property variability and quality control"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Separation barrier from permanent bonding. Appropriate response: Assess joining and feasible treatment routes. Evidence to review: Separation yield and joint properties. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 651,
    "category": 2,
    "text": "Adhesive makes materials difficult to separate. Which response best addresses this situation?",
    "options": [
      "Optimise nesting while respecting requirements",
      "Assess refurbishment and relevant requalification",
      "Segregate alloys and identify batches",
      "Assess joining and feasible treatment routes"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Separation barrier from permanent bonding. Appropriate response: Assess joining and feasible treatment routes. Evidence to review: Separation yield and joint properties. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 652,
    "category": 2,
    "text": "Adhesive makes materials difficult to separate. Proposed response: Assess joining and feasible treatment routes. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Separation yield and joint properties",
      "Composition, limits and treatment yield",
      "Composition and property distribution against specification",
      "Distance, return rate and actual cycles"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Separation barrier from permanent bonding. Appropriate response: Assess joining and feasible treatment routes. Evidence to review: Separation yield and joint properties. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 653,
    "category": 2,
    "text": "Removed part without complete history. Which issue is most directly relevant?",
    "options": [
      "Material yield loss",
      "Traceability uncertainty for reuse",
      "Life extension conditional on performance",
      "Quality loss through mixing"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Traceability uncertainty for reuse. Appropriate response: Assess history and condition through authorised processes. Evidence to review: Configuration, condition and accepted inspection. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 654,
    "category": 2,
    "text": "Removed part without complete history. Which response best addresses this situation?",
    "options": [
      "Characterise contaminants and authorised treatment",
      "Assess specification and batch control",
      "Assess history and condition through authorised processes",
      "Compare returns and actual cycles"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Traceability uncertainty for reuse. Appropriate response: Assess history and condition through authorised processes. Evidence to review: Configuration, condition and accepted inspection. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 655,
    "category": 2,
    "text": "Removed part without complete history. Proposed response: Assess history and condition through authorised processes. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Additional cycles and conformity after refurbishment",
      "Composition and recovery yield by batch",
      "Separation yield and joint properties",
      "Configuration, condition and accepted inspection"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Traceability uncertainty for reuse. Appropriate response: Assess history and condition through authorised processes. Evidence to review: Configuration, condition and accepted inspection. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 656,
    "category": 2,
    "text": "Cutting waste from poor nesting. Which issue is most directly relevant?",
    "options": [
      "Material yield loss",
      "Contamination and quality loss",
      "Property variability and quality control",
      "Reverse logistics impact"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Material yield loss. Appropriate response: Optimise nesting while respecting requirements. Evidence to review: Yield and part conformity by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 657,
    "category": 2,
    "text": "Cutting waste from poor nesting. Which response best addresses this situation?",
    "options": [
      "Assess refurbishment and relevant requalification",
      "Optimise nesting while respecting requirements",
      "Segregate alloys and identify batches",
      "Assess joining and feasible treatment routes"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Material yield loss. Appropriate response: Optimise nesting while respecting requirements. Evidence to review: Yield and part conformity by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 658,
    "category": 2,
    "text": "Cutting waste from poor nesting. Proposed response: Optimise nesting while respecting requirements. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Composition and property distribution against specification",
      "Distance, return rate and actual cycles",
      "Yield and part conformity by batch",
      "Configuration, condition and accepted inspection"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Material yield loss. Appropriate response: Optimise nesting while respecting requirements. Evidence to review: Yield and part conformity by batch. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 659,
    "category": 2,
    "text": "Contaminated waste proposed as secondary feedstock. Which issue is most directly relevant?",
    "options": [
      "Life extension conditional on performance",
      "Quality loss through mixing",
      "Separation barrier from permanent bonding",
      "Contamination and quality loss"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Contamination and quality loss. Appropriate response: Characterise contaminants and authorised treatment. Evidence to review: Composition, limits and treatment yield. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 660,
    "category": 2,
    "text": "Contaminated waste proposed as secondary feedstock. Which response best addresses this situation?",
    "options": [
      "Characterise contaminants and authorised treatment",
      "Assess specification and batch control",
      "Compare returns and actual cycles",
      "Assess history and condition through authorised processes"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Contamination and quality loss. Appropriate response: Characterise contaminants and authorised treatment. Evidence to review: Composition, limits and treatment yield. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 661,
    "category": 2,
    "text": "Contaminated waste proposed as secondary feedstock. Proposed response: Characterise contaminants and authorised treatment. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Composition and recovery yield by batch",
      "Composition, limits and treatment yield",
      "Separation yield and joint properties",
      "Yield and part conformity by batch"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Contamination and quality loss. Appropriate response: Characterise contaminants and authorised treatment. Evidence to review: Composition, limits and treatment yield. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 662,
    "category": 2,
    "text": "Extend tool life through refurbishment. Which issue is most directly relevant?",
    "options": [
      "Property variability and quality control",
      "Reverse logistics impact",
      "Life extension conditional on performance",
      "Traceability uncertainty for reuse"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Life extension conditional on performance. Appropriate response: Assess refurbishment and relevant requalification. Evidence to review: Additional cycles and conformity after refurbishment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 663,
    "category": 2,
    "text": "Extend tool life through refurbishment. Which response best addresses this situation?",
    "options": [
      "Segregate alloys and identify batches",
      "Assess joining and feasible treatment routes",
      "Optimise nesting while respecting requirements",
      "Assess refurbishment and relevant requalification"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Life extension conditional on performance. Appropriate response: Assess refurbishment and relevant requalification. Evidence to review: Additional cycles and conformity after refurbishment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 664,
    "category": 2,
    "text": "Extend tool life through refurbishment. Proposed response: Assess refurbishment and relevant requalification. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Additional cycles and conformity after refurbishment",
      "Distance, return rate and actual cycles",
      "Configuration, condition and accepted inspection",
      "Composition, limits and treatment yield"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Life extension conditional on performance. Appropriate response: Assess refurbishment and relevant requalification. Evidence to review: Additional cycles and conformity after refurbishment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 665,
    "category": 2,
    "text": "Recycled material with variable composition. Proposed response: Assess specification and batch control. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Separation yield and joint properties",
      "Composition and property distribution against specification",
      "Yield and part conformity by batch",
      "Additional cycles and conformity after refurbishment"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Property variability and quality control. Appropriate response: Assess specification and batch control. Evidence to review: Composition and property distribution against specification. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 666,
    "category": 3,
    "text": "Two suppliers depend on the same refinery. Which issue is most directly relevant?",
    "options": [
      "Uncontrolled configuration change",
      "Mineral traceability gap",
      "Hidden upstream concentration",
      "Social risk at indirect tiers"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Hidden upstream concentration. Appropriate response: Map dependencies and qualified alternative sources. Evidence to review: Origin map and independent capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 667,
    "category": 3,
    "text": "Two suppliers depend on the same refinery. Which response best addresses this situation?",
    "options": [
      "Review applicability, timelines and alternatives",
      "Assess capacity, quality and demand",
      "Hold acceptance pending technical and quality review",
      "Map dependencies and qualified alternative sources"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Hidden upstream concentration. Appropriate response: Map dependencies and qualified alternative sources. Evidence to review: Origin map and independent capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 668,
    "category": 3,
    "text": "Two suppliers depend on the same refinery. Proposed response: Map dependencies and qualified alternative sources. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Origin map and independent capacity",
      "Chain of custody and origin risk assessment",
      "Assessment and corrective action closure",
      "Origin documentation and authorised acceptance"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Hidden upstream concentration. Appropriate response: Map dependencies and qualified alternative sources. Evidence to review: Origin map and independent capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 669,
    "category": 3,
    "text": "Supplier changes process without notice. Which issue is most directly relevant?",
    "options": [
      "Regulatory risk and process dependency",
      "Uncontrolled configuration change",
      "Insufficient capacity during peaks",
      "Documentary mismatch with purchase requirements"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Uncontrolled configuration change. Appropriate response: Apply change control and assess requalification. Evidence to review: Notification, assessment and traceable approval. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 670,
    "category": 3,
    "text": "Supplier changes process without notice. Which response best addresses this situation?",
    "options": [
      "Request origin and apply risk-based due diligence",
      "Assess risks and agree corrective measures",
      "Apply change control and assess requalification",
      "Verify channel, history and acceptance requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Uncontrolled configuration change. Appropriate response: Apply change control and assess requalification. Evidence to review: Notification, assessment and traceable approval. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 671,
    "category": 3,
    "text": "Supplier changes process without notice. Proposed response: Apply change control and assess requalification. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Demonstrated capacity and conforming deliveries",
      "Correspondence between specification, batch and acceptance",
      "Origin map and independent capacity",
      "Notification, assessment and traceable approval"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Uncontrolled configuration change. Appropriate response: Apply change control and assess requalification. Evidence to review: Notification, assessment and traceable approval. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 672,
    "category": 3,
    "text": "Manufacturing substance with potential new restriction. Which issue is most directly relevant?",
    "options": [
      "Regulatory risk and process dependency",
      "Mineral traceability gap",
      "Social risk at indirect tiers",
      "Authenticity and origin risk"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Regulatory risk and process dependency. Appropriate response: Review applicability, timelines and alternatives. Evidence to review: Use inventory and legal assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 673,
    "category": 3,
    "text": "Manufacturing substance with potential new restriction. Which response best addresses this situation?",
    "options": [
      "Assess capacity, quality and demand",
      "Review applicability, timelines and alternatives",
      "Hold acceptance pending technical and quality review",
      "Map dependencies and qualified alternative sources"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Regulatory risk and process dependency. Appropriate response: Review applicability, timelines and alternatives. Evidence to review: Use inventory and legal assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 674,
    "category": 3,
    "text": "Manufacturing substance with potential new restriction. Proposed response: Review applicability, timelines and alternatives. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Assessment and corrective action closure",
      "Origin documentation and authorised acceptance",
      "Use inventory and legal assessment",
      "Notification, assessment and traceable approval"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Regulatory risk and process dependency. Appropriate response: Review applicability, timelines and alternatives. Evidence to review: Use inventory and legal assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 675,
    "category": 3,
    "text": "Responsible sourcing claimed without identifying smelters. Which issue is most directly relevant?",
    "options": [
      "Insufficient capacity during peaks",
      "Documentary mismatch with purchase requirements",
      "Hidden upstream concentration",
      "Mineral traceability gap"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Mineral traceability gap. Appropriate response: Request origin and apply risk-based due diligence. Evidence to review: Chain of custody and origin risk assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 676,
    "category": 3,
    "text": "Responsible sourcing claimed without identifying smelters. Which response best addresses this situation?",
    "options": [
      "Request origin and apply risk-based due diligence",
      "Assess risks and agree corrective measures",
      "Verify channel, history and acceptance requirements",
      "Apply change control and assess requalification"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Mineral traceability gap. Appropriate response: Request origin and apply risk-based due diligence. Evidence to review: Chain of custody and origin risk assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 677,
    "category": 3,
    "text": "Responsible sourcing claimed without identifying smelters. Proposed response: Request origin and apply risk-based due diligence. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Correspondence between specification, batch and acceptance",
      "Chain of custody and origin risk assessment",
      "Origin map and independent capacity",
      "Use inventory and legal assessment"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Mineral traceability gap. Appropriate response: Request origin and apply risk-based due diligence. Evidence to review: Chain of custody and origin risk assessment. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 678,
    "category": 3,
    "text": "Fast alternative supplier with limited capacity. Which issue is most directly relevant?",
    "options": [
      "Social risk at indirect tiers",
      "Authenticity and origin risk",
      "Insufficient capacity during peaks",
      "Uncontrolled configuration change"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Insufficient capacity during peaks. Appropriate response: Assess capacity, quality and demand. Evidence to review: Demonstrated capacity and conforming deliveries. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 679,
    "category": 3,
    "text": "Fast alternative supplier with limited capacity. Which response best addresses this situation?",
    "options": [
      "Hold acceptance pending technical and quality review",
      "Map dependencies and qualified alternative sources",
      "Review applicability, timelines and alternatives",
      "Assess capacity, quality and demand"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Insufficient capacity during peaks. Appropriate response: Assess capacity, quality and demand. Evidence to review: Demonstrated capacity and conforming deliveries. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 680,
    "category": 3,
    "text": "Fast alternative supplier with limited capacity. Proposed response: Assess capacity, quality and demand. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Demonstrated capacity and conforming deliveries",
      "Origin documentation and authorised acceptance",
      "Notification, assessment and traceable approval",
      "Chain of custody and origin risk assessment"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Insufficient capacity during peaks. Appropriate response: Assess capacity, quality and demand. Evidence to review: Demonstrated capacity and conforming deliveries. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 681,
    "category": 3,
    "text": "Subcontractors with limited labour-condition visibility. Which issue is most directly relevant?",
    "options": [
      "Documentary mismatch with purchase requirements",
      "Social risk at indirect tiers",
      "Hidden upstream concentration",
      "Regulatory risk and process dependency"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Social risk at indirect tiers. Appropriate response: Assess risks and agree corrective measures. Evidence to review: Assessment and corrective action closure. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 682,
    "category": 3,
    "text": "Subcontractors with limited labour-condition visibility. Which response best addresses this situation?",
    "options": [
      "Verify channel, history and acceptance requirements",
      "Apply change control and assess requalification",
      "Assess risks and agree corrective measures",
      "Request origin and apply risk-based due diligence"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Social risk at indirect tiers. Appropriate response: Assess risks and agree corrective measures. Evidence to review: Assessment and corrective action closure. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 683,
    "category": 3,
    "text": "Subcontractors with limited labour-condition visibility. Proposed response: Assess risks and agree corrective measures. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Origin map and independent capacity",
      "Use inventory and legal assessment",
      "Demonstrated capacity and conforming deliveries",
      "Assessment and corrective action closure"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Social risk at indirect tiers. Appropriate response: Assess risks and agree corrective measures. Evidence to review: Assessment and corrective action closure. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 684,
    "category": 3,
    "text": "Material with certificate for a different specification. Which issue is most directly relevant?",
    "options": [
      "Documentary mismatch with purchase requirements",
      "Authenticity and origin risk",
      "Uncontrolled configuration change",
      "Mineral traceability gap"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Documentary mismatch with purchase requirements. Appropriate response: Hold acceptance pending technical and quality review. Evidence to review: Correspondence between specification, batch and acceptance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 685,
    "category": 3,
    "text": "Material with certificate for a different specification. Which response best addresses this situation?",
    "options": [
      "Map dependencies and qualified alternative sources",
      "Hold acceptance pending technical and quality review",
      "Review applicability, timelines and alternatives",
      "Assess capacity, quality and demand"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Documentary mismatch with purchase requirements. Appropriate response: Hold acceptance pending technical and quality review. Evidence to review: Correspondence between specification, batch and acceptance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 686,
    "category": 3,
    "text": "Material with certificate for a different specification. Proposed response: Hold acceptance pending technical and quality review. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Notification, assessment and traceable approval",
      "Chain of custody and origin risk assessment",
      "Correspondence between specification, batch and acceptance",
      "Assessment and corrective action closure"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Documentary mismatch with purchase requirements. Appropriate response: Hold acceptance pending technical and quality review. Evidence to review: Correspondence between specification, batch and acceptance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 687,
    "category": 3,
    "text": "Urgent purchase through a new intermediary. Proposed response: Verify channel, history and acceptance requirements. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Use inventory and legal assessment",
      "Demonstrated capacity and conforming deliveries",
      "Correspondence between specification, batch and acceptance",
      "Origin documentation and authorised acceptance"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Authenticity and origin risk. Appropriate response: Verify channel, history and acceptance requirements. Evidence to review: Origin documentation and authorised acceptance. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 688,
    "category": 4,
    "text": "Indicator changes methodology mid-year. Which issue is most directly relevant?",
    "options": [
      "Break in time-series comparability",
      "Missing verifiable baseline",
      "Insufficient measurement coverage",
      "Double counting or incorrect attribution"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Break in time-series comparability. Appropriate response: Document change and recalculate baseline if feasible. Evidence to review: Comparable series and methodological explanation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 689,
    "category": 4,
    "text": "Indicator changes methodology mid-year. Which response best addresses this situation?",
    "options": [
      "Assign owner, milestones and review",
      "Document change and recalculate baseline if feasible",
      "Review cause and verify revised action",
      "Define owners, permissions and quality criteria"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Break in time-series comparability. Appropriate response: Document change and recalculate baseline if feasible. Evidence to review: Comparable series and methodological explanation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 690,
    "category": 4,
    "text": "Indicator changes methodology mid-year. Proposed response: Document change and recalculate baseline if feasible. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Coverage and uncertainty range",
      "Traceable inventories and consolidation rules",
      "Comparable series and methodological explanation",
      "Common methodology sheet or justification of non-comparability"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Break in time-series comparability. Appropriate response: Document change and recalculate baseline if feasible. Evidence to review: Comparable series and methodological explanation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 691,
    "category": 4,
    "text": "Emissions reduction without baseline year. Which issue is most directly relevant?",
    "options": [
      "Missing ownership and monitoring",
      "Ineffectiveness against root cause",
      "Data access and quality governance",
      "Missing verifiable baseline"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Missing verifiable baseline. Appropriate response: Define baseline year, boundary and method. Evidence to review: Baseline inventory and reproducible calculation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 692,
    "category": 4,
    "text": "Emissions reduction without baseline year. Which response best addresses this situation?",
    "options": [
      "Define baseline year, boundary and method",
      "Identify missing data and bound claim",
      "Separate boundaries and attribution rules",
      "Align metrics or separate results with boundaries"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Missing verifiable baseline. Appropriate response: Define baseline year, boundary and method. Evidence to review: Baseline inventory and reproducible calculation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 693,
    "category": 4,
    "text": "Emissions reduction without baseline year. Proposed response: Define baseline year, boundary and method. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Recurrence monitoring over defined period",
      "Baseline inventory and reproducible calculation",
      "Authorised source register and validation",
      "Comparable series and methodological explanation"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Missing verifiable baseline. Appropriate response: Define baseline year, boundary and method. Evidence to review: Baseline inventory and reproducible calculation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 694,
    "category": 4,
    "text": "Environmental target without owner. Which issue is most directly relevant?",
    "options": [
      "Insufficient measurement coverage",
      "Double counting or incorrect attribution",
      "Missing ownership and monitoring",
      "Methodological incomparability"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Missing ownership and monitoring. Appropriate response: Assign owner, milestones and review. Evidence to review: Record of owners, progress and decisions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 695,
    "category": 4,
    "text": "Environmental target without owner. Which response best addresses this situation?",
    "options": [
      "Review cause and verify revised action",
      "Define owners, permissions and quality criteria",
      "Document change and recalculate baseline if feasible",
      "Assign owner, milestones and review"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Missing ownership and monitoring. Appropriate response: Assign owner, milestones and review. Evidence to review: Record of owners, progress and decisions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 696,
    "category": 4,
    "text": "Environmental target without owner. Proposed response: Assign owner, milestones and review. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Record of owners, progress and decisions",
      "Traceable inventories and consolidation rules",
      "Common methodology sheet or justification of non-comparability",
      "Baseline inventory and reproducible calculation"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Missing ownership and monitoring. Appropriate response: Assign owner, milestones and review. Evidence to review: Record of owners, progress and decisions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 697,
    "category": 4,
    "text": "Consumption improvement with incomplete data. Which issue is most directly relevant?",
    "options": [
      "Ineffectiveness against root cause",
      "Insufficient measurement coverage",
      "Data access and quality governance",
      "Break in time-series comparability"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Insufficient measurement coverage. Appropriate response: Identify missing data and bound claim. Evidence to review: Coverage and uncertainty range. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 698,
    "category": 4,
    "text": "Consumption improvement with incomplete data. Which response best addresses this situation?",
    "options": [
      "Separate boundaries and attribution rules",
      "Align metrics or separate results with boundaries",
      "Identify missing data and bound claim",
      "Define baseline year, boundary and method"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Insufficient measurement coverage. Appropriate response: Identify missing data and bound claim. Evidence to review: Coverage and uncertainty range. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 699,
    "category": 4,
    "text": "Consumption improvement with incomplete data. Proposed response: Identify missing data and bound claim. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Authorised source register and validation",
      "Comparable series and methodological explanation",
      "Record of owners, progress and decisions",
      "Coverage and uncertainty range"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Insufficient measurement coverage. Appropriate response: Identify missing data and bound claim. Evidence to review: Coverage and uncertainty range. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 700,
    "category": 4,
    "text": "Corrective action fails to prevent recurrence. Which issue is most directly relevant?",
    "options": [
      "Ineffectiveness against root cause",
      "Double counting or incorrect attribution",
      "Methodological incomparability",
      "Missing verifiable baseline"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Ineffectiveness against root cause. Appropriate response: Review cause and verify revised action. Evidence to review: Recurrence monitoring over defined period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 701,
    "category": 4,
    "text": "Corrective action fails to prevent recurrence. Which response best addresses this situation?",
    "options": [
      "Define owners, permissions and quality criteria",
      "Review cause and verify revised action",
      "Document change and recalculate baseline if feasible",
      "Assign owner, milestones and review"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Ineffectiveness against root cause. Appropriate response: Review cause and verify revised action. Evidence to review: Recurrence monitoring over defined period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 702,
    "category": 4,
    "text": "Corrective action fails to prevent recurrence. Proposed response: Review cause and verify revised action. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Common methodology sheet or justification of non-comparability",
      "Baseline inventory and reproducible calculation",
      "Recurrence monitoring over defined period",
      "Coverage and uncertainty range"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Ineffectiveness against root cause. Appropriate response: Review cause and verify revised action. Evidence to review: Recurrence monitoring over defined period. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 703,
    "category": 4,
    "text": "Report combines own and supplier reductions. Which issue is most directly relevant?",
    "options": [
      "Data access and quality governance",
      "Break in time-series comparability",
      "Missing ownership and monitoring",
      "Double counting or incorrect attribution"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Double counting or incorrect attribution. Appropriate response: Separate boundaries and attribution rules. Evidence to review: Traceable inventories and consolidation rules. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 704,
    "category": 4,
    "text": "Report combines own and supplier reductions. Which response best addresses this situation?",
    "options": [
      "Separate boundaries and attribution rules",
      "Align metrics or separate results with boundaries",
      "Define baseline year, boundary and method",
      "Identify missing data and bound claim"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Double counting or incorrect attribution. Appropriate response: Separate boundaries and attribution rules. Evidence to review: Traceable inventories and consolidation rules. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 705,
    "category": 4,
    "text": "Report combines own and supplier reductions. Proposed response: Separate boundaries and attribution rules. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Comparable series and methodological explanation",
      "Traceable inventories and consolidation rules",
      "Record of owners, progress and decisions",
      "Recurrence monitoring over defined period"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Double counting or incorrect attribution. Appropriate response: Separate boundaries and attribution rules. Evidence to review: Traceable inventories and consolidation rules. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 706,
    "category": 4,
    "text": "Proposal requires internal data from several functions. Which issue is most directly relevant?",
    "options": [
      "Methodological incomparability",
      "Missing verifiable baseline",
      "Data access and quality governance",
      "Insufficient measurement coverage"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Data access and quality governance. Appropriate response: Define owners, permissions and quality criteria. Evidence to review: Authorised source register and validation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 707,
    "category": 4,
    "text": "Proposal requires internal data from several functions. Which response best addresses this situation?",
    "options": [
      "Document change and recalculate baseline if feasible",
      "Assign owner, milestones and review",
      "Review cause and verify revised action",
      "Define owners, permissions and quality criteria"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Data access and quality governance. Appropriate response: Define owners, permissions and quality criteria. Evidence to review: Authorised source register and validation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 708,
    "category": 4,
    "text": "Proposal requires internal data from several functions. Proposed response: Define owners, permissions and quality criteria. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Authorised source register and validation",
      "Baseline inventory and reproducible calculation",
      "Coverage and uncertainty range",
      "Traceable inventories and consolidation rules"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Data access and quality governance. Appropriate response: Define owners, permissions and quality criteria. Evidence to review: Authorised source register and validation. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 709,
    "category": 4,
    "text": "Committee compares benefits using different methods. Proposed response: Align metrics or separate results with boundaries. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Record of owners, progress and decisions",
      "Common methodology sheet or justification of non-comparability",
      "Recurrence monitoring over defined period",
      "Authorised source register and validation"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Methodological incomparability. Appropriate response: Align metrics or separate results with boundaries. Evidence to review: Common methodology sheet or justification of non-comparability. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 710,
    "category": 5,
    "text": "Critical equipment repeatedly fails in the same mode. Which issue is most directly relevant?",
    "options": [
      "Unusable inventory from expiry",
      "Skill dependency without coverage",
      "Recurring availability loss",
      "Interaction of dependencies and recovery"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Recurring availability loss. Appropriate response: Analyse cause and prevention with Engineering. Evidence to review: Failure frequency and availability before and after. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 711,
    "category": 5,
    "text": "Critical equipment repeatedly fails in the same mode. Which response best addresses this situation?",
    "options": [
      "Assess redundancy and tool availability",
      "Compare alternatives under success and failure",
      "Compare lead time and disruption scenarios",
      "Analyse cause and prevention with Engineering"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Recurring availability loss. Appropriate response: Analyse cause and prevention with Engineering. Evidence to review: Failure frequency and availability before and after. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 712,
    "category": 5,
    "text": "Critical equipment repeatedly fails in the same mode. Proposed response: Analyse cause and prevention with Engineering. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Failure frequency and availability before and after",
      "Skills matrix and shift coverage",
      "Continuity exercises with combined disruptions",
      "History or traceable assumptions by failure type"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Recurring availability loss. Appropriate response: Analyse cause and prevention with Engineering. Evidence to review: Failure frequency and availability before and after. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 713,
    "category": 5,
    "text": "Spares reserve with limited shelf life. Which issue is most directly relevant?",
    "options": [
      "Single point of maintenance failure",
      "Unusable inventory from expiry",
      "Delay from unsuccessful repair",
      "Trade-off between speed and concentration"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Unusable inventory from expiry. Appropriate response: Manage authorised rotation and demand. Evidence to review: Usable inventory and demand coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 714,
    "category": 5,
    "text": "Spares reserve with limited shelf life. Which response best addresses this situation?",
    "options": [
      "Assess cross-training and authorised coverage",
      "Assess compound scenarios and priority functions",
      "Manage authorised rotation and demand",
      "Distinguish scenarios and time distribution"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Unusable inventory from expiry. Appropriate response: Manage authorised rotation and demand. Evidence to review: Usable inventory and demand coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 715,
    "category": 5,
    "text": "Spares reserve with limited shelf life. Proposed response: Manage authorised rotation and demand. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Lead-time distribution and success probability",
      "Deadline attainment and recovery in comparable scenarios",
      "Failure frequency and availability before and after",
      "Usable inventory and demand coverage"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Unusable inventory from expiry. Appropriate response: Manage authorised rotation and demand. Evidence to review: Usable inventory and demand coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 716,
    "category": 5,
    "text": "Service depends on one test tool. Which issue is most directly relevant?",
    "options": [
      "Single point of maintenance failure",
      "Skill dependency without coverage",
      "Interaction of dependencies and recovery",
      "Variability hidden by a single value"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Single point of maintenance failure. Appropriate response: Assess redundancy and tool availability. Evidence to review: Downtime and demonstrated alternative capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 717,
    "category": 5,
    "text": "Service depends on one test tool. Which response best addresses this situation?",
    "options": [
      "Compare alternatives under success and failure",
      "Assess redundancy and tool availability",
      "Compare lead time and disruption scenarios",
      "Analyse cause and prevention with Engineering"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Single point of maintenance failure. Appropriate response: Assess redundancy and tool availability. Evidence to review: Downtime and demonstrated alternative capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 718,
    "category": 5,
    "text": "Service depends on one test tool. Proposed response: Assess redundancy and tool availability. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Continuity exercises with combined disruptions",
      "History or traceable assumptions by failure type",
      "Downtime and demonstrated alternative capacity",
      "Usable inventory and demand coverage"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Single point of maintenance failure. Appropriate response: Assess redundancy and tool availability. Evidence to review: Downtime and demonstrated alternative capacity. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 719,
    "category": 5,
    "text": "Continuity depends on a single specialist skill. Which issue is most directly relevant?",
    "options": [
      "Delay from unsuccessful repair",
      "Trade-off between speed and concentration",
      "Recurring availability loss",
      "Skill dependency without coverage"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Skill dependency without coverage. Appropriate response: Assess cross-training and authorised coverage. Evidence to review: Skills matrix and shift coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 720,
    "category": 5,
    "text": "Continuity depends on a single specialist skill. Which response best addresses this situation?",
    "options": [
      "Assess cross-training and authorised coverage",
      "Assess compound scenarios and priority functions",
      "Distinguish scenarios and time distribution",
      "Manage authorised rotation and demand"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Skill dependency without coverage. Appropriate response: Assess cross-training and authorised coverage. Evidence to review: Skills matrix and shift coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 721,
    "category": 5,
    "text": "Continuity depends on a single specialist skill. Proposed response: Assess cross-training and authorised coverage. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Deadline attainment and recovery in comparable scenarios",
      "Skills matrix and shift coverage",
      "Failure frequency and availability before and after",
      "Downtime and demonstrated alternative capacity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Skill dependency without coverage. Appropriate response: Assess cross-training and authorised coverage. Evidence to review: Skills matrix and shift coverage. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 722,
    "category": 5,
    "text": "Fast repair with uncertain success. Which issue is most directly relevant?",
    "options": [
      "Interaction of dependencies and recovery",
      "Variability hidden by a single value",
      "Delay from unsuccessful repair",
      "Unusable inventory from expiry"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Delay from unsuccessful repair. Appropriate response: Compare alternatives under success and failure. Evidence to review: Lead-time distribution and success probability. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 723,
    "category": 5,
    "text": "Fast repair with uncertain success. Which response best addresses this situation?",
    "options": [
      "Compare lead time and disruption scenarios",
      "Analyse cause and prevention with Engineering",
      "Assess redundancy and tool availability",
      "Compare alternatives under success and failure"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Delay from unsuccessful repair. Appropriate response: Compare alternatives under success and failure. Evidence to review: Lead-time distribution and success probability. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 724,
    "category": 5,
    "text": "Fast repair with uncertain success. Proposed response: Compare alternatives under success and failure. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Lead-time distribution and success probability",
      "History or traceable assumptions by failure type",
      "Usable inventory and demand coverage",
      "Skills matrix and shift coverage"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Delay from unsuccessful repair. Appropriate response: Compare alternatives under success and failure. Evidence to review: Lead-time distribution and success probability. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 725,
    "category": 5,
    "text": "Service centre faces simultaneous disruptions. Which issue is most directly relevant?",
    "options": [
      "Trade-off between speed and concentration",
      "Interaction of dependencies and recovery",
      "Recurring availability loss",
      "Single point of maintenance failure"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Interaction of dependencies and recovery. Appropriate response: Assess compound scenarios and priority functions. Evidence to review: Continuity exercises with combined disruptions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 726,
    "category": 5,
    "text": "Service centre faces simultaneous disruptions. Which response best addresses this situation?",
    "options": [
      "Distinguish scenarios and time distribution",
      "Manage authorised rotation and demand",
      "Assess compound scenarios and priority functions",
      "Assess cross-training and authorised coverage"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Interaction of dependencies and recovery. Appropriate response: Assess compound scenarios and priority functions. Evidence to review: Continuity exercises with combined disruptions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 727,
    "category": 5,
    "text": "Service centre faces simultaneous disruptions. Proposed response: Assess compound scenarios and priority functions. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Failure frequency and availability before and after",
      "Downtime and demonstrated alternative capacity",
      "Lead-time distribution and success probability",
      "Continuity exercises with combined disruptions"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Interaction of dependencies and recovery. Appropriate response: Assess compound scenarios and priority functions. Evidence to review: Continuity exercises with combined disruptions. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 728,
    "category": 5,
    "text": "Faster delivery increases single-supplier dependency. Which issue is most directly relevant?",
    "options": [
      "Trade-off between speed and concentration",
      "Variability hidden by a single value",
      "Unusable inventory from expiry",
      "Skill dependency without coverage"
    ],
    "correctIndex": 0,
    "explanation": "Relevant issue: Trade-off between speed and concentration. Appropriate response: Compare lead time and disruption scenarios. Evidence to review: Deadline attainment and recovery in comparable scenarios. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 729,
    "category": 5,
    "text": "Faster delivery increases single-supplier dependency. Which response best addresses this situation?",
    "options": [
      "Analyse cause and prevention with Engineering",
      "Compare lead time and disruption scenarios",
      "Assess redundancy and tool availability",
      "Compare alternatives under success and failure"
    ],
    "correctIndex": 1,
    "explanation": "Relevant issue: Trade-off between speed and concentration. Appropriate response: Compare lead time and disruption scenarios. Evidence to review: Deadline attainment and recovery in comparable scenarios. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 730,
    "category": 5,
    "text": "Faster delivery increases single-supplier dependency. Proposed response: Compare lead time and disruption scenarios. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Usable inventory and demand coverage",
      "Skills matrix and shift coverage",
      "Deadline attainment and recovery in comparable scenarios",
      "Continuity exercises with combined disruptions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant issue: Trade-off between speed and concentration. Appropriate response: Compare lead time and disruption scenarios. Evidence to review: Deadline attainment and recovery in comparable scenarios. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 731,
    "category": 5,
    "text": "One recovery time for all failures. Proposed response: Distinguish scenarios and time distribution. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Downtime and demonstrated alternative capacity",
      "Lead-time distribution and success probability",
      "Deadline attainment and recovery in comparable scenarios",
      "History or traceable assumptions by failure type"
    ],
    "correctIndex": 3,
    "explanation": "Relevant issue: Variability hidden by a single value. Appropriate response: Distinguish scenarios and time distribution. Evidence to review: History or traceable assumptions by failure type. Assess the result against the defined function, boundaries and applicable requirements.",
    "difficulty": "advanced"
  }
];
