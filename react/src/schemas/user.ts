import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ error: "Nombres es requerido" })
    .min(3, { message: "Longitud minima 3" }),

  lastName: z
    .string({ error: "Apellido requerido" })
    .min(3, { message: "Longitud minima 3" }),
});