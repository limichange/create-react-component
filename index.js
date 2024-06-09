#!/usr/bin/env node

import { program } from 'commander'
import { createReactComponent } from './create-react-component.js'

program
  .version('1.0.0')
  .description('create react component')
  .option('-n, --name <type>', 'Add your name')
  .action((options) => {
    createReactComponent(options.name)

    console.log(`Done, ${options.name}!`)
  })
  .option('--names <names>', 'Add multiple names')
  .action((options) => {
    options.names.split(',').forEach((name) => {
      createReactComponent(name)
    })

    console.log(`Done, ${options.names}!`)
  })

program.parse(process.argv)
