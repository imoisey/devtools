## Dev tools for local

Инструменты для локальной разработки, которые упрощают жизнь.

### Требования

* nodejs
* npm
* git

### Установка

```bash
git clone https://github.com/imoisey/devtools.git .devtools
cd .devtools
npm install
```

Регистрируем в PATH:

```bash
echo 'export PATH=~/.devtools/bin:$PATH' >> ~/.bashrc
```


### Утилиты

#### 💲 db-import

Импортирует dump БД из архива .gz. Под капотом используется zcat & mysql.

##### Зависимости:

* zcat
* mysql

##### Опции:

```bash
  -f, --filePath  Путь к файл дампа          
  -h, --host      Адрес хоста сервера БД                    
  -P, --port      Порт сервера БД                                
  -u, --user      Имя пользователя для подключения к БД
  -p, --password  Пароль пользователя для подключения в БД
  -n, --name      Имя базы    
      --help      Показать помощь
```


##### Пример использования:

```bash
db-import -f ~/dumps/project.sql.gz -n dbname
```