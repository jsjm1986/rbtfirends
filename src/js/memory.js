// 记忆系统管理类
class MemorySystem {
    constructor() {
        this.storageKey = 'robotMemory';
        this.memory = this.loadMemory() || this.getInitialMemory();
        this.initializeEmotionKeywords();
    }

    // 初始化情感关键词
    initializeEmotionKeywords() {
        this.emotionKeywords = {
            happy: ['开心', '快乐', '高兴', '幸福', '喜悦', '兴奋', '棒', '好玩', '有趣'],
            sad: ['难过', '伤心', '悲伤', '痛苦', '失落', '沮丧', '不开心', '哭'],
            angry: ['生气', '愤怒', '烦躁', '讨厌', '恼火', '不爽', '火大'],
            anxious: ['焦虑', '担心', '紧张', '害怕', '恐惧', '不安'],
            tired: ['累', '疲惫', '困', '倦', '乏', '无力'],
            lonely: ['孤独', '寂寞', '想你', '思念', '想念'],
            love: ['喜欢', '爱', '心动', '温暖', '感动', '甜蜜', '幸福']
        };
    }

    // 获取初始记忆结构
    getInitialMemory() {
        return {
            personalInfo: {
                nickname: '亲爱的',    // 用户昵称
                name: '',             // 真实姓名
                birthday: '',         // 生日
                age: '',             // 年龄
                zodiac: '',          // 星座
                bloodType: '',       // 血型
                height: '',          // 身高
                weight: '',          // 体重
                address: '',         // 地址
                hometown: '',        // 家乡
                occupation: '',      // 职业
                company: '',         // 公司
                education: '',       // 学历
                school: '',          // 学校
                major: '',           // 专业
                hobbies: [],         // 兴趣爱好
                preferences: {        // 用户偏好
                    foods: [],        // 喜欢的食物
                    colors: [],       // 喜欢的颜色
                    music: [],        // 喜欢的音乐
                    movies: [],       // 喜欢的电影
                    sports: []        // 喜欢的运动
                },
                important_dates: {    // 重要日期
                    birthday: '',     // 生日
                    anniversary: '',  // 恋爱纪念日
                    graduation: '',   // 毕业日期
                    work_anniversary: '', // 工作周年
                    special_days: {}  // 其他特殊日期
                },
                first_meet: new Date().toISOString(), // 初次见面时间
                relationships: {      // 重要人际关系
                    family: {},       // 家人
                    friends: {},      // 朋友
                    colleagues: {}    // 同事
                },
                contact: {           // 联系方式
                    phone: '',
                    email: '',
                    social_media: {}
                },
                health: {            // 健康信息
                    allergies: [],    // 过敏源
                    medications: [],  // 在服用的药物
                    conditions: []    // 健康状况
                },
                daily_routine: {     // 日常习惯
                    wake_time: '',    // 起床时间
                    sleep_time: '',   // 睡觉时间
                    meal_times: {},   // 用餐时间
                    work_hours: {}    // 工作时间
                },
                emotional_state: {    // 情感状态记录
                    current: '',      // 当前情绪
                    history: [],      // 情绪历史
                    triggers: {}      // 情绪触发因素
                }
            },
            conversations: {
                key_moments: [],      // 重要对话片段
                shared_memories: [],   // 共同经历
                last_conversation: null // 上次对话时间
            },
            emotional_bonds: {
                intimacy_level: 0,    // 亲密度
                special_interactions: [], // 特殊互动记录
                mood_history: []      // 情绪历史
            },
            statistics: {
                total_conversations: 0,    // 总对话次数
                total_interactions: 0,     // 总互动次数
                favorite_topics: {},       // 喜爱的话题
                interaction_frequency: {}  // 互动频率统计
            }
        };
    }

    // 加载记忆
    loadMemory() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('加载记忆失败:', error);
            return null;
        }
    }

    // 保存记忆
    saveMemory() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.memory));
            return true;
        } catch (error) {
            console.error('保存记忆失败:', error);
            return false;
        }
    }

    // 更新用户信息
    updatePersonalInfo(info) {
        this.memory.personalInfo = { ...this.memory.personalInfo, ...info };
        return this.saveMemory();
    }

    // 分析并提取个人信息
    analyzePersonalInfo(message) {
        const patterns = {
            // 基本信息
            birthday: [
                /我的生日是?([0-9]{4}年)?([0-9]{1,2}月[0-9]{1,2}[日号])/,
                /([0-9]{1,2}月[0-9]{1,2}[日号]).*生日/,
                /生日.*([0-9]{1,2}月[0-9]{1,2}[日号])/
            ],
            age: [
                /我.*?([0-9]{1,3}).*岁/,
                /([0-9]{1,3}).*岁.*年龄/
            ],
            name: [
                /我(的名字|叫|是)[\s\S]{1,2}([^，。！？,!?]{2,4})/,
                /([^，。！？,!?]{2,4}).*是我的名字/
            ],
            // 身体信息
            height: [
                /我.*?([0-9]{2,3}).*?(厘米|cm|CM)/,
                /身高.*?([0-9]{2,3})/
            ],
            weight: [
                /我.*?([0-9]{2,3}).*?(公斤|kg|KG)/,
                /体重.*?([0-9]{2,3})/
            ],
            bloodType: [
                /我是(A|B|O|AB)型血/,
                /血型.*(A|B|O|AB)型/
            ],
            // 工作信息
            occupation: [
                /我是(一[个名]|做)?([^，。！？,!?]{2,10})(工作)?的/,
                /我(在|目前|现在)是([^，。！？,!?]{2,10})/
            ],
            company: [
                /我在([^，。！？,!?]{2,20})(?:公司|企业|单位)(?:上班|工作)/,
                /([^，。！？,!?]{2,20})(?:公司|企业|单位).*工作/
            ],
            // 教育信息
            education: [
                /我(是|在)([^，。！？,!?]{2,15})(毕业|学生|读书|在读)/,
                /(毕业|就读)于([^，。！？,!?]{2,15})/
            ],
            school: [
                /我(在|是)?([^，。！？,!?]{2,15})(大学|学院|学校)/,
                /([^，。！？,!?]{2,15})(大学|学院|学校).*?(毕业|在读)/
            ],
            major: [
                /我学的是([^，。！？,!?]{2,15})/,
                /专业是([^，。！？,!?]{2,15})/
            ],
            // 地址信息
            address: [
                /我住在([^，。！？,!?]{3,20})/,
                /地址是([^，。！？,!?]{3,20})/,
                /([^，。！？,!?]{3,20}).*这里住/
            ],
            hometown: [
                /我是([^，。！？,!?]{2,10})人/,
                /老家在([^，。！？,!?]{2,10})/,
                /家乡是([^，。！？,!?]{2,10})/
            ],
            // 联系方式
            phone: [
                /我的电话是([0-9-]{8,13})/,
                /联系方式是([0-9-]{8,13})/
            ],
            email: [
                /邮箱是([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/,
                /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}).*邮箱/
            ]
        };

        let extracted = {};
        
        // 遍历所有模式进行匹配
        Object.entries(patterns).forEach(([key, patternList]) => {
            patternList.some(pattern => {
                const match = message.match(pattern);
                if (match) {
                    extracted[key] = match[match.length - 1].trim();
                    return true;
                }
                return false;
            });
        });

        // 分析兴趣爱好
        const hobbyPatterns = [
            /我(喜欢|爱好是)([^，。！？,!?]{2,20})/,
            /我(最爱|特别喜欢)([^，。！？,!?]{2,20})/
        ];

        hobbyPatterns.forEach(pattern => {
            const match = message.match(pattern);
            if (match) {
                const hobby = match[2].trim();
                if (!this.memory.personalInfo.hobbies.includes(hobby)) {
                    this.memory.personalInfo.hobbies.push(hobby);
                }
            }
        });

        // 分析情感状态
        const emotion = this.analyzeEmotion(message);
        if (emotion) {
            this.updateEmotionalState(emotion);
        }

        return extracted;
    }

    // 分析情感状态
    analyzeEmotion(message) {
        let maxEmotionScore = 0;
        let dominantEmotion = null;

        Object.entries(this.emotionKeywords).forEach(([emotion, keywords]) => {
            const score = keywords.reduce((count, keyword) => {
                return count + (message.includes(keyword) ? 1 : 0);
            }, 0);

            if (score > maxEmotionScore) {
                maxEmotionScore = score;
                dominantEmotion = emotion;
            }
        });

        return dominantEmotion;
    }

    // 更新情感状态
    updateEmotionalState(emotion) {
        const timestamp = new Date().toISOString();
        this.memory.personalInfo.emotional_state.current = emotion;
        this.memory.personalInfo.emotional_state.history.push({
            emotion,
            timestamp
        });

        // 保持历史记录在合理范围内
        if (this.memory.personalInfo.emotional_state.history.length > 50) {
            this.memory.personalInfo.emotional_state.history.shift();
        }

        // 更新情绪触发因素统计
        this.memory.personalInfo.emotional_state.triggers[emotion] = 
            (this.memory.personalInfo.emotional_state.triggers[emotion] || 0) + 1;
    }

    // 分析重要日期
    analyzeImportantDates(message) {
        const datePatterns = {
            anniversary: [
                /纪念日是?([0-9]{4}年)?([0-9]{1,2}月[0-9]{1,2}[日号])/,
                /([0-9]{1,2}月[0-9]{1,2}[日号]).*纪念日/
            ],
            special_days: [
                /([^，。！？,!?]{2,10})日是?([0-9]{4}年)?([0-9]{1,2}月[0-9]{1,2}[日号])/
            ]
        };

        let dates = {};
        
        Object.entries(datePatterns).forEach(([key, patterns]) => {
            patterns.some(pattern => {
                const match = message.match(pattern);
                if (match) {
                    if (key === 'special_days') {
                        const eventName = match[1];
                        const date = match[match.length - 1];
                        dates[key] = dates[key] || {};
                        dates[key][eventName] = date;
                    } else {
                        dates[key] = match[match.length - 1];
                    }
                    return true;
                }
                return false;
            });
        });

        return dates;
    }

    // 记录重要对话
    recordConversation(message, isImportant = false) {
        const timestamp = new Date().toISOString();
        const conversation = { timestamp, content: message, isImportant };

        // 分析并更新个人信息
        const personalInfo = this.analyzePersonalInfo(message);
        if (Object.keys(personalInfo).length > 0) {
            this.updatePersonalInfo(personalInfo);
            isImportant = true;
        }

        // 分析并更新重要日期
        const importantDates = this.analyzeImportantDates(message);
        if (Object.keys(importantDates).length > 0) {
            this.memory.personalInfo.important_dates = {
                ...this.memory.personalInfo.important_dates,
                ...importantDates
            };
            isImportant = true;
        }

        // 更新统计信息
        this.memory.statistics.total_conversations++;
        this.memory.conversations.last_conversation = timestamp;

        // 分析并记录话题
        const topics = this.analyzeTopics(message);
        topics.forEach(topic => {
            this.memory.statistics.favorite_topics[topic] = 
                (this.memory.statistics.favorite_topics[topic] || 0) + 1;
        });

        if (isImportant) {
            this.memory.conversations.key_moments.push(conversation);
        }
        this.memory.conversations.shared_memories.push(conversation);

        // 保持记忆容量在合理范围内
        if (this.memory.conversations.shared_memories.length > 100) {
            this.memory.conversations.shared_memories.shift();
        }

        this.saveMemory();
        return isImportant;
    }

    // 分析对话主题
    analyzeTopics(message) {
        const topics = [];
        const topicKeywords = {
            '爱情': ['爱', '喜欢', '想你', '想念', '心动'],
            '生活': ['吃饭', '睡觉', '工作', '学习', '生活'],
            '心情': ['开心', '难过', '高兴', '伤心', '快乐'],
            '未来': ['将来', '未来', '计划', '梦想', '希望']
        };

        Object.entries(topicKeywords).forEach(([topic, keywords]) => {
            if (keywords.some(keyword => message.includes(keyword))) {
                topics.push(topic);
            }
        });

        return topics;
    }

    // 更新亲密度
    updateIntimacy(value) {
        const oldLevel = this.getEmotionalState();
        this.memory.emotional_bonds.intimacy_level = Math.max(0, 
            Math.min(100, this.memory.emotional_bonds.intimacy_level + value));
        
        // 记录心情变化
        this.memory.emotional_bonds.mood_history.push({
            timestamp: new Date().toISOString(),
            old_level: oldLevel,
            new_level: this.getEmotionalState(),
            change: value
        });

        return this.saveMemory();
    }

    // 记录特殊互动
    recordInteraction(type, details) {
        const timestamp = new Date().toISOString();
        const interaction = { type, details, timestamp };
        
        // 更新统计信息
        this.memory.statistics.total_interactions++;
        const hour = new Date().getHours();
        this.memory.statistics.interaction_frequency[hour] = 
            (this.memory.statistics.interaction_frequency[hour] || 0) + 1;

        this.memory.emotional_bonds.special_interactions.push(interaction);
        return this.saveMemory();
    }

    // 获取记忆摘要
    getMemorySummary() {
        const now = new Date();
        const firstMeet = new Date(this.memory.personalInfo.first_meet);
        const daysKnown = Math.floor((now - firstMeet) / (1000 * 60 * 60 * 24));

        return {
            nickname: this.memory.personalInfo.nickname,
            intimacyLevel: this.memory.emotional_bonds.intimacy_level,
            daysKnown,
            recentMemories: this.memory.conversations.shared_memories.slice(-5),
            keyMoments: this.memory.conversations.key_moments,
            favoriteTopics: this.getFavoriteTopics(3),
            totalConversations: this.memory.statistics.total_conversations,
            totalInteractions: this.memory.statistics.total_interactions
        };
    }

    // 获取最喜欢的话题
    getFavoriteTopics(count = 3) {
        return Object.entries(this.memory.statistics.favorite_topics)
            .sort(([,a], [,b]) => b - a)
            .slice(0, count)
            .map(([topic]) => topic);
    }

    // 导出记忆
    exportMemory() {
        return {
            data: this.memory,
            exportTime: new Date().toISOString(),
            version: '1.0'
        };
    }

    // 导入记忆
    importMemory(data) {
        try {
            if (!data.version || !data.data) {
                throw new Error('无效的记忆数据格式');
            }
            this.memory = data.data;
            return this.saveMemory();
        } catch (error) {
            console.error('导入记忆失败:', error);
            return false;
        }
    }

    // 清除记忆
    clearMemory() {
        try {
            localStorage.removeItem(this.storageKey);
            this.memory = this.getInitialMemory();
            return true;
        } catch (error) {
            console.error('清除记忆失败:', error);
            return false;
        }
    }

    // 获取情感状态
    getEmotionalState() {
        const intimacy = this.memory.emotional_bonds.intimacy_level;
        if (intimacy >= 80) return '深深的爱';
        if (intimacy >= 60) return '亲密';
        if (intimacy >= 40) return '友好';
        if (intimacy >= 20) return '熟悉';
        return '初识';
    }

    // 获取活跃时间分析
    getActiveTimeAnalysis() {
        const frequency = this.memory.statistics.interaction_frequency;
        const mostActiveHour = Object.entries(frequency)
            .sort(([,a], [,b]) => b - a)[0];
        return {
            mostActiveHour: mostActiveHour ? parseInt(mostActiveHour[0]) : null,
            frequency
        };
    }

    // 获取个人信息摘要
    getPersonalInfoSummary() {
        const info = this.memory.personalInfo;
        const summary = [];

        // 基本信息
        if (info.name) summary.push(`姓名：${info.name}`);
        if (info.age) summary.push(`年龄：${info.age}`);
        if (info.birthday) summary.push(`生日：${info.birthday}`);
        if (info.zodiac) summary.push(`星座：${info.zodiac}`);
        if (info.bloodType) summary.push(`血型：${info.bloodType}`);
        
        // 身体信息
        if (info.height) summary.push(`身高：${info.height}`);
        if (info.weight) summary.push(`体重：${info.weight}`);

        // 工作教育
        if (info.occupation) summary.push(`职业：${info.occupation}`);
        if (info.company) summary.push(`公司：${info.company}`);
        if (info.education) summary.push(`学历：${info.education}`);
        if (info.school) summary.push(`学校：${info.school}`);
        if (info.major) summary.push(`专业：${info.major}`);

        // 地址信息
        if (info.address) summary.push(`地址：${info.address}`);
        if (info.hometown) summary.push(`家乡：${info.hometown}`);

        // 兴趣爱好
        if (info.hobbies.length > 0) {
            summary.push(`兴趣爱好：${info.hobbies.join('、')}`);
        }

        // 重要日期
        const dates = info.important_dates;
        if (dates.anniversary) summary.push(`纪念日：${dates.anniversary}`);
        if (dates.graduation) summary.push(`毕业日期：${dates.graduation}`);
        if (dates.work_anniversary) summary.push(`工作周年：${dates.work_anniversary}`);
        if (dates.special_days && Object.keys(dates.special_days).length > 0) {
            Object.entries(dates.special_days).forEach(([event, date]) => {
                summary.push(`${event}：${date}`);
            });
        }

        // 情感状态
        if (info.emotional_state.current) {
            summary.push(`当前心情：${this.translateEmotion(info.emotional_state.current)}`);
        }

        return summary.join('\n');
    }

    // 翻译情感状态
    translateEmotion(emotion) {
        const translations = {
            happy: '开心',
            sad: '难过',
            angry: '生气',
            anxious: '焦虑',
            tired: '疲惫',
            lonely: '寂寞',
            love: '充满爱意'
        };
        return translations[emotion] || emotion;
    }

    // 获取关系报告
    getRelationshipReport() {
        const summary = this.getMemorySummary();
        const activeTime = this.getActiveTimeAnalysis();
        const personalInfo = this.getPersonalInfoSummary();
        
        return {
            duration: `我们已经认识 ${summary.daysKnown} 天了`,
            intimacy: `当前关系：${this.getEmotionalState()}`,
            personalInfo: personalInfo ? `\n个人信息：\n${personalInfo}` : '',
            interactions: `共有 ${summary.totalConversations} 次对话，${summary.totalInteractions} 次互动`,
            favoriteTopics: `最喜欢聊的话题：${summary.favoriteTopics.join('、')}`,
            activeTime: activeTime.mostActiveHour !== null ? 
                `最活跃的时间是 ${activeTime.mostActiveHour} 点` : 
                '还在了解你的作息时间'
        };
    }
} 