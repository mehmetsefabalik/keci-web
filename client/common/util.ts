export const getExpireDate = () => {
  const date = new Date();
  date.setTime(date.getTime() + 700 * 24 * 60 * 60 * 1000);
  return date.toUTCString();
};

export function success(message: string) {
  this.setMessage(message);
  this.setSeverity("success");
  this.setOpen(true);
}

export function error(message: string) {
  this.setMessage(message);
  this.setSeverity("error");
  this.setOpen(true);
}

export function warning(message: string) {
  this.setMessage(message);
  this.setSeverity("warning");
  this.setOpen(true);
}

export function info(message: string) {
  this.setMessage(message);
  this.setSeverity("info");
  this.setOpen(true);
}
