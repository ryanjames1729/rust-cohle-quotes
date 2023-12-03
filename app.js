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

var quotes = [
    "It's all one ghetto, man. A giant gutter in outer space.",
    "I think human consciousness, is a tragic misstep in evolution. We became too self-aware, nature created an aspect of nature separate from itself, we are creatures that should not exist by natural law. We are things that labor under the illusion of having a self; an accretion of sensory, experience and feeling, programmed with total assurance that we are each somebody, when in fact everybody is nobody. Maybe the honorable thing for our species to do is deny our programming, stop reproducing, walk hand in hand into extinction, one last midnight - brothers and sisters opting out of a raw deal.",
    "If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of s***. And I’d like to get as many of them out in the open as possible. You gotta get together and tell yourself stories that violate every law of the universe just to get through the goddamn day? What’s that say about your reality?",
    "Back then, the visions...most of the time I was convinced that I'd lost it. But there were other times, I thought I was main-lining the secret truth of the universe.",
    "The world needs bad men. We keep the other bad men from the door.",
    "This place is like somebody's memory of a town, and the memory is fading. It's like there was never anything here but jungle.",
    "Death created time to grow the things that it would kill.",
    "To realize that all your life—you know, all your love, all your hate, all your memory, all your pain—it was all the same thing. It was all the same dream. A dream that you had inside a locked room. A dream about being a person. And like a lot of dreams there's a monster at the end of it.",
    "Fuck, I don't want to know anything anymore. This is a world where nothing is solved. Someone once told me, 'Time is a flat circle.' Everything we've ever done or will do, we're gonna do over and over and over again. And that little boy and that little girl, they're gonna be in that room again and again and again forever.",
    "My life's been a circle of violence and degradation long as I can remember. I'm ready to tie it off.",
    "Well, once there was only dark. If you ask me, the light's winning.",
    "It’s Thursday and it’s past noon. Thursday is one of my days off. On my days off I start drinking at noon. You don’t get to interrupt that.",
    "This is a world where nothing is solved. You know, someone once told me time is a flat circle. Everything we’ve ever done or will do, we’re gonna do over and over and over again.",
    "People incapable of guilt, usually do have a good time.",
    "…to realize that all your life, all your love, all your hate, all your memory, all your pain, it was all the same thing. It was all the same dream you had inside a locked room- a dream about being a person. And like a lot of dreams, there’s a monster at the end of it.",
    "I know who I am. And after all these years, there’s a victory in that.",
    "People out here, it’s like they don’t even know the outside world exists. Might as well be living on the fucking moon.",
    "I think the honorable thing for our species to do is deny our programming. Stop reproducing. Walk hand in hand into extinction, one last midnight. Brothers and sisters opting out of a raw deal.",
    "There is no such thing as forgiveness. People just have short memories.",
    "I see a propensity for obesity. Poverty. A yearn for fairy tales. Folks puttin’ what few bucks they do have into a little wicker basket being passed around. I think it’s safe to say nobody here’s gonna be splitting the atom, Marty.",
    "I contemplate the moment in the garden, the idea of allowing your own crucifixion.",
    "Look, as sentient meat, however illusory our identities are, we craft those identities by making value judgements. Everybody judges all the time. Now, you got a problem with that, you’re living wrong.",
    "In eternity, where there is no time, nothing can grow. Nothing can become. Nothing changes. So death created time to grow the things that it would kill and you are reborn but into the same life that you’ve always born into. I mean, how many times have we had this conversation, detectives? Well, who knows? When you can’t remember your lives, you can’t change your lives, and that is the terrible and secret fate of all life. You’re trapped, by that nightmare you keep waking up into.",
    "Life’s barely long enough to get good at one thing. So be careful what you get good at.",
    "I don’t sleep. I just dream.",
    "Well, if the common good has got to make up fairy tales, then it’s not good for anybody."
]

app.get("/new-quote", (request, response) => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const quote = {
        "Rust says": newQuote
    };

    response.send(quote);
})

