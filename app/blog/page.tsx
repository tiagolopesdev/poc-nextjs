import Link from 'next/link'

export default function Blog() {
    return (
        <div>
            <h1>Isso é um post do blog!!!</h1>    
                 
            <Link href="/">
               Voltar para a home
            </Link>
            
        </div>
        
    )
}