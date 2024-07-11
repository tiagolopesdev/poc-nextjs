
export async function GET() {
    
    console.log('passando pelo backend')
    return Response.json({ dateString : new Date().toString() })

}

// const delay = () => new Promise(resolve => setTimeout(resolve, ms));