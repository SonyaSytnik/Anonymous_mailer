import Email, { EmailI } from "../modules/email/email.model"

describe('Create email', () => {
    test('Create email', async () => {
        const payload = {
            to: 'to',
            subject: 'subject',
            text: 'text'
        }

        const email = new Email(payload as EmailI)
        expect(email).not.toBeNull()
    }, 30000)
})