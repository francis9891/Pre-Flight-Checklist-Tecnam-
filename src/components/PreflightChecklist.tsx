// src/components/PreflightChecklist.tsx

import React from “react”;

interface ChecklistItem {
step: string;
status: string;
note?: string;
}

interface ChecklistSection {
title: string;
items: ChecklistItem[];
}

interface ChecklistPhase {
phase: string;
sections: ChecklistSection[];
}

const shutdownChecklist: ChecklistPhase = {
phase: “Shutdown & Securing”,
sections: [
{
title: “Shutdown”,
items: [
{ step: “Throttle”, status: “IDLE RPM” },
{ step: “Park Brake”, status: “SET” },
{ step: “Radio”, status: “OFF”, note: “Turn off to avoid drain after engine shutdown.” },
{ step: “Ignition Switches”, status: “CHECK L/R, OFF” },
{ step: “Master Switch”, status: “OFF”, note: “Switch off after avionics and lights to preserve battery.” }
]
},
{
title: “Securing Aircraft”,
items: [
{ step: “Wheel Chocks”, status: “INSTALL” },
{ step: “Controls”, status: “SECURE with seatbelt”, note: “Prevent wind-induced movement while parked.” },
{ step: “Pitot Cover”, status: “INSTALL” },
{ step: “Baggage”, status: “CHECK”, note: “Ensure all bags are removed or secured properly.” }
]
}
]
};

const PreflightChecklist: React.FC = () => {
return (

{shutdownChecklist.phase}
{shutdownChecklist.sections.map((section, i) => (

{section.title}

{section.items.map((item, j) => (

{item.step}
{item.status}
{item.note && {item.note}}

))}


))}

);
};

export default PreflightChecklist;
