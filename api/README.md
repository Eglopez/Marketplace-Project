NPM PACKAGES
=============

Get started
* npm install
* npm start (watching)

API INDEX ROUTES
==========

### Root path: **localhost:3000/api**


### **Autentication**
* **Register** - `no required headers`

    *Method*: POST

    *relative path*: /auth/register
    
    *params*: null

    *body*: 
    ~~~
        {
            "name": `string`,
            "password": string,
            "email": string,
            "phone": string,
            "dep": number,
            "mun": number,
            "dir": string
        }
    ~~~

    *description:*
    > Registra un usuario enviando en el cuerpo de la peticion los datos necesarios para el registro, siendo el correo un registro unico. La accion no se ejecuta si el correo enviado ya esta registrado en la BD. Devuelve error `401` si surgio un error de registro.
    


* **Login** - `no required headers`

    *Method*: POST

    *relative path*: /auth/login
    
    *params*: null

    *body*: 
    ~~~
        {
            "email": string,
            "password": string
        }
    ~~~

    *description:*
    > Autentica un usuario, verificando que dicho correo ya este registrado para luego verificar la contrasena.Devuelve en un objeto los datos del usuario y el token respectivo y devuelve error con codigo `401` si la autenticacion es erronea.

### **Publications** - `headers -> Authorization: Bearer <Token>`

* **Add Publication**

    *Method*: POST

    *relative path*: /publications/new

    *params*: null

    *body*: 
        ~~~
            {
                "title": string,
                "category": number,
                "description": string,
                "price": number,
            }
        ~~~

    *description:*
    > Se crea una publicacion con los respectivos campos, para las imagenes de productos.

* **List**

    *Method*: GET

    *relative path*: /publications/list

    *params* lowerRange: number, higherRange: number

    *description:*
    > Obtiene un arreglo objetos de todas las publicaciones.

* **List per current user**

    *Method*: GET

    *relative path*: /publications/list-current-user

    *description:*
    > Obtiene un arreglo objetos de todas las publicaciones del usuario que hace la peticion.

* **List per user**

    *Method*: GET

    *relative path*: /publications/list-per-user

    *params*: id: number

    *description:*
    > Obtiene un arreglo objetos de todas las publicaciones de un usuario dado como parametro.


* **Get Publications By Filters**

    *Method*: GET

    *relative path*: /publications/list-filters

    *params*
            {
                category: string,
                department: string,
                municipality: string,
                lowerPrice: number,
                higherPrice: number
                dateOrder: string,
                priceOrder: string
            }

    *description:*
    > Obtiene publicaciones por filtros, siendo: categoria, departamento, municipios, precio menor, precio mayor, orden de la fecha, orden de los precios.

* **Get Publications By Filters** [NUEVO]

    *Method*: GET

    *relative path*: /publications/filtered

    *params*
            {
        text: string,
        department: string,
        municipality: string,
        category: string,
        lowerPrice: number,
        higherPrice: number,
        dateOrder: string,
        priceOrder: string,
        lowerPagination: number,
        higherPagination: number,
            }

    *description:*
    > Obtiene publicaciones por filtros, siendo: categoria, departamento, municipios, precio menor, precio mayor, orden de la fecha, orden de los precios.

* **Get Publications By title**

    *Method*: GET

    *relative path*: /publications/list-search-title

    *params*: { title: string, dateOrder: string, priceOrder: string }

    *description:*

    > Obtiene todas las publicaciones que coincidan con el titulo pasado en el cuerpo.

* **Get Publication**

    *Method*: GET

    *relative path*: /publications/

    *params*: id: number

    *description:*
    > Obtiene todo el objeto de una publicacion dado como parametro.

* **Delete Publication**

    *Method*: DELETE

    *relative path*: /publications/

    *params*: id: string

    *description:*
    > Elimina una publicacion dada como parametro.


### **Categories** - `headers -> Authorization: Bearer <Token>`

* **Create category**

    *Method*: POST

    *relative path*: /categories/new

    *body*: 
    ~~~
        {
            "name": string,
        }
    ~~~

    *description:*
    > Crear una categoria nueva con el nombre dado.

* **List**

    *Method*: GET

    *relative path*: /categories/list

    *description:*
    > Obtiene un arreglo de objetos con las categorias.

* **Remove category**

    *Method*: DELETE

    *relative path*: /categories

    *params*: id: number

    *description:*
    > Eliminar una categoria dado su id.


### **Users** - `headers -> Authorization: Bearer <Token>`

* **Users list**

    *Method*: GET

    *relative path*: /users/list

    *description:*
    > Obtener ltodos los usuarios.

* **User by id**

    *Method*: GET

    *relative path*: /users/user

    *params*: id: number

    *description:*
    > Obtiene el objeto de la informacion de un usuario acorde al id pasado como parametro.

* **Current User**

    *Method*: GET

    *relative path*: /users/current

    *description:*
    > Obtiene el objeto de la informacion del usuario que hace la peticion.

* **Remove User**

    *Method*: DELETE

    *relative path*: /users

    *params* id: number

    *description:*
    > Eliminar un usuario dado su ID.


### **Comments** - `headers -> Authorization: Bearer <Token>`

* **Add comment to publication**

    *Method*: POST

    *relative path*: /reviews/publication

    *body*: 
        ~~~
            {
                "publicationId": number,
                "comment": string,
            }
        ~~~

    *description:*

    > Agrega un comentario a una publicacion.

* **Add comment to user**

    *Method*: POST

    *relative path*: /reviews/user

    *body*: 
        ~~~
            {
                "userId": number,
                "qualification": number,
                "comment": string,
            }
        ~~~

    *description:*

    > Agrega un comentario a un usuario.

* **List User comments**

    *Method*: GET

    *relative path*: /reviews/list-user

    *params*: id: number

    *description:*

    > Obtiene los comentarios realizados al usuario dado como parametro.

* **List Publication comments**

    *Method*: GET

    *relative path*: /reviews/list-publication

    *params*: id: number

    *description:*

    > Obtiene los comentarios realizados a la publicacion dado como parametro.

* **User qualification**

    *Method*: GET

    *relative path*: /reviews/user-qualification

    *params*: id: number

    *description:*

    > Obtiene la calificacion promedio del usuario dado como parametro.


### **Complaints** - `headers -> Authorization: Bearer <Token>`

* **Add complaint**

    *Method*: POST

    *relative path*: /complaints/new

    *body*
        ~~~
            {
                "user": string,
                "typeComplaintId",
                "comment": string,
            }
        ~~~
    
    > Crea una denuncia, mandando en el cuerpo el usuario al que se esta denunciando, el tipo de denuncia y el comentario respectivo.

* **Add type of complaint**

    *Method*: POST

    *relative path*: /complaints/new-type

    *body*
        ~~~
            {
                "type": string,
            }
        ~~~
    
    > Crea un tipo de denuncia.

* **Get types of complaint**

    *Method*: GET

    *relative path*: /complaints/list-types
    
    > Obtiene los tipos de denuncia creados.

* **Get complaints**

    *Method*: GET

    *relative path*: /complaints/list
    
    > Obtiene las denuncias realizadas.

* **Action to complaint**

    *Method*: PUT

    *relative path*: /complaints/action-complaint

    *body*
        ~~
            {
                userId: number,
                action: string
            }
        ~~
    
    > Realiza una accion sobre una denuncia.


### **Wish List** - `headers -> Authorization: Bearer <Token>`

* **Add to Wish List**

    *Method*: POST

    *relative path*: /wish-list/new

    *body*
        ~~~
            {
                "publicationId": string,
            }
        ~~~
    
    > Agrega una publicacion dado a la lista de deseos.

* **Get User Wish List**

    *Method*: GET

    *relative path*: /wish-list/list
    
    > Obtiene la lista de deseos del usuario que hace la peticion.


### **Subscriptions** - `headers -> Authorization: Bearer <Token>`

* **Add subscription**

    *Method*: POST

    *relative path*: /subscriptions/new

    *body*
    ~~~
        {
            categoryId: string
        }
    ~~~
    
    > Realiza una subscripcion del usuario que hace la peticion hacia la categoria dada.

* **Get subscriptions**

    *Method*: GET

    *relative path*: /subscriptions/list
    
    > Obtiene las subscripciones realizadas por el usuario.


### **Config** - `headers -> Authorization: Bearer <Token>`

* **set time announcement and service**

    *Method*: PUT

    *relative path*: /config/set-time-config

    *body*
        ~~
            {
                announcementTime: number,
                serviceTime: number
            }
        ~~
    
    > Establece el tiempo de los anuncios y de los servicios.

* **get config**

    *Method*: GET

    *relative path*: /config/data
    
    > Obtiene el tiempo de los anuncios y de los servicios.


### **Statistics** - `headers -> Authorization: Bearer <Token>`

* **Data**

    *Method*: GET

    *relative path*: /statistics/data
    
    > Obtener datos estadisticos.

* **Get publications by categories**

    *Method*: GET

    *relative path*: /statistics/count
    
    > Obtener datos estadisticos de publicaciones por categorias.