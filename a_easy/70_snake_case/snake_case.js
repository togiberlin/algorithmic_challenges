function snakeCase(str) { 
  return str.toLowerCase().replace(/([-*\s%])+/g, "_");
}
