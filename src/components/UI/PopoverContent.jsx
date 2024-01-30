import { Button } from "antd";
import React from "react";
import { TeamOutlined, LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function PopoverContent() {
  return (
    <div>
      <div>
        <Button size="middle" icon={<TeamOutlined />}>
          HR Management
        </Button>
        <hr className="my-2" />
        <div className="flex flex-col gap-y-3">
          <Link href={"/account_settings"}>Account Setting</Link>

          <Button
            type="link"
            className="text-left m-0 p-0"
            size="middle"
            icon={<LogoutOutlined />}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
