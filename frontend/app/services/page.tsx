"use client";

import { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Input, Textarea } from "@nextui-org/react";
import { lawyers } from "../dummy_data/lawyers";

export default function Services() {
  const [filter, setFilter] = useState<string>("All");
  const [reviews, setReviews] = useState<{ [key: number]: string }>({});
  const [contacts, setContacts] = useState<number[]>([]);

  // Get unique specializations including "All"
  const specializations = ["All", ...Array.from(new Set(lawyers.map((lawyer) => lawyer.specialization)))];

  // 🛠️ FIX: Correct Filtering Logic
  const filteredLawyers = filter === "All" ? lawyers : lawyers.filter((lawyer) => lawyer.specialization === filter);

  return (
    <div className="min-h-screen p-8 space-y-10">
      {/* 🔹 Specialization Navbar */}
      <div className="flex flex-wrap gap-3 justify-center bg-gray-100 p-4 rounded-lg shadow-md">
        {specializations.map((spec) => (
          <Button
            key={spec}
            variant={filter === spec ? "solid" : "light"}
            color={filter === spec ? "primary" : "default"}
            className="px-4 py-2 rounded-lg"
            onClick={() => setFilter(spec)}
          >
            {spec}
          </Button>
        ))}
      </div>

      {/* 🔹 Lawyer Profiles */}
      {filteredLawyers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLawyers.map((lawyer) => (
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
                    onChange={(e) => setReviews((prev) => ({ ...prev, [lawyer.id]: e.target.value }))}
                    className="w-full"
                  />
                </div>
              </CardBody>
              <CardFooter className="flex justify-between">
                {/* 🔹 Add to Contacts */}
                <Button
                  color="primary"
                  onClick={() => setContacts((prev) => (prev.includes(lawyer.id) ? prev : [...prev, lawyer.id]))}
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
      ) : (
        <p className="text-center text-gray-500">No lawyers available for this specialization.</p>
      )}
    </div>
  );
}
