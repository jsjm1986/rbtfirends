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

## 📝 移动端适配

- 响应式设计
- 触摸优化
- 自适应布局
- 性能优化

## 📝 注意事项

1. API 密钥安全
   - 密钥仅存储在本地
   - 建议设置使用限制
   - 定期更新密钥

2. 浏览器支持
   - 需要支持 Web Speech API
   - 建议使用现代���览器
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