import { useState } from "react";
import { Text,Button,View } from "react-native";

export default function app(){
    const[contador,setContador]=useState(0)
    const[usuario,setUsuario]=useState<Usuario>({
        id:1,
        nome:"claudin",
        email:"claudinrolabut@gmail.com"
    })

    type Usuario ={
        id: number
        nome: string
        email: string
    }
    function saudacao():void{
        console.log("olá")
    }

    function somar(a:number,b:number):number{
        return a+b
    }
    
    return(
        <View>
            <Text>voce clicou {contador} vezes</Text>
            <Button title="Clique aqui" onPress={()=>setContador(contador + 1)}/>


        <Button
        title="atualizar user"
        onPress={()=>
        setUsuario({
        id:2,
        nome:"rogerin",
        email:"rogerin@gmail.com"
        })
    }/>
    <Text>{usuario.id}{usuario.nome}{usuario.email}</Text>
    </View>



    )

}

