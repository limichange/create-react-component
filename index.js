#!/usr/bin/env node

import { program } from 'commander'
import { createReactComponent } from './create-react-component.js'

program
  .version('1.0.0')
  .description('create react component')
  .option('--name <type>', 'Add your name')
  .option('--names <names>', 'Add multiple names')
  .action((options) => {
    options.names &&
      options.names.split(',').forEach((name) => {
        createReactComponent(name)
      })

    options.name && createReactComponent(options.name)

    console.log(`Done!`)
  })

program.parse(process.argv)
