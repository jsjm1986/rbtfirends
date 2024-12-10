# AI Robot Girlfriend

An intelligent chatbot based on GLM-4, featuring voice interaction, emotional expression, and touch feedback. Built with pure frontend technologies, it offers adorable animations and rich interactive experiences.

[Preview Image]

## 🌟 Features

### 1. Intelligent Conversation
- Powered by GLM-4 Large Language Model
- Natural and fluid dialogue experience
- Emotional understanding and response
- Role-playing and emotional interaction support

### 2. Voice Interaction
- Real-time speech recognition
- Natural voice synthesis
- Smooth voice playback
- Multiple voice expressions

### 3. Visual Interface
- Cute robot character
- Rich emotional animations
- Comic-style dialogue bubbles
- Smooth animation effects

### 4. Touch Interaction
- Multi-zone touch responses
- Emotional reactions
- Dynamic emotion bubbles
- Cute voice feedback

## 🛠️ Technology Stack

- HTML5 / CSS3 / JavaScript
- Web Speech API
- GLM-4 API
- CSS Animations & Transitions

## 📦 Quick Start

1. Open Project Page
```
https://[Project URL]
```

2. Enter API Key
- Input GLM-4 API key on first use
- Key is securely stored locally
- Get API key: [GLM-4 API Application URL]

3. Start Interacting
- Click microphone button to start voice chat
- Touch the robot for interactive feedback
- Enjoy warm conversations

## 🎯 User Guide

### Voice Chat
1. Click microphone button to start recording
2. Speak your message
3. Wait for robot's response
4. Robot will reply with voice
5. Can interrupt anytime

### Touch Interaction
1. Head Area
   - Top touch: Gentle head pat reaction
   - Ear touch: Shy reaction
   - Continuous touch: Special reaction

2. Face Area
   - Cheek touch: Happy reaction
   - Center touch: Intimate reaction
   - Different positions have different feedback

3. Body Area
   - Light touch: Ticklish reaction
   - Continuous touch: Surprised reaction
   - Interactive feedback

### Emotional Expression
- Special response to intimate nicknames
- Different emotions have different expressions
- Emotions change during interaction
- Tone affects response style

## 💡 FAQ

### 1. Speech Recognition Issues
Q: Why isn't voice recognition working?
A: Please ensure:
- Browser has microphone permission
- Using Chrome or Edge browser
- Microphone is working properly
- Stable network connection

### 2. API Key Issues
Q: What if the API key is invalid?
A: Possible reasons:
- Incorrect key input
- Expired key
- Usage limit exceeded
- Need to reapply for key

### 3. Voice Synthesis Issues
Q: Why is there no sound output?
A: Check the following:
- Device volume is on
- Browser allows autoplay
- No other programs occupying audio
- Try refreshing the page

### 4. Touch Response Issues
Q: Why aren't touch reactions working?
A: Suggestions:
- Ensure correct touch interaction area
- Check for blocking elements
- Enable touch events on mobile
- Try clearing browser cache

## 🎨 Customization

### Emotion System
```javascript
// Supported emotion types
const emotions = [
    'happy',   // Happy
    'love',    // Love
    'shy',     // Shy
    'surprised', // Surprised
    'thinking',  // Thinking
    'speaking',  // Speaking
    'sad',      // Sad
    'excited'   // Excited
];
```

### Dialog Bubble Style
```css
/* Custom dialog theme */
.speech-bubble.custom {
    background: linear-gradient(135deg, #fff0f5 0%, #fff 100%);
    border-color: #ff69b4;
    /* More custom styles */
}
```

### Touch Reactions
```javascript
// Custom touch reactions
const touchReactions = {
    head: {
        mood: 'love',
        sound: 'Aww, you\'re patting my head, I\'m so happy~',
        emoji: ['❤️', '🥰', '✨']
    },
    // More area configurations
};
```

## 📱 Mobile Adaptation

- Responsive design
- Touch optimization
- Adaptive layout
- Performance optimization

## 📝 Important Notes

1. API Key Security
   - Keys stored locally only
   - Recommended usage limits
   - Regular key updates

2. Browser Support
   - Requires Web Speech API support
   - Modern browsers recommended
   - Chrome/Edge preferred

3. Performance Optimization
   - Control animation quantity
   - Avoid frequent operations
   - Reasonable timeout handling

## 🔄 Changelog

### v1.0.0 (2024-01-20)
- Initial release
- Basic conversation functionality
- Voice interaction system
- Touch feedback system

### v1.1.0 (2024-01-25)
- Added emotion system
- Optimized speech recognition
- Improved touch reactions
- Comic-style dialog bubbles

### v1.2.0 (2024-01-30)
- New expression animations
- Enhanced mobile experience
- Added more interactive effects
- Performance improvements

## 🤝 Feedback

If you encounter any issues or have suggestions:

1. Submit an Issue
2. Send email feedback
3. Join user group

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contact

- Project URL: [Project Link]
- Issues: [Issues Link]
- User Group: [Group Number]
- Email: [Contact Email]

## 🙏 Acknowledgments

- GLM-4 team for their powerful API
- All users providing feedback
- Open source community support 