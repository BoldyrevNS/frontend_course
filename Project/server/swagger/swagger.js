module.exports ={

    openapi: "3.0.0",
    info: {

        title:  "Swagger by Куценко",
        description: "Лабораторная работа 5",
        version: "1.0.0",

    },
    servers:[
        {
            url:'http://localhost:3001'
        }
    ],
    tags: [
        {
            name: "Авторизация", // name of a tag
        },
        {
            name: "Сервера", // name of a tag
        },
    ],

    paths:{

        '/registration':{
            post: {
                tags: ["Авторизация"], // operation's tag.
                description: "Регистрация", // operation's desc.
                operationId: "registration", // unique operation id.
                parameters: [{
                    name: "User", // name of the param
                    in: "path", // location of the param
                    schema: {
                        $ref: "#/components/schemas/registrationUser", // data model of the param
                    },
                    required: true, // Mandatory param
                },], // expected params.
                // expected responses
                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User", // User model
                                },
                            },
                        },
                    },
                },
            },
        },
        '/login':{
            post: {
                tags: ["Авторизация"], // operation's tag.
                description: "Авторизация", // operation's desc.
                operationId: "login", // unique operation id.
                parameters: [{
                    name: "User", // name of the param
                    in: "body", // location of the param
                    schema: {
                        $ref: "#/components/schemas/loginUser", // data model of the param
                    },
                    required: true, // Mandatory param
                },], // expected params.
                // expected responses
                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User", // User model
                                },
                            },
                        },
                    },
                },
            },
        },
        '/me':{
            get: {
                tags: ["Авторизация"], // operation's tag.
                description: "Аккаунт", // operation's desc.
                operationId: "me", // unique operation id.
                // expected responses
                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User", // User model
                                },
                            },
                        },
                    },
                },
            },
        },


        '/discover':{
            get: {
                tags: ["Сервера"], // operation's tag.
                description: "Сервера", // operation's desc.
                operationId: "discover", // unique operation id.
                // expected responses
                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Server", // User model
                                },
                            },
                        },
                    },
                },
            },
        },

        '/discover/search':{
            get: {
                tags: ["Сервера"], // operation's tag.
                description: "Поиск сервера ", // operation's desc.
                operationId: "discover-search", // unique operation id.
                // expected responses
                parameters: [{
                    name: "name", // name of the param
                    in: "path", // location of the param
                    required: false, // Mandatory param
                },], // expected params.

                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Server", // User model
                                },
                            },
                        },
                    },
                },
            },
        },

        '/discover/filter':{
            get: {
                tags: ["Сервера"], // operation's tag.
                description: "Фильтрация сервера ", // operation's desc.
                operationId: "discover-filter", // unique operation id.
                // expected responses
                parameters: [{
                    name: "type", // name of the param
                    in: "path", // location of the param
                    required: false, // Mandatory param
                },], // expected params.

                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Server", // User model
                                },
                            },
                        },
                    },
                },
            },
        },
        '/disсover':{
            put: {
                tags: ["Сервера"], // operation's tag.
                description: "Добавление удаление пользователя с сервера", // operation's desc.
                operationId: "discover-put", // unique operation id.
                // expected responses
                parameters: [{
                    name: "serverId", // name of the param
                    in: "papams", // location of the param
                    required: false, // Mandatory param
                },], // expected params.

                responses: {
                    // response code
                    200: {
                        description: "success", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Server", // User model
                                },
                            },
                        },
                    },
                },
            },
        },
    },

    components: {
        schemas: {

            // user model
            User: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "integer", // data-type
                        description: "User identification number", // desc
                        example: "1", // example of an id
                    },
                    name: {
                        type: "string", // data type
                        description: "name", // desc
                        example: "Maria", // example of a completed value
                    },
                    birth: {
                        type: "string", // data type
                        description: "birth", // desc
                        example: "10-10-1010", // example of a completed value
                    },
                    email: {
                        type: "string", // data-type
                        description: "email ", // desc
                        example: "admin@mail.ru", // example of a title
                    },
                    token: {
                        type: "string", // data type
                        description: "token", // desc
                        example: "djkasdh189he11n2duhq8d9h1heio1ndug", // example of a completed value
                    },
                },
            },

            // user model
            registrationUser: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "integer", // data-type
                        description: "User identification number", // desc
                        example: "1", // example of an id
                    },
                    name: {
                        type: "string", // data type
                        description: "name", // desc
                        example: "Maria", // example of a completed value
                    },
                    birth: {
                        type: "string", // data type
                        description: "birth", // desc
                        example: "10-10-1010", // example of a completed value
                    },
                    email: {
                        type: "string", // data-type
                        description: "email ", // desc
                        example: "admin@mail.ru", // example of a title
                    },
                    password: {
                        type: "string", // data type
                        description: "password", // desc
                        example: "12345!", // example of a completed value
                    },
                },
            },

            // user model
            loginUser: {
                type: "object", // data type
                properties: {

                    email: {
                        type: "string", // data-type
                        description: "email ", // desc
                        example: "admin@mail.ru", // example of a title
                    },
                    password: {
                        type: "string", // data type
                        description: "password", // desc
                        example: "12345!", // example of a completed value
                    },
                },
            },

            // server model
            Server: {
                type: "object", //data type
                properties: {
                    id: {
                        type: "integer", // data-type
                        description: "server identification number", // desc
                        example: "1", // example of an id
                    },
                    name: {
                        type: "string", // data type
                        description: "name", // desc
                        example: "Valorant", // example of a completed value
                    },
                    description: {
                        type: "string", // data type
                        description: "description ", // desc
                        example: "description", // example of a completed value
                    },
                    preview: {
                        type: "string", // data type
                        description: "preview pic ", // desc
                    },
                    icon: {
                        type: "string", // data type
                        description: "icon pic ", // desc
                    },
                    countOfUsers: {
                        type: "integer", // data type
                        description: "countOfUsers  ", // desc
                    },
                },

            },

            // server model
            Type: {
                type: "object", //data type
                properties: {
                    id: {
                        type: "integer", // data-type
                        description: "type identification number", // desc
                        example: "1", // example of an id
                    },
                    name: {
                        type: "string", // data type
                        description: "name", // desc
                        example: "Valorant", // example of a completed value
                    },

                    icon: {
                        type: "string", // data type
                        description: "icon pic ", // desc
                    },
                },

            },
        },
    },

}