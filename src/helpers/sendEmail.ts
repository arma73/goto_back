import Mailgun, { messages } from "mailgun-js";

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_EMAIL } = process.env;

const mailGunClient = new Mailgun({
    "apiKey": MAILGUN_API_KEY || "",
    "domain": MAILGUN_DOMAIN || "",
});

const sendEmail = (
    to: string,
    subject: string,
    html: string
): Promise<messages.SendResponse> => {
    const emailData: messages.SendData = {
        "from": MAILGUN_EMAIL,
        to,
        subject,
        html,
    };

    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (
    fullName: string,
    key: string
): Promise<messages.SendResponse> => {
    const emailSubject = `Hello ${fullName}, please verify your email`;
    const emailBody = `Verify your email by clicking \
        <a href="http://goto.com/verification/${key}/"> here </a>`;

    return sendEmail("arma.biz9805@gmail.com", emailSubject, emailBody);
};
