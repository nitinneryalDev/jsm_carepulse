import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import * as Sentary from '@sentry/nextjs' 


export  default async  function  NewAppointment({params :{userId}}:SearchParamProps) {
  const patient = await getPatient(userId)

  Sentary.metrics.set('user-view new appointment' , patient.name)

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          ></Image>
          <AppointmentForm  type="create" userId={userId} patientId={patient.$id}  />

          <p className="justify-items-end text-dark-600 xl:text-left py-12 ">
            ©️ 2024 CarePlus
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      ></Image>
    </div>
  );
}


