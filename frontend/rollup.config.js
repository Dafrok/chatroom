import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import vue from 'rollup-plugin-vue'

export default {
    entry: 'src/js/app.js',
    dest: 'dist/app.js',
    format: 'umd',
    plugins: [
        vue(),
        babel({presets: ['es2015-rollup']}),
        npm({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'development'"
        })
    ]
}
