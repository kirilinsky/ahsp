// Dictionaries must stay JSON-serializable: they cross the server/client
// boundary as props, so templates are strings with {placeholders}.
export function format(template, vars = {}) {
  if (typeof template !== "string") return "";
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match
  );
}
