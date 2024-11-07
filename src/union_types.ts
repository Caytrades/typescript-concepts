// Union types are used when a value can be more than a single type
// Using the "|" we are saying our parameter is a string or number 

function statusCode(code: string | number) {
    console.log(`Status Codes is ${code}`)
}

statusCode(200)
statusCode(404)