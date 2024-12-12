import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";

async function NewAppointment({ params }: SearchParamProps) {
  const { userId } = await params;
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 justify-between ">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="CarePulse "
            className="mb-12 h-10 w-fit"
          />
          {/* @ts-expect-error ignore error  */}
          <AppointmentForm
            patientId={patient.$id}
            type="create"
            userId={userId}
          />
          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}

export default NewAppointment;
