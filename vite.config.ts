import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import vitePluginImp from "vite-plugin-imp"
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#0084ff",
          "link-color": "#ff704c",
          "border-radius-base": "4px"
        }
      }
    }
  },
  // vite配置别名
  resolve: {
    alias: {
      "/@/": resolve(__dirname, "src")
    }
  }
})

