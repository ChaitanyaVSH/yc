"use client"

import React, { useState, useActionState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const StartupForm = () => {

    const _isPending = false;
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const [state, dispatch, isPending] = useActionState(() => {}, {})
    console.log(state);

    return (
        <form action={async () => {
            console.log("Form submitted");
        }} className="startup-form">
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
