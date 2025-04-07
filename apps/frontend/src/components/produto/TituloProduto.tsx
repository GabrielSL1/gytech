import { Produto } from "@gyntech/core";

export interface TituloProdutoProps {
    produto: Produto;
}
export default function TituloProduto({ produto }: TituloProdutoProps) {
    return (
        <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold">{produto.nome}</div>
            <div className="text-xl font-semibold">{produto.marca}</div>
            <div className="text-gray-700">{produto.descricao}</div>
        </div>
    );
}
