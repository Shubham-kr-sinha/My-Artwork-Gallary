# Shubham's Art Gallery

A stunning, interactive artwork portfolio website designed with modern web animations. This project showcases a collection of artwork in a continuous, auto-scrolling gallery with immersive viewing features.

![Project Preview](<img width="1898" height="864" alt="image" src="https://github.com/user-attachments/assets/861576d3-a097-4b09-821e-047cc88023e4" />
<img width="1899" height="866" alt="image" src="https://github.com/user-attachments/assets/a260aee4-5c5a-4275-ae68-4ae686ba21a9" />

)
*(Note: Replace with a screenshot of your actual website UI)*

## 🎨 Features

- **Hybrid Scrolling Gallery**: A seamless horizontal marquee that auto-scrolls indefinitely. Users can also manually swipe or drag to navigate.
- **Micro-Interactions**: 
  - **Hover-to-Pause**: The gallery pauses when you hover over it, allowing for detailed inspection.
  - **Click-to-Zoom**: Opens any artwork in a full-screen, immersive Lightbox modal.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS with CSS Variables for theming.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/artwork-gallery.git
    cd artwork-gallery
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:5173` to see the app running.

## 📦 Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be in the `dist` folder, ready to be hosted on platforms like Vercel, Netlify, or GitHub Pages.

## 📂 Project Structure

```
├── public/             # Static assets (artworks, decorations)
├── src/
│   ├── components/     # React components (Gallery, ArtworkCard)
│   ├── App.jsx         # Main application layout
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles and variables
└── index.html          # HTML template
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

*Created by Shubham*
