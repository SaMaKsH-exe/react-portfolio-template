# Modern Portfolio Template with React, TypeScript, and SendGrid

A modern, responsive portfolio template built with React, TypeScript, and TailwindCSS. Features a dark/light theme toggle, contact form functionality using SendGrid, and a clean, minimal design.

## 🌟 Features

- **Responsive Design**: Utilizing TailwindCSS for a seamless user experience across devices

- **Dark/Light Theme**: Toggle between dark and light modes

- **Contact Form**: Integrated with SendGrid for email functionality

- **TypeScript Support**: Full TypeScript implementation for type safety

- **Express Backend**: Handles email sending through SendGrid API

- **Modern Stack**: Built with React 18 and latest dependencies

## 📱 Pages

- **Home**: Landing page with hero section, about preview, and gallery preview

- **About**: Detailed about section with timeline and skills

- **Gallery**: Grid layout for showcasing work/portfolio items

- **Contact**: Contact form with email functionality

## 🚀 Technologies

- React 18

- TypeScript

- TailwindCSS

- Express.js

- SendGrid

## 💻 Getting Started

1\. Clone the repository:

```
git clone https://github.com/patrickhaahr/react-portfolio-template.git
```

2\. Install dependencies:

```
npm install
```

3\. Environment Setup

Copy `.env.example` to `.env` in the root directory

Copy `server/.env.example` to `server/.env`

Update both `.env` files with your actual values:

- Get a SendGrid API key from [SendGrid](https://sendgrid.com)
- Set your email addresses
- Adjust ports if needed

4\. Start the development server:

Start Express backend:
```
npm run server
```
Start React frontend:
```
npm start
```
## 📝 Configuration

### SendGrid Setup

1\. Create a SendGrid account

2\. Get an API key

3\. Verify a sender email

4\. Update the `.env` file with your credentials

### Customization

- Update content in components

- Modify styling using TailwindCSS classes

- Add/remove pages as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
