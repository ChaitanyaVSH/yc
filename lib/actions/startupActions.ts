"use server"
import { auth } from "@/auth";
import "server-only"
import slugify from "slugify";
import { parseServerActionResponse } from "../utils";
import { writeClient } from "@/sanity/lib/writeClient";

export const createStartup = async (state: any, formData: FormData, pitch: string) => {
    const session = await auth();
    if(!session) {
        return parseServerActionResponse({
            status: "ERROR",
            error: "You must be logged in to create a startup."
        })
    }


    const { title, description, category, link } = Object.fromEntries(
        Array.from(formData).filter(([key]) => key !== "pitch")
      );

    const slug = slugify(title as string, {lower: true, strict: true})

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            pitch,
            slug: {
                _type: slug,
                current: slug
            },
            author: {
                _type: "reference",
                _ref: session?.author_id
            }
        };

        const result = await writeClient.create({
            _type: "startup",
            ...startup
        });

        return parseServerActionResponse({
            ...result,
            error: "",
            status: "SUCCESS"
        });

    } catch (error) {
        console.log(error);
        return parseServerActionResponse({
            status: "ERROR",
            error: JSON.stringify(error)
        })
    }
};
