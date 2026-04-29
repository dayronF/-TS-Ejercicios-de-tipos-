type Email = {
  type: "Email";
  receptor: string;
  message: string;
};
type SMS = {
  type: "SMS";
  number: number;
  message: string;
};
type Push = {
  type: "Push";
  position: string;
  title: string;
  message: string;
};
type Notification = Email | SMS | Push;

function sendNotification(notifications: Notification) {
  if (notifications.type === "Email") {
    console.log("Enviando notificación por Email");
  } else if (notifications.type === "SMS") {
    console.log("Enviando notificación por SMS");
  } else if (notifications.type === "Push") {
    console.log("Enviando notificación por Push");
  }
}
