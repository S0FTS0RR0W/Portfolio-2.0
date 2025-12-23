# Portfolio 2.0

A modern, high-performance personal portfolio website built with [Astro](https://astro.build). This site features a sleek dark mode design, smooth animations, and real-time coding statistics powered by the WakaTime API.

## ✨ Features

- **⚡ Fast & SEO Friendly**: Built with Astro for zero-JavaScript defaults where possible.
- **🎨 Modern UI**: Custom dark theme with "glassmorphism" effects and mouse spotlight interactions.
- **📊 WakaTime Integration**: Fetches and displays coding stats (languages, best day, daily average) at build time.
- **🔄 Smooth Transitions**: Uses Astro View Transitions for SPA-like navigation.
- **📱 Responsive**: Fully responsive design for all devices.

## 🛠️ Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-2.0.git
    cd portfolio-2.0
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory to store your WakaTime API key:
    ```bash
    WAKATIME_API_KEY=your_wakatime_secret_key
    ```
    > You can get your Secret API Key from your WakaTime Account Settings.

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the site.

## 🚀 Build & Deploy

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder, ready to be deployed to Netlify, Vercel, or any static host.
