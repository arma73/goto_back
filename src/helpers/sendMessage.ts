import twilio from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

const { TWILIO_SID, TWILIO_PHONE, TWILIO_TOKEN } = process.env;

const twilioClient = twilio(TWILIO_SID, TWILIO_TOKEN);

export const sendMessage = (to: string, body: string): Promise<MessageInstance> => {
    return twilioClient.messages.create({
        body,
        to,
        from: TWILIO_PHONE,
    });
};

export const sendVerificationMessage = (to: string, key: string): Promise<MessageInstance> =>
    sendMessage(to, `Your verification key is: ${key}`);

