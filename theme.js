import {future as theme} from 'mdx-deck/themes'
import xonokai from 'react-syntax-highlighter/styles/prism/xonokai'
import prismGraphql from 'react-syntax-highlighter/languages/prism/graphql'

export default {
  ...theme,
  colors: {
    ...theme.colors,
    
  },
  css: {
    ...theme.css,
    textAlign: 'left',
  },
  prism: {
    style: xonokai,
    languages: {
      graphql: prismGraphql
    }
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
