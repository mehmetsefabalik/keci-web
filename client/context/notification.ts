import React, { Context } from "react";
import { NotificationContext as INotificationContext } from "../interfaces/notification";

const NotificationContext: Context<Partial<
  INotificationContext
>> = React.createContext({});

export const NotificationProvider = NotificationContext.Provider;
export default NotificationContext;
