const express = require('express');
const pino = require('express-pino-logger')();
const quizlist = require(".././helpers/quiz.json")
const port = process.env.serverport || 8080;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/', (req, res) => {
    const id = req.query.id || '1';
    res.setHeader('Content-Type', 'application/json');
    res.json(quizlist[id])
});

app.listen(port, () => console.log(`APIサーバーの構築完了\nlocalhost:${port}/api/`));
