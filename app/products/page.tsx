import Link from "next/link";
import { use } from "react";

export default async function Products() {

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toString();

    const res = await fetch(`https://nextjs-hello-pi.vercel.app/api/date`, {cache: "no-store"});
    const data = await res.json();

    console.log('executando o fronend')

     return (


       <div>
           <h1>{dynamicDateString} (Dinamico)</h1>
            <h1>{data.dateString} (Estatico)</h1>

            <Link href="/">
                Voltar para home
            </Link>
        </div>

    
    ) 
}