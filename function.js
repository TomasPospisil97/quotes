let button = document.getElementById('button');
let output = document.getElementById('output');
let quotes = 
    [
        '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
        '"The way to get started is to quit talking and begin doing." -Walt Disney',
        '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma, which is living with the results of other peoples thinking." -Steve Jobs',
        '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
        '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough." -Oprah Winfrey',
        '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success." -James Cameron',
        '"You may say Im a dreamer, but Im not the only one. I hope someday you will join us. And the world will live as one." -John Lennon',
        '"The only thing we have to fear is fear itself." -Franklin D. Roosevelt',
        '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.',
        '"Do one thing every day that scares you." -Eleanor Roosevelt',
        '"Well done is better than well said." -Benjamin Franklin',
        '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
        '"It is during our darkest moments that we must focus to see the light." -Aristotle',
        '"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
        '"Be yourself; everyone else is already taken." -Oscar Wilde',
        '"In the end, its not the years in your life that count. Its the life in your years." -Abraham Lincoln',
        '"Never let the fear of striking out keep you from playing the game." -Babe Ruth',
        '"In this life we cannot do great things. We can only do small things with great love." -Mother Teresa',
        '"Many of lifes failures are people who did not realize how close they were to success when they gave up." -Thomas A. Edison',
        '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
        '"I think that was enough of quotes for today." -The one who devoloped this',
    ];

button.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
});