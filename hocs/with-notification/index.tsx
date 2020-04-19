import React, { FunctionComponent, useState } from "react";
import { NotificationSeverity } from "../../common/interface";
import { NotificationProvider } from "../../context/notification";
import { Notification } from "../../components/notification";

const WithNotification: FunctionComponent = ({ children }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState<
    NotificationSeverity
  >("info");
  return (
    <NotificationProvider
      value={{
        setOpen: setNotificationOpen,
        setMessage: setNotificationMessage,
        setSeverity: setNotificationSeverity,
      }}
    >
      {children}
      <Notification
        open={notificationOpen}
        message={notificationMessage}
        severity={notificationSeverity}
        setOpen={setNotificationOpen}
      />
    </NotificationProvider>
  );
};
export { WithNotification };
