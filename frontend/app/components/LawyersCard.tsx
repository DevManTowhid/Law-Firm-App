"use client";

import { Card, CardHeader, CardBody, CardFooter, Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  image: string;
}

interface LawyerCardProps {
  lawyer: Lawyer;
}

export default function LawyerCard({ lawyer }: LawyerCardProps) {
  const [review, setReview] = useState<string>("");
  const [addedToContacts, setAddedToContacts] = useState<boolean>(false);

  return (
    <Card key={lawyer.id} className="shadow-lg rounded-lg">
      <CardHeader>
        <img src={lawyer.image} alt={lawyer.name} className="w-20 h-20 rounded-full object-cover" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{lawyer.name}</h2>
          <p className="text-gray-600">{lawyer.specialization}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-gray-500">Experienced in {lawyer.specialization}. Contact for legal help.</p>

        {/* Review Section */}
        <div className="mt-4">
          <Textarea
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full"
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button color="primary" onClick={() => setAddedToContacts(true)}>
          {addedToContacts ? "Added to Contacts" : "Add to Contacts"}
        </Button>

        <Button color="danger" variant="light">
          Report
        </Button>
      </CardFooter>
    </Card>
  );
}
