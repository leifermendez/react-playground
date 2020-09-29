export const getOptions = (mode: string) => ({
  mode,
  value: '',
  theme: 'react',
  keyMap: 'sublime',
  indentUnit: 2,
  lineNumbers: true,
  dragDrop: false,
  showCursorWhenSelecting: true,
  autoCloseBrackets: true,
  matchTags: {
    bothTags: true,
  },
  autoRefresh: true,
  extraKeys: {
    Tab: 'indentMore',
    'Cmd-/': (cm: CodeMirror.Editor) => {
      cm.listSelections().forEach((selection) => {
        ;(cm as any).toggleComment({
          lineComment: mode === 'python' ? '#' : '//',
        })
      })
    },
  },
})

export const requireAddons = () => {
  require('codemirror/mode/jsx/jsx')
  require('codemirror/keymap/sublime')
  require('codemirror/addon/fold/xml-fold') // required for matchtags
  require('codemirror/addon/edit/matchtags')
  require('codemirror/addon/edit/closebrackets')
  require('codemirror/addon/comment/comment')
  require('codemirror/addon/selection/active-line')
  require('codemirror/addon/display/autorefresh')
}