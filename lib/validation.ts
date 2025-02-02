import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(3, {
        message: "Title should be minimum of length 3."
    }).max(100, {
        message: "Title can be maximum of length 100."
    }),
    description: z.string().min(10, {
        message: "Description should be minimum of length 10."
    }).max(1000, {
        message: "Description can be maximum length of 1000."
    }),
    category: z.string().min(3).max(20),
    link: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, {
                method: "HEAD"
            });
            console.log("res?.headers?", res?.headers);
            const contentType = res?.headers?.get("content_type");
            if(!contentType) return true;
            return contentType?.startsWith("image/");
        } catch {
            return false;
        }
    }),
    pitch: z.string().min(10, {
        message: "Pitch should be minimum of length 10."
    }).max(10000, {
        message: "Pitch can be maximum length of 10000."
    })
});
