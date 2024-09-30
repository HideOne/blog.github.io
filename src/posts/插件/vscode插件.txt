---
title: vscode插件
category:
- 
date: 2024-09-01 21:02:50
headerDepth: 2
---


## 安装 yo generator-code
```
npm install -g yo generator-code
```
## 创建项目
```
yo code
```
## 插件目录结构
```
├── .vscode
│   ├── launch.json     // 插件加载和调试的配置
│   └── tasks.json      // 配置TypeScript编译任务
├── .gitignore          // 忽略构建输出和node_modules文件
├── README.md           // 一个友好的插件文档
├── src
│   └── extension.ts    // 插件源代码
├── package.json        // 插件配置清单
├── tsconfig.json       // TypeScript配置
```

## package.json配置
| 名称                  | 必须 | 类型    | 详细                                                                                                                           |
|-----------------------|------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| `name`                | Y    | string  | 插件的名称必须用全小写无空格的字母组成。                                                                                      |
| `version`             | Y    | string  | SemVer 版本模式兼容。                                                                                                          |
| `publisher`           | Y    | string  | 发行方名称                                                                                                                     |
| `engines`             | Y    | object  | 一个至少包含 `vscode` 字段的对象，其值必须兼容 VS Code 版本。不可以是 `*`。例如：`^0.10.5` 表明最小兼容 0.10.5 版本的 VS Code。|
| `license`             |      | string  | 参考 npm's documentation。如果你在插件根目录已经提供了 LICENSE 文件，那么 license 的值应该是 `SEE LICENSE IN <filename>`。   |
| `displayName`         |      | string  | 插件市场所显示的插件名称。                                                                                                     |
| `description`         |      | string  | 简单地描述一下你的插件是做什么的。                                                                                             |
| `categories`          |      | string[]| 你想要使用的插件分类，可选值有：`[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]` |
| `keywords`            |      | array   | 关键字（数组），这样用户可以更方便地找到你的插件。到时候会和市场上的其他插件以标签筛选在一起。                                |
| `galleryBanner`       |      | object  | 根据你的 icon 格式化市场的头部显示。详情见下。                                                                                 |
| `preview`             |      | boolean | 在市场中会显示 Preview 标记。                                                                                                  |
| `main`                |      | string  | 你的插件入口                                                                                                                   |
| `contributes`         |      | object  | 描述插件发布内容的对象。                                                                                                       |
| `activationEvents`    |      | array   | 激活事件数组。                                                                                                                 |
| `badges`              |      | array   | 显示在插件市场页面侧边栏的合法标记。每个标记都是一个对象，包含了 3 个属性：`url` 标记的图片 URL，当用户点击标记和 description 时，会跳转到 `href`。|
| `markdown`            |      | string  | 控制市场中使用的 Markdown 渲染引擎。可以是 `github` (默认) 或 `standard`。                                                     |
| `qna`                 |      | marketplace (默认), string, false | 控制市场中的 Q & A 链接。设置成 `marketplace` 时，自动使用市场默认的 Q & A 网址。或者提供一个 URL 转跳到你的 Q & A 地址。设置为 `false` 时禁用。|
| `dependencies`        |      | object  | Node.js 运行时依赖。等同于 npm's dependencies。                                                                                |
| `devDependencies`     |      | object  | Node.js 开发时依赖。等同于 npm's devDependencies。                                                                             |
| `extensionDependencies` |    | array   | 插件依赖，由插件 ID 组成的数组。当主要插件安装完成后，其他插件会相应安装。插件 ID 的格式为 `${publisher}.${name}`。比如：`vscode.csharp`。|
| `scripts`             |      | object  | 等同于 npm 的 scripts，不过有 VS Code 额外字段如 `vscode:prepublish` 或 `vscode:uninstall`。                                   |
| `icon`                |      | string  | icon 的文件路径，最小 128x128 像素 (视网膜屏幕则需 256x256)。                                                                  |

```json
{
    "name": "helloworld-sample", 
    "displayName": "helloworld-sample", 
    "description": "HelloWorld example for VS Code",
    "version": "0.0.1",
    "publisher": "vscode-samples", 
    "repository": "https://github.com/Microsoft/vscode-extension-samples/helloworld-sample",
    "engines": {
        "vscode": "^1.25.0"
    },
    "categories": ["Other"],
    "activationEvents": ["onCommand:extension.helloWorld"], //插件激活事件 定义插件的激活事件。只有当这些事件发生时，插件才会被激活。在这个示例中，当用户执行命令 extension.helloWorld 时，插件会被激活。
    "main": "./out/extension.js", // 插件入口
    "contributes": { // 描述插件发布内容的对象。
        "commands": [
            {
                "command": "extension.helloWorld",
                "title": "Hello World"
            }
        ]
    },
    "scripts": {
        "vscode:prepublish": "npm run compile",
        "compile": "tsc -p ./",
        "watch": "tsc -watch -p ./",
        "postinstall": "node ./node_modules/vscode/bin/install"
    },
    "devDependencies": {
        "@types/node": "^8.10.25",
        "tslint": "^5.11.0",
        "typescript": "^2.6.1",
        "vscode": "^1.1.22"
    }
}
```

### 入口函数
- 在入口脚本中 会有两个函数 activate 和 deactivate
- activate 激活事件被触发之时执行activate
- deactivate 在插件被卸载 vscode被关闭 调用

## 插件激活事件