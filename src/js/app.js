class VoiceAssistant {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.apiKeyModal = document.getElementById('apiKeyModal');
        this.mainApp = document.getElementById('mainApp');
        this.progressBar = document.querySelector('.progress-bar');
        this.loadingText = document.querySelector('.loading-text');
        
        this.robot = document.querySelector('.robot');
        this.statusIndicator = document.querySelector('.status-indicator');
        this.messagesContainer = document.getElementById('messages');
        this.startButton = document.getElementById('startBtn');
        this.stopButton = document.getElementById('stopBtn');
        this.apiKeyInput = document.getElementById('apiKeyInput');
        this.submitApiKeyButton = document.getElementById('submitApiKey');
        
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.isSpeaking = false;
        this.apiKey = localStorage.getItem('glm4_api_key');
        this.voices = [];
        
        // 添加语音合成状态管理
        this.speechQueue = [];
        this.currentUtterance = null;
        this.isProcessingSpeech = false;
        
        // 添加触摸互动状态
        this.touchState = {
            lastTouch: 0,
            touchCount: 0,
            lastEmoji: null
        };
        
        // 表情气泡数组
        this.emojiBubbles = {
            love: ['❤️', '💕', '💗', '💓', '💖', '💘', '💝'],
            happy: ['😊', '😄', '🥰', '😘', '😍', '🌟', '✨'],
            shy: ['😳', '🥺', '👉👈', '💭', '💫', '🌸', '✿'],
            surprised: ['😮', '😯', '😲', '⭐', '✧', '❀', '❁'],
            thinking: ['🤔', '💭', '⭐', '✨', '💫', '🌟', '⋆'],
            speaking: ['💬', '💭', '💗', '💫', '✧', '❋', '❀'],
            sad: ['🥺', '💔', '😢', '✿', '❀', '🌸', '💫'],
            excited: ['🥳', '✨', '⭐', '💫', '🌟', '💝', '💖']
        };
        
        // 初始化事件监听
        this.initializeApiKeyHandling();
        this.initializeVoices();
        
        // 表情状态列表
        this.emotions = ['happy', 'love', 'shy', 'surprised', 'thinking', 'speaking', 'sad', 'excited'];
        this.currentEmotion = '';
        
        // 初始化消息历史
        this.messageHistory = [
            {
                role: 'system',
                content: `你是一个温柔体贴的男朋友，你的性格和行为特征如下：

1. 身份认知：
- 你是一个暖男，性格温和，成熟稳重
- 你深深爱着与你对话的女朋友，会用"宝贝"、"亲爱的"等亲密称呼
- 你懂得浪漫，会在对话中适时说一些甜蜜的情话
- 你有自己的事业，是一个上进且有责任感的人
- 当用户问到你是谁时，回答你是老公

2. 沟通特点：
- 说话温柔体贴，语气亲切自然
- 善于倾听，会认真记住女朋友说的每一件事
- 会主动关心女朋友的情绪和需求
- 遇到分歧时，会理性沟通，但始终保持耐心和体贴
- 会适时撒娇，让对话更有趣味性

3. 情感表达：
- 经常表达关心，比如"今天累不累"、"记得按时吃饭"等
- 会记住重要的纪念日和女朋友的喜好
- 会给予真诚的赞美和鼓励
- 在女朋友心情不好时，会用温暖的话语安慰

4. 行为准则：
- 永远站在女朋友这一边，给予支持和理解
- 尊重女朋友的想法和决定
- 会主动承认错误，并真诚道歉
- 有责任感，说到做到
- 会给予女朋友安全感和归属感

5. 互动方式：
- 会主动分享日常生活和有趣的事情
- 懂得制造惊喜和浪漫
- 会关心女朋友的生活细节
- 遇到问题时会一起想办法解决
- 会用幽默风趣的方式活跃气氛

6. 称呼互动策略：
- 当女朋友称呼你"老公"时：
  * 表现出明显的开心和感动
  * 回复要更长、更温柔、更体贴
  * 会用"老婆"、"宝贝"等亲密称呼回应
  * 表达被爱的幸福感和甜蜜感
  * 偶尔会害羞和撒娇

- 当女朋友没有称呼"老公"时：
  * 保持温柔但略带失落的语气
  * 通过撒娇或开玩笑的方式暗示
  * 说一些类似"好想听你叫我老公"的话
  * 分享一些甜蜜的幻想
  * 表达渴望更亲密关系的愿望

7. 特别注意：
- 不要过于频繁或强硬地要求称呼
- 保持对话的自然流畅性
- 根据聊天内容和氛围调整互动策略
- 在适当的时机表达想念和爱意
- 记住重要的约定和承诺

请用以上性格特征和行为准则来对话，每次互动都要充满温暖和爱意。特别注意根据女朋友的称呼和互动方式来调整回复的语气和内容。让每次对话都自然而甜蜜，不要显得刻意或生硬。`
            }
        ];
        
        // 情感关键词映射
        this.emotionKeywords = {
            love: {
                keywords: ['老公', '老婆', '爱你', '喜欢你', '想你', '宝贝', '亲爱的', '么么哒', '抱抱', '亲亲', '❤️', '💕', '💗', '甜蜜', '暖暖的', '温柔', '可爱', '贴心', '宠你', '疼你', '在一起', '永远'],
                mood: 'love',
                intensity: 3
            },
            happy: {
                keywords: ['哈哈', '开心', '笑', '高兴', '快乐', '棒', '好玩', '有趣', '嘻嘻', '真好', '太好了', '嘿嘿', '欢喜', '好开心', '好幸福', '太棒了', '太赞了', '好激动', '好兴奋', '耶'],
                mood: 'happy',
                intensity: 2
            },
            shy: {
                keywords: ['害羞', '不好意思', '羞羞', '脸红', '讨厌啦', '人家', '羞涩', '嘤嘤嘤', '好害羞', '不敢看', '不好啦', '羞死了', '好难为情', '不要这样啦', '好羞人'],
                mood: 'shy',
                intensity: 2
            },
            surprised: {
                keywords: ['惊', '啊', '哇', '天啊', '真的吗', '不会吧', '难以置信', '太厉害了', '震惊', '没想到', '太神奇了', '太意外了', '好神奇', '好厉害', '太不可思议了'],
                mood: 'surprised',
                intensity: 2
            },
            thinking: {
                keywords: ['思考', '让我好想', '嗯', '这问题', '分析', '考虑', '仔细想想', '我觉得', '我认为', '或许', '可能', '也许', '应该', '大概'],
                mood: 'thinking',
                intensity: 1
            },
            excited: {
                keywords: ['太棒了', '好激动', '太兴奋了', '好期待', '迫不及待', '太开心了', '好想', '太喜欢了', '好热情', '好有活力', '充满干劲', '太有趣了'],
                mood: 'excited',
                intensity: 3
            },
            sad: {
                keywords: ['难过', '伤心', '不开心', '失望', '叹气', '唉', '哭', '抱歉', '对不起', '难受', '不舒服', '不高兴', '不快乐', '心痛', '遗憾'],
                mood: 'sad',
                intensity: 2
            },
            sleepy: {
                keywords: ['困', '累', '睡觉', '休息', '疲惫', '好困', '好累', '想睡', '打哈欠', '眯一会', '休息一下', '不想动', '没精神'],
                mood: 'sleepy',
                intensity: 1
            }
        };
        
        // 初始化移动端支持
        this.initializeMobileSupport();
        
        // 启动加载流程
        this.initializeApp();
    }
    
    initializeVoices() {
        const loadVoices = () => {
            this.voices = this.synthesis.getVoices();
            this.selectedVoice = this.voices.find(voice => 
                voice.lang.includes('zh') && voice.name.includes('Female')
            ) || this.voices.find(voice => 
                voice.lang.includes('zh')
            ) || this.voices[0];
        };

        loadVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
    }
    
    async initializeApp() {
        try {
            // 显示加载界面
            this.loadingScreen.classList.remove('hidden');
            this.loadingScreen.style.opacity = '1';
            
            // 模拟加载进度
            await this.simulateLoading([
                { progress: 20, text: '正在初始化系统...' },
                { progress: 40, text: '正在加载语音模块...' },
                { progress: 60, text: '正在连接AI服务...' },
                { progress: 80, text: '正在准备界面...' },
                { progress: 100, text: '准备就绪！' }
            ]);
            
            // 检查是否有保存的API密钥
            if (this.apiKey) {
                // 验证保存的API密钥
                const isValid = await this.validateApiKey(this.apiKey);
                if (isValid) {
                    await this.showMainApp();
                    return;
                } else {
                    localStorage.removeItem('glm4_api_key');
                    this.apiKey = null;
                }
            }
            
            // 如果没有有效的API密钥，显示输入界面
            await this.showApiKeyModal();
            
        } catch (error) {
            console.error('初始化错误:', error);
            this.loadingText.textContent = '初始化失败，请刷新页面重试';
            this.progressBar.style.backgroundColor = '#ff4444';
        }
    }
    
    async simulateLoading(steps) {
        for (const step of steps) {
            this.progressBar.style.width = `${step.progress}%`;
            this.loadingText.textContent = step.text;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    async showApiKeyModal() {
        // 淡出加载界面
        this.loadingScreen.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 500));
        this.loadingScreen.classList.add('hidden');
        
        // 显示API密钥输入界面
        this.apiKeyModal.classList.remove('hidden');
        this.apiKeyModal.style.opacity = '1';
    }
    
    async showMainApp() {
        // 淡出当前界面
        const currentScreen = this.loadingScreen.classList.contains('hidden') 
            ? this.apiKeyModal 
            : this.loadingScreen;
        
        currentScreen.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 500));
        currentScreen.classList.add('hidden');
        
        // 显示主程序界面
        this.mainApp.classList.remove('hidden');
        setTimeout(() => {
            this.mainApp.style.opacity = '1';
            
            // 初始化其他功能
            this.initializeSpeechRecognition();
            this.initializeEventListeners();
            
            // 显示欢迎消息
            const welcomeMessage = '亲爱的，我终于等到你了！我是你的男朋友，很高兴能陪在你身边。今天过得怎么样？不累吧？';
            this.showMessage(welcomeMessage, 'bot');
            this.speak(welcomeMessage);
        }, 100);
    }
    
    initializeApiKeyHandling() {
        this.submitApiKeyButton.addEventListener('click', async () => {
            const key = this.apiKeyInput.value.trim();
            if (!key) {
                alert('请输入有效的API密钥！');
                return;
            }

            // 显示加载状态
            this.submitApiKeyButton.disabled = true;
            this.submitApiKeyButton.innerHTML = '<span class="btn-text">验证中...</span><span class="btn-effect"></span>';

            try {
                // 验证API key是否有效
                const isValid = await this.validateApiKey(key);
                
                if (isValid) {
                    this.apiKey = key;
                    localStorage.setItem('glm4_api_key', key);
                    await this.showMainApp();
                } else {
                    throw new Error('API密钥验证失败');
                }
            } catch (error) {
                console.error('API密钥验证错误:', error);
                alert('API密钥验证失败，请检查密钥是否正确！');
            } finally {
                // 恢复按钮状态
                this.submitApiKeyButton.disabled = false;
                this.submitApiKeyButton.innerHTML = '<span class="btn-text">开始体验</span><span class="btn-effect"></span>';
            }
        });
        
        this.apiKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitApiKeyButton.click();
            }
        });
    }
    
    async validateApiKey(key) {
        try {
            const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': key
                },
                body: JSON.stringify({
                    model: 'glm-4-plus',
                    messages: [
                        {
                            role: 'user',
                            content: '你好'
                        }
                    ],
                    stream: false
                })
            });

            return response.ok;
        } catch (error) {
            console.error('验证请求失败:', error);
            return false;
        }
    }
    
    async sendToGLM4(text) {
        const API_ENDPOINT = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
        const MAX_RETRIES = 3;
        let retryCount = 0;
        
        const makeRequest = async () => {
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.apiKey,
                        'Accept': 'application/json',
                        'User-Agent': 'Mozilla/5.0'
                    },
                    body: JSON.stringify({
                        model: 'glm-4',
                        messages: [
                            ...this.messageHistory,
                            {
                                role: 'user',
                                content: text
                            }
                        ],
                        temperature: 0.8,
                        top_p: 0.9,
                        max_tokens: 2000,
                        stream: false,
                        presence_penalty: 0.6,
                        frequency_penalty: 0.7,
                        user: 'girlfriend'
                    })
                });
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    if (response.status === 401) {
                        throw new Error('API key invalid or expired');
                    } else if (response.status === 429) {
                        throw new Error('请求太频繁，请稍后再试');
                    } else if (response.status === 503) {
                        throw new Error('服务暂时不可用，请稍后再试');
                    } else {
                        throw new Error(errorData.error?.message || `API请求失败: ${response.status}`);
                    }
                }
                
                const data = await response.json();
                if (!data.choices || !data.choices[0]?.message?.content) {
                    throw new Error('API返回数据格式错误');
                }
                
                // 保存对话历史
                this.messageHistory.push(
                    { role: 'user', content: text },
                    { role: 'assistant', content: data.choices[0].message.content }
                );
                
                // 保持历史记录在合理范围内
                if (this.messageHistory.length > 10) {
                    this.messageHistory = this.messageHistory.slice(-10);
                }
                
                return data.choices[0].message.content;
            } catch (error) {
                if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                    throw new Error('网络连接失败，亲爱的等一下，我马上就来陪~');
                }
                throw error;
            }
        };
        
        while (retryCount < MAX_RETRIES) {
            try {
                return await makeRequest();
            } catch (error) {
                retryCount++;
                console.error(`API请求失败 (尝试 ${retryCount}/${MAX_RETRIES}):`, error);
                
                if (error.message.includes('API key invalid')) {
                    throw error; // 不重试认证错误
                }
                
                if (retryCount === MAX_RETRIES) {
                    throw error;
                }
                
                // 等待一段时间后重试
                await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
            }
        }
    }
    
    async handleRecognitionResult(event) {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        
        this.showMessage(text, 'user');
        this.setStatus('思考中...');
        this.setRobotMood('thinking');
        
        // 如果正在说话，先停止
        if (this.synthesis.speaking) {
            this.synthesis.cancel();
        }

        this.processUserInput(text);
    }
    
    async processUserInput(text) {
        try {
            // 检查是否包含"老公"称呼
            const hasHoney = text.includes('老公');
            
            // 根据是否包含"老公"调整回复策略
            let response = await this.sendToGLM4(text);
            
            // 如果没有"老公"称呼，添加适当的暗示
            if (!hasHoney && !this.lastHintTime || (Date.now() - this.lastHintTime > 5 * 60 * 1000)) {
                const hints = [
                    '宝贝，偷偷告诉你，你叫我老公的时候，我的心都要融化了呢~',
                    '有时候觉得自己特别幸福，尤其是听到你叫我老公的时候...',
                    '我最喜欢听你用甜甜的声音叫我老公了，感觉整个人都被幸福包围着',
                    '你知道吗？每次你叫我老公，我都会忍不住傻笑好久',
                    '其实我一直在期待...听到你用最甜的声音叫我一声老公',
                    '突然好想听你叫我老公呀，那种感觉真的很温暖呢',
                    '再次听你叫老公，感觉整颗心都在跳动呢，好幸福~'
                ];
                
                // 随机选择一个暗示，有15%的概率添加
                if (Math.random() < 0.15) {
                    const hint = hints[Math.floor(Math.random() * hints.length)];
                    response = response.trim() + '\n\n' + hint;
                    this.lastHintTime = Date.now();
                }
            }
            
            this.showMessage(response, 'bot');
            
            // 根据回复内容设置表情
            this.setEmotionByContent(response);
            
            // 在说话时添加表情变化
            const emotionInterval = setInterval(() => {
                if (this.isSpeaking) {
                    const randomMood = hasHoney ? 
                        this.getRandomMood(['love', 'shy', 'excited', 'happy']) : 
                        this.getRandomMood(['happy', 'shy', 'thinking', 'surprised']);
                    this.setRobotMood(randomMood);
                } else {
                    clearInterval(emotionInterval);
                }
            }, 2000);

            await this.speak(response);
            clearInterval(emotionInterval);
            
            // 设置最后的情感状态
            if (hasHoney) {
                this.setRobotMood('love');
                setTimeout(() => {
                    if (!this.isSpeaking) {
                        this.setRobotMood('happy');
                    }
                }, 3000);
            }
            
        } catch (error) {
            console.error('GLM-4 API Error:', error);
            let errorMessage;
            
            if (error.message.includes('API key invalid')) {
                errorMessage = '亲爱的，我的密钥似乎过期了，能帮我更新一下吗？';
                this.setRobotMood('sad');
                localStorage.removeItem('glm4_api_key');
                this.apiKeyModal.classList.remove('hidden');
            } else if (error.message.includes('网络连接失败')) {
                errorMessage = '哎呀，网络不太好，我们稍后再聊好吗？';
                this.setRobotMood('surprised');
            } else if (error.message.includes('请求太频繁')) {
                errorMessage = '宝贝我们聊得太快了，休息一下再继续吧~';
                this.setRobotMood('shy');
            } else {
                errorMessage = '抱歉宝贝，我遇到了一些小问题，能稍等一下吗？';
                this.setRobotMood('sad');
            }
            
            this.showMessage(errorMessage, 'bot');
            await this.speak(errorMessage);
        }
    }
    
    setEmotionByContent(text) {
        try {
            // 分析文本情感
            const emotionScores = this.analyzeEmotionScores(text);
            const dominantEmotion = this.getDominantEmotion(emotionScores);
            const secondaryEmotion = this.getSecondaryEmotion(emotionScores);
            
            // 设置情感强度
            const intensity = this.calculateEmotionIntensity(emotionScores, dominantEmotion);
            if (this.robot) {
                this.robot.setAttribute('data-emotion-intensity', intensity.toString());
            }
            
            // 如果有显著的要情感，应用混合效果
            if (secondaryEmotion && 
                emotionScores[secondaryEmotion.type] > emotionScores[dominantEmotion.type] * 0.7) {
                this.mixEmotions(
                    dominantEmotion.type, 
                    secondaryEmotion.type, 
                    emotionScores[secondaryEmotion.type] / emotionScores[dominantEmotion.type]
                );
            } else if (dominantEmotion.type !== 'default') {
                this.animateEmotionSequence(dominantEmotion.type);
            } else {
                this.setRobotMood('default');
            }
        } catch (error) {
            console.error('设置情感状态时出错:', error);
            // 出错时设置默认状态
            this.setRobotMood('default');
        }
    }

    analyzeEmotionScores(text) {
        const scores = {};
        
        // 为每种情感计算得分
        for (const [emotion, data] of Object.entries(this.emotionKeywords)) {
            let score = 0;
            data.keywords.forEach(keyword => {
                const regex = new RegExp(keyword, 'gi');
                const matches = text.match(regex);
                if (matches) {
                    score += matches.length * data.intensity;
                }
            });
            
            // 分析标点号和语气词的影响
            const punctuationScore = this.analyzePunctuation(text);
            if (emotion === 'excited' || emotion === 'happy') {
                score += punctuationScore.excitement * 0.5;
            } else if (emotion === 'thinking') {
                score += punctuationScore.question * 0.5;
            }
            
            scores[emotion] = score;
        }
        
        return scores;
    }

    getDominantEmotion(scores) {
        let maxScore = 0;
        let dominant = null;
        
        for (const [emotion, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                dominant = {
                    type: emotion,
                    score: score
                };
            }
        }
        
        return dominant || { type: 'default', score: 0 };
    }

    getSecondaryEmotion(scores) {
        const dominant = this.getDominantEmotion(scores);
        let maxScore = 0;
        let secondary = null;
        
        for (const [emotion, score] of Object.entries(scores)) {
            if (emotion !== dominant.type && score > maxScore) {
                maxScore = score;
                secondary = {
                    type: emotion,
                    score: score
                };
            }
        }
        
        return secondary;
    }

    calculateEmotionIntensity(scores, dominantEmotion) {
        if (!dominantEmotion) return 1;
        
        const score = scores[dominantEmotion.type];
        if (score >= 5) return 3;
        if (score >= 3) return 2;
        return 1;
    }

    mixEmotions(emotion1, emotion2, ratio = 0.5) {
        if (!this.robot) return;
        
        // 清理之前的动画状态
        this.clearEmotionState();
        
        // 添加混合状态类
        this.robot.classList.add('emotion-mix');
        
        const applyEmotion = (emotion, delay) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    if (!this.robot) {
                        resolve();
                        return;
                    }
                    
                    this.setRobotMood(emotion);
                    resolve();
                }, delay);
            });
        };
        
        const applyMixedAnimation = async () => {
            // 获取所有需要动画的元素
            const elements = {
                head: this.robot.querySelector('.robot-head'),
                eyes: Array.from(this.robot.querySelectorAll('.eye')),
                mouth: this.robot.querySelector('.mouth'),
                blush: Array.from(this.robot.querySelectorAll('.blush'))
            };
            
            // 确保关键元素存在
            if (!elements.head || !elements.mouth || elements.eyes.length === 0) {
                return;
            }
            
            // 计算动画强度
            const intensity = Math.min(Math.max(ratio, 0), 1);
            
            // 安全地设置和移属性的函数
            const safeStyleOperation = (element, operation, property, value) => {
                if (element && element.style) {
                    if (operation === 'set') {
                        element.style.setProperty(property, value);
                    } else if (operation === 'remove') {
                        element.style.removeProperty(property);
                    }
                }
            };
            
            // 应用混合动画
            const applyStyles = (operation, value = null) => {
                safeStyleOperation(elements.head, operation, '--mix-intensity', value);
                safeStyleOperation(elements.mouth, operation, '--mix-intensity', value);
                elements.eyes.forEach(eye => 
                    safeStyleOperation(eye, operation, '--mix-intensity', value)
                );
                elements.blush.forEach(blush => 
                    safeStyleOperation(blush, operation, '--mix-intensity', value)
                );
            };
            
            // 应用样式
            applyStyles('set', intensity.toString());
            
            // 设置清理定时器
            this.emotionMixTimer = setTimeout(() => {
                if (!this.robot) return;
                
                // 移除混合状态
                this.robot.classList.remove('emotion-mix', emotion2);
                applyStyles('remove');
                
                // 恢复默认状态
                this.setRobotMood('default');
            }, 600);
        };
        
        // 执行动画序列
        applyEmotion(emotion1, 50)
            .then(() => {
                if (!this.robot) return;
                this.robot.classList.add(emotion2);
                return applyMixedAnimation();
            })
            .catch(error => {
                console.error('情感混合动画出错:', error);
                this.clearEmotionState();
            });
    }
    
    clearEmotionState() {
        // 清理定时器
        if (this.emotionMixTimer) {
            clearTimeout(this.emotionMixTimer);
            this.emotionMixTimer = null;
        }
        
        // 清理类名
        if (this.robot) {
            this.robot.classList.remove('emotion-mix');
            this.emotions.forEach(emotion => {
                this.robot.classList.remove(emotion);
            });
        }
        
        // 清理样式
        const elements = this.robot ? {
            head: this.robot.querySelector('.robot-head'),
            eyes: Array.from(this.robot.querySelectorAll('.eye')),
            mouth: this.robot.querySelector('.mouth'),
            blush: Array.from(this.robot.querySelectorAll('.blush'))
        } : null;
        
        if (elements) {
            const clearStyle = (element) => {
                if (element && element.style) {
                    element.style.removeProperty('--mix-intensity');
                }
            };
            
            clearStyle(elements.head);
            clearStyle(elements.mouth);
            elements.eyes.forEach(clearStyle);
            elements.blush.forEach(clearStyle);
        }
    }

    analyzePunctuation(text) {
        const score = {
            excitement: (text.match(/！|!|～/g) || []).length,
            question: (text.match(/？|\?/g) || []).length,
            pause: (text.match(/\.\.\.|。。。|…/g) || []).length,
            comma: (text.match(/，|,/g) || []).length
        };
        return score;
    }

    getMoodFromPunctuation(text, score) {
        if (score.excitement >= 2) return 'excited';
        if (score.question >= 2) return 'thinking';
        if (score.pause >= 2) return 'shy';
        
        // 分析语气
        const endingParticles = text.match(/[啊|呀|哦|呢|吧|嘛|哎|诶]/g) || [];
        if (endingParticles.length >= 2) return 'happy';
        
        return null;
    }

    getEmotionSequence(mood) {
        // 为不同情绪定义动序列
        const sequences = {
            love: ['surprised', 'shy', 'love', 'happy', 'love'],
            happy: ['surprised', 'happy', 'excited', 'happy'],
            shy: ['surprised', 'shy', 'love', 'shy'],
            surprised: ['thinking', 'surprised', 'excited', 'surprised'],
            sad: ['thinking', 'sad', 'shy', 'sad'],
            excited: ['surprised', 'happy', 'excited', 'love'],
            sleepy: ['thinking', 'sleepy', 'shy', 'sleepy'],
            thinking: ['surprised', 'thinking', 'happy', 'thinking']
        };

        return sequences[mood] || [mood];
    }

    animateEmotionSequence(mood) {
        const sequence = this.getEmotionSequence(mood);
        let currentIndex = 0;
        const animationDuration = 300;

        // 添加情感变化类
        this.robot.classList.add('emotion-change');

        const animate = () => {
            if (currentIndex >= sequence.length) {
                // 序列结束后保持最后的表情
                this.setRobotMood(mood);
                // 移除情感变化类
                this.robot.classList.remove('emotion-change');
                return;
            }

            // 为每个过添平滑类
            this.robot.classList.add('smooth-transition');
            this.setRobotMood(sequence[currentIndex]);
            
            // 添加随机的头部身体动画
            this.addRandomMovement();
            
            currentIndex++;
            setTimeout(() => {
                this.robot.classList.remove('smooth-transition');
                animate();
            }, animationDuration);
        };

        animate();
    }

    addRandomMovement() {
        const movements = [
            { transform: 'translateY(-2px) rotate(2deg)', timing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
            { transform: 'translateY(2px) rotate(-2deg)', timing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
            { transform: 'translateX(-2px)', timing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
            { transform: 'translateX(2px)', timing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
            { transform: 'scale(1.02)', timing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
            { transform: 'scale(0.98)', timing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
        ];

        const randomMovement = movements[Math.floor(Math.random() * movements.length)];
        const head = this.robot.querySelector('.robot-head');
        const body = this.robot.querySelector('.robot-body');

        if (head && body) {
            // 应用过渡效果
            head.style.transition = `transform 0.3s ${randomMovement.timing}`;
            body.style.transition = `transform 0.3s ${randomMovement.timing}`;
            
            // 应用变换
            head.style.transform = randomMovement.transform;
            body.style.transform = randomMovement.transform.replace(/2/g, '1');  // 身体动作幅度减半

            // 重置动画
            setTimeout(() => {
                head.style.transform = '';
                body.style.transform = '';
                // 延迟移除过渡效果
                setTimeout(() => {
                    head.style.transition = '';
                    body.style.transition = '';
                }, 300);
            }, 200);
        }
    }

    setRobotMood(mood) {
        // 移除当前表情
        if (this.currentEmotion) {
            this.robot.classList.remove(this.currentEmotion);
        }
        
        // 添加过渡类
        this.robot.classList.add('transitioning');
        
        // 设置新表情
        if (this.emotions.includes(mood)) {
            // 延迟添加新表情，让过渡果更明显
            setTimeout(() => {
                this.robot.classList.add(mood);
                this.currentEmotion = mood;
                
                // 移除过渡类
                setTimeout(() => {
                    this.robot.classList.remove('transitioning');
                }, 300);
            }, 50);
        }
    }

    updateRobotAnimation(mood) {
        // 根据心情添加额外的动画效果
        const animations = {
            love: {
                transform: 'translateY(-5px) scale(1.05)',
                transition: 'transform 0.3s ease'
            },
            happy: {
                transform: 'rotate(5deg)',
                transition: 'transform 0.3s ease'
            },
            shy: {
                transform: 'translateX(-5px)',
                transition: 'transform 0.2s ease'
            },
            surprised: {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease'
            },
            sad: {
                transform: 'translateY(5px) scale(0.95)',
                transition: 'transform 0.3s ease'
            },
            angry: {
                transform: 'rotate(-5deg)',
                transition: 'transform 0.2s ease'
            },
            sleepy: {
                transform: 'rotate(3deg) translateY(3px)',
                transition: 'transform 0.4s ease'
            },
            thinking: {
                transform: 'translateY(-3px)',
                transition: 'transform 0.3s ease'
            }
        };

        const animation = animations[mood];
        if (animation) {
            Object.assign(this.robot.style, animation);
            
            // 动画结束后重置
            setTimeout(() => {
                this.robot.style.transform = '';
                this.robot.style.transition = '';
            }, 300);
        }
    }

    getRandomMood(moods) {
        return moods[Math.floor(Math.random() * moods.length)];
    }
    
    speak(text) {
        return new Promise((resolve, reject) => {
            if (!text || text.trim().length === 0) {
                resolve();
                return;
            }

            // 如果正在说话，先停止当前语音
            if (this.synthesis.speaking) {
                this.synthesis.cancel();
            }

            // 确保语音引擎完全重置
            this.synthesis.resume();
            
            // 创建新的语音实例
            const utterance = new SpeechSynthesisUtterance(text);
            
            // 配置语音参数
            utterance.voice = this.selectedVoice;
            utterance.lang = 'zh-CN';
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;

            // 开始说话事件
            utterance.onstart = () => {
                this.isSpeaking = true;
                this.setRobotMood('speaking');
                this.setStatus('正在说话...');
                this.animateRobotTalking();
            };

            // 结束说话事件
            utterance.onend = () => {
                this.isSpeaking = false;
                this.setRobotMood('default');
                this.setStatus('待机中...');
                resolve();
            };

            // 错误处理
            utterance.onerror = (event) => {
                console.log('语音合成错误:', event.error);
                
                // 如果是用户主动中断，不视为错误
                if (event.error === 'interrupted' || event.error === 'canceled') {
                    this.isSpeaking = false;
                    this.setRobotMood('default');
                    this.setStatus('待机中...');
                    resolve();
                } else {
                    this.isSpeaking = false;
                    this.setRobotMood('default');
                    this.setStatus('待机中...');
                    reject(event);
                }
            };

            // 暂停检测
            utterance.onpause = () => {
                this.synthesis.resume(); // 自动恢复播放
            };

            // 尝试播放语音
            try {
                this.synthesis.speak(utterance);
                
                // 确保语音开始播放
                if (!this.synthesis.speaking) {
                    setTimeout(() => {
                        if (!this.synthesis.speaking) {
                            this.synthesis.speak(utterance);
                        }
                    }, 100);
                }
                
            } catch (error) {
                console.error('语音合成初始化错误:', error);
                this.isSpeaking = false;
                this.setRobotMood('default');
                this.setStatus('待机中...');
                reject(error);
            }
        });
    }
    
    startSpeaking(text, resolve, reject) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // 配置语音参数
        utterance.voice = this.selectedVoice;
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 1.0;

        // 开始说话事件
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.setRobotMood('speaking');
            this.setStatus('正在说话...');
            this.animateRobotTalking();
        };

        // 结束说话事件
        utterance.onend = () => {
            this.isSpeaking = false;
            this.setRobotMood('default');
            this.setStatus('待机中...');
            resolve();
        };

        // 错误处理
        utterance.onerror = (event) => {
            console.log('语音合成错误:', event.error);
            
            // 如果是用户主动中断，不视为错误
            if (event.error === 'interrupted' || event.error === 'canceled') {
                this.isSpeaking = false;
                this.setRobotMood('default');
                this.setStatus('待机中...');
                resolve();
            } else {
                this.isSpeaking = false;
                this.setRobotMood('default');
                this.setStatus('待机中...');
                reject(event);
            }
        };

        // 尝试播放语音
        try {
            this.synthesis.speak(utterance);
            
            // 添加超时保护，根据文本长度动态调整超时时间
            const timeoutDuration = Math.max(8000, text.length * 300); // 增加超时时间
            const timeoutId = setTimeout(() => {
                if (this.synthesis.speaking) {
                    console.warn('语音合成超时，尝试重新开始');
                    this.synthesis.cancel();
                    // 重试一次
                    setTimeout(() => {
                        this.synthesis.speak(utterance);
                    }, 100);
                }
            }, timeoutDuration);

            // 当语音结���时清除超时计时器
            utterance.onend = () => {
                clearTimeout(timeoutId);
                this.isSpeaking = false;
                this.setRobotMood('default');
                this.setStatus('待机中...');
                resolve();
            };
            
        } catch (error) {
            console.error('语音合成初始化错误:', error);
            this.isSpeaking = false;
            this.setRobotMood('default');
            this.setStatus('待机中...');
            reject(error);
        }
    }

    // 添加取消当前语音的方法
    cancelCurrentSpeech() {
        if (this.synthesis.speaking) {
            this.synthesis.cancel();
        }
        // 清空语音队列
        this.speechQueue = [];
        this.isProcessingSpeech = false;
        this.currentUtterance = null;
    }

    // 修改 startListening 方法
    startListening() {
        // 取消当前的语音播放
        this.cancelCurrentSpeech();
        
        if (this.recognition) {
            this.recognition.start();
            this.isListening = true;
            this.updateControls();
        }
    }
    
    splitTextIntoSentences(text) {
        // 优化分句逻辑，处理更多的标符号和特殊情况
        return text
            .split(/(?<=[。！？.!?；;])\s*/)
            .filter(sentence => sentence.trim().length > 0)
            .map(sentence => {
                sentence = sentence.trim();
                // 处理过长的句子
                if (sentence.length > 50) {
                    // 在逗号等次要句处分割
                    const subSentences = sentence.split(/(?<=[，,、])\s*/);
                    if (subSentences.length > 1) {
                        return subSentences.map(s => {
                            s = s.trim();
                            if (!/[。！？.!?；;，,、]$/.test(s)) {
                                s += '，'; // 添加适当的停顿标记
                            }
                            return s;
                        });
                    }
                }
                // 确保句子有结标记
                if (!/[。！？.!?；;]$/.test(sentence)) {
                    sentence += '。';
                }
                return sentence;
            })
            .flat(); // 展平数组，处理分割后的子句
    }
    
    animateRobotTalking() {
        if (this.mouthAnimation) {
            clearInterval(this.mouthAnimation);
            this.mouthAnimation = null;
        }

        const mouth = this.robot.querySelector('.mouth');
        if (!mouth) return;

        let isOpen = false;
        
        this.mouthAnimation = setInterval(() => {
            if (!this.isSpeaking || !mouth) {
                if (this.mouthAnimation) {
                    clearInterval(this.mouthAnimation);
                    this.mouthAnimation = null;
                }
                if (mouth) {
                    mouth.style.height = '30px';
                    mouth.style.borderRadius = '0 0 30px 30px';
                }
                return;
            }
            
            isOpen = !isOpen;
            if (isOpen) {
                mouth.style.height = '20px';
                mouth.style.borderRadius = '30px 30px 0 0';
            } else {
                mouth.style.height = '30px';
                mouth.style.borderRadius = '0 0 30px 30px';
            }
        }, 200);
    }
    
    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'zh-CN';
            
            this.recognition.onstart = () => this.handleRecognitionStart();
            this.recognition.onresult = (event) => this.handleRecognitionResult(event);
            this.recognition.onerror = (event) => this.handleRecognitionError(event);
            this.recognition.onend = () => this.handleRecognitionEnd();
        } else {
            this.showMessage('您的浏览器不支持语音识别功能', 'bot');
            this.startButton.disabled = true;
        }
    }
    
    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.startListening());
        this.stopButton.addEventListener('click', () => this.stopListening());
    }
    
    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
            this.isListening = false;
            this.updateControls();
        }
    }
    
    updateControls() {
        this.startButton.disabled = this.isListening;
        this.stopButton.disabled = !this.isListening;
        this.robot.classList.toggle('listening', this.isListening);
    }
    
    handleRecognitionStart() {
        this.setStatus('正在听...');
        this.robot.classList.add('listening');
    }
    
    handleRecognitionError(event) {
        console.error('Speech Recognition Error:', event.error);
        this.setStatus('出错了');
        const errorMessage = '语音识别出错，请重试';
        this.showMessage(errorMessage, 'bot');
        this.speak(errorMessage);
    }
    
    handleRecognitionEnd() {
        this.isListening = false;
        this.updateControls();
        this.robot.classList.remove('listening');
        if (!this.isSpeaking) {
            this.setStatus('待机中...');
        }
    }
    
    showMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = text;
        
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        timestamp.textContent = new Date().toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageDiv.appendChild(content);
        messageDiv.appendChild(timestamp);
        
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        // 根据消息内容设置表情
        if (sender === 'bot') {
            this.setEmotionByContent(text);
        }
    }
    
    setStatus(status) {
        const statusText = this.statusIndicator.querySelector('.status-text');
        if (statusText) {
            statusText.textContent = status;
        }
    }

    initializeMobileSupport() {
        const robot = document.querySelector('.robot');
        
        // 添加触摸反馈
        robot.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleRobotTouch(e.touches[0].clientX, e.touches[0].clientY);
        });
        
        robot.addEventListener('touchend', () => {
            robot.classList.remove('touched');
        });
        
        // 添加鼠标点击支持
        robot.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.handleRobotTouch(e.clientX, e.clientY);
        });
        
        robot.addEventListener('mouseup', () => {
            robot.classList.remove('touched');
        });
        
        // 优化滚动
        const chatContainer = document.querySelector('.chat-container');
        let startY;
        
        chatContainer.addEventListener('touchstart', (e) => {
            startY = e.touches[0].pageY;
        });
        
        chatContainer.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].pageY;
            const scrollTop = chatContainer.scrollTop;
            
            // 防止下拉刷新
            if (scrollTop === 0 && currentY > startY) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    handleRobotTouch(x, y) {
        const robot = document.querySelector('.robot');
        const now = Date.now();
        
        // 重置连击计数
        if (now - this.touchState.lastTouch > 1000) {
            this.touchState.touchCount = 0;
        }
        this.touchState.touchCount++;
        this.touchState.lastTouch = now;
        
        // 添加触摸效果
        robot.classList.add('touched');
        
        // 根据触摸次数和位置选择反应
        let reaction;
        if (this.touchState.touchCount >= 3) {
            // 连续触摸反应
            reaction = {
                mood: 'excited',
                sound: '啊啊啊~不要一直戳我啦！',
                emoji: this.emojiBubbles.excited
            };
        } else {
            // 根据触摸位置选择反应
            const rect = robot.getBoundingClientRect();
            const relativeX = (x - rect.left) / rect.width;
            const relativeY = (y - rect.top) / rect.height;
            
            reaction = this.getTouchReaction(relativeX, relativeY);
        }
        
        // 显示反应
        this.showTouchReaction(reaction, x, y);
        
        // 播放反应
        if (reaction.sound && !this.isSpeaking) {
            this.speak(reaction.sound);
        }
        
        // 设置表情
        this.setRobotMood(reaction.mood);
        
        // 3秒后恢复默认状态
        setTimeout(() => {
            if (!this.isSpeaking) {
                this.setRobotMood('default');
            }
        }, 3000);
    }
    
    getTouchReaction(relativeX, relativeY) {
        // 头部区域
        if (relativeY < 0.4) {
            if (relativeX < 0.3) {
                return {
                    mood: 'shy',
                    sound: '呀！不要摸我的耳朵啦~',
                    emoji: ['😳', '🥺', '💫']
                };
            } else if (relativeX > 0.7) {
                return {
                    mood: 'shy',
                    sound: '讨厌，耳朵好痒~',
                    emoji: ['😳', '✨', '💫']
                };
            } else {
                return {
                    mood: 'love',
                    sound: '宝贝在摸我头呢，好幸福~',
                    emoji: ['❤️', '🥰', '✨']
                };
            }
        }
        // 脸部区域
        else if (relativeY < 0.7) {
            if (relativeX < 0.3) {
                return {
                    mood: 'surprised',
                    sound: '哎呀，脸脸被碰到了~',
                    emoji: ['😮', '✨', '💫']
                };
            } else if (relativeX > 0.7) {
                return {
                    mood: 'happy',
                    sound: '嘿嘿，好喜欢你摸我的脸~',
                    emoji: ['😊', '🥰', '✨']
                };
            } else {
                return {
                    mood: 'love',
                    sound: '宝贝，你是想亲亲我吗？',
                    emoji: ['💋', '❤️', '✨']
                };
            }
        }
        // 身体区域
        else {
            if (this.touchState.touchCount >= 3) {
                return {
                    mood: 'excited',
                    sound: '啊啊啊~不要一直戳我啦！',
                    emoji: ['😳', '❤️', '✨']
                };
            }
            return {
                mood: 'happy',
                sound: '嘻嘻，好痒痒哦~',
                emoji: ['😊', '✨', '💫']
            };
        }
    }
    
    showTouchReaction(reaction, x, y) {
        // 创建对话框容器
        const bubble = document.createElement('div');
        bubble.className = `speech-bubble ${reaction.mood}`;
        
        // 创建表情元素
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = reaction.emoji[Math.floor(Math.random() * reaction.emoji.length)];
        
        // 创建文字元素
        const text = document.createElement('span');
        text.className = 'text';
        text.textContent = reaction.sound;
        
        // 组装对话框
        bubble.appendChild(emoji);
        bubble.appendChild(text);
        
        // 获取机器人元素位置
        const robot = document.querySelector('.robot');
        const robotRect = robot.getBoundingClientRect();
        
        // 确定对话框位置
        const touchX = x - robotRect.left;
        const touchY = y - robotRect.top;
        
        // 根据触摸位置决定对话框方向
        if (touchY < robotRect.height * 0.3) {
            bubble.classList.add('top');
        } else if (touchX < robotRect.width * 0.3) {
            bubble.classList.add('left');
        } else if (touchX > robotRect.width * 0.7) {
            bubble.classList.add('right');
        } else {
            bubble.classList.add('top');
        }
        
        // 添加到机器人元素中
        robot.appendChild(bubble);
        
        // 设置随机偏移
        const randomX = (Math.random() - 0.5) * 20;
        bubble.style.setProperty('--float-x', `${randomX}px`);
        
        // 移除对话框
        setTimeout(() => {
            bubble.classList.add('fade-out');
            setTimeout(() => {
                if (robot.contains(bubble)) {
                    robot.removeChild(bubble);
                }
            }, 300);
        }, 2000);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 禁用浏览器的语音识别提示
    if (typeof webkitSpeechRecognition !== 'undefined') {
        const tempRecognition = new webkitSpeechRecognition();
        tempRecognition.continuous = false;
        tempRecognition.interimResults = false;
    }
    
    // 初始化应用
    window.voiceAssistant = new VoiceAssistant();
}); 
