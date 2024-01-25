import {
  UserOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export const headerItems = [
  {
    label: "Notification",
    key: "notification",

    icon: (
      <NotificationOutlined style={{ color: "#87d068", fontSize: "20px" }} />
    ),
  },
  {
    label: "Setting",
    key: "setting",
    icon: <SettingOutlined style={{ color: "#87d068", fontSize: "20px" }} />,
  },

  {
    label: "Profile",
    key: "profile",
    icon: <UserOutlined style={{ color: "#87d068", fontSize: "20px" }} />,
    children: [
      {
        label: <Link href={`/${"role"}`}>Account Profile</Link>,
        key: `/${"role"}/profile`,
      },
      {
        label: <Link href={`/${"role"}/change-password`}>Change Password</Link>,
        key: `/${"role"}/change-password`,
      },
    ],
  },
];
