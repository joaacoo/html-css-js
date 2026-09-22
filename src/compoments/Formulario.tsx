import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user";

interface form {
    name: string
    lastName: string
}

function Formulario() {
    
    const {
        register,
        handleSubmit,
        formState: {errors}, 
    } = useForm<form>();

    const onSubmit = (data: form) => {
        try {
            const x = userSchema.parse(data);
            console.log(x);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>

                <input {...register("name")}
                    type="text"
                    className="form-control"
                    id="name"
                />

                {errors?.name && <p>{errors?.name?.message}</p>} 

            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                    Apellido
                </label>

                <input {...register("lastName")}
                    type="text"
                    className="form-control"
                    id="lastName"
                />
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />

                <label className="form-check-label" htmlFor="exampleCheck1">
                    Verificar
                </label>
            </div>

            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    );
}

export default Formulario;