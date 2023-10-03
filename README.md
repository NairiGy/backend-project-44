### Hexlet tests and linter status:
[![Actions Status](https://github.com/NairiGy/backend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NairiGy/backend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/81916557e1ba57a13152/maintainability)](https://codeclimate.com/github/NairiGy/backend-project-44/maintainability)

[Ссылка с примером](https://asciinema.org/a/25KEDKRneBy8BorkHxBytQUIm)

### Brain Games

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.  
Игры:

1. Калькулятор. Арифметические выражения, которые необходимо вычислить.  
Пример

        brain-calc
        Welcome to the Brain Games!
        May I have your name? Sam
        Hello, Sam!
        What is the result of the expression?
        Question: 4 + 10
        Your answer: 14
        Correct!
        Question: 25 - 11
        Your answer: 14
        Correct!
        Question: 25 * 7
        Your answer: 175
        Correct!
        Congratulations, Sam!

[Демонтсрация](https://asciinema.org/a/CipHLCzyXceejdJmYh0qhEoBd)  

2. Прогрессия. Поиск пропущенных чисел в последовательности чисел.  
Пример
    
        brain-progression
        Welcome to the Brain Games!
        May I have your name? Sam
        Hello, Sam!
        What number is missing in the progression?
        Question: 5 7 9 11 13 .. 17 19 21 23
        Your answer: 15
        Correct!
        Question: 2 5 8 .. 14 17 20 23 26 29
        Your answer: 11
        Correct!
        Question: 14 19 24 29 34 39 44 49 54 ..
        Your answer: 59
        Correct!
        Congratulations, Sam!
        
[Демонтсрация](https://asciinema.org/a/2Rc2bwJETOQIHz120h2gh52pq)  

3. Определение четного числа.
Пример

        brain-even
        Welcome to the Brain Games!
        May I have your name? Sam
        Hello, Sam!
        Answer "yes" if the number is even, otherwise answer "no".
        Question: 15
        Your answer: no
        Correct!
        Question: 6
        Your answer: yes
        Correct!
        Question: 7
        Your answer: no
        Correct!
        Congratulations, Sam!
        
[Демонтсрация](https://asciinema.org/a/25KEDKRneBy8BorkHxBytQUIm)  

4. Определение наибольшего общего делителя.  
Пример  

        brain-gcd
        Welcome to the Brain Games!
        May I have your name? Sam
        Hello, Sam!
        Find the greatest common divisor of given numbers.
        Question: 25 50
        Your answer: 25
        Correct!
        Question: 100 52
        Your answer: 4
        Correct!
        Question: 3 9
        Your answer: 3
        Correct!
        Congratulations, Sam!
        
[Демонтсрация](https://asciinema.org/a/h4hfEHqa8l2gQT9h1c9jVHil4)  

5. Определение простого числа.  
Пример

        brain-prime
        Welcome to the Brain Games!
        May I have your name? Sam
        Hello, Sam!
        Answer "yes" if given number is prime. Otherwise answer "no".
        Question: 7
        Your answer: yes
        Correct!
        
[Демонтсрация](https://asciinema.org/a/azQp17yMenyjkSa1pEU05dh6t)  


### Установка

        git clone git@github.com:NairiGy/backend-project-44.git
        make install