export type NotificationSeverity = "warning" | "error" | "success" | "info";

export interface NotificationContext {
  open: boolean;
  setOpen: (e: boolean) => void;
  setMessage: (e: string) => void;
  setSeverity: (e: NotificationSeverity) => void;
}
