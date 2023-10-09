import { defineStore } from 'pinia'

export const useCrmStore = defineStore('crm', {
    state: () => {
        return {
            user:{},
            tabs:[
                {
                    id: 0,
                    title: "Главная",
                    name: "home",
                    link: "/home",
                    subtabs: [],
                    components: [
                        {
                            id: 0,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 1,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        },
                        {
                            id: 1,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 1,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        },
                        {
                            id: 2,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 1,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        },
                        {
                            id: 3,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 1,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        },
                        {
                            id: 4,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 2,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        },
                        {
                            id: 5,
                            title: "Тестовый компонент",
                            type: 1,
                            size: 3,
                            data: "http://api.badbull.com/requests",
                            subcomponents: []
                        }
                    ]
                },
                {
                    id: 0,
                    title: "Главная",
                    name: "asd",
                    link: "/asd",
                    subtabs: [
                        {
                            id: 0,
                            title: "Главная",
                            name: "home",
                            link: "/home",
                            subtabs: [],
                            components:[
                                {
                                    id: 5,
                                    title: "Тестовый компонент",
                                    type: 0,
                                    size: 0,
                                    data: "http://api.badbull.com/requests",
                                    subcomponents: []
                                }
                            ]
                        }
                    ],
                    components:[]
                }
            ],
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setLoaded() {
            this.isLoaded = false
        },
        unsetLoaded(){
            this.isLoaded = true
        },
        translit(str){
            let newWord = '';
            [...str].forEach(word => {
                switch (word) {
                    case 'а':
                        newWord += 'a' 
                        break;
                    case 'б':
                        newWord += 'b' 
                        break;
                    case 'в':
                        newWord += 'v' 
                        break;
                    case 'г':
                        newWord += 'g' 
                        break;
                    case 'д':
                        newWord += 'd' 
                        break;
                    case 'е':
                        newWord += 'e' 
                        break;
                    case 'ё':
                        newWord += 'yo' 
                        break;
                    case 'ж':
                        newWord += 'zh' 
                        break;
                    case 'з':
                        newWord += 'z' 
                        break;
                    case 'и':
                        newWord += 'i' 
                        break;
                    case 'й':
                        newWord += 'j' 
                        break;
                    case 'к':
                        newWord += 'k' 
                        break;
                    case 'л':
                        newWord += 'l' 
                        break;
                    case 'м':
                        newWord += 'm' 
                        break;
                    case 'н':
                        newWord += 'n' 
                        break;
                    case 'о':
                        newWord += 'o' 
                        break;
                    case 'п':
                        newWord += 'p' 
                        break;
                    case 'р':
                        newWord += 'r' 
                        break;
                    case 'с':
                        newWord += 's' 
                        break;
                    case 'т':
                        newWord += 't' 
                        break;
                    case 'у':
                        newWord += 'u' 
                        break;
                    case 'ф':
                        newWord += 'f' 
                        break;
                    case 'х':
                        newWord += 'h' 
                        break;
                    case 'ц':
                        newWord += 'ts' 
                        break;
                    case 'ч':
                        newWord += 'ch' 
                        break;
                    case 'ш':
                        newWord += 'sh' 
                        break;
                    case 'щ':
                        newWord += 'sh' 
                        break;
                    case 'ъ':
                        newWord += '' 
                        break;
                    case 'ы':
                        newWord += 'i' 
                        break;
                    case 'ь':
                        newWord += '' 
                        break;
                    case 'э':
                        newWord += 'e' 
                        break;
                    case 'ю':
                        newWord += 'yu' 
                        break;
                    case 'я':
                        newWord += 'ya' 
                        break;
                    case 'А':
                        newWord += 'a' 
                        break;
                    case 'Б':
                        newWord += 'b' 
                        break;
                    case 'В':
                        newWord += 'v' 
                        break;
                    case 'Г':
                        newWord += 'g' 
                        break;
                    case 'Д':
                        newWord += 'd' 
                        break;
                    case 'Е':
                        newWord += 'e' 
                        break;
                    case 'Ё':
                        newWord += 'yo' 
                        break;
                    case 'Ж':
                        newWord += 'zh' 
                        break;
                    case 'З':
                        newWord += 'z' 
                        break;
                    case 'И':
                        newWord += 'i' 
                        break;
                    case 'Й':
                        newWord += 'j' 
                        break;
                    case 'К':
                        newWord += 'k' 
                        break;
                    case 'Л':
                        newWord += 'l' 
                        break;
                    case 'М':
                        newWord += 'm' 
                        break;
                    case 'Н':
                        newWord += 'n' 
                        break;
                    case 'О':
                        newWord += 'o' 
                        break;
                    case 'П':
                        newWord += 'p' 
                        break;
                    case 'Р':
                        newWord += 'r' 
                        break;
                    case 'С':
                        newWord += 's' 
                        break;
                    case 'Т':
                        newWord += 't' 
                        break;
                    case 'У':
                        newWord += 'u' 
                        break;
                    case 'Ф':
                        newWord += 'f' 
                        break;
                    case 'Х':
                        newWord += 'h' 
                        break;
                    case 'Ц':
                        newWord += 'ts' 
                        break;
                    case 'Ч':
                        newWord += 'ch' 
                        break;
                    case 'Ш':
                        newWord += 'sh' 
                        break;
                    case 'Щ':
                        newWord += 'sh' 
                        break;
                    case 'Ъ':
                        newWord += '' 
                        break;
                    case 'Ы':
                        newWord += 'i' 
                        break;
                    case 'Ь':
                        newWord += '' 
                        break;
                    case 'Э':
                        newWord += 'e' 
                        break;
                    case 'Ю':
                        newWord += 'yu' 
                        break;
                    case 'Я':
                        newWord += 'ya' 
                        break;
                    default:
                        newWord += word
                        break;
                }
            });
            return newWord
        }
    },
})

