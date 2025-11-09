import Navbar from '@/components/Navbar'
import React from 'react'

function Jobs() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4">
                <h1 className="text-5xl font-bold animate-pulse">🚧 Coming Soon 🚧</h1>
                <p className="text-lg text-gray-400 max-w-md">
                    We’re working hard to bring you the best online job opportunities.
                    Stay tuned — this page will be live soon!
                </p>
                <a href="/contact">
                    <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
                        Notify Me
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Jobs
