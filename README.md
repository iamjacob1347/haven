# Haven

**Haven** is an AI-powered platform connecting Christians experiencing persecution with trusted help, encouragement, and a global community of prayer.

## About Haven

Haven is designed around three main experiences:

- **FaithBridge** — Helps users describe their situation and find relevant trusted resources.
- **Haven Sharing** — Allows users to share testimonies and prayer requests.
- **Haven Community** — Provides a space for Christian encouragement, discussion, and uplifting content.

Haven also includes an **anonymous mode** designed to help users control how their identity is displayed within the platform.

> **Note:** This repository contains the current prototype developed for the Gloo AI Hackathon / Biola University selection process.

---

## 🚀 Running Haven Locally

### ⚠️ Important

**Do not open `index.html` by double-clicking it.**

Haven uses browser functionality that requires the application to be served through a local web server. Opening the file directly with `file://` may cause security errors and prevent parts of the application from loading correctly.

**You do not need Node.js, npm, or any other package manager to run this version of Haven.**

### Option 1: Python (Recommended)

#### 1. Download or clone this repository

Using Git:

    git clone https://github.com/iamjacob1347/haven.git

Then enter the project folder:

    cd haven

If you downloaded the repository as a ZIP file, unzip it and open a terminal inside the resulting `haven` folder.

#### 2. Start a local web server

Run:

    python3 -m http.server 8000

You should see a message similar to:

    Serving HTTP on 0.0.0.0 port 8000

#### 3. Open Haven

Open your web browser and visit:

**http://localhost:8000**

Haven should now load normally.

#### 4. Stop the server

When you are finished, return to the terminal and press:

    Ctrl + C

---

## 📁 Project Structure

    haven/
    ├── assets/
    │   ├── haven-dove.png
    │   └── purple-supernova.png
    │
    ├── index.html
    ├── app.js
    ├── app.css
    ├── opening.js
    ├── signup.js
    ├── signup.css
    ├── social.css
    ├── website.css
    ├── README.md
    └── SOURCE_CODE.md

### Main Files

| File | Description |
|---|---|
| `index.html` | Main HTML structure for the application |
| `app.js` | Main application functionality and interactions |
| `app.css` | Main application styling |
| `opening.js` | Opening/loading experience |
| `signup.js` | Sign-up and registration functionality |
| `signup.css` | Sign-up page styling |
| `social.css` | Styling for social and community features |
| `website.css` | Website and landing-page styling |
| `assets/` | Images and other visual assets used by Haven |

---

## 💻 Requirements

To run the current prototype locally, you need:

- A modern web browser such as Chrome, Safari, Firefox, or Edge
- **Python 3**

No `npm install` or package installation is required.

---

## 🛠️ Troubleshooting

### Haven shows a blank or purple screen

Make sure you did **not** open `index.html` directly.

Instead, start the local server:

    python3 -m http.server 8000

Then visit:

**http://localhost:8000**

### Port 8000 is already in use

You can use another port:

    python3 -m http.server 8080

Then visit:

**http://localhost:8080**

### `python3` is not recognized

Try:

    python -m http.server 8000

If that also does not work, install Python 3 and try again.

---

## 🔨 Development

Haven is currently a prototype being developed for the **Gloo AI Hackathon**.

The current version prioritizes demonstrating the product experience and core concept. Additional backend functionality, AI integrations, data infrastructure, security measures, and other production features may be developed in later stages.

---

## 📜 License & Third-Party Resources

See [`SOURCE_CODE.md`](SOURCE_CODE.md) for information about source code, licenses, and third-party resources used in the project.
