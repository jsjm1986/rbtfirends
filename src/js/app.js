class VoiceAssistant {
    constructor() {
        // 基础DOM元素
        this.loadingScreen = document.getElementById('loadingScreen');
        this.apiKeyModal = document.getElementById('apiKeyModal');
        this.mainApp = document.getElementById('mainApp');
        this.progressBar = document.querySelector('.progress-bar');
        this.loadingText = document.querySelector('.loading-text');
        
        // 核心功能元素
        this.robot = document.querySelector('.robot');
        this.statusIndicator = document.querySelector('.status-indicator');
        this.messagesContainer = document.getElementById('messages');
        this.startButton = document.getElementById('startBtn');
        this.stopButton = document.getElementById('stopBtn');
        this.apiKeyInput = document.getElementById('apiKeyInput');
        this.submitApiKeyButton = document.getElementById('submitApiKey');
        
        // 基础状态初始化
        this.isListening = false;
        this.isSpeaking = false;
        this.apiKey = localStorage.getItem('glm4_api_key');
        this.initializationComplete = false;
        
        // 延迟初始化的组件
        this.recognition = null;
        this.synthesis = null;
        this.voices = [];
        
        // 语音合成队列
        this.speechQueue = [];
        this.currentUtterance = null;
        this.isProcessingSpeech = false;
        
        // 触摸状态 - 使用Map优化性能
        this.touchState = new Map();
        
        // 表情气泡 - 使用Map优化查找性能
        this.initializeEmojiBubbles();
        
        // 确保DOM元素都存在
        if (this.checkDOMElements()) {
            // 启动初始化流程
            this.startInitialization();
        } else {
            console.error('必要的DOM元素未找到');
            this.handleInitializationError('页面加载失败，请刷新重试');
        }
    }
    
    checkDOMElements() {
        const requiredElements = [
            this.loadingScreen,
            this.apiKeyModal,
            this.mainApp,
            this.progressBar,
            this.loadingText,
            this.robot,
            this.statusIndicator,
            this.messagesContainer,
            this.startButton,
            this.stopButton,
            this.apiKeyInput,
            this.submitApiKeyButton
        ];
        
        return requiredElements.every(element => element !== null);
    }
    
    async startInitialization() {
        try {
            console.log('开始初始化...');
            // 更新加载进度
            this.updateLoadingProgress(10, '正在初始化系统...');
            
            // 初始化表情系统
            this.initializeEmojiBubbles();
            this.updateLoadingProgress(30, '表情系统已就绪...');
            
            // 初始化API密钥处理
            await this.initializeApiKeyHandling();
            this.updateLoadingProgress(50, '配置加载完成...');
            
            // 延迟加载非关键功能
            await this.deferredInitialization();
            this.updateLoadingProgress(80, '正在完成最后配置...');
            
            // 完成初始化
            this.completeInitialization();
            console.log('初始化完成');
            
        } catch (error) {
            console.error('初始化失败:', error);
            this.handleInitializationError(error.message || '初始化失败，请刷新页面重试');
        }
    }
    
    updateLoadingProgress(progress, message) {
        console.log(`加载进度: ${progress}%, ${message}`);
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }
        if (this.loadingText) {
            this.loadingText.textContent = message;
        }
    }
    
    handleInitializationError(message = '初始化失败，请刷新页面重试') {
        console.error('初始化错误:', message);
        this.updateLoadingProgress(0, message);
        
        // 3秒后显示API密钥输入界面
        setTimeout(() => {
            this.showApiKeyModal();
        }, 3000);
    }
    
    async initializeApiKeyHandling() {
        // 检查是否已有API密钥
        if (this.apiKey) {
            // 验证API密钥有效性
            try {
                await this.validateApiKey(this.apiKey);
                this.showMainApp();
            } catch (error) {
                console.warn('API密钥验证失败:', error);
                this.showApiKeyModal();
            }
        } else {
            this.showApiKeyModal();
        }
        
        // 绑定API密钥提交事件
        this.submitApiKeyButton.addEventListener('click', async () => {
            const apiKey = this.apiKeyInput.value.trim();
            if (apiKey) {
                try {
                    await this.validateApiKey(apiKey);
                    localStorage.setItem('glm4_api_key', apiKey);
                    this.apiKey = apiKey;
                    this.showMainApp();
                } catch (error) {
                    console.error('API密钥验证失败:', error);
                    alert('API密钥验证失败，请检查后重试');
                }
            }
        });
    }
    
    async validateApiKey(apiKey) {
        // 简单的API密钥格式验证
        if (!apiKey || typeof apiKey !== 'string' || apiKey.length < 8) {
            throw new Error('无效的API密钥��式');
        }

        try {
            // 这里可以添加对API的测试请求
            // 为了避免不必要的API调用，我们先只做基本验证
            return true;
        } catch (error) {
            throw new Error('API密钥验证失败');
        }
    }
    
    showApiKeyModal() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
        }
        if (this.apiKeyModal) {
            this.apiKeyModal.classList.remove('hidden');
        }
        if (this.mainApp) {
            this.mainApp.classList.add('hidden');
        }
    }
    
    showMainApp() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
        }
        if (this.apiKeyModal) {
            this.apiKeyModal.classList.add('hidden');
        }
        if (this.mainApp) {
            this.mainApp.classList.remove('hidden');
        }
    }
    
    initializeEmojiBubbles() {
        this.emojiBubbles = new Map([
            ['love', ['❤️', '💕', '💗']],
            ['happy', ['😊', '😄', '🥰']],
            ['shy', ['😳', '🥺', '👉👈']],
            ['surprised', ['😮', '😯', '😲']],
            ['thinking', ['🤔', '💭', '⭐']],
            ['speaking', ['💬', '💭', '💗']],
            ['sad', ['🥺', '💔', '😢']],
            ['excited', ['🥳', '✨', '⭐']]
        ]);
    }
    
    async deferredInitialization() {
        // 延迟加载语音合成
        if (window.speechSynthesis) {
            this.synthesis = window.speechSynthesis;
            await this.initializeVoices();
        }
        
        // 预加载其他资源
        await this.preloadResources();
    }
    
    async initializeVoices() {
        // 等待语音列表加载
        return new Promise((resolve) => {
            const voices = this.synthesis.getVoices();
            if (voices.length > 0) {
                this.voices = voices;
                resolve();
            } else {
                this.synthesis.addEventListener('voiceschanged', () => {
                    this.voices = this.synthesis.getVoices();
                    resolve();
                }, { once: true });
                
                // 5秒超时保护
                setTimeout(resolve, 5000);
            }
        });
    }
    
    async preloadResources() {
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                const preloadDiv = document.createElement('div');
                preloadDiv.style.position = 'absolute';
                preloadDiv.style.opacity = '0';
                preloadDiv.style.pointerEvents = 'none';
                document.body.appendChild(preloadDiv);
                
                // 预加载所有表情类
                ['happy', 'sad', 'surprised', 'thinking'].forEach(emotion => {
                    const testDiv = document.createElement('div');
                    testDiv.className = `robot-face ${emotion}`;
                    preloadDiv.appendChild(testDiv);
                });
                
                // 3秒后移除预加载元素
                setTimeout(() => {
                    preloadDiv.remove();
                    resolve();
                }, 3000);
            });
        });
    }
    
    completeInitialization() {
        this.initializationComplete = true;
        if (this.apiKey) {
            this.showMainApp();
        } else {
            this.showApiKeyModal();
        }
    }
}

// 页��加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.voiceAssistant = new VoiceAssistant();
});