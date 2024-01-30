import {
  CalendarOutlined,
  FieldTimeOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const reportPageItems = (role) => {
  const defaultSidebarItems = [
    {
      label: (
        <Link href={`/dashboard/reports/daily_attendence`}>
          Daily Attendence
        </Link>
      ),
      key: "daily_attendence",
      icon: <CalendarOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/reports/monthly_attendence`}>
          Monthly Attendence
        </Link>
      ),
      key: "monthly_attendence",
      icon: <CalendarOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/reports/monthly_in_out`}>Monthly In Out</Link>
      ),
      key: "monthly_in_out",
      icon: <FieldTimeOutlined />,
    },
    {
      label: <Link href={`/dashboard/reports/let_clock_in`}>Let Clock In</Link>,
      key: "let_clock_in",
      icon: <HistoryOutlined />,
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
