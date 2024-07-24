import { z } from "zod";

export const blogSchema = z.object({
  telegram: z.string().min(2).max(50),
  email: z.string().email(),
});

export const telegramFormSchema = z.object({
  wallet: z.string().min(7).max(20),
  transection: z.string().min(2).max(50),
});
