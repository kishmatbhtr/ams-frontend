"use client";

import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export const antdNotification = (
  type: NotificationType,
  message: string,
  description?: string
) => {
  notification[type]({
    message: message,
    description: description,
    duration: 3,
  });
};
