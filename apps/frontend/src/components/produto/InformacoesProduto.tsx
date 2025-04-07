import { Produto } from '@gyntech/core'
import Image from 'next/image'  

export interface InformacoesProdutoProps {
    produto: Produto
}
export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return(
         <div className="flex items-center bg-gray rounded-xl p-5">
        <div className='flex-1 relative flex justify-center items-center h-96'>
             <Image
                src={produto.imagem}
                fill
                className="object-cover p-7"
                alt="Imagem do produto" 
            />
        

         </div> 
         </div>
    )
}