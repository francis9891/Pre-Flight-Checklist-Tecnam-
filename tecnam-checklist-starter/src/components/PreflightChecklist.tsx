import React from "react";

interface ChecklistItem {
  step: string;
  status: string;
  note?: string;
}

interface Section {
  title: string;
  items: ChecklistItem[];
}

interface Phase {
  phase: string;
  sections: Section[];
}

const checklistData: Phase[] = [
  {
    phase: "Shutdown & Securing",
    sections: [
      {
        title: "Shutdown",
        items: [
          { step: "Throttle", status: "IDLE RPM" },
          { step: "Park Brake", status: "SET" },
          { step: "Radio", status: "OFF", note: "Turn off to avoid drain after engine shutdown." },
          { step: "Ignition Switches", status: "CHECK L/R, OFF" },
          { step: "Master Switch", status: "OFF", note: "Switch off after avionics and lights to preserve battery." }
        ]
      },
      {
        title: "Securing Aircraft",
        items: [
          { step: "Wheel Chocks", status: "INSTALL" },
          { step: "Controls", status: "SECURE with seatbelt", note: "Prevent wind-induced movement while parked." },
          { step: "Pitot Cover", status: "INSTALL" },
          { step: "Baggage", status: "CHECK", note: "Ensure all bags are removed or secured properly." }
        ]
      }
    ]
  }
];

export default function PreflightChecklist() {
  return (
    <div>
      {checklistData.map((phase) => (
        <div key={phase.phase}>
          <h2>{phase.phase}</h2>
          {phase.sections.map((section) => (
            <div key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.step}</strong>: {item.status}
                    {item.note && <em> – {item.note}</em>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
