# Website for Elliott Young Designs

# React + Vite + Tailwind CSS + EmailJS + GitHub Pages

This guide walks you through setting up EmailJS with your React, Vite, and Tailwind CSS project, as well as deploying the project to GitHub Pages.

## Prerequisites

1. [Node.js](https://nodejs.org/) installed.
2. A GitHub account and a repository created for your project.
3. EmailJS account (sign up at [EmailJS](https://www.emailjs.com/)).

---

## Setting Up EmailJS

EmailJS allows you to send emails directly from your React app without a backend server.

### Step 1: Install EmailJS SDK

Run the following command in your project directory to install the EmailJS library:

```bash
npm install @emailjs/browser
```

### Step 2: Configure EmailJS

1. Log in to your EmailJS account.
2. Create a new email service and note the **Service ID**.
3. Create a new email template and note the **Template ID**.
4. Go to the "Integration" tab and generate a **Public Key**.

### Step 3: Integrate EmailJS in Your React App

In your React project, create a new component for the contact form (e.g., `ContactForm.jsx`).

Here is a sample implementation:

```jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your Public Key
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </label>
      <label className="block mb-2">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Send Message
      </button>
      {status && <p className="mt-2 text-sm text-red-500">{status}</p>}
    </form>
  );
};

export default ContactForm;
```

### Step 4: Test Email Functionality

Start your development server using:

```bash
npm run dev
```

Submit the form and verify that the email is sent successfully.

---

## Deploying to GitHub Pages

Follow these steps to deploy your Vite project to GitHub Pages.

### Step 1: Install the GitHub Pages Plugin

Run the following command to install the `vite-plugin-gh-pages` package:

```bash
npm install vite-plugin-gh-pages --save-dev
```

### Step 2: Update `vite.config.js`

Modify your Vite configuration file to include the plugin:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/REPOSITORY_NAME/", // Replace with your GitHub repository name
 //e.g "https://elliottyoung1.github.io/REPO_NAME/"
});
```

### Step 3: Add a Deploy Script

Update the `scripts` section in your `package.json` file:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite-gh-pages"
}
```

### Step 4: Deploy

Run the following command to build and deploy your project:

```bash
npm run deploy
```

Your project should now be live on `https://<your-username>.github.io/<repository-name>/`.

---

## Additional Notes

- For Tailwind CSS, ensure you have configured the `tailwind.config.js` file properly.
- For more details, visit [Vite Docs](https://vitejs.dev/) and [GitHub Pages](https://pages.github.com/).

---


