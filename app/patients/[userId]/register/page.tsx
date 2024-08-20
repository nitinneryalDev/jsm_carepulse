import React from 'react'
import Image from 'next/image'
import {getUser} from '@/lib/actions/patient.actions'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import * as Sentary from '@sentry/nextjs' 

const Register = async ({params:{userId}}:SearchParamProps) => {
  const user = await getUser(userId)

Sentary.metrics.set('user-view' , user.name)

  return (
    <div className='flex h-screen max-h-screen'>
  <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          ></Image>
          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left ">
              ©️ 2024 CarePlus
            </p>

          </div>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      ></Image>


    </div>
  )
}

export default Register