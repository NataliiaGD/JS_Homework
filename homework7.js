const text = "Wonderful Happiness Joyful Task Apple Longword"
const pattern = /\b[^Aa]{6,}\b/g

console.log(text.match(pattern))
