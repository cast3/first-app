module.exports = {
    tabWidth: 4, // Indentación con 4 espacios
    semi: false, // Sin punto y coma al final de las líneas
    trailingComma: 'none', // Sin coma en el último elemento de un objeto o array
    singleQuote: true, // cambiar las comillas dobles por simples,
    proseWrap: 'always',
    bracketSpacing: true, // agregar espacios al momento de importar una dependencia entre llaves
    arrowParens: 'avoid', // quitar los parentesis en una arrow function cuando se escribe un solo parametro
    printWidth: 100 // establece el ancho de las líneas
}
// Comandos para ejecutar prettier
// npx prettier --write .
// npx prettier --write "**/*.vue"
// npx prettier --write "**/*.js"
// npx prettier --write "**/*.css"
// npx prettier --write "**/*.scss"
