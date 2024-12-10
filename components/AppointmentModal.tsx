"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { AppointmentForm } from "./forms/AppointmentForm";
import { Appointment } from "@/types/appwrite.types";

export function AppointmentModal({
  type,
  patientId,
  userId,
  appointment,
}: {
  type: "schedule" | "cancel";
  patientId: string;
  appointment?: Appointment;
  userId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500"} `}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y3">
          <DialogTitle className="capitalize">{type} appointment</DialogTitle>
          <DialogDescription>
            Please fill in the following details to {type} an appointment
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          patientId={patientId}
          userId={userId}
          // @ts-expect-error ignore error
          appointment={appointment}
          type={type}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
