import type { Question } from './types';
// Authored scenario-based educational cases. No real platform or operational data.
export const EXTRA_CLIMATE_QUESTIONS: (Question & {difficulty: 'foundation' | 'applied' | 'advanced'})[] = [
  {
    "id": 2001,
    "category": 0,
    "text": "An airfield records warmer nights and equipment fails to cool between shifts. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Heat accumulation between duty cycles",
      "Uncharacterised exposure of critical assets",
      "Long-term scenario and model uncertainty",
      "Interdependency between adaptation and energy capacity"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Heat accumulation between duty cycles. Appropriate response: Assess thermal recovery between shifts and operating conditions. Evidence to review: Internal temperature series and representative duty cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2002,
    "category": 0,
    "text": "An airfield records warmer nights and equipment fails to cool between shifts. Which response best addresses this situation?",
    "options": [
      "Assess ventilation dependency and safe alternatives",
      "Assess thermal recovery between shifts and operating conditions",
      "Review site-wide drainage and downstream effects",
      "Analyse rainfall intensities and durations"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Heat accumulation between duty cycles. Appropriate response: Assess thermal recovery between shifts and operating conditions. Evidence to review: Internal temperature series and representative duty cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2003,
    "category": 0,
    "text": "An airfield records warmer nights and equipment fails to cool between shifts. Proposed response: Assess thermal recovery between shifts and operating conditions. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Range of regional results and decision sensitivity",
      "Simultaneous thermal load and electricity demand in extreme conditions",
      "Internal temperature series and representative duty cycles",
      "Seasonal water balance and applicable abstraction restrictions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Heat accumulation between duty cycles. Appropriate response: Assess thermal recovery between shifts and operating conditions. Evidence to review: Internal temperature series and representative duty cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2004,
    "category": 0,
    "text": "A plant has 2050 flood maps but does not know where its switchboards are. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Different coping capacity under the same hazard",
      "Transfer of risk to others",
      "Averages conceal relevant extremes",
      "Uncharacterised exposure of critical assets"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Uncharacterised exposure of critical assets. Appropriate response: Overlay equipment elevations and flood scenarios. Evidence to review: Georeferenced equipment inventory and scenario water levels. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2005,
    "category": 0,
    "text": "A plant has 2050 flood maps but does not know where its switchboards are. Which response best addresses this situation?",
    "options": [
      "Overlay equipment elevations and flood scenarios",
      "Compare relevant scenarios and model ensembles",
      "Compare passive and active protection under energy constraints",
      "Assess critical water use and compatible supply alternatives"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Uncharacterised exposure of critical assets. Appropriate response: Overlay equipment elevations and flood scenarios. Evidence to review: Georeferenced equipment inventory and scenario water levels. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2006,
    "category": 0,
    "text": "A plant has 2050 flood maps but does not know where its switchboards are. Proposed response: Overlay equipment elevations and flood scenarios. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Before-and-after runoff modelling across the area",
      "Georeferenced equipment inventory and scenario water levels",
      "Relevant intensity-duration-frequency curves and drainage capacity",
      "Exposure indicators and review dates linked to thresholds"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Uncharacterised exposure of critical assets. Appropriate response: Overlay equipment elevations and flood scenarios. Evidence to review: Georeferenced equipment inventory and scenario water levels. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2007,
    "category": 0,
    "text": "Two workshops face the same heat; only one has backup ventilation. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Long-term scenario and model uncertainty",
      "Interdependency between adaptation and energy capacity",
      "Different coping capacity under the same hazard",
      "Physical water scarcity risk in the basin"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Different coping capacity under the same hazard. Appropriate response: Assess ventilation dependency and safe alternatives. Evidence to review: Ventilation continuity tests and thermal limits for both workshops. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2008,
    "category": 0,
    "text": "Two workshops face the same heat; only one has backup ventilation. Which response best addresses this situation?",
    "options": [
      "Review site-wide drainage and downstream effects",
      "Analyse rainfall intensities and durations",
      "Define staged measures and review triggers",
      "Assess ventilation dependency and safe alternatives"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Different coping capacity under the same hazard. Appropriate response: Assess ventilation dependency and safe alternatives. Evidence to review: Ventilation continuity tests and thermal limits for both workshops. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2009,
    "category": 0,
    "text": "Two workshops face the same heat; only one has backup ventilation. Proposed response: Assess ventilation dependency and safe alternatives. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Ventilation continuity tests and thermal limits for both workshops",
      "Simultaneous thermal load and electricity demand in extreme conditions",
      "Seasonal water balance and applicable abstraction restrictions",
      "Internal temperature series and representative duty cycles"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Different coping capacity under the same hazard. Appropriate response: Assess ventilation dependency and safe alternatives. Evidence to review: Ventilation continuity tests and thermal limits for both workshops. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2010,
    "category": 0,
    "text": "A programme uses projections from a single climate model for 2080. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Transfer of risk to others",
      "Long-term scenario and model uncertainty",
      "Averages conceal relevant extremes",
      "Risk of inflexible decisions under divergent futures"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Long-term scenario and model uncertainty. Appropriate response: Compare relevant scenarios and model ensembles. Evidence to review: Range of regional results and decision sensitivity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2011,
    "category": 0,
    "text": "A programme uses projections from a single climate model for 2080. Which response best addresses this situation?",
    "options": [
      "Compare passive and active protection under energy constraints",
      "Assess critical water use and compatible supply alternatives",
      "Compare relevant scenarios and model ensembles",
      "Assess thermal recovery between shifts and operating conditions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Long-term scenario and model uncertainty. Appropriate response: Compare relevant scenarios and model ensembles. Evidence to review: Range of regional results and decision sensitivity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2012,
    "category": 0,
    "text": "A programme uses projections from a single climate model for 2080. Proposed response: Compare relevant scenarios and model ensembles. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Relevant intensity-duration-frequency curves and drainage capacity",
      "Exposure indicators and review dates linked to thresholds",
      "Georeferenced equipment inventory and scenario water levels",
      "Range of regional results and decision sensitivity"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Long-term scenario and model uncertainty. Appropriate response: Compare relevant scenarios and model ensembles. Evidence to review: Range of regional results and decision sensitivity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2013,
    "category": 0,
    "text": "A workshop protects itself from intense rainfall by diverting water towards another building. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Transfer of risk to others",
      "Interdependency between adaptation and energy capacity",
      "Physical water scarcity risk in the basin",
      "Heat accumulation between duty cycles"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Transfer of risk to others. Appropriate response: Review site-wide drainage and downstream effects. Evidence to review: Before-and-after runoff modelling across the area. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2014,
    "category": 0,
    "text": "A workshop protects itself from intense rainfall by diverting water towards another building. Which response best addresses this situation?",
    "options": [
      "Analyse rainfall intensities and durations",
      "Review site-wide drainage and downstream effects",
      "Define staged measures and review triggers",
      "Overlay equipment elevations and flood scenarios"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Transfer of risk to others. Appropriate response: Review site-wide drainage and downstream effects. Evidence to review: Before-and-after runoff modelling across the area. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2015,
    "category": 0,
    "text": "A workshop protects itself from intense rainfall by diverting water towards another building. Proposed response: Review site-wide drainage and downstream effects. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Seasonal water balance and applicable abstraction restrictions",
      "Internal temperature series and representative duty cycles",
      "Before-and-after runoff modelling across the area",
      "Ventilation continuity tests and thermal limits for both workshops"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Transfer of risk to others. Appropriate response: Review site-wide drainage and downstream effects. Evidence to review: Before-and-after runoff modelling across the area. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2016,
    "category": 0,
    "text": "A heat adaptation measure needs extra energy during demand peaks. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Averages conceal relevant extremes",
      "Risk of inflexible decisions under divergent futures",
      "Uncharacterised exposure of critical assets",
      "Interdependency between adaptation and energy capacity"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Interdependency between adaptation and energy capacity. Appropriate response: Compare passive and active protection under energy constraints. Evidence to review: Simultaneous thermal load and electricity demand in extreme conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2017,
    "category": 0,
    "text": "A heat adaptation measure needs extra energy during demand peaks. Which response best addresses this situation?",
    "options": [
      "Compare passive and active protection under energy constraints",
      "Assess critical water use and compatible supply alternatives",
      "Assess thermal recovery between shifts and operating conditions",
      "Assess ventilation dependency and safe alternatives"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Interdependency between adaptation and energy capacity. Appropriate response: Compare passive and active protection under energy constraints. Evidence to review: Simultaneous thermal load and electricity demand in extreme conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2018,
    "category": 0,
    "text": "A heat adaptation measure needs extra energy during demand peaks. Proposed response: Compare passive and active protection under energy constraints. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Exposure indicators and review dates linked to thresholds",
      "Simultaneous thermal load and electricity demand in extreme conditions",
      "Georeferenced equipment inventory and scenario water levels",
      "Range of regional results and decision sensitivity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Interdependency between adaptation and energy capacity. Appropriate response: Compare passive and active protection under energy constraints. Evidence to review: Simultaneous thermal load and electricity demand in extreme conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2019,
    "category": 0,
    "text": "A site records stable annual rainfall but more concentrated precipitation events. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Physical water scarcity risk in the basin",
      "Heat accumulation between duty cycles",
      "Averages conceal relevant extremes",
      "Different coping capacity under the same hazard"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Averages conceal relevant extremes. Appropriate response: Analyse rainfall intensities and durations. Evidence to review: Relevant intensity-duration-frequency curves and drainage capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2020,
    "category": 0,
    "text": "A site records stable annual rainfall but more concentrated precipitation events. Which response best addresses this situation?",
    "options": [
      "Define staged measures and review triggers",
      "Overlay equipment elevations and flood scenarios",
      "Compare relevant scenarios and model ensembles",
      "Analyse rainfall intensities and durations"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Averages conceal relevant extremes. Appropriate response: Analyse rainfall intensities and durations. Evidence to review: Relevant intensity-duration-frequency curves and drainage capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2021,
    "category": 0,
    "text": "A site records stable annual rainfall but more concentrated precipitation events. Proposed response: Analyse rainfall intensities and durations. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Relevant intensity-duration-frequency curves and drainage capacity",
      "Internal temperature series and representative duty cycles",
      "Ventilation continuity tests and thermal limits for both workshops",
      "Before-and-after runoff modelling across the area"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Averages conceal relevant extremes. Appropriate response: Analyse rainfall intensities and durations. Evidence to review: Relevant intensity-duration-frequency curves and drainage capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2022,
    "category": 0,
    "text": "A supplier depends on water in a basin with recurring droughts. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Risk of inflexible decisions under divergent futures",
      "Physical water scarcity risk in the basin",
      "Uncharacterised exposure of critical assets",
      "Long-term scenario and model uncertainty"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Physical water scarcity risk in the basin. Appropriate response: Assess critical water use and compatible supply alternatives. Evidence to review: Seasonal water balance and applicable abstraction restrictions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2023,
    "category": 0,
    "text": "A supplier depends on water in a basin with recurring droughts. Which response best addresses this situation?",
    "options": [
      "Assess thermal recovery between shifts and operating conditions",
      "Assess ventilation dependency and safe alternatives",
      "Assess critical water use and compatible supply alternatives",
      "Review site-wide drainage and downstream effects"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Physical water scarcity risk in the basin. Appropriate response: Assess critical water use and compatible supply alternatives. Evidence to review: Seasonal water balance and applicable abstraction restrictions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2024,
    "category": 0,
    "text": "A supplier depends on water in a basin with recurring droughts. Proposed response: Assess critical water use and compatible supply alternatives. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Georeferenced equipment inventory and scenario water levels",
      "Range of regional results and decision sensitivity",
      "Simultaneous thermal load and electricity demand in extreme conditions",
      "Seasonal water balance and applicable abstraction restrictions"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Physical water scarcity risk in the basin. Appropriate response: Assess critical water use and compatible supply alternatives. Evidence to review: Seasonal water balance and applicable abstraction restrictions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2025,
    "category": 0,
    "text": "A team plans adaptation for 2030 and 2070 with increasing uncertainty. Which response best addresses this situation?",
    "options": [
      "Define staged measures and review triggers",
      "Overlay equipment elevations and flood scenarios",
      "Compare relevant scenarios and model ensembles",
      "Compare passive and active protection under energy constraints"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Risk of inflexible decisions under divergent futures. Appropriate response: Define staged measures and review triggers. Evidence to review: Exposure indicators and review dates linked to thresholds. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2026,
    "category": 0,
    "text": "A team plans adaptation for 2030 and 2070 with increasing uncertainty. Proposed response: Define staged measures and review triggers. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Ventilation continuity tests and thermal limits for both workshops",
      "Exposure indicators and review dates linked to thresholds",
      "Before-and-after runoff modelling across the area",
      "Relevant intensity-duration-frequency curves and drainage capacity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Risk of inflexible decisions under divergent futures. Appropriate response: Define staged measures and review triggers. Evidence to review: Exposure indicators and review dates linked to thresholds. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2027,
    "category": 1,
    "text": "An electronics bay operates near its thermal limit on warmer days. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Changed air density and performance margins",
      "Blockage and reduced heat transfer",
      "Reduced component thermal margin",
      "Impact damage and possible functional degradation"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Reduced component thermal margin. Appropriate response: Review dissipation, limits and thermal protection with Engineering. Evidence to review: Component temperatures under representative loads and environments. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2028,
    "category": 1,
    "text": "An electronics bay operates near its thermal limit on warmer days. Which response best addresses this situation?",
    "options": [
      "Assess erosion protection and maintenance",
      "Review corrosion protection and inspection of exposed areas",
      "Review material and joint compatibility under thermal cycles",
      "Review dissipation, limits and thermal protection with Engineering"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Reduced component thermal margin. Appropriate response: Review dissipation, limits and thermal protection with Engineering. Evidence to review: Component temperatures under representative loads and environments. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2029,
    "category": 1,
    "text": "An electronics bay operates near its thermal limit on warmer days. Proposed response: Review dissipation, limits and thermal protection with Engineering. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Component temperatures under representative loads and environments",
      "Pressure drop and heat transfer before and after fouling",
      "Representative impact tests and subsequent functional measurements",
      "Specialist assessment of electrical protection requirements and tests"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Reduced component thermal margin. Appropriate response: Review dissipation, limits and thermal protection with Engineering. Evidence to review: Component temperatures under representative loads and environments. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2030,
    "category": 1,
    "text": "A high-altitude airfield faces temperatures above historical levels. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Progressive surface erosion",
      "Changed air density and performance margins",
      "Corrosion driven by moisture and salts",
      "Thermal fatigue and differential expansion stresses"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Changed air density and performance margins. Appropriate response: Request performance analysis using authorised configuration data. Evidence to review: Approved model results for pressure, temperature and configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2031,
    "category": 1,
    "text": "A high-altitude airfield faces temperatures above historical levels. Which response best addresses this situation?",
    "options": [
      "Assess filtration and cleaning access within requirements",
      "Assess impact resistance and electromagnetic function with specialists",
      "Request performance analysis using authorised configuration data",
      "Compare lightning protection and qualification evidence"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Changed air density and performance margins. Appropriate response: Request performance analysis using authorised configuration data. Evidence to review: Approved model results for pressure, temperature and configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2032,
    "category": 1,
    "text": "A high-altitude airfield faces temperatures above historical levels. Proposed response: Request performance analysis using authorised configuration data. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Corrosion progression in representative humidity and salinity cycles",
      "Inspections and functional properties after representative thermal cycles",
      "Leak tightness and sealant properties after thermal ageing",
      "Approved model results for pressure, temperature and configuration"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Changed air density and performance margins. Appropriate response: Request performance analysis using authorised configuration data. Evidence to review: Approved model results for pressure, temperature and configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2033,
    "category": 1,
    "text": "Mineral particles repeatedly strike exposed surfaces. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Progressive surface erosion",
      "Blockage and reduced heat transfer",
      "Impact damage and possible functional degradation",
      "Electrical risk associated with lightning strikes"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Progressive surface erosion. Appropriate response: Assess erosion protection and maintenance. Evidence to review: Material loss and properties after representative particle exposure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2034,
    "category": 1,
    "text": "Mineral particles repeatedly strike exposed surfaces. Which response best addresses this situation?",
    "options": [
      "Review corrosion protection and inspection of exposed areas",
      "Assess erosion protection and maintenance",
      "Review material and joint compatibility under thermal cycles",
      "Assess sealing materials compatible with the expected environment"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Progressive surface erosion. Appropriate response: Assess erosion protection and maintenance. Evidence to review: Material loss and properties after representative particle exposure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2035,
    "category": 1,
    "text": "Mineral particles repeatedly strike exposed surfaces. Proposed response: Assess erosion protection and maintenance. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Representative impact tests and subsequent functional measurements",
      "Specialist assessment of electrical protection requirements and tests",
      "Material loss and properties after representative particle exposure",
      "Component temperatures under representative loads and environments"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Progressive surface erosion. Appropriate response: Assess erosion protection and maintenance. Evidence to review: Material loss and properties after representative particle exposure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2036,
    "category": 1,
    "text": "Fine dust accumulates on heat exchangers. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Corrosion driven by moisture and salts",
      "Thermal fatigue and differential expansion stresses",
      "Temperature-related degradation of sealing properties",
      "Blockage and reduced heat transfer"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Blockage and reduced heat transfer. Appropriate response: Assess filtration and cleaning access within requirements. Evidence to review: Pressure drop and heat transfer before and after fouling. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2037,
    "category": 1,
    "text": "Fine dust accumulates on heat exchangers. Which response best addresses this situation?",
    "options": [
      "Assess filtration and cleaning access within requirements",
      "Assess impact resistance and electromagnetic function with specialists",
      "Compare lightning protection and qualification evidence",
      "Review dissipation, limits and thermal protection with Engineering"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Blockage and reduced heat transfer. Appropriate response: Assess filtration and cleaning access within requirements. Evidence to review: Pressure drop and heat transfer before and after fouling. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2038,
    "category": 1,
    "text": "Fine dust accumulates on heat exchangers. Proposed response: Assess filtration and cleaning access within requirements. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Inspections and functional properties after representative thermal cycles",
      "Pressure drop and heat transfer before and after fouling",
      "Leak tightness and sealant properties after thermal ageing",
      "Approved model results for pressure, temperature and configuration"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Blockage and reduced heat transfer. Appropriate response: Assess filtration and cleaning access within requirements. Evidence to review: Pressure drop and heat transfer before and after fouling. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2039,
    "category": 1,
    "text": "A metal assembly spends longer in humid saline environments. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Impact damage and possible functional degradation",
      "Electrical risk associated with lightning strikes",
      "Corrosion driven by moisture and salts",
      "Reduced component thermal margin"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Corrosion driven by moisture and salts. Appropriate response: Review corrosion protection and inspection of exposed areas. Evidence to review: Corrosion progression in representative humidity and salinity cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2040,
    "category": 1,
    "text": "A metal assembly spends longer in humid saline environments. Which response best addresses this situation?",
    "options": [
      "Review material and joint compatibility under thermal cycles",
      "Assess sealing materials compatible with the expected environment",
      "Request performance analysis using authorised configuration data",
      "Review corrosion protection and inspection of exposed areas"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Corrosion driven by moisture and salts. Appropriate response: Review corrosion protection and inspection of exposed areas. Evidence to review: Corrosion progression in representative humidity and salinity cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2041,
    "category": 1,
    "text": "A metal assembly spends longer in humid saline environments. Proposed response: Review corrosion protection and inspection of exposed areas. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Corrosion progression in representative humidity and salinity cycles",
      "Specialist assessment of electrical protection requirements and tests",
      "Component temperatures under representative loads and environments",
      "Material loss and properties after representative particle exposure"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Corrosion driven by moisture and salts. Appropriate response: Review corrosion protection and inspection of exposed areas. Evidence to review: Corrosion progression in representative humidity and salinity cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2042,
    "category": 1,
    "text": "A radome is exposed to hail impacts in hypothetical scenarios. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Thermal fatigue and differential expansion stresses",
      "Impact damage and possible functional degradation",
      "Temperature-related degradation of sealing properties",
      "Changed air density and performance margins"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Impact damage and possible functional degradation. Appropriate response: Assess impact resistance and electromagnetic function with specialists. Evidence to review: Representative impact tests and subsequent functional measurements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2043,
    "category": 1,
    "text": "A radome is exposed to hail impacts in hypothetical scenarios. Which response best addresses this situation?",
    "options": [
      "Compare lightning protection and qualification evidence",
      "Review dissipation, limits and thermal protection with Engineering",
      "Assess impact resistance and electromagnetic function with specialists",
      "Assess erosion protection and maintenance"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Impact damage and possible functional degradation. Appropriate response: Assess impact resistance and electromagnetic function with specialists. Evidence to review: Representative impact tests and subsequent functional measurements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2044,
    "category": 1,
    "text": "A radome is exposed to hail impacts in hypothetical scenarios. Proposed response: Assess impact resistance and electromagnetic function with specialists. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Leak tightness and sealant properties after thermal ageing",
      "Approved model results for pressure, temperature and configuration",
      "Pressure drop and heat transfer before and after fouling",
      "Representative impact tests and subsequent functional measurements"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Impact damage and possible functional degradation. Appropriate response: Assess impact resistance and electromagnetic function with specialists. Evidence to review: Representative impact tests and subsequent functional measurements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2045,
    "category": 1,
    "text": "External equipment undergoes repeated heating and cooling cycles. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Thermal fatigue and differential expansion stresses",
      "Electrical risk associated with lightning strikes",
      "Reduced component thermal margin",
      "Progressive surface erosion"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Thermal fatigue and differential expansion stresses. Appropriate response: Review material and joint compatibility under thermal cycles. Evidence to review: Inspections and functional properties after representative thermal cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2046,
    "category": 1,
    "text": "External equipment undergoes repeated heating and cooling cycles. Which response best addresses this situation?",
    "options": [
      "Assess sealing materials compatible with the expected environment",
      "Review material and joint compatibility under thermal cycles",
      "Request performance analysis using authorised configuration data",
      "Assess filtration and cleaning access within requirements"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Thermal fatigue and differential expansion stresses. Appropriate response: Review material and joint compatibility under thermal cycles. Evidence to review: Inspections and functional properties after representative thermal cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2047,
    "category": 1,
    "text": "External equipment undergoes repeated heating and cooling cycles. Proposed response: Review material and joint compatibility under thermal cycles. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Component temperatures under representative loads and environments",
      "Material loss and properties after representative particle exposure",
      "Inspections and functional properties after representative thermal cycles",
      "Corrosion progression in representative humidity and salinity cycles"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Thermal fatigue and differential expansion stresses. Appropriate response: Review material and joint compatibility under thermal cycles. Evidence to review: Inspections and functional properties after representative thermal cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2048,
    "category": 1,
    "text": "An operating region may experience changes in lightning exposure. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Temperature-related degradation of sealing properties",
      "Changed air density and performance margins",
      "Blockage and reduced heat transfer",
      "Electrical risk associated with lightning strikes"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Electrical risk associated with lightning strikes. Appropriate response: Compare lightning protection and qualification evidence. Evidence to review: Specialist assessment of electrical protection requirements and tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2049,
    "category": 1,
    "text": "An operating region may experience changes in lightning exposure. Which response best addresses this situation?",
    "options": [
      "Compare lightning protection and qualification evidence",
      "Review dissipation, limits and thermal protection with Engineering",
      "Assess erosion protection and maintenance",
      "Review corrosion protection and inspection of exposed areas"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Electrical risk associated with lightning strikes. Appropriate response: Compare lightning protection and qualification evidence. Evidence to review: Specialist assessment of electrical protection requirements and tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2050,
    "category": 1,
    "text": "An operating region may experience changes in lightning exposure. Proposed response: Compare lightning protection and qualification evidence. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Approved model results for pressure, temperature and configuration",
      "Specialist assessment of electrical protection requirements and tests",
      "Pressure drop and heat transfer before and after fouling",
      "Representative impact tests and subsequent functional measurements"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Electrical risk associated with lightning strikes. Appropriate response: Compare lightning protection and qualification evidence. Evidence to review: Specialist assessment of electrical protection requirements and tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2051,
    "category": 1,
    "text": "A sealing system faces temperatures outside its service history. Which response best addresses this situation?",
    "options": [
      "Request performance analysis using authorised configuration data",
      "Assess filtration and cleaning access within requirements",
      "Assess sealing materials compatible with the expected environment",
      "Assess impact resistance and electromagnetic function with specialists"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Temperature-related degradation of sealing properties. Appropriate response: Assess sealing materials compatible with the expected environment. Evidence to review: Leak tightness and sealant properties after thermal ageing. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2052,
    "category": 1,
    "text": "A sealing system faces temperatures outside its service history. Proposed response: Assess sealing materials compatible with the expected environment. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Material loss and properties after representative particle exposure",
      "Corrosion progression in representative humidity and salinity cycles",
      "Inspections and functional properties after representative thermal cycles",
      "Leak tightness and sealant properties after thermal ageing"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Temperature-related degradation of sealing properties. Appropriate response: Assess sealing materials compatible with the expected environment. Evidence to review: Leak tightness and sealant properties after thermal ageing. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2053,
    "category": 2,
    "text": "A programme must review an old environmental requirement before a new variant. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Potential mismatch between expected environment and historic requirement",
      "Limited representativeness of a steady-state test",
      "Extrapolation uncertainty from scale and geometry",
      "Performance degradation over service life"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Potential mismatch between expected environment and historic requirement. Appropriate response: Perform gap analysis and route changes through requirements management. Evidence to review: Traceable matrix of exposure, requirement, evidence and gap. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2054,
    "category": 2,
    "text": "A programme must review an old environmental requirement before a new variant. Which response best addresses this situation?",
    "options": [
      "Compare equivalent configurations under multidisciplinary constraints",
      "Perform gap analysis and route changes through requirements management",
      "Assess compatibility, safety and circuit requirements",
      "Update the environmental profile and review requirements coverage"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Potential mismatch between expected environment and historic requirement. Appropriate response: Perform gap analysis and route changes through requirements management. Evidence to review: Traceable matrix of exposure, requirement, evidence and gap. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2055,
    "category": 2,
    "text": "A programme must review an old environmental requirement before a new variant. Proposed response: Perform gap analysis and route changes through requirements management. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Correlation between coupons, models and assembly tests",
      "Degradation curves and compliance after ageing cycles",
      "Traceable matrix of exposure, requirement, evidence and gap",
      "Insulation and fire behaviour evidence against applicable requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Potential mismatch between expected environment and historic requirement. Appropriate response: Perform gap analysis and route changes through requirements management. Evidence to review: Traceable matrix of exposure, requirement, evidence and gap. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2056,
    "category": 2,
    "text": "A thermal prototype works in a chamber at constant load. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Trade-off between protection, mass and maintainability",
      "Chemical and system compatibility risks",
      "Unrepresentative environmental input data",
      "Limited representativeness of a steady-state test"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Limited representativeness of a steady-state test. Appropriate response: Define relevant load profiles and transients. Evidence to review: Results under representative cycles and transients with predefined criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2057,
    "category": 2,
    "text": "A thermal prototype works in a chamber at constant load. Which response best addresses this situation?",
    "options": [
      "Define relevant load profiles and transients",
      "Plan representative assembly validation and failure-mode assessment",
      "Define durability and in-service maintenance criteria",
      "Assess both functions and side effects before selection"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Limited representativeness of a steady-state test. Appropriate response: Define relevant load profiles and transients. Evidence to review: Results under representative cycles and transients with predefined criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2058,
    "category": 2,
    "text": "A thermal prototype works in a chamber at constant load. Proposed response: Define relevant load profiles and transients. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Material and circuit function tests with the proposed fluid",
      "Results under representative cycles and transients with predefined criteria",
      "Documented comparison of environmental profiles and qualified limits",
      "Integration and replacement demonstration with configuration control"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Limited representativeness of a steady-state test. Appropriate response: Define relevant load profiles and transients. Evidence to review: Results under representative cycles and transients with predefined criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2059,
    "category": 2,
    "text": "Dust protection adds mass and restricts maintenance access. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Extrapolation uncertainty from scale and geometry",
      "Performance degradation over service life",
      "Trade-off between protection, mass and maintainability",
      "Interaction between thermal adaptation and safety requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Trade-off between protection, mass and maintainability. Appropriate response: Compare equivalent configurations under multidisciplinary constraints. Evidence to review: Measured mass, protection effectiveness and access time by configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2060,
    "category": 2,
    "text": "Dust protection adds mass and restricts maintenance access. Which response best addresses this situation?",
    "options": [
      "Assess compatibility, safety and circuit requirements",
      "Update the environmental profile and review requirements coverage",
      "Define controlled interfaces and review interchangeability",
      "Compare equivalent configurations under multidisciplinary constraints"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Trade-off between protection, mass and maintainability. Appropriate response: Compare equivalent configurations under multidisciplinary constraints. Evidence to review: Measured mass, protection effectiveness and access time by configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2061,
    "category": 2,
    "text": "Dust protection adds mass and restricts maintenance access. Proposed response: Compare equivalent configurations under multidisciplinary constraints. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Measured mass, protection effectiveness and access time by configuration",
      "Degradation curves and compliance after ageing cycles",
      "Insulation and fire behaviour evidence against applicable requirements",
      "Traceable matrix of exposure, requirement, evidence and gap"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Trade-off between protection, mass and maintainability. Appropriate response: Compare equivalent configurations under multidisciplinary constraints. Evidence to review: Measured mass, protection effectiveness and access time by configuration. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2062,
    "category": 2,
    "text": "A small-scale part performs well under impact testing. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Chemical and system compatibility risks",
      "Extrapolation uncertainty from scale and geometry",
      "Unrepresentative environmental input data",
      "Interface and configuration dependency for future adaptation"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Extrapolation uncertainty from scale and geometry. Appropriate response: Plan representative assembly validation and failure-mode assessment. Evidence to review: Correlation between coupons, models and assembly tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2063,
    "category": 2,
    "text": "A small-scale part performs well under impact testing. Which response best addresses this situation?",
    "options": [
      "Define durability and in-service maintenance criteria",
      "Assess both functions and side effects before selection",
      "Plan representative assembly validation and failure-mode assessment",
      "Perform gap analysis and route changes through requirements management"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Extrapolation uncertainty from scale and geometry. Appropriate response: Plan representative assembly validation and failure-mode assessment. Evidence to review: Correlation between coupons, models and assembly tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2064,
    "category": 2,
    "text": "A small-scale part performs well under impact testing. Proposed response: Plan representative assembly validation and failure-mode assessment. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Documented comparison of environmental profiles and qualified limits",
      "Integration and replacement demonstration with configuration control",
      "Results under representative cycles and transients with predefined criteria",
      "Correlation between coupons, models and assembly tests"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Extrapolation uncertainty from scale and geometry. Appropriate response: Plan representative assembly validation and failure-mode assessment. Evidence to review: Correlation between coupons, models and assembly tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2065,
    "category": 2,
    "text": "A cooling alternative introduces a different fluid. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Chemical and system compatibility risks",
      "Performance degradation over service life",
      "Interaction between thermal adaptation and safety requirements",
      "Potential mismatch between expected environment and historic requirement"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Chemical and system compatibility risks. Appropriate response: Assess compatibility, safety and circuit requirements. Evidence to review: Material and circuit function tests with the proposed fluid. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2066,
    "category": 2,
    "text": "A cooling alternative introduces a different fluid. Which response best addresses this situation?",
    "options": [
      "Update the environmental profile and review requirements coverage",
      "Assess compatibility, safety and circuit requirements",
      "Define controlled interfaces and review interchangeability",
      "Define relevant load profiles and transients"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Chemical and system compatibility risks. Appropriate response: Assess compatibility, safety and circuit requirements. Evidence to review: Material and circuit function tests with the proposed fluid. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2067,
    "category": 2,
    "text": "A cooling alternative introduces a different fluid. Proposed response: Assess compatibility, safety and circuit requirements. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Insulation and fire behaviour evidence against applicable requirements",
      "Traceable matrix of exposure, requirement, evidence and gap",
      "Material and circuit function tests with the proposed fluid",
      "Measured mass, protection effectiveness and access time by configuration"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Chemical and system compatibility risks. Appropriate response: Assess compatibility, safety and circuit requirements. Evidence to review: Material and circuit function tests with the proposed fluid. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2068,
    "category": 2,
    "text": "A solution meets requirements initially but loses performance after ageing. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Unrepresentative environmental input data",
      "Interface and configuration dependency for future adaptation",
      "Limited representativeness of a steady-state test",
      "Performance degradation over service life"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Performance degradation over service life. Appropriate response: Define durability and in-service maintenance criteria. Evidence to review: Degradation curves and compliance after ageing cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2069,
    "category": 2,
    "text": "A solution meets requirements initially but loses performance after ageing. Which response best addresses this situation?",
    "options": [
      "Define durability and in-service maintenance criteria",
      "Assess both functions and side effects before selection",
      "Perform gap analysis and route changes through requirements management",
      "Compare equivalent configurations under multidisciplinary constraints"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Performance degradation over service life. Appropriate response: Define durability and in-service maintenance criteria. Evidence to review: Degradation curves and compliance after ageing cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2070,
    "category": 2,
    "text": "A solution meets requirements initially but loses performance after ageing. Proposed response: Define durability and in-service maintenance criteria. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Integration and replacement demonstration with configuration control",
      "Degradation curves and compliance after ageing cycles",
      "Results under representative cycles and transients with predefined criteria",
      "Correlation between coupons, models and assembly tests"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Performance degradation over service life. Appropriate response: Define durability and in-service maintenance criteria. Evidence to review: Degradation curves and compliance after ageing cycles. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2071,
    "category": 2,
    "text": "A design uses temperate-region data for a future hot humid region. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Interaction between thermal adaptation and safety requirements",
      "Potential mismatch between expected environment and historic requirement",
      "Unrepresentative environmental input data",
      "Trade-off between protection, mass and maintainability"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Unrepresentative environmental input data. Appropriate response: Update the environmental profile and review requirements coverage. Evidence to review: Documented comparison of environmental profiles and qualified limits. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2072,
    "category": 2,
    "text": "A design uses temperate-region data for a future hot humid region. Which response best addresses this situation?",
    "options": [
      "Define controlled interfaces and review interchangeability",
      "Define relevant load profiles and transients",
      "Plan representative assembly validation and failure-mode assessment",
      "Update the environmental profile and review requirements coverage"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Unrepresentative environmental input data. Appropriate response: Update the environmental profile and review requirements coverage. Evidence to review: Documented comparison of environmental profiles and qualified limits. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2073,
    "category": 2,
    "text": "A design uses temperate-region data for a future hot humid region. Proposed response: Update the environmental profile and review requirements coverage. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Documented comparison of environmental profiles and qualified limits",
      "Traceable matrix of exposure, requirement, evidence and gap",
      "Measured mass, protection effectiveness and access time by configuration",
      "Material and circuit function tests with the proposed fluid"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Unrepresentative environmental input data. Appropriate response: Update the environmental profile and review requirements coverage. Evidence to review: Documented comparison of environmental profiles and qualified limits. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2074,
    "category": 2,
    "text": "A material change affects both thermal insulation and fire behaviour. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Interface and configuration dependency for future adaptation",
      "Interaction between thermal adaptation and safety requirements",
      "Limited representativeness of a steady-state test",
      "Extrapolation uncertainty from scale and geometry"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Interaction between thermal adaptation and safety requirements. Appropriate response: Assess both functions and side effects before selection. Evidence to review: Insulation and fire behaviour evidence against applicable requirements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2075,
    "category": 2,
    "text": "A material change affects both thermal insulation and fire behaviour. Which response best addresses this situation?",
    "options": [
      "Perform gap analysis and route changes through requirements management",
      "Compare equivalent configurations under multidisciplinary constraints",
      "Assess both functions and side effects before selection",
      "Assess compatibility, safety and circuit requirements"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Interaction between thermal adaptation and safety requirements. Appropriate response: Assess both functions and side effects before selection. Evidence to review: Insulation and fire behaviour evidence against applicable requirements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2076,
    "category": 2,
    "text": "A material change affects both thermal insulation and fire behaviour. Proposed response: Assess both functions and side effects before selection. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Results under representative cycles and transients with predefined criteria",
      "Correlation between coupons, models and assembly tests",
      "Degradation curves and compliance after ageing cycles",
      "Insulation and fire behaviour evidence against applicable requirements"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Interaction between thermal adaptation and safety requirements. Appropriate response: Assess both functions and side effects before selection. Evidence to review: Insulation and fire behaviour evidence against applicable requirements. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2077,
    "category": 2,
    "text": "A modular concept would allow future climate protection upgrades. Which response best addresses this situation?",
    "options": [
      "Define controlled interfaces and review interchangeability",
      "Define relevant load profiles and transients",
      "Plan representative assembly validation and failure-mode assessment",
      "Define durability and in-service maintenance criteria"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Interface and configuration dependency for future adaptation. Appropriate response: Define controlled interfaces and review interchangeability. Evidence to review: Integration and replacement demonstration with configuration control. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2078,
    "category": 2,
    "text": "A modular concept would allow future climate protection upgrades. Proposed response: Define controlled interfaces and review interchangeability. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Measured mass, protection effectiveness and access time by configuration",
      "Integration and replacement demonstration with configuration control",
      "Material and circuit function tests with the proposed fluid",
      "Documented comparison of environmental profiles and qualified limits"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Interface and configuration dependency for future adaptation. Appropriate response: Define controlled interfaces and review interchangeability. Evidence to review: Integration and replacement demonstration with configuration control. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2079,
    "category": 3,
    "text": "A support station loses cooling capacity during a heat peak. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Loss of inventory access or integrity",
      "Lead-time variability from route exposure",
      "Disruption of cooling-dependent functions",
      "Common-mode failure of backups through shared exposure"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Disruption of cooling-dependent functions. Appropriate response: Prioritise critical loads and assess backup cooling capacity. Evidence to review: Hours of thermal continuity for critical loads under heat conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2080,
    "category": 3,
    "text": "A support station loses cooling capacity during a heat peak. Which response best addresses this situation?",
    "options": [
      "Review water dependency and qualified alternatives with the supplier",
      "Assess reserves and authorised supply alternatives",
      "Assess scheduling and thermal controls with safety owners",
      "Prioritise critical loads and assess backup cooling capacity"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Disruption of cooling-dependent functions. Appropriate response: Prioritise critical loads and assess backup cooling capacity. Evidence to review: Hours of thermal continuity for critical loads under heat conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2081,
    "category": 3,
    "text": "A support station loses cooling capacity during a heat peak. Proposed response: Prioritise critical loads and assess backup cooling capacity. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Hours of thermal continuity for critical loads under heat conditions",
      "Lead-time distribution and route availability during events",
      "Source availability tests under flooding and grid loss",
      "Temperature records and response to simulated climate control failure"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Disruption of cooling-dependent functions. Appropriate response: Prioritise critical loads and assess backup cooling capacity. Evidence to review: Hours of thermal continuity for critical loads under heat conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2082,
    "category": 3,
    "text": "A spares warehouse lies in a potential flood zone. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Production disruption from water restrictions",
      "Loss of inventory access or integrity",
      "Dependency on seasonal logistics windows",
      "Process and worker exposure to heat stress"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Loss of inventory access or integrity. Appropriate response: Assess location, protection and alternative inventory distribution. Evidence to review: Accessible inventory and replenishment times under flood scenarios. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2083,
    "category": 3,
    "text": "A spares warehouse lies in a potential flood zone. Which response best addresses this situation?",
    "options": [
      "Compare alternative routes and realistic delivery windows",
      "Review physical independence and protection of backup sources",
      "Assess location, protection and alternative inventory distribution",
      "Assess monitoring, alarms and storage contingency"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Loss of inventory access or integrity. Appropriate response: Assess location, protection and alternative inventory distribution. Evidence to review: Accessible inventory and replenishment times under flood scenarios. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2084,
    "category": 3,
    "text": "A spares warehouse lies in a potential flood zone. Proposed response: Assess location, protection and alternative inventory distribution. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Demand coverage and autonomy during representative disruptions",
      "Thermal condition measurements and process limit compliance",
      "Access availability and recovery time in relevant scenarios",
      "Accessible inventory and replenishment times under flood scenarios"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Loss of inventory access or integrity. Appropriate response: Assess location, protection and alternative inventory distribution. Evidence to review: Accessible inventory and replenishment times under flood scenarios. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2085,
    "category": 3,
    "text": "A factory relies on a supplier requiring substantial water during droughts. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Production disruption from water restrictions",
      "Lead-time variability from route exposure",
      "Common-mode failure of backups through shared exposure",
      "Loss of storage conditions from thermal failure"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Production disruption from water restrictions. Appropriate response: Review water dependency and qualified alternatives with the supplier. Evidence to review: Production capacity under water restrictions and tested plans. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2086,
    "category": 3,
    "text": "A factory relies on a supplier requiring substantial water during droughts. Which response best addresses this situation?",
    "options": [
      "Assess reserves and authorised supply alternatives",
      "Review water dependency and qualified alternatives with the supplier",
      "Assess scheduling and thermal controls with safety owners",
      "Assess alternative access and essential service continuity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Production disruption from water restrictions. Appropriate response: Review water dependency and qualified alternatives with the supplier. Evidence to review: Production capacity under water restrictions and tested plans. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2087,
    "category": 3,
    "text": "A factory relies on a supplier requiring substantial water during droughts. Proposed response: Review water dependency and qualified alternatives with the supplier. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Source availability tests under flooding and grid loss",
      "Temperature records and response to simulated climate control failure",
      "Production capacity under water restrictions and tested plans",
      "Hours of thermal continuity for critical loads under heat conditions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Production disruption from water restrictions. Appropriate response: Review water dependency and qualified alternatives with the supplier. Evidence to review: Production capacity under water restrictions and tested plans. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2088,
    "category": 3,
    "text": "A logistics route suffers recurring closures from heat and infrastructure deterioration. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Dependency on seasonal logistics windows",
      "Process and worker exposure to heat stress",
      "Shared access dependency for staff and supplies",
      "Lead-time variability from route exposure"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Lead-time variability from route exposure. Appropriate response: Compare alternative routes and realistic delivery windows. Evidence to review: Lead-time distribution and route availability during events. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2089,
    "category": 3,
    "text": "A logistics route suffers recurring closures from heat and infrastructure deterioration. Which response best addresses this situation?",
    "options": [
      "Compare alternative routes and realistic delivery windows",
      "Review physical independence and protection of backup sources",
      "Assess monitoring, alarms and storage contingency",
      "Prioritise critical loads and assess backup cooling capacity"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Lead-time variability from route exposure. Appropriate response: Compare alternative routes and realistic delivery windows. Evidence to review: Lead-time distribution and route availability during events. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2090,
    "category": 3,
    "text": "A logistics route suffers recurring closures from heat and infrastructure deterioration. Proposed response: Compare alternative routes and realistic delivery windows. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Thermal condition measurements and process limit compliance",
      "Lead-time distribution and route availability during events",
      "Access availability and recovery time in relevant scenarios",
      "Accessible inventory and replenishment times under flood scenarios"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Lead-time variability from route exposure. Appropriate response: Compare alternative routes and realistic delivery windows. Evidence to review: Lead-time distribution and route availability during events. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2091,
    "category": 3,
    "text": "A remote base faces seasonal fuel transport interruptions. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Common-mode failure of backups through shared exposure",
      "Loss of storage conditions from thermal failure",
      "Dependency on seasonal logistics windows",
      "Disruption of cooling-dependent functions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Dependency on seasonal logistics windows. Appropriate response: Assess reserves and authorised supply alternatives. Evidence to review: Demand coverage and autonomy during representative disruptions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2092,
    "category": 3,
    "text": "A remote base faces seasonal fuel transport interruptions. Which response best addresses this situation?",
    "options": [
      "Assess scheduling and thermal controls with safety owners",
      "Assess alternative access and essential service continuity",
      "Assess location, protection and alternative inventory distribution",
      "Assess reserves and authorised supply alternatives"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Dependency on seasonal logistics windows. Appropriate response: Assess reserves and authorised supply alternatives. Evidence to review: Demand coverage and autonomy during representative disruptions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2093,
    "category": 3,
    "text": "A remote base faces seasonal fuel transport interruptions. Proposed response: Assess reserves and authorised supply alternatives. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Demand coverage and autonomy during representative disruptions",
      "Temperature records and response to simulated climate control failure",
      "Hours of thermal continuity for critical loads under heat conditions",
      "Production capacity under water restrictions and tested plans"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Dependency on seasonal logistics windows. Appropriate response: Assess reserves and authorised supply alternatives. Evidence to review: Demand coverage and autonomy during representative disruptions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2094,
    "category": 3,
    "text": "An emergency facility relies on two generators in the same flood zone. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Process and worker exposure to heat stress",
      "Common-mode failure of backups through shared exposure",
      "Shared access dependency for staff and supplies",
      "Loss of inventory access or integrity"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Common-mode failure of backups through shared exposure. Appropriate response: Review physical independence and protection of backup sources. Evidence to review: Source availability tests under flooding and grid loss. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2095,
    "category": 3,
    "text": "An emergency facility relies on two generators in the same flood zone. Which response best addresses this situation?",
    "options": [
      "Assess monitoring, alarms and storage contingency",
      "Prioritise critical loads and assess backup cooling capacity",
      "Review physical independence and protection of backup sources",
      "Review water dependency and qualified alternatives with the supplier"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Common-mode failure of backups through shared exposure. Appropriate response: Review physical independence and protection of backup sources. Evidence to review: Source availability tests under flooding and grid loss. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2096,
    "category": 3,
    "text": "An emergency facility relies on two generators in the same flood zone. Proposed response: Review physical independence and protection of backup sources. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Access availability and recovery time in relevant scenarios",
      "Accessible inventory and replenishment times under flood scenarios",
      "Lead-time distribution and route availability during events",
      "Source availability tests under flooding and grid loss"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Common-mode failure of backups through shared exposure. Appropriate response: Review physical independence and protection of backup sources. Evidence to review: Source availability tests under flooding and grid loss. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2097,
    "category": 3,
    "text": "A workshop schedules heat-sensitive work during peak temperatures. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Process and worker exposure to heat stress",
      "Loss of storage conditions from thermal failure",
      "Disruption of cooling-dependent functions",
      "Production disruption from water restrictions"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Process and worker exposure to heat stress. Appropriate response: Assess scheduling and thermal controls with safety owners. Evidence to review: Thermal condition measurements and process limit compliance. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2098,
    "category": 3,
    "text": "A workshop schedules heat-sensitive work during peak temperatures. Which response best addresses this situation?",
    "options": [
      "Assess alternative access and essential service continuity",
      "Assess scheduling and thermal controls with safety owners",
      "Assess location, protection and alternative inventory distribution",
      "Compare alternative routes and realistic delivery windows"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Process and worker exposure to heat stress. Appropriate response: Assess scheduling and thermal controls with safety owners. Evidence to review: Thermal condition measurements and process limit compliance. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2099,
    "category": 3,
    "text": "A workshop schedules heat-sensitive work during peak temperatures. Proposed response: Assess scheduling and thermal controls with safety owners. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Hours of thermal continuity for critical loads under heat conditions",
      "Production capacity under water restrictions and tested plans",
      "Thermal condition measurements and process limit compliance",
      "Demand coverage and autonomy during representative disruptions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Process and worker exposure to heat stress. Appropriate response: Assess scheduling and thermal controls with safety owners. Evidence to review: Thermal condition measurements and process limit compliance. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2100,
    "category": 3,
    "text": "A material cold chain depends on one climate control system. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Shared access dependency for staff and supplies",
      "Loss of inventory access or integrity",
      "Lead-time variability from route exposure",
      "Loss of storage conditions from thermal failure"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Loss of storage conditions from thermal failure. Appropriate response: Assess monitoring, alarms and storage contingency. Evidence to review: Temperature records and response to simulated climate control failure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2101,
    "category": 3,
    "text": "A material cold chain depends on one climate control system. Which response best addresses this situation?",
    "options": [
      "Assess monitoring, alarms and storage contingency",
      "Prioritise critical loads and assess backup cooling capacity",
      "Review water dependency and qualified alternatives with the supplier",
      "Assess reserves and authorised supply alternatives"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Loss of storage conditions from thermal failure. Appropriate response: Assess monitoring, alarms and storage contingency. Evidence to review: Temperature records and response to simulated climate control failure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2102,
    "category": 3,
    "text": "A material cold chain depends on one climate control system. Proposed response: Assess monitoring, alarms and storage contingency. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Accessible inventory and replenishment times under flood scenarios",
      "Temperature records and response to simulated climate control failure",
      "Lead-time distribution and route availability during events",
      "Source availability tests under flooding and grid loss"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Loss of storage conditions from thermal failure. Appropriate response: Assess monitoring, alarms and storage contingency. Evidence to review: Temperature records and response to simulated climate control failure. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2103,
    "category": 3,
    "text": "A maintenance centre shares road access with other storm-exposed sites. Which response best addresses this situation?",
    "options": [
      "Assess location, protection and alternative inventory distribution",
      "Compare alternative routes and realistic delivery windows",
      "Assess alternative access and essential service continuity",
      "Review physical independence and protection of backup sources"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Shared access dependency for staff and supplies. Appropriate response: Assess alternative access and essential service continuity. Evidence to review: Access availability and recovery time in relevant scenarios. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2104,
    "category": 3,
    "text": "A maintenance centre shares road access with other storm-exposed sites. Proposed response: Assess alternative access and essential service continuity. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Production capacity under water restrictions and tested plans",
      "Demand coverage and autonomy during representative disruptions",
      "Thermal condition measurements and process limit compliance",
      "Access availability and recovery time in relevant scenarios"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Shared access dependency for staff and supplies. Appropriate response: Assess alternative access and essential service continuity. Evidence to review: Access availability and recovery time in relevant scenarios. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2105,
    "category": 4,
    "text": "A nearby wildfire generates smoke that may affect equipment and people. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Particle exposure and degraded working conditions",
      "Reduced detection specificity",
      "Loss of critical information exchange",
      "Loss of weather protection for equipment"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Particle exposure and degraded working conditions. Appropriate response: Assess exposure and apply authorised protection procedures. Evidence to review: Relevant particle measurements and procedure implementation records. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2106,
    "category": 4,
    "text": "A nearby wildfire generates smoke that may affect equipment and people. Which response best addresses this situation?",
    "options": [
      "Assess drainage, retention and safe routes with owners",
      "Assess exposure and apply authorised protection procedures",
      "Assess both risks jointly and prioritise essential functions",
      "Assess soil, drainage and erosion protection"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Particle exposure and degraded working conditions. Appropriate response: Assess exposure and apply authorised protection procedures. Evidence to review: Relevant particle measurements and procedure implementation records. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2107,
    "category": 4,
    "text": "A nearby wildfire generates smoke that may affect equipment and people. Proposed response: Assess exposure and apply authorised protection procedures. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Communication availability and restoration times in tests",
      "Authorised structural inspections and function recovery time",
      "Relevant particle measurements and procedure implementation records",
      "Latency distribution and percentage of timely useful data"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Particle exposure and degraded working conditions. Appropriate response: Assess exposure and apply authorised protection procedures. Evidence to review: Relevant particle measurements and procedure implementation records. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2108,
    "category": 4,
    "text": "A wildfire detector receives solar reflections that trigger false alerts. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Surface water accumulation and access disruption",
      "Compound event constraining cooling and power",
      "Runoff and erosion risk after dry conditions",
      "Reduced detection specificity"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Reduced detection specificity. Appropriate response: Assess alert classification and review using labelled data. Evidence to review: False-positive and true-detection rates under varied conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2109,
    "category": 4,
    "text": "A wildfire detector receives solar reflections that trigger false alerts. Which response best addresses this situation?",
    "options": [
      "Assess alert classification and review using labelled data",
      "Assess alternative communication channels and independence",
      "Assess damage and recovery measures with infrastructure owners",
      "Assess end-to-end latency and authorised user needs"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Reduced detection specificity. Appropriate response: Assess alert classification and review using labelled data. Evidence to review: False-positive and true-detection rates under varied conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2110,
    "category": 4,
    "text": "A wildfire detector receives solar reflections that trigger false alerts. Proposed response: Assess alert classification and review using labelled data. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Test results with simultaneous heat and reduced power capacity",
      "False-positive and true-detection rates under varied conditions",
      "Infiltration, runoff and erosion measurements under relevant conditions",
      "Full-function recovery tests and times by dependency"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Reduced detection specificity. Appropriate response: Assess alert classification and review using labelled data. Evidence to review: False-positive and true-detection rates under varied conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2111,
    "category": 4,
    "text": "Intense rain exceeds a site's drainage capacity. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Loss of critical information exchange",
      "Loss of weather protection for equipment",
      "Surface water accumulation and access disruption",
      "Loss of information timeliness for response"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Surface water accumulation and access disruption. Appropriate response: Assess drainage, retention and safe routes with owners. Evidence to review: Water levels and runoff clearance times by scenario. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2112,
    "category": 4,
    "text": "Intense rain exceeds a site's drainage capacity. Which response best addresses this situation?",
    "options": [
      "Assess both risks jointly and prioritise essential functions",
      "Assess soil, drainage and erosion protection",
      "Identify safe recovery sequence and process dependencies",
      "Assess drainage, retention and safe routes with owners"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Surface water accumulation and access disruption. Appropriate response: Assess drainage, retention and safe routes with owners. Evidence to review: Water levels and runoff clearance times by scenario. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2113,
    "category": 4,
    "text": "Intense rain exceeds a site's drainage capacity. Proposed response: Assess drainage, retention and safe routes with owners. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Water levels and runoff clearance times by scenario",
      "Authorised structural inspections and function recovery time",
      "Latency distribution and percentage of timely useful data",
      "Relevant particle measurements and procedure implementation records"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Surface water accumulation and access disruption. Appropriate response: Assess drainage, retention and safe routes with owners. Evidence to review: Water levels and runoff clearance times by scenario. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2114,
    "category": 4,
    "text": "A storm disrupts communications at a coordination centre. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Compound event constraining cooling and power",
      "Loss of critical information exchange",
      "Runoff and erosion risk after dry conditions",
      "Recovery dependencies beyond electricity supply"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Loss of critical information exchange. Appropriate response: Assess alternative communication channels and independence. Evidence to review: Communication availability and restoration times in tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2115,
    "category": 4,
    "text": "A storm disrupts communications at a coordination centre. Which response best addresses this situation?",
    "options": [
      "Assess damage and recovery measures with infrastructure owners",
      "Assess end-to-end latency and authorised user needs",
      "Assess alternative communication channels and independence",
      "Assess exposure and apply authorised protection procedures"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Loss of critical information exchange. Appropriate response: Assess alternative communication channels and independence. Evidence to review: Communication availability and restoration times in tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2116,
    "category": 4,
    "text": "A storm disrupts communications at a coordination centre. Proposed response: Assess alternative communication channels and independence. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Infiltration, runoff and erosion measurements under relevant conditions",
      "Full-function recovery tests and times by dependency",
      "False-positive and true-detection rates under varied conditions",
      "Communication availability and restoration times in tests"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Loss of critical information exchange. Appropriate response: Assess alternative communication channels and independence. Evidence to review: Communication availability and restoration times in tests. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2117,
    "category": 4,
    "text": "A heatwave coincides with an electricity restriction. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Compound event constraining cooling and power",
      "Loss of weather protection for equipment",
      "Loss of information timeliness for response",
      "Particle exposure and degraded working conditions"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Compound event constraining cooling and power. Appropriate response: Assess both risks jointly and prioritise essential functions. Evidence to review: Test results with simultaneous heat and reduced power capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2118,
    "category": 4,
    "text": "A heatwave coincides with an electricity restriction. Which response best addresses this situation?",
    "options": [
      "Assess soil, drainage and erosion protection",
      "Assess both risks jointly and prioritise essential functions",
      "Identify safe recovery sequence and process dependencies",
      "Assess alert classification and review using labelled data"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Compound event constraining cooling and power. Appropriate response: Assess both risks jointly and prioritise essential functions. Evidence to review: Test results with simultaneous heat and reduced power capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2119,
    "category": 4,
    "text": "A heatwave coincides with an electricity restriction. Proposed response: Assess both risks jointly and prioritise essential functions. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Latency distribution and percentage of timely useful data",
      "Relevant particle measurements and procedure implementation records",
      "Test results with simultaneous heat and reduced power capacity",
      "Water levels and runoff clearance times by scenario"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Compound event constraining cooling and power. Appropriate response: Assess both risks jointly and prioritise essential functions. Evidence to review: Test results with simultaneous heat and reduced power capacity. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2120,
    "category": 4,
    "text": "A severe storm damages roofs at a support facility. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Runoff and erosion risk after dry conditions",
      "Recovery dependencies beyond electricity supply",
      "Reduced detection specificity",
      "Loss of weather protection for equipment"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Loss of weather protection for equipment. Appropriate response: Assess damage and recovery measures with infrastructure owners. Evidence to review: Authorised structural inspections and function recovery time. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2121,
    "category": 4,
    "text": "A severe storm damages roofs at a support facility. Which response best addresses this situation?",
    "options": [
      "Assess damage and recovery measures with infrastructure owners",
      "Assess end-to-end latency and authorised user needs",
      "Assess exposure and apply authorised protection procedures",
      "Assess drainage, retention and safe routes with owners"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Loss of weather protection for equipment. Appropriate response: Assess damage and recovery measures with infrastructure owners. Evidence to review: Authorised structural inspections and function recovery time. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2122,
    "category": 4,
    "text": "A severe storm damages roofs at a support facility. Proposed response: Assess damage and recovery measures with infrastructure owners. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Full-function recovery tests and times by dependency",
      "Authorised structural inspections and function recovery time",
      "False-positive and true-detection rates under varied conditions",
      "Communication availability and restoration times in tests"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Loss of weather protection for equipment. Appropriate response: Assess damage and recovery measures with infrastructure owners. Evidence to review: Authorised structural inspections and function recovery time. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2123,
    "category": 4,
    "text": "A region records drought episodes followed by intense rain. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Loss of information timeliness for response",
      "Particle exposure and degraded working conditions",
      "Runoff and erosion risk after dry conditions",
      "Surface water accumulation and access disruption"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Runoff and erosion risk after dry conditions. Appropriate response: Assess soil, drainage and erosion protection. Evidence to review: Infiltration, runoff and erosion measurements under relevant conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2124,
    "category": 4,
    "text": "A region records drought episodes followed by intense rain. Which response best addresses this situation?",
    "options": [
      "Identify safe recovery sequence and process dependencies",
      "Assess alert classification and review using labelled data",
      "Assess alternative communication channels and independence",
      "Assess soil, drainage and erosion protection"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Runoff and erosion risk after dry conditions. Appropriate response: Assess soil, drainage and erosion protection. Evidence to review: Infiltration, runoff and erosion measurements under relevant conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2125,
    "category": 4,
    "text": "A region records drought episodes followed by intense rain. Proposed response: Assess soil, drainage and erosion protection. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Infiltration, runoff and erosion measurements under relevant conditions",
      "Relevant particle measurements and procedure implementation records",
      "Water levels and runoff clearance times by scenario",
      "Test results with simultaneous heat and reduced power capacity"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Runoff and erosion risk after dry conditions. Appropriate response: Assess soil, drainage and erosion protection. Evidence to review: Infiltration, runoff and erosion measurements under relevant conditions. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2126,
    "category": 4,
    "text": "A wildfire observation service transmits data with variable delays. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Recovery dependencies beyond electricity supply",
      "Loss of information timeliness for response",
      "Reduced detection specificity",
      "Loss of critical information exchange"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Loss of information timeliness for response. Appropriate response: Assess end-to-end latency and authorised user needs. Evidence to review: Latency distribution and percentage of timely useful data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2127,
    "category": 4,
    "text": "A wildfire observation service transmits data with variable delays. Which response best addresses this situation?",
    "options": [
      "Assess exposure and apply authorised protection procedures",
      "Assess drainage, retention and safe routes with owners",
      "Assess end-to-end latency and authorised user needs",
      "Assess both risks jointly and prioritise essential functions"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Loss of information timeliness for response. Appropriate response: Assess end-to-end latency and authorised user needs. Evidence to review: Latency distribution and percentage of timely useful data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2128,
    "category": 4,
    "text": "A wildfire observation service transmits data with variable delays. Proposed response: Assess end-to-end latency and authorised user needs. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "False-positive and true-detection rates under varied conditions",
      "Communication availability and restoration times in tests",
      "Authorised structural inspections and function recovery time",
      "Latency distribution and percentage of timely useful data"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Loss of information timeliness for response. Appropriate response: Assess end-to-end latency and authorised user needs. Evidence to review: Latency distribution and percentage of timely useful data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2129,
    "category": 4,
    "text": "A facility regains power after a storm but cannot restart all processes. Which response best addresses this situation?",
    "options": [
      "Identify safe recovery sequence and process dependencies",
      "Assess alert classification and review using labelled data",
      "Assess alternative communication channels and independence",
      "Assess damage and recovery measures with infrastructure owners"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Recovery dependencies beyond electricity supply. Appropriate response: Identify safe recovery sequence and process dependencies. Evidence to review: Full-function recovery tests and times by dependency. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2130,
    "category": 4,
    "text": "A facility regains power after a storm but cannot restart all processes. Proposed response: Identify safe recovery sequence and process dependencies. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Water levels and runoff clearance times by scenario",
      "Full-function recovery tests and times by dependency",
      "Test results with simultaneous heat and reduced power capacity",
      "Infiltration, runoff and erosion measurements under relevant conditions"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Recovery dependencies beyond electricity supply. Appropriate response: Identify safe recovery sequence and process dependencies. Evidence to review: Full-function recovery tests and times by dependency. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2131,
    "category": 5,
    "text": "A team claims thermal protection improves availability using simulated data alone. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Biased comparison from non-equivalent exposure",
      "Trade-off between continuity and lifecycle cost",
      "Confusion between conditional results and verified benefit",
      "Dependency on an unproven future condition"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Confusion between conditional results and verified benefit. Appropriate response: Limit the claim to the scenario and request relevant validation. Evidence to review: Comparable test results or authorised service data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2132,
    "category": 5,
    "text": "A team claims thermal protection improves availability using simulated data alone. Which response best addresses this situation?",
    "options": [
      "Document source, region, horizon, scenario and uncertainty",
      "Review distribution, extremes and applicable acceptance criterion",
      "Define a continuity metric and reference scenario",
      "Limit the claim to the scenario and request relevant validation"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Confusion between conditional results and verified benefit. Appropriate response: Limit the claim to the scenario and request relevant validation. Evidence to review: Comparable test results or authorised service data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2133,
    "category": 5,
    "text": "A team claims thermal protection improves availability using simulated data alone. Proposed response: Limit the claim to the scenario and request relevant validation. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Comparable test results or authorised service data",
      "Interruption hours and costs over a common horizon",
      "Qualification milestones and fallback activation criteria",
      "Sensitivity analysis with cost sources and ranges"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Confusion between conditional results and verified benefit. Appropriate response: Limit the claim to the scenario and request relevant validation. Evidence to review: Comparable test results or authorised service data. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2134,
    "category": 5,
    "text": "Two measures are compared using different temperature scenarios. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Missing climate scenario traceability",
      "Biased comparison from non-equivalent exposure",
      "The mean conceals individual failures",
      "Need for an indicator linked to exposure and function"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Biased comparison from non-equivalent exposure. Appropriate response: Repeat the comparison with equivalent conditions and function. Evidence to review: Results for both alternatives under the same environmental profile. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2135,
    "category": 5,
    "text": "Two measures are compared using different temperature scenarios. Which response best addresses this situation?",
    "options": [
      "Compare benefits and costs against explicit decision criteria",
      "Define decision condition and fallback if it is not met",
      "Repeat the comparison with equivalent conditions and function",
      "Assess ranges and thresholds that change the decision"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Biased comparison from non-equivalent exposure. Appropriate response: Repeat the comparison with equivalent conditions and function. Evidence to review: Results for both alternatives under the same environmental profile. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2136,
    "category": 5,
    "text": "Two measures are compared using different temperature scenarios. Proposed response: Repeat the comparison with equivalent conditions and function. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Individual results, variability and number of failures",
      "Function-loss hours under comparable floods",
      "Review record, owner and decision with traceable evidence",
      "Results for both alternatives under the same environmental profile"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Biased comparison from non-equivalent exposure. Appropriate response: Repeat the comparison with equivalent conditions and function. Evidence to review: Results for both alternatives under the same environmental profile. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2137,
    "category": 5,
    "text": "An adaptation report uses a projection without horizon or region. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Missing climate scenario traceability",
      "Trade-off between continuity and lifecycle cost",
      "Dependency on an unproven future condition",
      "Selection sensitivity to unconfirmed costs"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Missing climate scenario traceability. Appropriate response: Document source, region, horizon, scenario and uncertainty. Evidence to review: Source and assumption register linked to each conclusion. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2138,
    "category": 5,
    "text": "An adaptation report uses a projection without horizon or region. Which response best addresses this situation?",
    "options": [
      "Review distribution, extremes and applicable acceptance criterion",
      "Document source, region, horizon, scenario and uncertainty",
      "Define a continuity metric and reference scenario",
      "Document the hypothesis and route it to the relevant technical owner"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Missing climate scenario traceability. Appropriate response: Document source, region, horizon, scenario and uncertainty. Evidence to review: Source and assumption register linked to each conclusion. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2139,
    "category": 5,
    "text": "An adaptation report uses a projection without horizon or region. Proposed response: Document source, region, horizon, scenario and uncertainty. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Qualification milestones and fallback activation criteria",
      "Sensitivity analysis with cost sources and ranges",
      "Source and assumption register linked to each conclusion",
      "Comparable test results or authorised service data"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Missing climate scenario traceability. Appropriate response: Document source, region, horizon, scenario and uncertainty. Evidence to review: Source and assumption register linked to each conclusion. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2140,
    "category": 5,
    "text": "A measure reduces interruption hours but increases maintenance costs. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "The mean conceals individual failures",
      "Need for an indicator linked to exposure and function",
      "Risk of acting without competence or approval",
      "Trade-off between continuity and lifecycle cost"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Trade-off between continuity and lifecycle cost. Appropriate response: Compare benefits and costs against explicit decision criteria. Evidence to review: Interruption hours and costs over a common horizon. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2141,
    "category": 5,
    "text": "A measure reduces interruption hours but increases maintenance costs. Which response best addresses this situation?",
    "options": [
      "Compare benefits and costs against explicit decision criteria",
      "Define decision condition and fallback if it is not met",
      "Assess ranges and thresholds that change the decision",
      "Limit the claim to the scenario and request relevant validation"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Trade-off between continuity and lifecycle cost. Appropriate response: Compare benefits and costs against explicit decision criteria. Evidence to review: Interruption hours and costs over a common horizon. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2142,
    "category": 5,
    "text": "A measure reduces interruption hours but increases maintenance costs. Proposed response: Compare benefits and costs against explicit decision criteria. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Function-loss hours under comparable floods",
      "Interruption hours and costs over a common horizon",
      "Review record, owner and decision with traceable evidence",
      "Results for both alternatives under the same environmental profile"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Trade-off between continuity and lifecycle cost. Appropriate response: Compare benefits and costs against explicit decision criteria. Evidence to review: Interruption hours and costs over a common horizon. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2143,
    "category": 5,
    "text": "A test shows average improvement but some samples breach the limit. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Dependency on an unproven future condition",
      "Selection sensitivity to unconfirmed costs",
      "The mean conceals individual failures",
      "Confusion between conditional results and verified benefit"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: The mean conceals individual failures. Appropriate response: Review distribution, extremes and applicable acceptance criterion. Evidence to review: Individual results, variability and number of failures. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2144,
    "category": 5,
    "text": "A test shows average improvement but some samples breach the limit. Which response best addresses this situation?",
    "options": [
      "Define a continuity metric and reference scenario",
      "Document the hypothesis and route it to the relevant technical owner",
      "Repeat the comparison with equivalent conditions and function",
      "Review distribution, extremes and applicable acceptance criterion"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: The mean conceals individual failures. Appropriate response: Review distribution, extremes and applicable acceptance criterion. Evidence to review: Individual results, variability and number of failures. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2145,
    "category": 5,
    "text": "A test shows average improvement but some samples breach the limit. Proposed response: Review distribution, extremes and applicable acceptance criterion. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Individual results, variability and number of failures",
      "Sensitivity analysis with cost sources and ranges",
      "Comparable test results or authorised service data",
      "Source and assumption register linked to each conclusion"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: The mean conceals individual failures. Appropriate response: Review distribution, extremes and applicable acceptance criterion. Evidence to review: Individual results, variability and number of failures. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2146,
    "category": 5,
    "text": "An alternative depends on future technology being qualified on time. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Need for an indicator linked to exposure and function",
      "Dependency on an unproven future condition",
      "Risk of acting without competence or approval",
      "Biased comparison from non-equivalent exposure"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Dependency on an unproven future condition. Appropriate response: Define decision condition and fallback if it is not met. Evidence to review: Qualification milestones and fallback activation criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2147,
    "category": 5,
    "text": "An alternative depends on future technology being qualified on time. Which response best addresses this situation?",
    "options": [
      "Assess ranges and thresholds that change the decision",
      "Limit the claim to the scenario and request relevant validation",
      "Define decision condition and fallback if it is not met",
      "Document source, region, horizon, scenario and uncertainty"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Dependency on an unproven future condition. Appropriate response: Define decision condition and fallback if it is not met. Evidence to review: Qualification milestones and fallback activation criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2148,
    "category": 5,
    "text": "An alternative depends on future technology being qualified on time. Proposed response: Define decision condition and fallback if it is not met. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Review record, owner and decision with traceable evidence",
      "Results for both alternatives under the same environmental profile",
      "Interruption hours and costs over a common horizon",
      "Qualification milestones and fallback activation criteria"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Dependency on an unproven future condition. Appropriate response: Define decision condition and fallback if it is not met. Evidence to review: Qualification milestones and fallback activation criteria. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2149,
    "category": 5,
    "text": "A team wants to measure whether an intervention reduces flood risk. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Need for an indicator linked to exposure and function",
      "Selection sensitivity to unconfirmed costs",
      "Confusion between conditional results and verified benefit",
      "Missing climate scenario traceability"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Need for an indicator linked to exposure and function. Appropriate response: Define a continuity metric and reference scenario. Evidence to review: Function-loss hours under comparable floods. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2150,
    "category": 5,
    "text": "A team wants to measure whether an intervention reduces flood risk. Which response best addresses this situation?",
    "options": [
      "Document the hypothesis and route it to the relevant technical owner",
      "Define a continuity metric and reference scenario",
      "Repeat the comparison with equivalent conditions and function",
      "Compare benefits and costs against explicit decision criteria"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Need for an indicator linked to exposure and function. Appropriate response: Define a continuity metric and reference scenario. Evidence to review: Function-loss hours under comparable floods. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2151,
    "category": 5,
    "text": "A team wants to measure whether an intervention reduces flood risk. Proposed response: Define a continuity metric and reference scenario. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Comparable test results or authorised service data",
      "Source and assumption register linked to each conclusion",
      "Function-loss hours under comparable floods",
      "Individual results, variability and number of failures"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Need for an indicator linked to exposure and function. Appropriate response: Define a continuity metric and reference scenario. Evidence to review: Function-loss hours under comparable floods. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2152,
    "category": 5,
    "text": "A decision relies on a highly uncertain adaptation cost. Which vulnerability or risk mechanism is most directly relevant?",
    "options": [
      "Risk of acting without competence or approval",
      "Biased comparison from non-equivalent exposure",
      "Trade-off between continuity and lifecycle cost",
      "Selection sensitivity to unconfirmed costs"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Selection sensitivity to unconfirmed costs. Appropriate response: Assess ranges and thresholds that change the decision. Evidence to review: Sensitivity analysis with cost sources and ranges. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "foundation"
  },
  {
    "id": 2153,
    "category": 5,
    "text": "A decision relies on a highly uncertain adaptation cost. Which response best addresses this situation?",
    "options": [
      "Assess ranges and thresholds that change the decision",
      "Limit the claim to the scenario and request relevant validation",
      "Document source, region, horizon, scenario and uncertainty",
      "Review distribution, extremes and applicable acceptance criterion"
    ],
    "correctIndex": 0,
    "explanation": "Relevant mechanism: Selection sensitivity to unconfirmed costs. Appropriate response: Assess ranges and thresholds that change the decision. Evidence to review: Sensitivity analysis with cost sources and ranges. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2154,
    "category": 5,
    "text": "A decision relies on a highly uncertain adaptation cost. Proposed response: Assess ranges and thresholds that change the decision. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Results for both alternatives under the same environmental profile",
      "Sensitivity analysis with cost sources and ranges",
      "Interruption hours and costs over a common horizon",
      "Qualification milestones and fallback activation criteria"
    ],
    "correctIndex": 1,
    "explanation": "Relevant mechanism: Selection sensitivity to unconfirmed costs. Appropriate response: Assess ranges and thresholds that change the decision. Evidence to review: Sensitivity analysis with cost sources and ranges. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  },
  {
    "id": 2155,
    "category": 5,
    "text": "An employee identifies a climate vulnerability outside their technical authority. Which response best addresses this situation?",
    "options": [
      "Repeat the comparison with equivalent conditions and function",
      "Compare benefits and costs against explicit decision criteria",
      "Document the hypothesis and route it to the relevant technical owner",
      "Define decision condition and fallback if it is not met"
    ],
    "correctIndex": 2,
    "explanation": "Relevant mechanism: Risk of acting without competence or approval. Appropriate response: Document the hypothesis and route it to the relevant technical owner. Evidence to review: Review record, owner and decision with traceable evidence. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "applied"
  },
  {
    "id": 2156,
    "category": 5,
    "text": "An employee identifies a climate vulnerability outside their technical authority. Proposed response: Document the hypothesis and route it to the relevant technical owner. Which evidence would most directly support evaluating the proposed response?",
    "options": [
      "Source and assumption register linked to each conclusion",
      "Individual results, variability and number of failures",
      "Function-loss hours under comparable floods",
      "Review record, owner and decision with traceable evidence"
    ],
    "correctIndex": 3,
    "explanation": "Relevant mechanism: Risk of acting without competence or approval. Appropriate response: Document the hypothesis and route it to the relevant technical owner. Evidence to review: Review record, owner and decision with traceable evidence. The conclusion remains limited to the assessed conditions and applicable requirements.",
    "difficulty": "advanced"
  }
];
