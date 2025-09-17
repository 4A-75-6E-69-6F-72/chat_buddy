# Chatbuddy

Chatbuddy is a Next.js application powered by Mistral AI. Follow the steps below to set up and run the project.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd chatbuddy
```

### 2. Create a `.env` file
At the root of the project, create a file named `.env` and add the following variable:

```env
NEXT_PUBLIC_MISTRAL_API_KEY=your_mistral_api_key_here
```

> 🔑 Replace `your_mistral_api_key_here` with a valid key generated from the [Mistral AI Console](https://console.mistral.ai/).

### 3. Install dependencies
Run the following command to install all required packages:

```bash
npm install
```

### 4. Start the development server
Once installation is complete, start the app in development mode:

```bash
npm run dev
```

### 5. Access the application
Open your browser and navigate to:

```
http://<your-ip-address>:3000
```

You should now see **Chatbuddy** running locally 🎉

---

## 🛠️ Environment Specifications

The project was built with the following dependencies:

```json
"@eslint/eslintrc": "^3",
"@tailwindcss/postcss": "^4",
"@types/node": "^20",
"@types/react": "^19",
"@types/react-dom": "^19",
"eslint": "^9",
"eslint-config-next": "15.5.3",
"tailwindcss": "^4",
"typescript": "^5"
```

---

## 📄 License
This project is licensed under your chosen license (e.g., MIT).
