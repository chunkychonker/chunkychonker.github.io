# EmailJS Template Setup

Use this when creating your EmailJS template for the contact form.

## Recommended template fields

Your form already sends these variables:

- `user_name`
- `user_email`
- `subject`
- `message`
- `to_name`
- `site_name`

## Suggested email subject

```text
New website message: {{subject}}
```

## Suggested email body

```text
You received a new message from {{site_name}}.

From: {{user_name}}
Reply email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

## Recommended EmailJS settings

- Send the email to your real inbox address.
- If your EmailJS service supports it, set `Reply-To` to `{{user_email}}`.
- Keep the template ID, service ID, and public key from your EmailJS dashboard.

## Local env file

Create `.env.local` in the project root:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Then restart `npm run dev`.
