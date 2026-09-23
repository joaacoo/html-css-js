import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../schemas/user";
import Input from "./Input";
import Select from "./Select";


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
                <Input type="email" name="correo">Correo</Input>
                <Select></Select>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                <button type="button" className=" ms-3 btn btn-secondary">
                    Eliminar
                </button>
                </form>
        </FormProvider>  
    );
}

export default Formulario;