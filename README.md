# 智能机器人女朋友 (AI Robot Girlfriend)

[English](README_EN.md) | 简体中文

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/issues)
[![GitHub forks](https://img.shields.io/github/forks/jsjm1986/rbtfirends)](https://github.com/jsjm1986/rbtfirends/network)

一个基于 GLM-4 的智能聊天机器人，具有语音交互、情感表达和触摸反馈功能。项目采用纯前端实现，具有可爱的动画效果和丰富的互动体验。

[预览图]

---

## ✨ 在线体验

👉 [点击这里访问在线演示](https://jsjm1986.github.io/rbtfirends)

💡 获取 GLM-4 API 密钥：[申请地址](https://open.bigmodel.cn/)

---

## 🌟 特色功能

### 1. 智能对话
- 基于 GLM-4 大语言模型
- 自然流畅的对话体验
- 情感理解和回应
- 支持角色扮演和情感互动
- 长期记忆功能，记住重要对话

### 2. 语音交互
- 实时语音识别
- 自然语音合成
- 流畅的语音播放
- 多种语音表情

### 3. 可视化界面
- 可爱的机器人形象
- 丰富的表情动画
- 漫画风格对话框
- 流畅的动画效果

### 4. 触摸互动
- 多区域触摸反应
- 情感化的回应
- 动态表情气泡
- 可爱的声音反馈

## 🛠️ 技术栈

- HTML5 / CSS3 / JavaScript
- Web Speech API
- GLM-4 API
- CSS 动画和过渡效果

## 📦 快速开始

1. 打开项目页面
```
https://jsjm1986.github.io/rbtfirends
```

2. 输入 API 密钥
- 在首次使用时输入 GLM-4 API 密钥
- 密钥会安全存储在本地
- 获取 API 密钥：[https://open.bigmodel.cn/](https://open.bigmodel.cn/)

3. 开始互动
- 点击麦克风按钮开始语音对话
- 触摸机器人获得互动反馈
- 享受温暖的对话体验

## 🎯 使用指南

### 语音对话
1. 点击麦克风按钮开始录音
2. 说出你想说的话
3. 等待机器人回应
4. 机器人会用语音回复
5. 可以随时打断对话

### 触摸互动
1. 头部区域
   - 轻触头顶：温柔的摸头反应
   - 触摸耳朵：害羞的反应
   - 连续触摸：特殊反应

2. 脸部区域
   - 触摸脸颊：开心的反应
   - 触摸中心：亲密的反应
   - 不同位置有不同反馈

3. 身体区域
   - 轻触身体：痒痒的反应
   - 连续触摸：惊讶的反应
   - 互动式反馈

### 情感表达
- 称呼"老公"会获得特殊回应
- 不同情绪有不同表情
- 互动时会有情感变化
- 语气会影响回应方式

## 💡 常见问题

### 1. 语音识别问题
Q: 为什么语音识别没有反应？
A: 请确保：
- 浏览器允许麦克风权限
- 使用 Chrome 或 Edge 浏览器
- 麦克风设备正常工作
- 网络连接稳定

### 2. API 密钥问题
Q: API 密钥无效怎么办？
A: 可能的原因：
- 密钥输入错误
- 密钥已过期
- 超出使用限制
- 需要重新申请密钥

### 3. 语音合成问题
Q: 为什么没有声音输出？
A: 检查以下几点：
- 设备音量是否打开
- 浏览器是否允许自动播放
- 是否有其他程序占用音频
- 尝试刷新页面

### 4. 触摸反应问题
Q: 触摸没有反应怎么办？
A: 建议：
- 确保正确触摸互动区域
- 检查是否有遮挡元素
- 移动端需要启用触摸事件
- 尝试清除浏览器缓存

### 5. 记忆系统问题
Q: 如何备份记忆数据？
A: 可以通过以下方式：
- 点击设置中的"导出记忆"
- 下载 JSON 格式的备份文件
- 保存到安全的位置
- 需要时可以导入恢复

Q: 记忆数据会丢失吗？
A: 注意以下几���：
- 正常情况下数据会持久保存
- 清除浏览器数据会影响记忆
- 建议定期导出备份
- 更换设备时记得迁移数据

## 🧠 记忆系统详解

### 1. 自动信息识别
```javascript
// 示例对话及识别结果
"我叫张三，今年25岁" -> {
    name: "张三",
    age: "25"
}

"我是北京大学的学生，学习计算机专业" -> {
    school: "北京大学",
    major: "计算机"
}

"我的生日是5月20日，是双子座的" -> {
    birthday: "5月20日",
    zodiac: "双子座"
}

"我在腾讯工作，是一名程序员" -> {
    company: "腾讯",
    occupation: "程序员"
}
```

### 2. 情感识别系统
```javascript
// 情感关键词示例
const emotions = {
    happy: ['开心', '快乐', '高兴', '幸福', '喜悦'],
    sad: ['难过', '伤心', '悲伤', '痛苦', '失落'],
    angry: ['生气', '愤怒', '烦躁', '讨厌', '恼火'],
    anxious: ['焦虑', '担心', '紧张', '害怕', '不安'],
    tired: ['累', '疲惫', '困', '倦', '乏'],
    lonely: ['孤独', '寂寞', '想你', '思念'],
    love: ['喜欢', '爱', '心动', '温暖', '感动']
}

// 情感分析示例
"今天真开心" -> emotion: "happy"
"好想你啊" -> emotion: "lonely"
"有点累了" -> emotion: "tired"
```

### 3. 重要时刻记录
```javascript
// 重要对话标记示例
const keyMoments = {
    first_meet: {
        type: "milestone",
        content: "初次见面",
        timestamp: "2024-01-20"
    },
    confession: {
        type: "emotional",
        content: "第一次表白",
        timestamp: "2024-01-25"
    },
    special_date: {
        type: "anniversary",
        content: "一周年纪念",
        timestamp: "2025-01-20"
    }
}
```

### 4. 亲密度系统
```javascript
// 亲密度计算规则
const intimacyRules = {
    daily_chat: +1,          // 日常对话
    deep_conversation: +3,   // 深度交流
    special_moment: +5,      // 特殊时刻
    emotional_share: +2,     // 情感分享
    long_absence: -1,        // 长时间未互动
    max_level: 100          // 最高亲密度
}

// 亲密度等级
const intimacyLevels = {
    0-20: "初识",
    21-40: "熟悉",
    41-60: "信任",
    61-80: "亲密",
    81-100: "深深的爱"
}
```

### 5. 数据存储格式
```javascript
// 本地存储结构
{
    "version": "1.0",
    "lastUpdate": "2024-01-30T12:00:00Z",
    "userData": {
        // 个人信息
        "personalInfo": {...},
        // 对话历史
        "conversations": [...],
        // 情感记录
        "emotions": [...],
        // 重要时刻
        "keyMoments": [...],
        // 统计数据
        "statistics": {...}
    }
}
```

### 6. 数据管理接口
```javascript
// 导出数据
async function exportMemory() {
    const data = memorySystem.exportMemory();
    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
    );
    // 下载文件
    saveAs(blob, `memory_backup_${new Date().toISOString()}.json`);
}

// 导入数据
async function importMemory(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        memorySystem.importMemory(data);
    };
    reader.readAsText(file);
}
```

### 7. 隐私保护措施
```javascript
// 数据加密示例
const encryptData = (data, key) => {
    // 使用 AES 加密
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        key
    ).toString();
};

// 数据解密示例
const decryptData = (encrypted, key) => {
    // 使用 AES 解密
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
```

### 8. 使用建议

#### 数据备份
- 每周自动提醒备份
- 重要时刻后立即备份
- 定期清理过期数据
- 保持多个备份版本

#### 隐私保护
- ��存储敏感信息
- 使用加密导出
- 定期更换密钥
- 及时清理缓存

#### 性能优化
- 限制存储大小
- 定期压缩数据
- 清理冗余信息
- 优化查询性能

### 9. 技术实现
- LocalStorage 本地存储
- IndexedDB 大容量数据
- Web Crypto API 加密
- JSON 数据序列化
- 正则表达式信息提取
- 情感分析算法
- 数据压缩算法

### 10. 开发接口
```javascript
// 记忆系统核心接口
class MemorySystem {
    // 初始化系统
    constructor()
    
    // 记录对话
    recordConversation(message, isImportant)
    
    // 更新个人信息
    updatePersonalInfo(info)
    
    // 记录情感状态
    updateEmotionalState(emotion)
    
    // 获取记忆摘要
    getMemorySummary()
    
    // 导出记忆
    exportMemory()
    
    // 导入记忆
    importMemory(data)
    
    // 清除记忆
    clearMemory()
}
```

## 🎨 个性化设置

### 表情系统
```javascript
// 支持的表情类型
const emotions = [
    'happy',   // 开心
    'love',    // 喜爱
    'shy',     // 害羞
    'surprised', // 惊讶
    'thinking',  // 思考
    'speaking',  // 说话
    'sad',      // 难过
    'excited'   // 兴奋
];
```

### 对话框样式
```css
/* 自定义对话框主题 */
.speech-bubble.custom {
    background: linear-gradient(135deg, #fff0f5 0%, #fff 100%);
    border-color: #ff69b4;
    /* 更多自定义样式 */
}
```

### 触摸反应
```javascript
// 自定义触摸反应
const touchReactions = {
    head: {
        mood: 'love',
        sound: '宝贝在摸我头呢，好幸福~',
        emoji: ['❤️', '🥰', '✨']
    },
    // 更多区域配置
};
```

### 长期记忆系统
```javascript
// 记忆存储结构
const memorySystem = {
    personalInfo: {
        nickname: '亲爱的',    // 用户昵称
        preferences: [],       // 用户偏好
        important_dates: {}    // 重要日期
    },
    conversations: {
        key_moments: [],      // 重要对话片段
        shared_memories: []    // 共同经历
    },
    emotional_bonds: {
        intimacy_level: 0,    // 亲密度
        special_interactions: [] // 特殊互动记录
    }
};
```

### 记忆管理
- 自动保存重要对话内容
- 记住用户偏好和习惯
- 保存特殊日期和纪念日
- 随时可以导出备份记忆
- 支持记忆导入恢复

### 隐私保护
- 所有数据仅存储在本地
- 使用浏览器加密存储
- 可以随时清除记忆
- 支持选择性保存

## 📝 移动端适配

- 响应式设计
- 触摸优化
- 自适应布局
- 性能优化

## 📝 注意事项

1. API 密��安全
   - 密钥仅存储在本地
   - 建议设置使用限制
   - 定期更新密钥

2. 浏览器支持
   - 需要支持 Web Speech API
   - 建议使用现代浏览器
   - 推荐 Chrome/Edge

3. 性能优化
   - 控制动画数量
   - 避免频繁操作
   - 合理的超时处理

## 🤝 更新日志

### v1.0.0 (2024-01-20)
- 初始版本发布
- 基础对话功能
- 语音交互系统
- 触摸反馈系统

### v1.1.0 (2024-01-25)
- 添加情感系统
- 优化语音识别
- 改进触摸反应
- 漫画风格对话框

### v1.2.0 (2024-01-30)
- 新增表情动画
- 优化移动端体验
- 添加更多互动效果
- 性能优化

## 🤝 问题反馈

如果你在使用过程中遇到问题，或有好的建议：

1. 提交 Issue
2. 发送邮件反馈
3. 加入用户群交流

## 📄 开源协议

MIT License - 详见 LICENSE 文件

## 👥 联系方式

- 项目地址：[https://github.com/jsjm1986/rbtfirends](https://github.com/jsjm1986/rbtfirends)
- 问题反馈：[https://github.com/jsjm1986/rbtfirends/issues](https://github.com/jsjm1986/rbtfirends/issues)
- 在线演示：[https://jsjm1986.github.io/rbtfirends](https://jsjm1986.github.io/rbtfirends)

## 🙏 特别感谢

- GLM-4 团队提供的强大 API
- 所有提供反馈的用户
- 开源社区的支持 

### 记忆系统使用场景

#### 1. 日常对话
```javascript
// 自动记录日常对话
"今天天气真好" -> {
    type: "daily",
    emotion: "happy",
    intimacy: +1
}

// 记录重要对话
"我永远爱你" -> {
    type: "important",
    emotion: "love",
    intimacy: +5,
    keyMoment: true
}
```

#### 2. 个人信息更新
```javascript
// 基本信息更新
"我改名字了，现在叫小红" -> {
    update: "name",
    value: "小红",
    timestamp: "2024-01-30"
}

// 工作信息变更
"我换工作了，现在在阿里巴巴" -> {
    update: "company",
    value: "阿里巴巴",
    previous: "腾讯",
    timestamp: "2024-01-30"
}
```

#### 3. 特殊日期记录
```javascript
// 纪念日记录
"今天是我们认识一周年" -> {
    type: "anniversary",
    event: "认识纪念日",
    date: "2024-01-30",
    recurring: true
}

// 生日提醒
"下个月20号是我生日" -> {
    type: "birthday",
    date: "2024-02-20",
    reminder: true
}
```

#### 4. 情感互动
```javascript
// 触摸反应
"摸头杀" -> {
    action: "touch",
    area: "head",
    reaction: "害羞",
    intimacy: +2
}

// 特殊称呼
"老公~" -> {
    type: "nickname",
    intimacy: +3,
    special_response: true
}
```

### 记忆系统进阶功能

#### 1. 智能提醒
```javascript
// 生日提醒
{
    type: "birthday_reminder",
    message: "明天是小红的生日哦，要准备礼物吗？",
    advance_notice: "1天",
    actions: ["准备礼物", "发送祝福"]
}

// 纪念日提醒
{
    type: "anniversary_reminder",
    message: "后天是我们的一周年纪念日",
    advance_notice: "2天",
    suggestions: ["准备惊喜", "订餐厅"]
}
```

#### 2. 情感分析报告
```javascript
// 每周情感报告
{
    period: "2024-01-23 至 2024-01-30",
    dominant_emotion: "happy",
    emotion_distribution: {
        happy: 45%,
        love: 30%,
        neutral: 20%,
        tired: 5%
    },
    intimacy_change: +15,
    key_moments: [
        "第一次说我爱你",
        "一起看日落"
    ]
}
```

#### 3. 个性化回应
```javascript
// 根据记忆调整回应
if (memory.knows('最喜欢的食物')) {
    response = `要不要吃你最喜欢的${memory.get('最喜欢的食物')}？`;
}

// 根据心情调整语气
if (memory.currentMood === 'sad') {
    response = `不开心吗？要不要听听你喜欢的${memory.get('最喜欢的歌')}？`;
}
```

#### 4. 深度学习
```javascript
// 学习用户习惯
{
    daily_routine: {
        wake_up: "约7:30",
        sleep: "约23:00",
        busy_hours: "9:00-18:00",
        best_chat_time: "20:00-22:00"
    },
    preferences: {
        chat_style: "可爱",
        response_length: "中等",
        emoji_frequency: "经常"
    }
}
```

### 记忆系统安全措施

#### 1. 数据加密
```javascript
// 敏感信息加密
const encryptSensitiveInfo = (info) => {
    return {
        ...info,
        contact: encrypt(info.contact),
        address: encrypt(info.address)
    };
};

// 分级存储
const storageStrategy = {
    public: localStorage,
    private: encryptedStorage,
    sensitive: secureEnclave
};
```

#### 2. 备份策略
```javascript
// 自动备份配置
const backupConfig = {
    frequency: "weekly",
    retention: "last_3_versions",
    encryption: true,
    compression: true,
    auto_cleanup: true
};

// 备份内容过滤
const backupFilter = {
    exclude: ['temporary_data', 'cache'],
    include: ['personal_info', 'key_moments', 'emotions']
};
```

### 性能优化建议

#### 1. 存储优化
```javascript
// 数据压缩
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

// 缓存策略
const cacheStrategy = {
    frequently_accessed: "memory",
    regular_data: "localStorage",
    archived_data: "indexedDB"
};
```

#### 2. 查询优化
```javascript
// 索引设计
const memoryIndexes = {
    by_date: ['timestamp'],
    by_emotion: ['emotion_type'],
    by_importance: ['is_key_moment']
};

// 查询优化
const queryOptimizer = {
    use_index: true,
    batch_size: 50,
    cache_results: true,
    timeout: 1000
};
```