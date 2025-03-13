"use client";

import { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Textarea } from "@nextui-org/react";
import { lawyers } from "../dummy_data/lawyers";

export default function Services() {
  const [reviews, setReviews] = useState<{ [key: number]: string }>({});
  const [contacts, setContacts] = useState<number[]>([]);

  // Get unique specializations
  const specializations = Array.from(new Set(lawyers.map((lawyer) => lawyer.specialization)));

  return (
    <div className="min-h-screen p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-6">Our Legal Services</h1>

      {specializations.map((specialization) => (
        <section key={specialization} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2">{specialization}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers
              .filter((lawyer) => lawyer.specialization === specialization)
              .map((lawyer) => (
                <Card key={lawyer.id} className="shadow-lg">
                  <CardHeader>
                    <img src={lawyer.image} alt={lawyer.name} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h2 className="text-xl font-bold">{lawyer.name}</h2>
                      <p className="text-gray-600">{lawyer.specialization}</p>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-500">Experienced in {lawyer.specialization}. Contact for legal help.</p>

                    {/* 🔹 Review Section */}
                    <div className="mt-4">
                      <Textarea
                        placeholder="Write a review..."
                        value={reviews[lawyer.id] || ""}
                        onChange={(e) =>
                          setReviews((prev) => ({ ...prev, [lawyer.id]: e.target.value }))
                        }
                        className="w-full"
                      />
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between">
                    {/* 🔹 Add to Contacts */}
                    <Button
                      color="primary"
                      onClick={() =>
                        setContacts((prev) =>
                          prev.includes(lawyer.id) ? prev : [...prev, lawyer.id]
                        )
                      }
                    >
                      {contacts.includes(lawyer.id) ? "Added to Contacts" : "Add to Contacts"}
                    </Button>

                    {/* 🔹 Report Button */}
                    <Button color="danger" variant="light">
                      Report
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
