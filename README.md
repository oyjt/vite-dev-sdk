# SDK开发模板

## 简介

使用`pnpm+vite+vitest+vitepress`搭建的SDK组件开发模板，采用Monorepo环境

## 特性
- 📦  开箱即用的SDK组件开发环境
- 📦  开箱即用的SDK组件编译工具，支持导出 esm, cjs, umd 三种模块代码
- 📦  开箱即用的代码检查工具
- 📦  开箱即用的单元测试工具
- 📦  开箱即用的代码发布工具,同时发布到 npm 和 github, 并自动生成更新日志
- 💪  支持 Typescript
- 🚀  基于 pnpm

## 快速开始
```
pnpm install
```

## 命令相关

#### 打包组件库
```shell
pnpm run build:sdk
```

#### 生成文档
```shell
pnpm run docs:build
```

#### 生成文档
```shell
pnpm run exm:dev
```

#### 运行示例
```shell
pnpm run exm:dev
```

#### 运行全部的测试
```shell
pnpm run test
```

