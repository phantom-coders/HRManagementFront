import React from "react";
import { MailFilled, DisconnectOutlined } from "@ant-design/icons";
export default function ModalContent() {
  return (
    <div>
      <hr />
      <div>
        <p className="text-center font-semibold my-2">Invite New Member</p>
        <div className="flex justify-center gap-10">
          <div className="text-center p-5  shadow-2xl shadow-primary cursor-pointer">
            <MailFilled className="text-2xl" />
            <p className="my-2 text-blue-800 font-semibold">
              Invite By Email Id
            </p>
            <p className="text-xs">
              Enter the email to invite them to Talent Sync
            </p>
          </div>
          <div className="text-center p-5  shadow-2xl shadow-primary cursor-pointer">
            <DisconnectOutlined className="text-2xl" />
            <p className="my-2 text-blue-800 font-semibold">Invite By Link</p>
            <p className="text-xs">Invite the employees through a link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
