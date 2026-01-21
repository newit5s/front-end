"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";

const testimonials = [
    {
        content: "Outstanding service quality and reliability. SeaAir Global has been instrumental in our logistics operations.",
        author: "Representative",
        role: "MM Packaging",
        rating: 5,
    },
    {
        content: "Professional team with excellent problem-solving skills for our complex medical equipment shipments.",
        author: "Manager",
        role: "TMT Medical",
        rating: 5,
    },
    {
        content: "A trusted partner for our international supply chain. Their attention to detail is commendable.",
        author: "Director",
        role: "VenusConcept",
        rating: 5,
    },
    {
        content: "Efficient handling of our specialized cargo needs. Highly recommended for project cargo.",
        author: "Logistics Lead",
        role: "Sumitomo Drive Technologies",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <Section background="gray" className="py-20" id="testimonials">
            <Container>
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 mb-4">
                        Client Stories
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl mb-4">
                        Trusted by Businesses Worldwide
                    </h2>
                    <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg">
                        Hear what our partners have to say about their experience shipping with SeaAir Global.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}
                            className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-6 bg-white"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                        >
                            <CardContent className="pt-6 relative">
                                <Quote className="h-8 w-8 text-primary-200 absolute top-6 left-6 -z-10" />
                                <div className="mb-4 flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </CardContent>
                            <CardFooter className="flex items-center gap-4 pt-4 border-t border-gray-50 bg-gray-50/50 rounded-b-xl">
                                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
