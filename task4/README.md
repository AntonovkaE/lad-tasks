# Задача № 4
Боевой маг Евстафий сражается с лютым монстром.
Бой идет по ходам. Каждый ход компьютер (Лютый) случайно выбирает одно из доступных действий и сообщает, что он собирается делать. В ответ на это игрок (Евстафий) должен выбрать свое действие.

После происходит взаимное нанесение урона. Магическая броня блокирует магический урон, физическая броня блокирует физический урон.

После совершения действия, оно не может быть повторно выбрано в течение cooldown ходов

Бой идет до победы одного из противников.

Перед началом боя игрок выбирает сложность (начальное здоровье Евстафия)

Исходные данные:
- объект монстр,
- объект герой


#### С помощью Math комьютер выбирает рандомный ход, игрок выбирает ход с помощью консоли и библиотеки readline-sync. Каждый ход проверяется на доступность с поощью объектов состояние heroState, monsterState. После подсчета ущерба нанесенного друг другу идет проверка состояния здоровья. 
#### Действия игроков и проверки описываются отдельными функциями. Промежуточные результаты боя выводятся в консоль.