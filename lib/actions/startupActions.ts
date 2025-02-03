"use server"
import { auth } from "@/auth";
import "server-only"

export const createStartup = async (state: any, formData: FormData, pitch: string) => {
    const session = await auth();
    if(!session) {
        return {
            status: "ERROR",
            error: "You must be logged in to create a startup."
        }
    }
    return {
        status: "SUCCESS",
        id: "test"
    }
};
