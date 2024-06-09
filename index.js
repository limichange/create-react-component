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

program.parse(process.argv)
