import Cabecalho from "@/components/template/Cabecalho";
import Pagina from "@/components/template/Pagina";

export default function Layout(props:any) {
    return <Pagina>{props.children}</Pagina>;
}