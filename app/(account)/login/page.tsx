import React from 'react'
import Image from 'next/image'
import { Card } from '@/app/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-5 h-full flex-1/4 bg-dark-choco-300 dark:bg-dark-choco-950 dark:text-white">
            <Image src="/coffee-dark.png" alt="logo" width={300} height={300} />
            <p className="text-center font-normal leading-7 font-[family-name:var(--font-montecarlo)] sm:w-[266px] sm:text-[18px] lg:text-2xl">
            Pagi yang cerah, harapan baru
            </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-full flex-3/4 bg-white dark:bg-dark-choco-900 dark:text-white">
            <h3 className='text-2xl font-[family-name:var(--font-poppins)] font-light'>Masuk kembali</h3>
            <Card className='flex flex-col items-center gap-2 w-full max-w-lg'>
                <form className="w-full px-6 pt-4 pb-6 space-y-6">
                    <div className="relative">
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        required
                        className="peer w-full border border-gray-300 dark:border-dark-choco-700 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500"
                        />
                        <label
                        htmlFor="email"
                        className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-coffee-600"
                        >
                        Email
                        </label>
                    </div>

                    <div className="relative">
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder=" "
                        required
                        className="peer w-full border border-gray-300 dark:border-dark-choco-700 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500"
                        />
                        <label
                        htmlFor="password"
                        className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-coffee-600"
                        >
                        Password
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-coffee-600 hover:bg-coffee-700 text-white py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-coffee-400"
                    >
                        Masuk
                    </button>
                </form>
            </Card>
        </div>
    </main>
  )
}

export default page