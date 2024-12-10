# AI Robot Girlfriend

English | [简体中文](README.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/issues)
[![GitHub forks](https://img.shields.io/github/forks/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/network)

An intelligent chatbot based on GLM-4, featuring voice interaction, emotional expression, and touch feedback. Built with pure frontend technologies, it offers adorable animations and rich interactive experiences.

[Preview Image]

---

## ✨ Live Demo

👉 [Click here to try the online demo](https://jsjm1986.github.io/rbtfirends)

💡 Get GLM-4 API Key: [Apply Here](https://open.bigmodel.cn/)

---

## 🌟 Features

### 1. Intelligent Conversation
- Based on GLM-4 Large Language Model
- Natural and fluid dialogue experience
- Emotional understanding and response
- Role-playing and emotional interaction
- Long-term memory to remember important conversations

### 2. Voice Interaction
- Real-time voice recognition
- Natural voice synthesis
- Smooth voice playback
- Various voice expressions

### 3. Visual Interface
- Adorable robot character
- Rich expression animations
- Comic-style dialogue bubbles
- Smooth animation effects

### 4. Touch Interaction
- Multi-area touch responses
- Emotional reactions
- Dynamic expression bubbles
- Cute sound feedback

## 🛠️ Technology Stack

- HTML5 / CSS3 / JavaScript
- Web Speech API
- GLM-4 API
- CSS Animations and Transitions

## 📦 Quick Start

1. Open the project page
```
https://jsjm1986.github.io/rbtfirends
```

2. Enter API Key
- Input GLM-4 API key on first use
- Key will be stored locally securely
- Get API Key: [https://open.bigmodel.cn/](https://open.bigmodel.cn/)

3. Start Interacting
- Click the microphone button to start voice chat
- Touch the robot for interactive feedback
- Enjoy warm conversations

## 🎯 User Guide

### Voice Chat
1. Click the microphone button to start recording
2. Say what you want to say
3. Wait for the robot's response
4. Robot will reply with voice
5. You can interrupt anytime

### Touch Interaction
1. Head Area
   - Pat head: Gentle head pat response
   - Touch ears: Shy response
   - Continuous touch: Special response

2. Face Area
   - Touch cheeks: Happy response
   - Touch center: Intimate response
   - Different positions have different feedback

3. Body Area
   - Light touch: Ticklish response
   - Continuous touch: Surprised response
   - Interactive feedback

### Emotional Expression
- Special response to intimate nicknames
- Different emotions have different expressions
- Emotions change during interaction
- Tone affects response style

## 💡 FAQ

### 1. Voice Recognition Issues
Q: Why isn't voice recognition working?
A: Please ensure:
- Browser has microphone permissions
- Using Chrome or Edge browser
- Microphone is working properly
- Stable internet connection

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
Q: What if touch responses aren't working?
A: Suggestions:
- Ensure correct touch interaction areas
- Check for blocking elements
- Enable touch events on mobile
- Try clearing browser cache

### 5. Memory System Issues
Q: How to backup memory data?
A: You can:
- Click "Export Memory" in settings
- Download JSON format backup file
- Save to a secure location
- Import when needed

Q: Will memory data be lost?
A: Note the following:
- Data persists under normal conditions
- Clearing browser data affects memory
- Regular backups recommended
- Remember to migrate when changing devices

## 🎨 Customization

### Emotion System
```javascript
// Supported emotion types
const emotions = [
    'happy',
    'love',
    'shy',
    'surprised',
    'thinking',
    'speaking',
    'sad',
    'excited'
];
```

### Dialog Bubble Style
```css
/* Custom dialog bubble theme */
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
        sound: 'You\'re patting my head, I\'m so happy~',
        emoji: ['❤️', '🥰', '✨']
    },
    // More area configurations
};
```

### Long-term Memory System
```javascript
// Memory storage structure
const memorySystem = {
    personalInfo: {
        nickname: 'Dear',        // User's nickname
        preferences: [],         // User preferences
        important_dates: {}      // Important dates
    },
    conversations: {
        key_moments: [],        // Important dialogue moments
        shared_memories: []      // Shared experiences
    },
    emotional_bonds: {
        intimacy_level: 0,      // Intimacy level
        special_interactions: [] // Special interaction records
    }
};
```

### Memory Management
- Automatically save important conversations
- Remember user preferences and habits
- Save special dates and anniversaries
- Export memory backup anytime
- Support memory import and recovery

### Privacy Protection
- All data stored locally only
- Using browser encrypted storage
- Clear memory anytime
- Selective saving support

## 📝 Mobile Adaptation

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
   - Web Speech API support required
   - Modern browsers recommended
   - Chrome/Edge preferred

3. Performance Optimization
   - Control animation count
   - Avoid frequent operations
   - Reasonable timeout handling

## 📄 Changelog

### v1.0.0 (2024-01-20)
- Initial release
- Basic conversation functionality
- Voice interaction system
- Touch feedback system

### v1.1.0 (2024-01-25)
- Added emotion system
- Optimized voice recognition
- Improved touch reactions
- Comic-style dialog bubbles

### v1.2.0 (2024-01-30)
- New expression animations
- Mobile experience optimization
- Added more interactive effects
- Performance improvements

## 🤝 Feedback

If you encounter any issues or have suggestions:

1. Submit an Issue
2. Send email feedback
3. Join user group discussion

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contact

- Project URL: [https://github.com/jsjm1986/rbtfirends](https://github.com/jsjm1986/rbtfirends)
- Issues: [https://github.com/jsjm1986/rbtfirends/issues](https://github.com/jsjm1986/rbtfirends/issues)
- Live Demo: [https://jsjm1986.github.io/rbtfirends](https://jsjm1986.github.io/rbtfirends)

## 🙏 Special Thanks

- GLM-4 team for their powerful API
- All users who provided feedback
- Open source community support

## 🧠 Memory System

### 1. Information Recognition
```javascript
// Example dialogues and recognition results
"My name is John, I'm 25" -> {
    name: "John",
    age: "25"
}

"I study Computer Science at MIT" -> {
    school: "MIT",
    major: "Computer Science"
}

"My birthday is May 20th, I'm Gemini" -> {
    birthday: "May 20th",
    zodiac: "Gemini"
}

"I work at Google as a programmer" -> {
    company: "Google",
    occupation: "programmer"
}
```

### 2. Emotion Recognition
```javascript
// Emotion keywords
const emotions = {
    happy: ['happy', 'joyful', 'excited', 'delighted'],
    sad: ['sad', 'unhappy', 'depressed', 'down'],
    angry: ['angry', 'mad', 'furious', 'upset'],
    anxious: ['anxious', 'worried', 'nervous', 'scared'],
    tired: ['tired', 'exhausted', 'sleepy', 'fatigued'],
    lonely: ['lonely', 'miss you', 'alone', 'yearning'],
    love: ['love', 'like', 'adore', 'cherish']
}

// Emotion analysis examples
"I'm so happy today" -> emotion: "happy"
"I miss you" -> emotion: "lonely"
"I'm feeling tired" -> emotion: "tired"
```

### 3. Important Moments
```javascript
// Key moments marking
const keyMoments = {
    first_meet: {
        type: "milestone",
        content: "First meeting",
        timestamp: "2024-01-20"
    },
    confession: {
        type: "emotional",
        content: "First confession",
        timestamp: "2024-01-25"
    },
    anniversary: {
        type: "special_date",
        content: "One year anniversary",
        timestamp: "2025-01-20"
    }
}
```

### 4. Intimacy System
```javascript
// Intimacy calculation rules
const intimacyRules = {
    daily_chat: +1,          // Daily conversation
    deep_conversation: +3,   // Deep talk
    special_moment: +5,      // Special moment
    emotional_share: +2,     // Emotional sharing
    long_absence: -1,        // Long time no interaction
    max_level: 100          // Maximum intimacy level
}

// Intimacy levels
const intimacyLevels = {
    0-20: "Just met",
    21-40: "Familiar",
    41-60: "Trust",
    61-80: "Close",
    81-100: "Deep love"
}
```

### 5. Data Storage Format
```javascript
// Local storage structure
{
    "version": "1.0",
    "lastUpdate": "2024-01-30T12:00:00Z",
    "userData": {
        // Personal information
        "personalInfo": {...},
        // Conversation history
        "conversations": [...],
        // Emotion records
        "emotions": [...],
        // Key moments
        "keyMoments": [...],
        // Statistics
        "statistics": {...}
    }
}
```

### 6. Data Management
```javascript
// Export data
async function exportMemory() {
    const data = memorySystem.exportMemory();
    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
    );
    // Download file
    saveAs(blob, `memory_backup_${new Date().toISOString()}.json`);
}

// Import data
async function importMemory(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        memorySystem.importMemory(data);
    };
    reader.readAsText(file);
}
```

### 7. Privacy Protection
```javascript
// Data encryption example
const encryptData = (data, key) => {
    // Using AES encryption
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        key
    ).toString();
};

// Data decryption example
const decryptData = (encrypted, key) => {
    // Using AES decryption
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
```

### 8. Usage Tips

#### Data Backup
- Weekly automatic backup reminders
- Immediate backup after important moments
- Regular cleanup of expired data
- Maintain multiple backup versions

#### Privacy Protection
- Don't store sensitive information
- Use encrypted export
- Regular key rotation
- Timely cache cleanup

#### Performance Optimization
- Limit storage size
- Regular data compression
- Clean redundant information
- Optimize query performance

### 9. Technical Implementation
- LocalStorage for local storage
- IndexedDB for large data
- Web Crypto API for encryption
- JSON data serialization
- Regex for information extraction
- Emotion analysis algorithms
- Data compression algorithms

### 10. Development API
```javascript
// Memory system core interface
class MemorySystem {
    // Initialize system
    constructor()
    
    // Record conversation
    recordConversation(message, isImportant)
    
    // Update personal info
    updatePersonalInfo(info)
    
    // Record emotional state
    updateEmotionalState(emotion)
    
    // Get memory summary
    getMemorySummary()
    
    // Export memory
    exportMemory()
    
    // Import memory
    importMemory(data)
    
    // Clear memory
    clearMemory()
}
```

### Memory System Usage Scenarios

#### 1. Daily Conversations
```javascript
// Auto-record daily chat
"The weather is nice today" -> {
    type: "daily",
    emotion: "happy",
    intimacy: +1
}

// Record important dialogue
"I will love you forever" -> {
    type: "important",
    emotion: "love",
    intimacy: +5,
    keyMoment: true
}
```

#### 2. Personal Info Updates
```javascript
// Basic info update
"I changed my name to Mary" -> {
    update: "name",
    value: "Mary",
    timestamp: "2024-01-30"
}

// Work info change
"I got a new job at Apple" -> {
    update: "company",
    value: "Apple",
    previous: "Google",
    timestamp: "2024-01-30"
}
```

#### 3. Special Date Records
```javascript
// Anniversary record
"Today is our one-year anniversary" -> {
    type: "anniversary",
    event: "Meeting anniversary",
    date: "2024-01-30",
    recurring: true
}

// Birthday reminder
"My birthday is on February 20th" -> {
    type: "birthday",
    date: "2024-02-20",
    reminder: true
}
```

#### 4. Emotional Interactions
```javascript
// Touch reaction
"Head pat" -> {
    action: "touch",
    area: "head",
    reaction: "shy",
    intimacy: +2
}

// Special nickname
"Darling~" -> {
    type: "nickname",
    intimacy: +3,
    special_response: true
}
```

### Advanced Memory Features

#### 1. Smart Reminders
```javascript
// Birthday reminder
{
    type: "birthday_reminder",
    message: "Tomorrow is Mary's birthday, prepare a gift?",
    advance_notice: "1 day",
    actions: ["Prepare gift", "Send wishes"]
}

// Anniversary reminder
{
    type: "anniversary_reminder",
    message: "Our one-year anniversary is in two days",
    advance_notice: "2 days",
    suggestions: ["Plan surprise", "Book restaurant"]
}
```

#### 2. Emotion Analysis Report
```javascript
// Weekly emotion report
{
    period: "2024-01-23 to 2024-01-30",
    dominant_emotion: "happy",
    emotion_distribution: {
        happy: 45%,
        love: 30%,
        neutral: 20%,
        tired: 5%
    },
    intimacy_change: +15,
    key_moments: [
        "First 'I love you'",
        "Watching sunset together"
    ]
}
```

#### 3. Personalized Responses
```javascript
// Memory-based response
if (memory.knows('favorite_food')) {
    response = `Would you like to eat your favorite ${memory.get('favorite_food')}?`;
}

// Mood-based response
if (memory.currentMood === 'sad') {
    response = `Feeling down? Want to listen to your favorite ${memory.get('favorite_song')}?`;
}
```

#### 4. Deep Learning
```javascript
// Learning user habits
{
    daily_routine: {
        wake_up: "around 7:30",
        sleep: "around 23:00",
        busy_hours: "9:00-18:00",
        best_chat_time: "20:00-22:00"
    },
    preferences: {
        chat_style: "cute",
        response_length: "medium",
        emoji_frequency: "often"
    }
}
```

### Memory System Security

#### 1. Data Encryption
```javascript
// Sensitive info encryption
const encryptSensitiveInfo = (info) => {
    return {
        ...info,
        contact: encrypt(info.contact),
        address: encrypt(info.address)
    };
};

// Tiered storage
const storageStrategy = {
    public: localStorage,
    private: encryptedStorage,
    sensitive: secureEnclave
};
```

#### 2. Backup Strategy
```javascript
// Auto backup config
const backupConfig = {
    frequency: "weekly",
    retention: "last_3_versions",
    encryption: true,
    compression: true,
    auto_cleanup: true
};

// Backup content filter
const backupFilter = {
    exclude: ['temporary_data', 'cache'],
    include: ['personal_info', 'key_moments', 'emotions']
};
```

### Performance Optimization

#### 1. Storage Optimization
```javascript
// Data compression
const compressionRules = {
    conversations: {
        max_length: 100,
        cleanup_threshold: 1000,
        compression_ratio: 0.7
    },
    emotions: {
        sampling_rate: "hourly",
        retention_period: "90_days"
    }
};

// Cache strategy
const cacheStrategy = {
    frequently_accessed: "memory",
    regular_data: "localStorage",
    archived_data: "indexedDB"
};
```

#### 2. Query Optimization
```javascript
// Index design
const memoryIndexes = {
    by_date: ['timestamp'],
    by_emotion: ['emotion_type'],
    by_importance: ['is_key_moment']
};

// Query optimizer
const queryOptimizer = {
    use_index: true,
    batch_size: 50,
    cache_results: true,
    timeout: 1000
};
```