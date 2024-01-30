import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  BarChartOutlined,
  MessageOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  PieChartOutlined,
  TeamOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role) => {
  const defaultSidebarItems = [
    {
      label: <Link href={`/dashboard/overview`}>Overview</Link>,
      key: "overview",
      icon: <PieChartOutlined />,
    },
    {
      label: <Link href={`/dashboard/team`}>My Team</Link>,
      key: "my team",
      icon: <TeamOutlined />,
    },
    {
      label: "Message",
      key: "message",
      icon: <MessageOutlined />,
    },
    {
      label: "Calender",
      key: "calender",
      icon: <CalendarOutlined />,
    },
    {
      label: "RECRUITMENT",
      key: "recruitment",
    },
    {
      label: "Jobs",
      key: "jobs",
      icon: <SolutionOutlined />,
    },
    {
      label: "Candiadates",
      key: "candiadates",
      icon: <TeamOutlined />,
    },
    {
      label: "ORGANIZATION",
      key: "organization",
    },
    {
      label: "Employee",
      key: "employee",
      icon: <UserOutlined />,
    },
    {
      label: "Documents",
      key: "documents",
      icon: <FileTextOutlined />,
    },
    {
      label: <Link href={`/dashboard/reports`}>Reports</Link>,
      key: "reports",
      icon: <BarChartOutlined />,
    },
  ];

  const superAdminSidebarItems = [...defaultSidebarItems];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  //   else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  //   else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  //   else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
