'use client'
import { Produto, produtos } from '@gyntech/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useParams } from 'next/navigation'
import TituloProduto from "@/components/produto/TituloProduto";
import { use, useEffect, useState } from 'react'

export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    const params = useParams<{ id: string }>();
    useEffect(() => {
        obterProdutoPorId(Number(params.id)).then(setProduto)
    }, [params.id]) 

    
    return produto? 
       <>
           <div className="flex flex-col gap-20"></div>
           <div>{produto?.nome}</div>
           <TituloProduto produto={produto} />
       </>
     : <div>Produto não encontrado</div>
}