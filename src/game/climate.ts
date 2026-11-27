import type { Question } from './types';
export const CLIMATE_MODE = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('track') === 'climate';
export const CLIMATE_NAMES = ["Climate fundamentals","Product climate resilience","Design & validation","Operations & supply","Extreme events","Evidence & decisions"];
export const CLIMATE_SHORT_NAMES = ["Climate","Product","Design","Operations","Extreme events","Evidence"];
export const CLIMATE_QUESTIONS: Question[] = [
  {
    "id": 1001,
    "category": 0,
    "text": "A plant cuts emissions and protects equipment from future heatwaves. Which action is adaptation?",
    "options": [
      "Protect equipment against future heat",
      "Only cut emissions",
      "Buy offsets",
      "Measure carbon footprint"
    ],
    "correctIndex": 0,
    "explanation": "Adaptation reduces present or future physical risks; mitigation limits the causes of climate change. They can complement each other but are not equivalent."
  },
  {
    "id": 1002,
    "category": 0,
    "text": "A hangar is exposed to increasing heat. What characterises its vulnerability?",
    "options": [
      "Regional temperature alone",
      "System sensitivity and capacity to cope with heat",
      "Location without system data",
      "Emissions inventory"
    ],
    "correctIndex": 1,
    "explanation": "Heat is the hazard, exposure identifies what is affected, and vulnerability depends on the sensitivity and coping capacity of exposed systems."
  },
  {
    "id": 1003,
    "category": 0,
    "text": "How should climate risk be assessed for a product with decades of service?",
    "options": [
      "Only last year's average",
      "A global projection without context",
      "Scenarios, operating regions, time horizon and technical requirements",
      "Manufacturing emissions"
    ],
    "correctIndex": 2,
    "explanation": "Historical averages alone are insufficient for a long service life. Relevant scenarios, exposure and technical limits are needed, with explicit uncertainty."
  },
  {
    "id": 1004,
    "category": 0,
    "text": "A measure preserves a function during a heat disruption. What does it demonstrate if verified?",
    "options": [
      "Absence of all future risk",
      "Climate neutrality",
      "Certification of the entire aircraft",
      "Resilience of that function under the assessed conditions"
    ],
    "correctIndex": 3,
    "explanation": "Resilience concerns preserving or restoring functions during disruption. The conclusion is limited to the conditions, function and evidence examined."
  },
  {
    "id": 1005,
    "category": 1,
    "text": "In extreme heat, what should be reviewed before changing an avionics system?",
    "options": [
      "Thermal exposure, limits, cooling and requirements",
      "Increase cooling without reviewing constraints",
      "Purchase cost alone",
      "Assume qualification covers any temperature"
    ],
    "correctIndex": 0,
    "explanation": "Heat can reduce thermal margins. Engineering must compare exposure and requirements with relevant data and tests before proposing changes."
  },
  {
    "id": 1006,
    "category": 1,
    "text": "In warmer conditions at equal pressure, air may be less dense. What analysis is appropriate?",
    "options": [
      "Apply a fixed percentage to all aircraft",
      "Review performance and margins using authorised models",
      "Assume density does not affect performance",
      "Change limits without validation"
    ],
    "correctIndex": 1,
    "explanation": "Air density can affect lift and propulsion performance. The effect depends on configuration and conditions; authorised analysis is required."
  },
  {
    "id": 1007,
    "category": 1,
    "text": "An environment has greater particle exposure. What should Engineering distinguish?",
    "options": [
      "Visual appearance alone",
      "Dust and abrasion as one identical phenomenon",
      "Deposition, blockage, erosion and effects on functions",
      "Filter mass alone"
    ],
    "correctIndex": 2,
    "explanation": "Accumulation and erosion are distinct mechanisms. Tests should represent relevant particles and conditions, with specific acceptance criteria."
  },
  {
    "id": 1008,
    "category": 1,
    "text": "A regional projection indicates possible changes in storm exposure. What response is defensible?",
    "options": [
      "Declare all storms will increase everywhere",
      "Immediately redesign the entire platform",
      "Ignore the projection because of uncertainty",
      "Analyse specific hazards, requirements and evidence gaps"
    ],
    "correctIndex": 3,
    "explanation": "Hazard evolution depends on region and phenomenon. Exposure, requirements and data must be assessed before concluding that a gap exists."
  },
  {
    "id": 1009,
    "category": 2,
    "text": "How should a design requirement review begin for future climate exposure?",
    "options": [
      "Compare scenarios with requirements and qualification evidence",
      "Change all requirements without analysis",
      "Use only a global average",
      "Remove existing margins"
    ],
    "correctIndex": 0,
    "explanation": "Gap analysis identifies which requirements and evidence cover exposure and which need review. It does not replace technical approval processes."
  },
  {
    "id": 1010,
    "category": 2,
    "text": "A bio-inspired coating reduces dust deposition in a laboratory. What is missing?",
    "options": [
      "Nothing: lower deposition proves abrasion resistance",
      "Tests of erosion, durability, compatibility and function",
      "Only a photograph",
      "A marketing statement"
    ],
    "correctIndex": 1,
    "explanation": "Lower deposition does not imply lower erosion or durability. Properties, adverse effects and technical criteria must be checked before extrapolating results."
  },
  {
    "id": 1011,
    "category": 2,
    "text": "Two thermal protections have different masses and energy use. How should they be compared?",
    "options": [
      "Only lowest temperature",
      "Only initial mass",
      "Same function and exposure, limits, mass, energy and maintenance",
      "Only prototype cost"
    ],
    "correctIndex": 2,
    "explanation": "A measure may shift impacts or introduce constraints. An equivalent comparison considers requirements, performance, adverse effects and service life."
  },
  {
    "id": 1012,
    "category": 2,
    "text": "A design passes an initial test, but its life under humidity cycles is uncertain. What should happen?",
    "options": [
      "Declare extended service life",
      "Remove inspections",
      "Treat the first test as sufficient",
      "Durability tests, criteria and specialist review"
    ],
    "correctIndex": 3,
    "explanation": "Initial response does not establish durability. Representative cycles and degradation assessment help verify the hypothesis against defined requirements."
  },
  {
    "id": 1013,
    "category": 3,
    "text": "A heatwave threatens ground support equipment. What should be assessed first?",
    "options": [
      "Critical functions, thermal limits and authorised measures",
      "Operate outside limits to avoid delays",
      "Cut emissions as the only response",
      "Replace everything without diagnosis"
    ],
    "correctIndex": 0,
    "explanation": "Operational adaptation protects functions within approved limits. Identifying criticality and exposure allows measures to be compared without compromising safety."
  },
  {
    "id": 1014,
    "category": 3,
    "text": "Flooding could interrupt electricity supply. What should be assessed?",
    "options": [
      "Annual consumption alone",
      "Exposure, critical loads, redundancy and recovery",
      "Electricity tariff alone",
      "Buy equipment without reviewing location"
    ],
    "correctIndex": 1,
    "explanation": "Continuity requires knowing which functions depend on energy and whether alternatives share exposure. Measures must be verified under relevant scenarios."
  },
  {
    "id": 1015,
    "category": 3,
    "text": "Two suppliers depend on the same flood-exposed port. What does this imply?",
    "options": [
      "Guaranteed redundancy from two contracts",
      "No risk because suppliers differ",
      "Potential common failure; review independent routes and qualified alternatives",
      "Ignore qualification"
    ],
    "correctIndex": 2,
    "explanation": "Nominal diversification does not remove common dependencies. Supply adaptation requires assessing exposure, independence, feasibility and qualification."
  },
  {
    "id": 1016,
    "category": 3,
    "text": "A remote base studies alternative fuel to reduce interruptions. What must be checked?",
    "options": [
      "Only the sustainable label",
      "Any blend is automatically suitable",
      "Transport emissions alone",
      "Availability, logistics, storage, compatibility and authorisations"
    ],
    "correctIndex": 3,
    "explanation": "Lower emissions do not guarantee supply security. An alternative must be feasible in local conditions and meet technical and authorisation requirements."
  },
  {
    "id": 1017,
    "category": 4,
    "text": "Wildfire smoke affects an operating area. What information is needed?",
    "options": [
      "Exposure, information quality, functions and authorised procedures",
      "Only burned area",
      "An unsourced forecast",
      "Assume every operation can continue"
    ],
    "correctIndex": 0,
    "explanation": "Wildfires can affect people, infrastructure and operations. Response depends on reliable information, applicable limits and authorised coordination."
  },
  {
    "id": 1018,
    "category": 4,
    "text": "A wildfire detection system produces faster alerts. What else should be measured?",
    "options": [
      "Only number of alerts",
      "False alarms, missed detections, reliability and usefulness for response",
      "Only screen size",
      "Assume damage reduction is proven"
    ],
    "correctIndex": 1,
    "explanation": "Latency is a partial indicator. Detection quality and integration with response authorities must be assessed before claiming a benefit."
  },
  {
    "id": 1019,
    "category": 4,
    "text": "A storm damages support infrastructure. How should recovery be prioritised?",
    "options": [
      "Only most expensive asset",
      "Restore everything at once without resources",
      "Safety, critical functions, dependencies and recovery objectives",
      "Ignore external dependencies"
    ],
    "correctIndex": 2,
    "explanation": "Recovery protects people and restores critical functions according to procedures, resources and dependencies; objectives require monitoring."
  },
  {
    "id": 1020,
    "category": 4,
    "text": "Hail protection works on a test coupon. What conclusion is valid?",
    "options": [
      "Guaranteed protection against any storm",
      "Aircraft automatically qualified",
      "No inspections needed",
      "Result limited to coupon and conditions; assess scaling and requirements"
    ],
    "correctIndex": 3,
    "explanation": "A material test does not establish whole-platform behaviour. Representativeness, failure modes and requirements must be assessed with specialists."
  },
  {
    "id": 1021,
    "category": 5,
    "text": "A fictional model estimates fewer interruption hours after a measure. What should be communicated?",
    "options": [
      "Result conditional on assumptions; real evidence is required",
      "Proven real operational improvement",
      "Approval of the measure",
      "Certified fleet availability"
    ],
    "correctIndex": 0,
    "explanation": "A simulation explores hypotheses, not proves operational outcomes. Scope, uncertainty and pending validation must be communicated."
  },
  {
    "id": 1022,
    "category": 5,
    "text": "Which indicator helps assess thermal protection for equipment?",
    "options": [
      "Number of meetings",
      "Time outside the thermal limit under equivalent exposure",
      "Equipment colour",
      "Number of untested ideas"
    ],
    "correctIndex": 1,
    "explanation": "An indicator must link the hazard to the function and a verifiable technical criterion. Comparison requires equivalent exposure and conditions."
  },
  {
    "id": 1023,
    "category": 5,
    "text": "Two options change ranking depending on the climate scenario. What should happen?",
    "options": [
      "Always choose the favourable scenario",
      "Hide adverse results",
      "Analyse sensitivity, thresholds, uncertainty and review with new data",
      "Average without checking consequences"
    ],
    "correctIndex": 2,
    "explanation": "Sensitivity identifies conditions that change the decision. A defensible recommendation specifies scenarios, limits, owners and review criteria."
  },
  {
    "id": 1024,
    "category": 5,
    "text": "How can climate learning be transferred to work?",
    "options": [
      "Propose a benefit without evidence",
      "Apply technical changes without authorisation",
      "Only count badges",
      "Identify function, hazard, vulnerability, measure, indicator and owner"
    ],
    "correctIndex": 3,
    "explanation": "Professional transfer turns an idea into a verifiable hypothesis and routes it to appropriate owners. The game does not authorise real changes."
  }
];
