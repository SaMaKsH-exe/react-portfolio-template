import { EmailData, EmailResponse } from "../types/email";

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email",
    };
  }
};
