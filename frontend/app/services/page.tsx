import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Textarea } from "@nextui-org/react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  image: string;
}

interface LawyerSectionProps {
  specialization: string;
  lawyers: Lawyer[];
  reviews: { [key: number]: string };
  setReviews: (reviews: { [key: number]: string }) => void;
  contacts: number[];
  setContacts: (contacts: number[]) => void;
}

export default function LawyerSection({
  specialization,
  lawyers,
  reviews,
  setReviews,
  contacts,
  setContacts,
}: LawyerSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      {/* 🔹 Section Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-xl font-semibold">{specialization}</h2>
        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      {/* 🔹 Expandable Lawyer List */}
      {expanded && (
        <div className="p-4 space-y-6">
          {lawyers.map((lawyer) => (
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
                    onChange={(e) => setReviews({ ...reviews, [lawyer.id]: e.target.value })}
                    className="w-full"
                  />
                </div>
              </CardBody>
              <CardFooter className="flex justify-between">
                {/* 🔹 Add to Contacts */}
                <Button
                  color="primary"
                  onClick={() => setContacts(contacts.includes(lawyer.id) ? contacts : [...contacts, lawyer.id])}
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
      )}
    </div>
  );
}
