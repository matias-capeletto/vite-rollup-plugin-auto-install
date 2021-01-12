import vue from '@vitejs/plugin-vue'
import autoInstall from '@rollup/plugin-auto-install'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    { ...autoInstall(), enforce: 'pre' },
    vue()
  ]
}
