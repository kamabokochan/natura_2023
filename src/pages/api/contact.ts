import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type ContactData = {
  name: string
  email: string
  body: string
}

interface ExtendedNextApiRequest extends NextApiRequest {
  body: ContactData
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ContactData | { message: string }>,
) {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body

  if (!data.name || !data.email || !data.body) {
    res.status(400).json({ message: 'Bad request' })
  }
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  })
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'natura メールフォーム お問い合わせ',
      html: `
        <p>名前: ${data.name}</p>
        <p>メールアドレス: ${data.email}</p>
        <p>お問い合わせ内容: ${data.body}</p>
      `,
    })
    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
