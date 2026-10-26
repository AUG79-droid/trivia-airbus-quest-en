import { Question } from './types';

/** 48 applied questions across six cross-functional categories. Educational examples, not operational or regulatory approvals. */
export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "category": 0,
    "text": "In an avionics retrofit, which comparison is suitable for evaluating circularity?",
    "options": [
      "A new board versus any repair",
      "Two solutions delivering the same function and requirements over their lifecycle",
      "The purchase price alone",
      "The weight of the packaging"
    ],
    "correctIndex": 1,
    "explanation": "Start with an equivalent function, technical acceptance criteria and service horizon. Then compare materials, maintenance, energy, spares and end of life; a single number cannot describe the entire lifecycle."
  },
  {
    "id": 2,
    "category": 0,
    "text": "What belongs within the scope of an aerospace component lifecycle assessment?",
    "options": [
      "Manufacturing emissions only",
      "End-of-life recycling only",
      "Relevant stages from raw materials to use, maintenance and end of life",
      "A supplier photograph"
    ],
    "correctIndex": 2,
    "explanation": "The boundary should cover the significant stages for the decision: raw materials, manufacturing, transport, operation, maintenance and end of life, without omitting material impacts."
  },
  {
    "id": 3,
    "category": 0,
    "text": "A repaired panel uses less material than a new one, but the repair remains unqualified. What should happen?",
    "options": [
      "Install it for its lower material use",
      "Reject any repair possibility",
      "Accept it because the supplier calls it circular",
      "Complete technical verification before comparing acceptable options"
    ],
    "correctIndex": 3,
    "explanation": "Repairability adds value only when structural integrity, safety and the approved configuration are maintained. First validate the repair; then compare technically acceptable solutions."
  },
  {
    "id": 4,
    "category": 0,
    "text": "A replacement part uses more material but may last twice as long. How should this be assessed?",
    "options": [
      "Compare impacts for equivalent service over a defined period",
      "Always choose the lightest",
      "Automatically prefer the longest claimed life",
      "Choose by material colour"
    ],
    "correctIndex": 0,
    "explanation": "Longer service life may prevent replacements despite a higher initial footprint. Check actual durability, maintenance and use conditions within a common functional unit."
  },
  {
    "id": 5,
    "category": 0,
    "text": "Which design requirement helps address in-service obsolescence?",
    "options": [
      "Permanently seal every assembly",
      "Support access, controlled replacement and documented interfaces",
      "Remove configuration information",
      "Optimise only for initial cost"
    ],
    "correctIndex": 1,
    "explanation": "Modularity, accessibility and documented interfaces can support repair and upgrades. Their benefit depends on technical verification and avoiding disproportionate impacts elsewhere."
  },
  {
    "id": 6,
    "category": 0,
    "text": "A supplier claims its composite is '100% recyclable'. What evidence is still needed?",
    "options": [
      "Nothing if it is in a brochure",
      "Only a recycling symbol",
      "An available process, material yield, output quality and a credible recovery route",
      "A marketing opinion"
    ],
    "correctIndex": 2,
    "explanation": "The existence of recycling technology does not prove collection, industrial feasibility or adequate recovered-material quality. The claim needs a documented scope and evidence."
  },
  {
    "id": 7,
    "category": 0,
    "text": "Which metric makes design-for-repair decisions more verifiable?",
    "options": [
      "Number of project presentations",
      "A circular economy slogan",
      "Age of the design",
      "Measured access, tools, disassembly time and acceptance criteria"
    ],
    "correctIndex": 3,
    "explanation": "Repairability indicators must reflect real tasks, including access, tools, time, replacements and acceptance limits, so engineers can verify the requirement."
  },
  {
    "id": 8,
    "category": 0,
    "text": "Two alternatives have nearly identical impacts within the uncertainty range. What is appropriate?",
    "options": [
      "Test sensitivity and disclose uncertainty before ranking them",
      "Declare the smallest decimal value the winner",
      "Hide the uncertainty band",
      "Announce overall environmental approval"
    ],
    "correctIndex": 0,
    "explanation": "Small estimated differences may not be meaningful when inventories are uncertain. A defensible evaluation identifies influential assumptions and avoids false precision."
  },
  {
    "id": 101,
    "category": 1,
    "text": "A critical spare must arrive within 36 hours. What should be checked first?",
    "options": [
      "The lowest-emission route regardless of schedule",
      "Compatible, traceable stock that can meet the deadline",
      "The cheapest carrier without configuration checks",
      "A randomly selected shipper"
    ],
    "correctIndex": 1,
    "explanation": "Nearby approved stock may reduce transport while protecting availability. Confirm configuration, records, timing and cancellation of the alternative shipment before claiming avoided movement."
  },
  {
    "id": 102,
    "category": 1,
    "text": "Energy per square metre falls 6%, while absolute kWh rises 2%. What should be reported?",
    "options": [
      "That the facility cut all energy use by 6%",
      "Only the absolute increase",
      "Both figures, the reporting period and relevant activity changes",
      "That the facility has no emissions"
    ],
    "correctIndex": 2,
    "explanation": "Energy intensity and absolute use answer different questions. Reporting both prevents growth in activity or changes in floor area from becoming a misleading headline."
  },
  {
    "id": 103,
    "category": 1,
    "text": "An energy-saving change could reduce workshop extraction airflow. What is the responsible decision?",
    "options": [
      "Implement before testing",
      "Abandon all efficiency measures forever",
      "Measure only afterwards and say nothing",
      "Validate technical and safety conditions with the responsible teams first"
    ],
    "correctIndex": 3,
    "explanation": "Energy measures cannot override process safety. Verify ventilation limits, operational needs and the measurement of savings within the permitted operating range."
  },
  {
    "id": 104,
    "category": 1,
    "text": "What makes two logistics emissions quotations comparable?",
    "options": [
      "Consistent legs, mass, functional unit and allocation rules",
      "Choosing the lowest commercial estimate",
      "Comparing different destinations",
      "Leaving out the final leg"
    ],
    "correctIndex": 0,
    "explanation": "A shared boundary, transport modes, distances and allocation approach allow a defensible comparison. Supplier forecasts are not the same as verified movements."
  },
  {
    "id": 105,
    "category": 1,
    "text": "To reduce maintenance travel, what matters beyond kilometres?",
    "options": [
      "Only the theoretical driving distance",
      "Task consolidation, availability, repeat work and technical configuration",
      "The team's email count",
      "Vehicle branding"
    ],
    "correctIndex": 1,
    "explanation": "Combined visits may save journeys, but poor planning can generate rework or downtime. The comparison must cover the actual completed service."
  },
  {
    "id": 106,
    "category": 1,
    "text": "A flight analysis covers CO₂ but no non-CO₂ climate effects. What is a defensible conclusion?",
    "options": [
      "It is a complete climate assessment",
      "Non-CO₂ effects are always zero",
      "State the boundary and acknowledge the unevaluated effects",
      "Multiply the CO₂ result arbitrarily"
    ],
    "correctIndex": 2,
    "explanation": "NOx effects and contrail formation, among others, depend on conditions and require suitable approaches. A partial calculation does not establish total climate benefit."
  },
  {
    "id": 107,
    "category": 1,
    "text": "A training flight uses a SAF blend. Which statement is defensible?",
    "options": [
      "It was a zero-emission flight",
      "The fuel guarantees climate neutrality",
      "No traceability is necessary",
      "Its lifecycle GHG performance may be assessed with defined methods and evidence"
    ],
    "correctIndex": 3,
    "explanation": "Combustion still produces emissions. A possible SAF lifecycle benefit depends on pathway, blend, comparator, chain of custody and method; it does not mean zero aircraft emissions."
  },
  {
    "id": 108,
    "category": 1,
    "text": "An electricity bill drops after a retrofit, but building hours also changed. What is missing?",
    "options": [
      "Compare metered energy with a baseline adjusted for activity and conditions",
      "Attribute the entire change to the retrofit",
      "Use cost invoices as the only proof",
      "Ignore the hours change without mentioning it"
    ],
    "correctIndex": 0,
    "explanation": "Attribution must distinguish the measure from weather, activity, tariff and hours. The financial bill and physical energy consumption are different metrics."
  },
  {
    "id": 201,
    "category": 2,
    "text": "A reusable case is designed for 20 trips, but only completes four. What should the assessment use?",
    "options": [
      "The promised 20 uses",
      "Observed cycles, losses, cleaning and return transport",
      "The case's commercial name",
      "No numerical evidence"
    ],
    "correctIndex": 1,
    "explanation": "Compare impacts per intact delivery using actual performance. Designing for reuse does not prove that return logistics and maintenance work in practice."
  },
  {
    "id": 202,
    "category": 2,
    "text": "A lighter package has not passed vibration testing. What should happen?",
    "options": [
      "Use it because of lower mass",
      "Assume the supplier approved it",
      "Retain the qualified package until technical testing is completed",
      "Stop recording packaging configuration"
    ],
    "correctIndex": 2,
    "explanation": "Part protection is part of the functional requirement. Damage may create additional parts, waste, cost and transport, reversing any apparent benefit of a lighter package."
  },
  {
    "id": 203,
    "category": 2,
    "text": "A warehouse prints, signs and scans every record. Is it paperless?",
    "options": [
      "Yes, because there is a PDF",
      "Yes, if the scanner is efficient",
      "Traceability is unimportant",
      "No: redesign the workflow while retaining signatures, revisions and contingency"
    ],
    "correctIndex": 3,
    "explanation": "Digitising a record does not remove the original paper process. Real dematerialisation needs valid, accessible and controlled electronic records, including during system outages."
  },
  {
    "id": 204,
    "category": 2,
    "text": "How can alloy offcuts be recovered more effectively?",
    "options": [
      "Segregate by material specification and preserve batch traceability",
      "Mix all machining chips together",
      "Remove material labels",
      "Claim recycling without evidence"
    ],
    "correctIndex": 0,
    "explanation": "Separation by alloy and contamination prevents degradation and supports suitable recovery routes. The outcome should be documented under applicable quality and safety requirements."
  },
  {
    "id": 205,
    "category": 2,
    "text": "MRO work generates coating and solvent waste. What is appropriate?",
    "options": [
      "Put it into general waste",
      "Classify, segregate and document collection and treatment by the appropriate handler",
      "Dilute it with water",
      "Count it as recycled material"
    ],
    "correctIndex": 1,
    "explanation": "Waste classification and rules determine safe containers, segregation and traceability. Do not claim recycling or recovery without evidence of actual treatment."
  },
  {
    "id": 206,
    "category": 2,
    "text": "When is repairing an obsolete actuator preferable to replacement?",
    "options": [
      "Always, even if unqualified",
      "Only if the supplier advertises it",
      "When repair is technically approvable and lifecycle, availability and remaining life are evaluated",
      "Never, because new parts are always better"
    ],
    "correctIndex": 2,
    "explanation": "Approved repair may extend life and avoid additional production, but qualification, life limits, resource use, safety and configuration remain essential."
  },
  {
    "id": 207,
    "category": 2,
    "text": "A metal claims recycled content. What supports that percentage?",
    "options": [
      "A photograph of scrap",
      "A different material colour",
      "An undated marketing claim",
      "Traceability and a verifiable allocation method for that product scope"
    ],
    "correctIndex": 3,
    "explanation": "The reported proportion depends on input mix and allocation rules. The claim needs documentary scope and does not automatically demonstrate lower total impacts."
  },
  {
    "id": 208,
    "category": 2,
    "text": "What generally comes before recycling in circular resource management?",
    "options": [
      "Avoid unnecessary consumption and extend technically acceptable use",
      "Generate more sortable waste",
      "Buy unnecessary spares",
      "Replace serviceable components"
    ],
    "correctIndex": 0,
    "explanation": "Preventing consumption, repairing and reusing where safe can avoid resources before waste arises. Apply the hierarchy alongside technical and safety obligations."
  },
  {
    "id": 301,
    "category": 3,
    "text": "A coating arrives with a Safety Data Sheet (SDS). What does that alone demonstrate?",
    "options": [
      "Full approval of the retrofit",
      "Relevant safety information, not every REACH obligation or engineering approval",
      "Authorisation for every possible use",
      "That controls are unnecessary"
    ],
    "correctIndex": 1,
    "explanation": "An SDS has a defined purpose and scope. Applicable duties depend on substance, mixture or article, intended use, restrictions, exposure and technical release processes."
  },
  {
    "id": 302,
    "category": 3,
    "text": "A substitute coating claims to contain fewer problematic substances. When can it be released?",
    "options": [
      "When marketing describes it as greener",
      "As soon as a sample arrives",
      "After applicable chemical, engineering and process verification and authorisation",
      "If testing leaves no record"
    ],
    "correctIndex": 2,
    "explanation": "Substitution requires evidence of composition and applicable duties, performance, compatibility and process controls. An environmental preference is not automatic compliance."
  },
  {
    "id": 303,
    "category": 3,
    "text": "A supplier provides a five-year-old compliance declaration. What should be done?",
    "options": [
      "Accept without review",
      "Ignore all other evidence",
      "Avoid checking the component's intended use",
      "Verify currency, scope, revision and applicability to the supplied item"
    ],
    "correctIndex": 3,
    "explanation": "A generic or outdated declaration may not cover current requirements, materials or thresholds. The evidence must link to the specific part and obligation."
  },
  {
    "id": 304,
    "category": 3,
    "text": "3TG mineral traceability stops at the first-tier distributor. What is a sound next step?",
    "options": [
      "Request upstream information and document risks and due diligence",
      "Treat the supply chain as fully cleared",
      "Declare that no risk exists",
      "Change the indicator category"
    ],
    "correctIndex": 0,
    "explanation": "Multi-tier sourcing may require upstream supplier and origin information under the applicable diligence process. Missing visibility does not prove an absence of risk."
  },
  {
    "id": 305,
    "category": 3,
    "text": "A concern about labour rights arises at an indirect supplier. What is a proportionate response?",
    "options": [
      "Hide it because the supplier is indirect",
      "Assess evidence, escalate, investigate, act and monitor remediation",
      "Terminate every contract without assessment",
      "Publish that all suppliers comply"
    ],
    "correctIndex": 1,
    "explanation": "Responsible due diligence is risk-based and assigns ownership, supplier engagement and suitable prevention or remediation. A credible signal needs management rather than denial."
  },
  {
    "id": 306,
    "category": 3,
    "text": "A wooden crate bears an ISPM 15 mark but also looks damaged. What should the team do?",
    "options": [
      "Treat the mark as approval of all physical conditions",
      "Take a photo and do nothing else",
      "Verify both the marking and physical condition; hold or escalate when evidence warrants it",
      "Approve automatically because there is a stamp"
    ],
    "correctIndex": 2,
    "explanation": "The phytosanitary mark and physical inspection answer different questions. Follow the applicable packaging and risk-control procedure rather than assuming complete conformity."
  },
  {
    "id": 307,
    "category": 3,
    "text": "A faster spare is available, but its configuration remains unverified. What is acceptable?",
    "options": [
      "Install it to avoid delay",
      "Use it if the price is lower",
      "Change the label",
      "Prevent release until approved compatibility and traceability are verified"
    ],
    "correctIndex": 3,
    "explanation": "Speed cannot replace configuration control, conformity or airworthiness. A logistics alternative is valid only when technical and documentary requirements are met."
  },
  {
    "id": 308,
    "category": 3,
    "text": "An audit finds a recurring document-control failure. What closes it effectively?",
    "options": [
      "Root-cause corrective action with owner, deadline and effectiveness check",
      "Fix only the one document identified",
      "Delete the finding",
      "Wait for the next auditor"
    ],
    "correctIndex": 0,
    "explanation": "An immediate correction resolves one instance. A corrective and preventive action process tackles causes and verifies that the problem does not recur."
  },
  {
    "id": 401,
    "category": 4,
    "text": "A supplier's primary data for indirect emissions are missing. What should be reported?",
    "options": [
      "Zero until data arrive",
      "Identified estimates, their sources and limits, and a data-improvement plan",
      "An automatically certified reduction",
      "Only favourable records"
    ],
    "correctIndex": 1,
    "explanation": "Unknown activity does not mean zero impact. Appropriate proxy factors can be used where method, uncertainty and a route to better primary data are disclosed."
  },
  {
    "id": 402,
    "category": 4,
    "text": "A report says 'sustainable product' without defining a comparison. What is missing?",
    "options": [
      "Nothing: the phrase has a complete technical meaning",
      "The term is enough with an icon",
      "Which attribute, baseline and supporting evidence the statement refers to",
      "It can serve as product certification"
    ],
    "correctIndex": 2,
    "explanation": "Generic environmental claims can mislead when material boundaries are absent. State the specific measured or estimated performance under defined conditions."
  },
  {
    "id": 403,
    "category": 4,
    "text": "A project impact has not been measured. How should it enter the assessment?",
    "options": [
      "As zero",
      "Not mentioned at all",
      "As a verified result",
      "As unknown or estimated, with the source and uncertainty stated"
    ],
    "correctIndex": 3,
    "explanation": "Missing measurement is not evidence of no impact. Ranges and sensitivity analysis support decisions while avoiding false precision."
  },
  {
    "id": 404,
    "category": 4,
    "text": "What makes a public environmental reduction claim more defensible?",
    "options": [
      "A baseline, period, boundary, method and evidence review",
      "An attractive photograph",
      "Removing exceptions",
      "Leaving out the accountable owner"
    ],
    "correctIndex": 0,
    "explanation": "Traceable claims explain what was compared, where, when and how, and acknowledge relevant exclusions and conditions."
  },
  {
    "id": 405,
    "category": 4,
    "text": "A KPI improves per unit produced but worsens in absolute terms. What report is defensible?",
    "options": [
      "Report only the intensity",
      "Show both metrics and explain activity and boundary changes",
      "Remove the absolute number",
      "Change the baseline year silently"
    ],
    "correctIndex": 1,
    "explanation": "A relative efficiency improvement can coexist with higher total impact. A sound dashboard presents both and explains the drivers."
  },
  {
    "id": 406,
    "category": 4,
    "text": "A committee allows a project to advance despite incomplete data. What must be recorded?",
    "options": [
      "Only a positive intention",
      "An undated note",
      "Risks, conditions, owners, decision authority and review points",
      "A generic sustainability approval label"
    ],
    "correctIndex": 2,
    "explanation": "A conditional decision should identify issues that might reverse it and assign action owners. Sustainability assessment and technical authorisation are distinct decisions."
  },
  {
    "id": 407,
    "category": 4,
    "text": "Does completing a training quiz demonstrate legal compliance approval?",
    "options": [
      "Yes, if the learner passes",
      "Yes, above 90%",
      "Yes, if the game says so",
      "No: learning never replaces applicable reviews and authorisations"
    ],
    "correctIndex": 3,
    "explanation": "A game can explain relevant requirements, but compliance for a real activity depends on evidence, competent authority and the applicable processes."
  },
  {
    "id": 408,
    "category": 4,
    "text": "A project buys carbon credits and claims it has eliminated its emissions. What is required?",
    "options": [
      "Distinguish physical emissions, own reductions and credit use under applicable claim rules",
      "Only proof of payment",
      "Nothing: credits physically erase all emissions",
      "A compensation logo"
    ],
    "correctIndex": 0,
    "explanation": "Buying credits does not physically eliminate the project's emissions. Reporting must distinguish the actual inventory, reductions and credit use and avoid unsupported equivalences."
  },
  {
    "id": 501,
    "category": 5,
    "text": "An A400M is grounded and a nearby spare has incomplete traceability. What comes first?",
    "options": [
      "Release it because it is nearby",
      "Verify configuration, records and technical eligibility before choosing logistics",
      "Install now and check later",
      "Leave the issue out of the report"
    ],
    "correctIndex": 1,
    "explanation": "Operational resilience does not mean bypassing technical controls. Nearby stock may reduce delay or transport only after suitability and documentation are verified."
  },
  {
    "id": 502,
    "category": 5,
    "text": "Three recurring repairs repeatedly trigger express freight. What is a durable improvement?",
    "options": [
      "Reduce the number of reports",
      "Ban all air transport",
      "Investigate failure patterns, forecasts, stock and repair lead times with assigned owners",
      "Change dashboard colours"
    ],
    "correctIndex": 2,
    "explanation": "Addressing the source of repeated emergencies may improve readiness and resource efficiency together. Measure results on comparable cases."
  },
  {
    "id": 503,
    "category": 5,
    "text": "A critical component risks obsolescence. Which assessment is most useful?",
    "options": [
      "Buy unlimited stock immediately",
      "Wait for the last breakdown",
      "Cancel the maintenance plan",
      "Assess remaining life, qualified alternatives, repairability and supply exposure"
    ],
    "correctIndex": 3,
    "explanation": "Obsolescence management joins engineering, procurement and operations. Decisions need service-life, configuration, qualification and sourcing information."
  },
  {
    "id": 504,
    "category": 5,
    "text": "At a deployed site, cleaning water could leave the controlled drainage area. What should happen?",
    "options": [
      "Identify the flow, contain it and follow the site's applicable procedures and controls",
      "Discharge it because it is water",
      "Add more detergent and continue",
      "Record only an estimated volume"
    ],
    "correctIndex": 0,
    "explanation": "Operational continuity still requires attention to site discharge limits and possible contaminants. Process water should not be assumed safe to discharge without review."
  },
  {
    "id": 505,
    "category": 5,
    "text": "A key supplier warns of uncertain lead times. What response improves resilience?",
    "options": [
      "Trust an optimistic promise alone",
      "Review criticality, technically qualified alternatives, stock and contingency actions",
      "Approve unverified parts",
      "Cancel all maintenance"
    ],
    "correctIndex": 1,
    "explanation": "A robust response connects risk assessment, configuration and prevention. Alternative suppliers only reduce risk when their products meet applicable requirements."
  },
  {
    "id": 506,
    "category": 5,
    "text": "Weather disrupts a spare-parts route. What must be reassessed?",
    "options": [
      "Initial price only",
      "Corporate imagery",
      "Safety, deadline, validated options, changed movements and supporting evidence",
      "Annual mean temperature"
    ],
    "correctIndex": 2,
    "explanation": "Operational choices should be updated using the actual disruption. Reusing the old transport forecast without new risks or extra legs can mislead."
  },
  {
    "id": 507,
    "category": 5,
    "text": "Technicians say an assembly needs excessive disassembly for repair. How should the feedback be used?",
    "options": [
      "It has no value outside the workshop",
      "Only for staff appraisal",
      "Delete it when the ticket closes",
      "Feed engineering with times, access issues, risks and improvement opportunities"
    ],
    "correctIndex": 3,
    "explanation": "MRO experience can help design for maintainability and longer service life. Proposed changes remain subject to appropriate engineering and safety review."
  },
  {
    "id": 508,
    "category": 5,
    "text": "A project depends on highly uncertain utilisation rates. What enables a responsible decision?",
    "options": [
      "Test scenarios and thresholds and revisit as data improve",
      "Always use the most optimistic case",
      "Insert values without sources",
      "Treat the initial estimate as final"
    ],
    "correctIndex": 0,
    "explanation": "Sensitivity analysis reveals assumptions that could reverse the decision. Conditional choices need owners, boundaries and a trigger for review."
  }
];

export function getRandomQuestion(category: number, usedIds: number[]): Question | null {
  const categoryQuestions = QUESTIONS.filter((question) => question.category === category);
  const available = categoryQuestions.filter((question) => !usedIds.includes(question.id));
  const pool = available.length > 0 ? available : categoryQuestions;
  return pool[Math.floor(Math.random() * pool.length)] ?? null;
}
