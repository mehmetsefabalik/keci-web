import React, { Context } from "react";
import { NotificationContext as INotificationContext } from "../interfaces/interface";

const NotificationContext: Context<Partial<
  INotificationContext
>> = React.createContext({});

export const NotificationProvider = NotificationContext.Provider;
export default NotificationContext;
