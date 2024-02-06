"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Wpisz imię",
    })
    .max(25),
  surname: z.string().min(2, { message: "Wpisz nazwisko" }).max(25),
  email: z.string().email({ message: "Wpisz poprawny adres email" }),
  phone: z
    .string({ required_error: "To pole jest wymagane" })
    .regex(phoneRegex, "Niepoprawny numer"),
  text: z
    .string()
    .min(2, {
      message: "Wypełniij to pole",
    })
    .max(255),
  // file: z.any(),
});

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      surname: "",
      text: "",
      email: "",
      phone: "",
      // file: "",
    },
  });

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    // Dodaj pola formularza do FormData
    Object.keys(values).forEach((key) => {
      if (key !== "file") {
        formData.append(key, values[key]);
      }
    });

    // Dodaj plik, jeśli istnieje
    if (values.file) {
      formData.append("file", values.file[0]);
    }

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "FormData",
      },
      body: formData,
    });

    if (response.ok) {
      form.reset();
      toast({
        description: "Dziękujemy za wysłanie wiadomości!",
      });
    } else {
      toast({
        description: "Ooops! Coś poszło nie tak!",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię</FormLabel>
              <FormControl>
                <Input placeholder="Adam" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwisko</FormLabel>
              <FormControl>
                <Input placeholder="Kowalski" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="adamkowalski@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numer telefonu</FormLabel>
              <FormControl>
                <Input type="string" placeholder="+48 123 456 789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Opis sprawy</FormLabel>
              <FormControl>
                <Textarea placeholder="Potrzebuję pomocy z..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="cursor-pointer">
              <FormLabel>Załączniki (opcjonalne)</FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer"
                  type="file"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <button
          type="submit"
          aria-label="wyslij formularz"
          className={`bg-gradient-to-r from-yellow-900 to-yellow-600 text-white font-semibold py-3 px-14  rounded-md mt-8 shadow-md max-w-40`}
        >
          Wyślij
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
