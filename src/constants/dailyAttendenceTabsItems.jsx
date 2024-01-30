import AbsentEmployes from "@/components/Reports/Tab/AbsentEmployes";
import LetClockInEmployes from "@/components/Reports/Tab/LetClockInEmployes";
import WorkedEmployes from "@/components/Reports/Tab/WorkedEmployes";

export const tabItems = [
  {
    key: "1",
    label: "Worked Employes",
    children: <WorkedEmployes />,
  },
  {
    key: "2",
    label: "Absent Employes",
    children: <AbsentEmployes />,
  },
  {
    key: "3",
    label: "Let Clock In Employes",
    children: <LetClockInEmployes />,
  },
];
