import StatCard from "@/components/StatCard";
import { columns } from "@/components/table/Columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";

async function Admin() {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14 ">
      <header className="admin-header">
        <p className="text-16-semibold">Admin Dashboard</p>
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-2 md:items-center sm:items-center sm:gap-1"
        >
          <Image
            src="/assets/icons/home-arrow.svg"
            height={24}
            width={24}
            alt="arrow"
          />

          <p className="text-16-semibold ">Home</p>
        </Link>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing appointment
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
}

export default Admin;
