# Personal Site

This project is a React + Vite personal website with React Router, React
Bootstrap, and a client-side contact form powered by EmailJS.

## Local development

```bash
npm install
npm run dev
```

## Contact form setup

The contact page uses EmailJS so messages can be sent from a static site without
adding a backend server.

1. Create an EmailJS account and connect an email service.
2. Create an email template that uses these variables:
   `user_name`, `user_email`, `subject`, and `message`
3. Copy `.env.example` to `.env.local`
4. Fill in your EmailJS values:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

5. Restart the Vite dev server and test the form on the Connect page.

## GitHub Pages EmailJS setup

If you want the deployed GitHub Pages site to send mail too, add these same
values as repository secrets in GitHub:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

Path in GitHub:
`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

After adding them, push to `main` again so the Pages workflow rebuilds the site
with those values available during the Vite build.

If those values are missing, the contact form will still render but it will show
a warning instead of sending mail.

For a ready-to-paste subject/body template, see `EMAILJS_TEMPLATE.md`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
