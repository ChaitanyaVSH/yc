"use client"

import React, { useState, useActionState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { z } from "zod";
import { formSchema } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createStartup } from "@/lib/actions/startupActions";

const StartupForm = () => {

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const { toast } = useToast();
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch
            }

            await formSchema.parseAsync(formValues);

            const result = await createStartup(prevState, formData, pitch);
            console.log(result);
            if(result.status == "SUCCESS") {
                toast({
                    title: "Success",
                    description: "Your startup has been submitted successfully.",
                    variant: "default"
                });
                router.push(`/startup/${result.id}`)
            }
            return result;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                console.log("fieldErrors", fieldErrors);
                setErrors(fieldErrors as unknown as Record<string, string>);
                toast({
                    title: "Validation error.",
                    description: "Please check the form fields.",
                    variant: "destructive",
                });
                return {
                    ...prevState,
                    error: "Validation error.",
                    status: "ERROR"
                }
            }

            toast({
                title: "Unexpected error.",
                description: "Please check the form fields.",
                variant: "destructive"
            });

            return {
                ...prevState,
                error: "Something went wrong.",
                status: "ERROR"
            }

        }
    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL"
    });

    return (
        <form action={formAction} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">Title</label>
                <Input
                    id="title"
                    name="title"
                    className="startup-form_input"
                    required
                    placeholder="Startup title"
                />
                {errors.title && <p className="startup-form_error">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="startup-form_label">Description</label>
                <Textarea
                    id="description"
                    name="description"
                    className="startup-form_textarea"
                    required
                    placeholder="Startup description"
                />
                {errors.description && <p className="startup-form_error">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="category" className="startup-form_label">Category</label>
                <Input
                    id="category"
                    name="category"
                    className="startup-form_input"
                    required
                    placeholder="Startup category [TECH, AI, HEALTH...]"
                />
                {errors.category && <p className="startup-form_error">{errors.category}</p>}
            </div>

            <div>
                <label htmlFor="link" className="startup-form_label">Image link</label>
                <Input
                    id="link"
                    name="link"
                    className="startup-form_input"
                    required
                    placeholder="Startup image url"
                />
                {errors.link && <p className="startup-form_error">{errors.link}</p>}
            </div>

            <div>
                <label htmlFor="pitch" className="startup-form_label">Pitch</label>
                <MDEditor
                    id="pitch"
                    preview="edit"
                    height={300}
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden"
                    }}
                    textareaProps={{
                        placeholder: "Describe your startup."
                    }}
                />
                {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
            </div>

            <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
                {isPending ? "Submitting your idea": "Submit Your Pitch"}
                <Send className="size-6 ml-2"/>
            </Button>
        </form>
    )
}

export default StartupForm;
