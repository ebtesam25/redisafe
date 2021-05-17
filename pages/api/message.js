const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

export default async (req, res) => {
  try {
    console.log(req.body);
    const { phone, alertMessage } = req.body;

    const message = await client.messages.create({
      body: `Hey, welcome to RediSafe! ${alertMessage}`,
      from: "+13254651354",
      to: phone,
    });

    res.status(200).json({ sid: message.sid, message: "Success" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const config = {
  api: {
    bodyParser: true,
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
