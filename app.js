const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Listening on PORT: ${port}`);
});

app.get("/", (request, response) => {
    response.status(200).json({
        message: "Waiting on Requests"
    });
});

// app.get("/status", (request, response) => {
//     const status = {
//         "Status": "Running"
//     };

//     response.send(status);
// });

app.get("/new-quote", (request, response) => {
    const quote = {
        "Rust says": "It's all one ghetto, man. A giant gutter in outer space."
    };

    response.send(quote);
})

