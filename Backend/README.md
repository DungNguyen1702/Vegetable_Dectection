### Installation

1. Clone the repository:

```
git clone https://github.com/DungNguyen1702/Vegetable_Detection.git
```

2. Install dependencies:

```
cd Backend
npm install
```

3. Set up your environment variables:

-   Create a .env file in the backend directory.
-   Create a database in [Console.clever-cloud](https://console.clever-cloud.com/)
-   Change prediction model api link and database's info value in .env
-   Add the required environment variables

4.  Use sequelize to create table for database

```
npx sequelize-cli db:migrate
```

4.  Use sequelize to create table for database

```
npx sequelize-cli db:migrate
```

5.  Use sequelize to create table's data for database

```
npx sequelize-cli db:seed:all
```
