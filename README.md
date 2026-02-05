# 💌 Valentine's Day Interactive Card

A beautiful, interactive Valentine's Day card with animations, confetti, and a playful "Will you be my Valentine?" message. This project features a creative envelope opening animation and an engaging button interaction that makes saying "no" increasingly difficult!

## ✨ Features

### 🎬 Animations
- **Automatic card flip** - The card flips to reveal the back
- **Envelope opening** - The envelope lid opens smoothly
- **Letter emergence** - The letter slides out and rotates into view
- **Confetti celebration** - Heart-shaped confetti bursts when "Yes" is clicked

### 🎮 Interactive Elements
- **Dynamic "No" button** - Each click makes the button smaller and changes the text with increasingly persuasive prompts:
  - "Are you sure?"
  - "Are you positive?"
  - "Are you certain?"
  - "Are you 100% sure?"
  - ...and 12 more desperate pleas! 🥺

- **Growing "Yes" button** - Gets bigger in width, height, and font size with each "No" click

- **Shake animation** - The "No" button shakes when clicked for extra emphasis

### 🎉 Thank You Screen
When "Yes" is clicked, a beautiful overlay appears featuring:
- Animated beating heart
- Romantic thank you message
- Floating heart emojis
- Continued confetti celebration
- Smooth fade-in transitions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser!

### Installation

1. **Clone or download** this repository
2. **Customize** the card by editing `index.html`:
   ```html
   <!-- Change the recipient name -->
   <div id="Name">Jane Doe</div>
   
   <!-- Change the sender name -->
   <p id="senderName">John Doe</p>
   
   <!-- Change the greeting -->
   My Dearest {Insert Name Here},
   ```

3. **Add your images** (optional):
   - Replace `/images/playlist.svg` with your stamp image
   - Replace `/images/kissing_penguins.webp` with your decorative image

4. **Open** `index.html` in your web browser

## 📁 Project Structure

```
valentine-card/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── app.js             # Interactive functionality
└── README.md          # Project documentation
```

## 🎨 Customization

### Colors
Edit `styles.css` to change the color scheme:

```css
/* Card background color */
#flip-card-front, #flip-card-back {
  background-color: #C20114; /* Valentine's red */
}

/* Letter background */
#letter {
  background-color: #FAEBD7; /* Antique white */
}

/* Page background */
body {
  background: #EEE5BF; /* Warm beige */
}
```

### Messages
Edit the prompts in `app.js`:

```javascript
const noPrompts = [
  "No, I don't love you.",
  "Are you sure?",
  "Are you positive?",
  // Add your own creative messages!
];
```

### Button Behavior
Adjust growth/shrink rates in `app.js`:

```javascript
const widthDelta = 30;  // Change width growth (px)
const heightDelta = 8;  // Change height growth (px)
const fontDelta = 1;    // Change font size growth (px)
```

### Thank You Message
Customize the celebration text in `index.html`:

```html
<h1 class="thank-you-title">Yay! I knew it!</h1>
<p class="thank-you-message">
  You've made me the happiest person in the world! 
</p>
```

## 🎯 How It Works

### Animation Sequence
1. **Click anywhere** to start the animation
2. Card flips after 1.5 seconds
3. Envelope opens after 2 seconds
4. Letter slides up after 2 more seconds
5. Letter rotates into final position

### Button Mechanics
- **Clicking "No"**: 
  - Increments click counter
  - Changes button text to next prompt
  - Shrinks "No" button (width, height, font)
  - Grows "Yes" button (width, height, font)
  - Triggers shake animation
  
- **Clicking "Yes"**:
  - Launches heart confetti (3 bursts)
  - Shows thank you overlay after 0.5s
  - Continues confetti celebration
  - Displays romantic messages

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling, animations, and transitions
- **JavaScript (ES6)** - Interactive functionality
- **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)** - Confetti animation library
- **Google Fonts** - Dancing Script font

## 🎓 Key CSS Features

- **Flexbox** - Button alignment and layout
- **3D Transforms** - Card flip and envelope opening
- **Keyframe Animations** - Heartbeat, floating hearts, shake effects
- **Backdrop Filter** - Blurred overlay background
- **Transitions** - Smooth size and opacity changes

## 📱 Responsive Design

The card is responsive and includes media queries for screens smaller than 900px:
- Adjusts card width to 90vw
- Scales down font sizes
- Maintains aspect ratios

## 💡 Tips

1. **Test the animation** - Click anywhere on the page to start
2. **Try clicking "No"** multiple times to see all the prompts
3. **The "No" button** has minimum sizes (80px width, 30px height, 8px font) so it never completely disappears
4. **Confetti hearts** use custom colors: pink, hot pink, deep pink, and medium violet red

## 🐛 Troubleshooting

### Animation doesn't start
- Make sure JavaScript is enabled
- Check browser console for errors
- Ensure confetti library CDN is accessible

### Images not showing
- Verify image paths in `index.html`
- Check that image files exist in `/images/` folder
- Use browser DevTools to check network requests

### Buttons not aligned
- Check that `.button-container` has flexbox properties
- Verify absolute positioning is set correctly
- Clear browser cache and reload

## 📝 License

This project is free to use for personal purposes. Feel free to customize and share with your loved ones! ❤️

## 🎊 Happy Valentine's Day!

May this card bring a smile to your special someone's face! 

---

**Pro tip**: The more they click "No", the harder it gets to resist clicking "Yes"! 😄