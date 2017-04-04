/**
 * Convert CamelCasedString to camel-cased-string
 */
export function toDashed(string): string {
    return string.replace(/([A-Z])/, result => `-${result[ 0 ].toLowerCase()}`)
}
