/*
 * @CopyRight: 广州仰望星空云科技有限公司
 * @Author: linkaiyan
 * @Email: linkaiyan@xinyu668.com
 * @Date: 2025-04-02 14:05:01
 * @LastEditTime: 2025-05-10 02:33:37
 * @LastEditors: linkaiyan
 * @Description: 
 */
// import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
// import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser';
// import pkg from './package.json';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');
 
export default {
  input: './index.js', // 入口文件
  output: [ // 输出配置，可以配置多种格式，如 UMD, ESM, CJS 等
    {
      file: pkg.main, // pkg.main 从 package.json 中引用 main 字段，通常是 dist/index.js
      format: 'cjs', // CommonJS 格式，适合 Node.js 环境
      sourcemap: true,
    },
    {
      file: pkg.module, // pkg.module 从 package.json 中引用 module 字段，通常是 dist/index.es.js
      format: 'es', // ES 模块格式，适合现代浏览器和打包工具如 Webpack 或 Rollup
      sourcemap: true,
    },
  ],
  plugins: [
    // json(),
    vue(),
    external(), // 使 peer dependencies 成为外部依赖，不打包进最终 bundle 中
    // babel({ exclude: 'node_modules/**' }), // 使用 Babel 转译 JSX 和其他 ES6+ 特性
    commonjs(), // 将 CommonJS 模块转换为 ES6，以便 Rollup 处理它们
    resolve(), // 允许 node_modules 中的模块被 Rollup 找到和打包
    // typescript({ useTsconfigDeclarationDir: true }), // 使用 TypeScript 配置中的 declarationDir 设置类型声明输出目录
    // terser(), // 压缩代码，可选步骤，视情况而定
    terser({
      compress: false, // 禁用代码压缩
      mangle: false    // 禁用变量名混淆
    })
  ],
};