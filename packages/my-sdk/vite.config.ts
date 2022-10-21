import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: "modules",
		//压缩
		minify: true,
		rollupOptions: {
			input: resolve(__dirname, "./src/index.ts"),
			//忽略文件
			// external: ["axios"],
			output: [
				{
					format: "es",
					//不用打包成.es.js,这里我们想把它打包成.js
					entryFileNames: "[name].js",
					//让打包目录和我们目录对应
					preserveModules: true,
					//配置打包根目录
					dir: resolve(__dirname, "./dist/es"),
				},
				{
					format: "cjs",
					entryFileNames: "[name].js",
					//让打包目录和我们目录对应
					preserveModules: true,
					//配置打包根目录
					dir: resolve(__dirname, "./dist/lib"),
				},
			],
		},
		lib: {
			entry: "./index.ts",
			name: "mySdk",
		},
	},
});
