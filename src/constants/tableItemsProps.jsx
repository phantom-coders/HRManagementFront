const columns = [
  {
    title: "Employees",
    dataIndex: "employee",
    key: "employee",
    align: "center",
  },
  {
    title: "Worked Days",
    dataIndex: "work_days",
    key: "work_days",
    align: "center",
  },
  {
    title: "Non Worked Days",
    dataIndex: "non_worked_days",
    key: "non_worked_days",
    align: "center",
  },
  {
    title: "Let Clock In Days",
    dataIndex: "let_clock_in_days",
    key: "let_clock_in_days",
    align: "center",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
  },
];
const data = [
  {
    employee: "Suruj",
    work_days: 0,
    non_worked_days: 30,
    let_clock_in_days: 30,
    createdAt: "2014-12-24 23:12:00",
  },
  {
    employee: "Pritom",
    work_days: 0,
    non_worked_days: 30,
    let_clock_in_days: 30,
    createdAt: "2014-12-24 23:12:00",
  },
  {
    employee: "Kalam",
    work_days: 0,
    non_worked_days: 30,
    let_clock_in_days: 30,
    createdAt: "2014-12-24 23:12:00",
  },
  {
    employee: "Mukul",
    work_days: 0,
    non_worked_days: 30,
    let_clock_in_days: 30,
    createdAt: "2014-12-24 23:12:00",
  },
];

export const tableItemsProps = {
  data,
  columns,
};
