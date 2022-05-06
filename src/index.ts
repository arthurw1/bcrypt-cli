#!/usr/bin/env node

import './register';

import { program } from 'commander';

import { genPair } from 'src/handlers/gen-pair';

program
  .command('gen-pair')
  .description('Generate a UUID + bcrypt hash pair')
  .action(genPair);

program.parse(process.argv);
