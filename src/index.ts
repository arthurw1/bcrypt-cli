import 'skuba-dive/register';
import { program } from 'commander';

program
  .command('gen-pair')
  .description('Generate a UUID + bcrypt hash pair')
  .action(function () {
    console.log('gen pair');
  });

program.parse(process.argv);
