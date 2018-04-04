# Manten Limpio tu código JavaScript usando Linters, EditorConfig y Prettier

Seguramente habrán estado en un proyecto y vieron algo como ESLint; o si estaban trabajando con TypesScript, TSlint; JSLint o incluso hasta StyleLint. Pero ¿Qué son estas herramientas? ¿Para qué sirven? ¿Cómo las puedo agregar a mi proyecto? El post de hoy, tratara de resolver todas estas preguntas, y quizás más, de la manera más clara posible, con el fin de que todos podamos sacar el mayor provecho de ellas.

## ¿Qué son los linters?
Los linters como dijimos anteriormente son una herramienta. Estas tienen como función base, analizar nuestro código, y a partir de una serie de reglas definidas por nosotros (o podemos extenderlas de otras ya pre definidas) nos va a mostrar los errores que estamos cometiendo en nuestro código.

Por ejemplo, a mi me gusta que todas las declaraciones en JavaScript, tengan su respectivo punto y coma. Pero yo, como casi cualquier programador, soy despistado, se me pasan cosas por alto, y como humano cometo errores.

Aquí es donde entra ESLint a salvar el día, al momento de iniciar el proyecto, en la configuración, agregue una regla para verificar que todas las declaraciones tuvieran su respectivo punto y coma. Como a mi me gusta.

Bueno, cada vez que a mi se me olvida poner punto y coma, nos mostrara algo similar al siguiente mensaje en consola:


## ¿Qué otros linters existen?
Anteriormente nombre algunos, quizá los más utilizado en front-end. JSLint (http://www.jslint.com/), linter para JavaScript; ESLint (https://eslint.org/), linter para JavaScript; TSLint (https://palantir.github.io/tslint/), linter para TypeScript; StyleLint (https://stylelint.io/), linter para estilos; y muchos más para estos y otros lenguajes de lenguajes de programación.

### ESLint
Configurar los linters es muy sencillo. Primero debemos instalar los paquetes necesarios. Para instalar (tener en cuenta que es una dependencia de desarrollo) eslint corremos el siguiente comando:

```bash
yarn add eslint --dev
``` 

Luego creamos un archivo en la raíz de nuestro proyecto .eslintrc y agregamos el siguiente contenido:

```
{
  "extends": ["eslint:recommended", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

Miremos en detalle cada una de las opciones:

**Extends**, nos permite extender nuestra configuración de configuraciones predeterminadas. En este caso estamos usando la configuración recomendada es *eslint*, yla configuración de prettier (por cierto también hablaremos un poco de prettier en este artículo). Para hacer uso de las extensiones, debemos instalar las dependencias de desarrollo de cada una de ellas, para nuestro caso:

```bash
yarn add eslint-config-prettier --dev
```

eslint:recommended no es necesario instalarlo, ya que este hace parte de eslint.

**Plugins**, nos permite agregar funcionalidades a eslint en este caso estamos agregando el plugin de prettier, del cuál hablaremos más adelante. Estos también los debemos instalar en nuestro proyecto.

```bash
yarn add eslint-plugin-prettier --dev
```

**parserOptions**, acá es donde definimos el soporte del lenguaje, en este caso esta configurado para soportar ES2017.

y por último, pero no menos importante, rules, acá es donde definimos nuestras reglas, o las reglas que queremos cambiar de las configuraciones de las extendimos nuestra configuración. En este caso le estamos diciendo que nos muestre errores cuando la identación no sea 2 espacios, los saltos de linea no tengan el formato unix, las comillas sean dobles, y siempre que no se use punto y coma. Para ver una lista completa de las reglas que podemos agregar a nuestro proyecto puedes visitar este hipervínculo.

#### Extra
Podemos instalar eslint en el entorno global con el siguiente comando: yarn global add eslint. Esto nos permitirá usar el CLI de eslint, en nuestro proyecto corremos eslint --init respondemos una serie de preguntas (si o no), y a partir de lo que vamos respondiendo se creara una configuración automáticamente con nuestras preferencias.


### EditorConfig
Esta herramienta nos permite mantener constantes algunas configuraciones de la edición, tanto entre nuestros editores de texto como para todos los miembros de un equipo.

Como siempre empezamos creando un archivo, en la raíz del proyecto, para la configuración, `.editorconfig` y agregamos el siguiente contenido:

```
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

Esta es la configuración que yo utilizo generalmente, en esta definimos que para todo tipo de archivos (*), el tipo de indentación sea por espacios, que el tamaño de indentación sea 2 espacios, me voy a saltar las siguientes 2 reglas pues son formatos para los espacios en blanco y caracteres, no le estamos pidiendo que borre los espacios en blanco al final de las lineas, y le estamos pidiendo que agregue una linea en blanco al final del archivo. Para ver una lista completa de las reglas y configuraciones que podemos agregar a nuestro proyecto puedes visitar este hipervínculo.

### Prettier
Es un formateador de código. Es decir, modifica o arregla nuestro código según nuestra configuración. Lo bueno de esta herramienta, es que se puede integrar con eslint y editorconfig, lo cual es muy conveniente para arreglar nuestro código y mantener la consistencia al mismo tiempo.

Nuevamente, creamos en la raíz de nuestro proyecto un archivo .prettierrc, y agregamos el siguiente contenido:

```
printWidth: 80
singleQuote: true
trailingComma: es5
bracketSpacing: true
semi: true
useTabs: false
tabWidth: 2
```

Con esta configuración prettier va a formatear nuestro código de la siguiente manera:

- Separar una linea en varias, si es más larga que 80 caracteres.
- Las comillas dobles, las cambia por comillas sencillas.
- Agrega coma al último elemento de objetos y arreglos, según la documentación de ES5.
- Agrega un espacio entre las llaves ({}) y contenido.
- Agrega punto y coma al final de todas las declaraciones.
- Convierte la indentación a 2 espacios.
