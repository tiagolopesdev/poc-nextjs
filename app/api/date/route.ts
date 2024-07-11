
export async function GET() {
    
    console.log('passando pelo backend')
    return Response.json({ dateString : new Date().toString() })

}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));