1. npm install
2. npm start

## Optimistic UI

К хранению временных сущностей можно подходить с двух сторон.
Делать так чтобы они мимикрировали под постоянные штуки и где нибудь отдельно сохранять то, 
что они не такие. В данном случае можно было бы хранить айдишники временных постов в отдельном массиве.
Такой подход позволяте уменьшить количество кода, так как посты всегда обрабатываются одинаково, и только в местах 
где важно временный пост или постоянный мы явно обрабатываем их по разному.
Так же это более красиво с точки зрения данных - они постоянны (нет прыганьия между id и tempId), вроде как нормализованы. 

Второй подход - явно отличать временные посты от постоянных. Например, в данном случае вместо нормального id будет tempId.
Это потребует во всех местах явно обрабатывать tempId.
Однако данный подход более безопасен так как гарантирует что с временным постом не случится ничего что могло бы сломать приложение
например запрос комментов для несуществущего еще поста и тд.

Первый способ походит для прототипов и пет-проджектов, для продакшн приложений лучше второй.
Так как он лучше с точки зрения устойчивой к ошибкам и понятной архитектуры.