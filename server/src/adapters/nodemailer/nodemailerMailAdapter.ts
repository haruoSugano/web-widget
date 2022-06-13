import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "284f0d210199f9",
        pass: "63bc64d90d659b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Helio Haruo <haruosugano@icloud.com>',
            subject,
            html: body,
        });
    }
}