import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../schemas/user";
import Input from "./Input";

function Formulario() {
    
    const methods = useForm<userForm>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: userForm) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name="name">Nombre</Input>
                <Input name="lastName">Apellido</Input>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                </form>
        </FormProvider>  
    );
}

export default Formulario;