import config from "config";
import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";
import ApiError from "../error/apiError";

async function sendEmail(code: string, emailToSend: string) {
  const transporter = nodemailer.createTransport({
    host: config.get("email.name"),
    port: config.get("email.port"),
    secure: false,
    auth: {
      user: config.get("email.username"),
      pass: config.get("email.password"),
    },
  });
  try {
    const info = await transporter.sendMail({
      from: config.get("email.username"),
      to: emailToSend,
      subject: "Verification Code Travel App",
      text: `Verification Code: ${code}`,
    });
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (e) {
    return new ApiError(StatusCodes.BAD_REQUEST, e.message);
  }
}

export default sendEmail;
