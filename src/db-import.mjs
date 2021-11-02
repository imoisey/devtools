#!/usr/bin/env zx

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .options({
        'filePath': {
            alias: 'f',
            describe: 'Путь к файлу дампа',
            demandOption: true
        },
        'host': {
            alias: 'h',
            describe: 'Адрес хоста сервера БД',
            demandOption: true,
            default: '127.0.0.1',
        },
        'port': {
            alias: 'P',
            describe: 'Порт сервера БД',
            demandOption: true,
            default: '3306'
        },
        'user': {
            alias: 'u',
            describe: 'Имя пользователя для подключения к БД',
            demandOption: true,
            default: 'root',
        },
        'password': {
            alias: 'p',
            describe: 'Пароль пользователя для подключения в БД',
            demandOption: true,
            default: 'secret'
        },
        'name': {
            alias: 'n',
            describe: 'Имя базы данных',
            demandOption: true,
        }
    })
    .help()
    .wrap(100)
    .version(false)
    .argv;

await $`zcat ${argv.filePath} | mysql -h ${argv.host} -u ${argv.user} -P ${argv.port} -p${argv.password} ${argv.name}`;