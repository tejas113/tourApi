const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection established successfully');
});


//console.log(process.env);

const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log("app is running");
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! �� Shutting down... ');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);  //exit the process with an error code
    })
})

process.on('uncaugthException', err => {
    console.log('UNCAUGHT EXCEPTION! �� Shutting down... ');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);  //exit the process with an error code
    })
})

