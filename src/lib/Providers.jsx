"use client";
import { Provider } from "react-redux";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { store } from "@/redux/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
