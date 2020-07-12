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
